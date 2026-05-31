from django.utils import timezone
import ssl
ssl._create_default_https_context = ssl._create_unverified_context
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required, user_passes_test
from django.contrib.auth import authenticate, login as auth_login, logout as auth_logout
from django.core.mail import send_mail
from django.conf import settings
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db.models import Q
import json
import jwt
from datetime import datetime, timedelta
from .models import UserProfile, Job, JobApplication, Rating, ContactMessage, Notification, SiteRating, Message
from .serializers import (
    RegisterSerializer, LoginSerializer, UserSerializer,
    JobListSerializer, JobDetailSerializer, JobApplicationSerializer
)


# ===== TEMPLATE VIEWS =====
def home(request):
    faq_items = [
        ("How do I register on Bamenda Connect?", "Click the Sign Up button, choose your role (Job Seeker or Employer), fill in your details and complete the activation payment via MTN or Orange Money."),
        ("How much does it cost to post a job?", "Standard listings cost 1,000 FCFA for 30 days. Featured listings cost 2,000 FCFA for 60 days and appear at the top of search results."),
        ("How much does it cost for job seekers?", "Job seekers pay a one-time activation fee of 500 FCFA to access all job listings and apply to unlimited jobs."),
        ("How do I pay?", "All payments are made via MTN Mobile Money or Orange Money. Simply select your preferred method, enter your phone number, and complete the payment."),
        ("How long does a job listing stay active?", "Standard listings are active for 30 days. Featured listings are active for 60 days. After expiry, the listing is automatically removed."),
        ("Can I apply for jobs on mobile?", "Yes! Bamenda Connect is fully mobile-responsive and works on all Android and iOS devices through your browser."),
        ("How do I know if my application was received?", "You will receive an email confirmation immediately after submitting your application. You can also track your application status in your profile under My Applications."),
        ("Can I switch from Job Seeker to Employer?", "Yes. Go to your profile, click on the Employer role button, and complete the activation payment for your new role."),
        ("Is Bamenda Connect available in French?", "Yes! Click the FR/EN button in the navigation bar to switch between English and French at any time."),
        ("How do I contact Bamenda Connect?", "You can reach us at info@bamendaconnect.cm or call +237 671 109 256. You can also use the Contact Us page on the website."),
    ]
    return render(request, 'jobs/index.html', {'faq_items': faq_items})


# ===== ADMIN DASHBOARD =====
def is_admin(user):
    return user.is_staff or user.is_superuser

@login_required(login_url='/dashboard/login/')
@user_passes_test(is_admin, login_url='/dashboard/login/')
def admin_dashboard(request):
    total_users = UserProfile.objects.count()
    total_seekers = UserProfile.objects.filter(role='seeker').count()
    total_employers = UserProfile.objects.filter(role='employer').count()
    total_jobs = Job.objects.count()
    total_applications = JobApplication.objects.count()
    paid_users = UserProfile.objects.filter(paid=True).count()
    recent_users = UserProfile.objects.select_related('user').order_by('-created_at')[:10]
    recent_jobs = Job.objects.order_by('-created_at')[:10]
    recent_applications = JobApplication.objects.select_related('job').order_by('-applied_at')[:10]
    context = {
        'total_users': total_users,
        'total_seekers': total_seekers,
        'total_employers': total_employers,
        'total_jobs': total_jobs,
        'total_applications': total_applications,
        'paid_users': paid_users,
        'recent_users': recent_users,
        'recent_jobs': recent_jobs,
        'recent_applications': recent_applications,
    }
    return render(request, 'jobs/admin_dashboard.html', context)


@login_required(login_url='/dashboard/login/')
@user_passes_test(is_admin, login_url='/dashboard/login/')
def admin_users(request):
    users = UserProfile.objects.select_related('user').order_by('-created_at')
    return render(request, 'jobs/admin_users.html', {'users': users})


@login_required(login_url='/dashboard/login/')
@user_passes_test(is_admin, login_url='/dashboard/login/')
def admin_jobs(request):
    jobs = Job.objects.order_by('-created_at')
    return render(request, 'jobs/admin_jobs.html', {'jobs': jobs})


@login_required(login_url='/dashboard/login/')
@user_passes_test(is_admin, login_url='/dashboard/login/')
def admin_applications(request):
    applications = JobApplication.objects.select_related('job').order_by('-applied_at')
    return render(request, 'jobs/admin_applications.html', {'applications': applications})


@login_required(login_url='/dashboard/login/')
@user_passes_test(is_admin, login_url='/dashboard/login/')
def admin_delete_job(request, job_id):
    job = get_object_or_404(Job, id=job_id)
    job.delete()
    return redirect('admin_jobs')


@login_required(login_url='/dashboard/login/')
@user_passes_test(is_admin, login_url='/dashboard/login/')
def admin_delete_user(request, user_id):
    profile = get_object_or_404(UserProfile, id=user_id)
    profile.user.delete()
    return redirect('admin_users')


def dashboard_login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user and (user.is_staff or user.is_superuser):
            auth_login(request, user)
            return redirect('admin_dashboard')
        return render(request, 'jobs/dashboard_login.html', {'error': 'Invalid credentials or not an admin.'})
    return render(request, 'jobs/dashboard_login.html')


def dashboard_logout(request):
    auth_logout(request)
    return redirect('dashboard_login')


# ===== EMPLOYER DASHBOARD =====
@csrf_exempt
@api_view(['GET'])
def employer_dashboard(request):
    try:
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        payload = jwt.decode(token, 'your-secret-key', algorithms=['HS256'])
        user = User.objects.get(id=payload['user_id'])
        profile = user.userprofile
        if profile.role != 'employer':
            return Response({'status': 'error', 'message': 'Employers only'}, status=403)
    except:
        return Response({'status': 'error', 'message': 'Unauthorized'}, status=401)

    jobs = Job.objects.filter(employer=profile).order_by('-created_at')
    data = []
    for job in jobs:
        apps = JobApplication.objects.filter(job=job)
        data.append({
            'id': job.id,
            'title': job.title,
            'company': job.company,
            'category': job.category,
            'job_type': job.job_type,
            'location': job.location,
            'salary': job.salary,
            'description': job.description,
            'requirements': job.requirements,
            'contact_email': job.contact_email,
            'contact_phone': job.contact_phone,
            'deadline': str(job.deadline) if job.deadline else '',
            'is_featured': job.is_featured,
            'is_active': job.is_active,
            'created_at': job.created_at.strftime('%d %b %Y'),
            'applications_count': apps.count(),
            'applications': [
                {
                    'id': a.id,
                    'full_name': a.full_name,
                    'email': a.email,
                    'phone': a.phone,
                    'status': a.status,
                    'applied_at': a.applied_at.strftime('%d %b %Y'),
                    'cover_letter': a.cover_letter,
                    'experience': a.experience,
                    'cv_url': request.build_absolute_uri(a.cv_file.url) if a.cv_file else None,
                    'profile_id': a.applicant.id if a.applicant else None,
                } for a in apps
            ]
        })
    return Response({'status': 'success', 'jobs': data, 'total_jobs': jobs.count(),
                     'total_applications': JobApplication.objects.filter(job__employer=profile).count()})


@csrf_exempt
@api_view(['POST'])
def update_application_status(request, app_id):
    try:
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        payload = jwt.decode(token, 'your-secret-key', algorithms=['HS256'])
        user = User.objects.get(id=payload['user_id'])
        profile = user.userprofile
    except:
        return Response({'status': 'error', 'message': 'Unauthorized'}, status=401)

    app = get_object_or_404(JobApplication, id=app_id, job__employer=profile)
    new_status = request.data.get('status')
    if new_status in ['submitted', 'reviewed', 'shortlisted', 'rejected']:
        app.status = new_status
        app.save()
        # Send email notification to applicant
        try:
            send_email_safe(
                subject=f'Update on your application — {app.job.title}',
                message=f'Dear {app.full_name},\n\nYour application for "{app.job.title}" at {app.job.company} has been updated to: {new_status.upper()}.\n\nBest regards,\nBamenda Connect Team',
                recipient_list=[app.email],
            )
        except:
            pass
        return Response({'status': 'success', 'new_status': new_status})
    return Response({'status': 'error', 'message': 'Invalid status'}, status=400)


# ===== SEEKER APPLICATION TRACKING =====
@csrf_exempt
@api_view(['GET'])
def my_applications(request):
    try:
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        payload = jwt.decode(token, 'your-secret-key', algorithms=['HS256'])
        user = User.objects.get(id=payload['user_id'])
        profile = user.userprofile
    except:
        return Response({'status': 'error', 'message': 'Unauthorized'}, status=401)

    apps = JobApplication.objects.filter(applicant=profile).select_related('job').order_by('-applied_at')
    data = [{
        'id': a.id,
        'job_title': a.job.title,
        'company': a.job.company,
        'category': a.job.category,
        'location': a.job.location,
        'status': a.status,
        'applied_at': a.applied_at.strftime('%d %b %Y'),
        'employer_profile_id': a.job.employer.id if a.job.employer else None,
        'employer_name': a.job.employer.user.get_full_name() if a.job.employer else a.job.company,
    } for a in apps]
    return Response({'status': 'success', 'applications': data, 'total': apps.count()})


# ===== API VIEWS =====
@csrf_exempt
@api_view(['POST'])
def register(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        return Response({'status': 'success', 'message': 'Account created successfully',
                         'user': UserSerializer(user).data}, status=status.HTTP_201_CREATED)
    return Response({'status': 'error', 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
@api_view(['POST'])
def login(request):
    serializer = LoginSerializer(data=request.data)
    if serializer.is_valid():
        email = serializer.validated_data['email']
        password = serializer.validated_data['password']
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({'status': 'error', 'message': 'Invalid email or password'}, status=401)
        if not user.check_password(password):
            return Response({'status': 'error', 'message': 'Invalid email or password'}, status=401)
        payload = {'user_id': user.id, 'email': user.email,
                   'exp': datetime.utcnow() + timedelta(days=30)}
        token = jwt.encode(payload, 'your-secret-key', algorithm='HS256')
        return Response({'status': 'success', 'token': token, 'user': UserSerializer(user).data})
    return Response({'status': 'error', 'errors': serializer.errors}, status=400)


@csrf_exempt
@api_view(['GET'])
def job_list(request):
    jobs = Job.objects.filter(is_active=True, expires_at__gt=timezone.now())
    category = request.query_params.get('category')
    if category:
        jobs = jobs.filter(category__iexact=category)
    location = request.query_params.get('location')
    if location:
        jobs = jobs.filter(location__icontains=location)
    search = request.query_params.get('search')
    if search:
        jobs = jobs.filter(Q(title__icontains=search) | Q(company__icontains=search) | Q(location__icontains=search))
    serializer = JobListSerializer(jobs, many=True)
    return Response({'status': 'success', 'count': jobs.count(), 'jobs': serializer.data})


@csrf_exempt
@api_view(['GET'])
def job_detail(request, pk):
    try:
        job = Job.objects.get(pk=pk)
    except Job.DoesNotExist:
        return Response({'status': 'error', 'message': 'Job not found'}, status=404)
    serializer = JobDetailSerializer(job)
    return Response({'status': 'success', 'job': serializer.data})


@csrf_exempt
@api_view(['POST'])
def post_job(request):
    try:
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        payload = jwt.decode(token, 'your-secret-key', algorithms=['HS256'])
        user = User.objects.get(id=payload['user_id'])
        profile = user.userprofile
        if profile.role != 'employer':
            return Response({'status': 'error', 'message': 'Only employers can post jobs'}, status=403)
    except:
        return Response({'status': 'error', 'message': 'Unauthorized'}, status=401)

    data = request.data
    required = ['title', 'category', 'description', 'contact_email']
    for field in required:
        if not data.get(field):
            return Response({'status': 'error', 'message': f'{field} is required'}, status=400)

    job = Job.objects.create(
        employer=profile,
        title=data['title'],
        company=profile.company_name or 'Company',
        category=data['category'],
        job_type=data.get('job_type', 'Full-time'),
        location=data.get('location', 'Bamenda'),
        salary=data.get('salary', 'Negotiable'),
        description=data['description'],
        requirements=data.get('requirements', ''),
        contact_email=data['contact_email'],
        contact_phone=data.get('contact_phone', ''),
        is_featured=data.get('is_featured', False),
        pay_method=data.get('pay_method', ''),
        pay_phone=data.get('pay_phone', ''),
    )

    try:
        recipient_emails = [user.email]
        if data['contact_email'] and data['contact_email'] != user.email:
            recipient_emails.append(data['contact_email'])
        send_email_safe(
            subject='Your job has been posted — Bamenda Connect',
            message=f'Dear {user.first_name},\n\nYour job listing "{job.title}" has been successfully posted on Bamenda Connect.\n\nBest regards,\nBamenda Connect Team',
            recipient_list=recipient_emails,
        )
    except:
        pass

    return Response({'status': 'success', 'message': 'Job posted successfully',
                     'job': JobListSerializer(job).data}, status=201)


@csrf_exempt
@api_view(['POST'])
def apply_job(request, job_id):
    try:
        job = Job.objects.get(id=job_id)
    except Job.DoesNotExist:
        return Response({'status': 'error', 'message': 'Job not found'}, status=404)

    applicant = None
    try:
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        if token:
            payload = jwt.decode(token, 'your-secret-key', algorithms=['HS256'])
            user = User.objects.get(id=payload['user_id'])
            applicant = user.userprofile
    except:
        pass

    data = request.data
    if not data.get('full_name') or not data.get('email'):
        return Response({'status': 'error', 'message': 'Full name and email are required'}, status=400)

    application = JobApplication.objects.create(
        applicant=applicant,
        job=job,
        full_name=data['full_name'],
        email=data['email'],
        phone=data.get('phone', ''),
        cover_letter=data.get('cover_letter', ''),
        experience=data.get('experience', ''),
        cv_file=request.FILES.get('cv_file', None),
    )

    try:
        send_email_safe(
            subject=f'Application received — {job.title}',
            message=f'Dear {data["full_name"]},\n\nYour application for "{job.title}" at {job.company} has been received. The employer will contact you if shortlisted.\n\nBest regards,\nBamenda Connect Team',
            recipient_list=[data['email']],
        )
    except:
        pass

    try:
        if job.employer:
            send_email_safe(
                subject=f'New application for {job.title}',
                message=f'Dear {job.employer.user.first_name},\n\nA new application has been submitted for your job "{job.title}" by {data["full_name"]}.\n\nLog in to your dashboard to review it.\n\nBamenda Connect Team',
                recipient_list=[job.employer.user.email],
            )
    except:
        pass

    return Response({'status': 'success', 'message': 'Application submitted successfully'}, status=201)


@csrf_exempt
@api_view(['GET'])
def featured_jobs(request):
    jobs = Job.objects.filter(is_featured=True, is_active=True)[:6]
    return Response({'status': 'success', 'jobs': JobListSerializer(jobs, many=True).data})


@csrf_exempt
@api_view(['GET'])
def user_profile(request):
    try:
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        payload = jwt.decode(token, 'your-secret-key', algorithms=['HS256'])
        user = User.objects.get(id=payload['user_id'])
    except:
        return Response({'status': 'error', 'message': 'Unauthorized'}, status=401)
    return Response({'status': 'success', 'user': UserSerializer(user).data})


@csrf_exempt
@api_view(['POST'])
def submit_contact(request):
    data = request.data
    if not data.get('name') or not data.get('email') or not data.get('message'):
        return Response({'status': 'error', 'message': 'Name, email and message are required'}, status=400)
    msg = ContactMessage.objects.create(
        name=data['name'], email=data['email'],
        subject=data.get('subject', 'General Enquiry'), message=data['message']
    )
    try:
        send_mail(
            subject=f"New Contact Message: {msg.subject}",
            message=f"From: {msg.name} ({msg.email})\n\n{msg.message}",
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=['info@bamendaconnect.cm'],
            fail_silently=True,
        )
        send_mail(
            subject="We received your message — Bamenda Connect",
            message=f"Dear {msg.name},\n\nThank you for contacting Bamenda Connect. We have received your message and will get back to you within 24 hours.\n\nBest regards,\nBamenda Connect Team",
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[msg.email],
            fail_silently=True,
        )
    except:
        pass
    return Response({'status': 'success', 'message': 'Message sent successfully'})


@csrf_exempt
@api_view(['POST'])
def subscribe_newsletter(request):
    data = request.data
    email = (data.get('email') or '').strip().lower()
    if not email:
        return Response({'status': 'error', 'message': 'Email address is required.'}, status=400)

    try:
        validate_email(email)
    except ValidationError:
        return Response({'status': 'error', 'message': 'Please enter a valid email address.'}, status=400)

    from .models import NewsletterSubscriber
    subscriber, created = NewsletterSubscriber.objects.get_or_create(email=email)
    if created:
        if not settings.EMAIL_HOST_USER or not settings.EMAIL_HOST_PASSWORD:
            return Response({
                'status': 'success',
                'message': '✅ Subscription confirmed! You\'ll receive job updates in your inbox.'
            })

        subject = 'Welcome to Bamenda Connect'
        body = (
            'Hi there,\n\n'
            'Thank you for subscribing to Bamenda Connect! You\'ll now receive the latest job opportunities and career tips in Bamenda.\n\n'
            'Stay connected,\n'
            'The Bamenda Connect Team\n\n'
            'info@bamendaconnect.cm'
        )
        try:
            send_mail(
                subject,
                body,
                settings.EMAIL_HOST_USER or settings.DEFAULT_FROM_EMAIL,
                [email],
                fail_silently=False,
            )
            return Response({'status': 'success', 'message': '✅ Subscription confirmed! Check your inbox for a welcome email.'})
        except Exception as e:
            print(f'Newsletter email error: {e}')
            return Response({
                'status': 'success',
                'message': '✅ Subscription confirmed! You\'ll receive job updates in your inbox.'
            })
    return Response({'status': 'success', 'message': '✅ You\'re already subscribed! Check your inbox for the latest opportunities.'})


@csrf_exempt
@api_view(['POST'])
def set_job_alert(request):
    try:
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        payload = jwt.decode(token, 'your-secret-key', algorithms=['HS256'])
        user = User.objects.get(id=payload['user_id'])
        profile = user.userprofile
    except:
        return Response({'status': 'error', 'message': 'Unauthorized'}, status=401)
    category = request.data.get('category', '')
    profile.job_alert_category = category
    profile.save()
    return Response({'status': 'success', 'message': f'Job alert set for {category}'})


@csrf_exempt
@api_view(['POST'])
def submit_rating(request):
    try:
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        payload = jwt.decode(token, 'your-secret-key', algorithms=['HS256'])
        user = User.objects.get(id=payload['user_id'])
        reviewer = user.userprofile
    except:
        return Response({'status': 'error', 'message': 'Unauthorized'}, status=401)
    data = request.data
    app_id = data.get('application_id')
    score = data.get('score')
    comment = data.get('comment', '')
    if not app_id or not score:
        return Response({'status': 'error', 'message': 'application_id and score required'}, status=400)
    try:
        application = JobApplication.objects.get(id=app_id)
    except JobApplication.DoesNotExist:
        return Response({'status': 'error', 'message': 'Application not found'}, status=404)
    # Determine who is being reviewed
    if reviewer.role == 'employer':
        reviewed = application.applicant
    else:
        reviewed = application.job.employer
    if not reviewed:
        return Response({'status': 'error', 'message': 'Cannot rate this user'}, status=400)
    rating, created = Rating.objects.get_or_create(
        reviewer=reviewer, application=application,
        defaults={'reviewed': reviewed, 'score': score, 'comment': comment}
    )
    if not created:
        rating.score = score
        rating.comment = comment
        rating.save()
    return Response({'status': 'success', 'message': 'Rating submitted'})


@csrf_exempt
@api_view(['GET'])
def get_ratings(request, user_id):
    try:
        profile = UserProfile.objects.get(id=user_id)
    except UserProfile.DoesNotExist:
        return Response({'status': 'error', 'message': 'User not found'}, status=404)
    ratings = Rating.objects.filter(reviewed=profile)
    avg = sum(r.score for r in ratings) / ratings.count() if ratings.count() > 0 else 0
    data = [{'score': r.score, 'comment': r.comment, 'reviewer': r.reviewer.user.get_full_name(),
              'date': r.created_at.strftime('%d %b %Y')} for r in ratings]
    return Response({'status': 'success', 'average': round(avg, 1), 'count': ratings.count(), 'ratings': data})


@login_required(login_url='/dashboard/login/')
@user_passes_test(is_admin, login_url='/dashboard/login/')
def admin_contacts(request):
    messages = ContactMessage.objects.order_by('-created_at')
    return render(request, 'jobs/admin_contacts.html', {'messages': messages})


# ===== NOTIFICATIONS =====
@csrf_exempt
@api_view(['GET'])
def get_notifications(request):
    try:
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        payload = jwt.decode(token, 'your-secret-key', algorithms=['HS256'])
        user = User.objects.get(id=payload['user_id'])
        profile = user.userprofile
    except:
        return Response({'status': 'error', 'message': 'Unauthorized'}, status=401)
    notifs = Notification.objects.filter(user=profile).order_by('-created_at')[:20]
    unread = Notification.objects.filter(user=profile, is_read=False).count()
    data = [{'id': n.id, 'title': n.title, 'message': n.message,
             'type': n.notif_type, 'is_read': n.is_read,
             'created_at': n.created_at.strftime('%d %b %Y, %H:%M')} for n in notifs]
    return Response({'status': 'success', 'notifications': data, 'unread': unread})


@csrf_exempt
@api_view(['POST'])
def mark_notifications_read(request):
    try:
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        payload = jwt.decode(token, 'your-secret-key', algorithms=['HS256'])
        user = User.objects.get(id=payload['user_id'])
        profile = user.userprofile
    except:
        return Response({'status': 'error', 'message': 'Unauthorized'}, status=401)
    Notification.objects.filter(user=profile, is_read=False).update(is_read=True)
    return Response({'status': 'success'})


# ===== SEEKER PUBLIC PROFILE =====
@csrf_exempt
@api_view(['GET'])
def seeker_profile(request, user_id):
    try:
        profile = UserProfile.objects.get(id=user_id, role='seeker')
    except UserProfile.DoesNotExist:
        return Response({'status': 'error', 'message': 'Profile not found'}, status=404)
    data = {
        'id': profile.id,
        'name': profile.user.get_full_name(),
        'bio': profile.bio,
        'skills': profile.skills,
        'education': profile.education,
        'experience_years': profile.experience_years,
        'cv_url': request.build_absolute_uri(profile.cv_file.url) if profile.cv_file else None,
        'photo_url': request.build_absolute_uri(profile.profile_photo.url) if profile.profile_photo else None,
    }
    return Response({'status': 'success', 'profile': data})


@csrf_exempt
@api_view(['POST'])
def update_seeker_profile(request):
    try:
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        payload = jwt.decode(token, 'your-secret-key', algorithms=['HS256'])
        user = User.objects.get(id=payload['user_id'])
        profile = user.userprofile
    except:
        return Response({'status': 'error', 'message': 'Unauthorized'}, status=401)
    profile.bio = request.data.get('bio', profile.bio)
    profile.skills = request.data.get('skills', profile.skills)
    profile.education = request.data.get('education', profile.education)
    profile.experience_years = request.data.get('experience_years', profile.experience_years)
    if 'cv_file' in request.FILES:
        profile.cv_file = request.FILES['cv_file']
    profile.save()
    return Response({'status': 'success', 'message': 'Profile updated'})


# ===== PASSWORD RESET =====
import ssl
from django.core.mail import get_connection

def send_email_safe(subject, message, recipient_list, fail_silently=True):
    """Send email via Gmail port 465 SSL with unverified context for Windows."""
    try:
        ctx = ssl.create_default_context()
        ctx.check_hostname = False
        ctx.verify_mode = ssl.CERT_NONE
        connection = get_connection(
            backend='django.core.mail.backends.smtp.EmailBackend',
            host='smtp.gmail.com',
            port=465,
            username=settings.EMAIL_HOST_USER,
            password=settings.EMAIL_HOST_PASSWORD,
            use_tls=False,
            use_ssl=True,
            ssl_context=ctx,
        )
        from django.core.mail import EmailMessage
        msg = EmailMessage(subject, message, settings.DEFAULT_FROM_EMAIL, recipient_list, connection=connection)
        msg.send(fail_silently=fail_silently)
    except Exception as e:
        if not fail_silently:
            raise e



@csrf_exempt
@api_view(['POST'])
def request_password_reset(request):
    email = request.data.get('email', '').strip()
    if not email:
        return Response({'status': 'error', 'message': 'Email is required'}, status=400)
    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        return Response({'status': 'success', 'message': 'If this email exists, a reset link has been sent.'})
    token = secrets.token_urlsafe(32)
    password_reset_tokens[token] = {'user_id': user.id, 'expires': datetime.utcnow() + timedelta(hours=1)}
    reset_url = f"{settings.FRONTEND_URL}/?reset_token={token}"
    try:
        send_mail(
            subject='Password Reset — Bamenda Connect',
            message=f'Dear {user.first_name},\n\nClick the link below to reset your password (valid for 1 hour):\n\n{reset_url}\n\nIf you did not request this, ignore this email.\n\nBamenda Connect Team',
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[email],
            fail_silently=True,
        )
    except:
        pass
    return Response({'status': 'success', 'message': 'If this email exists, a reset link has been sent.'})


@csrf_exempt
@api_view(['POST'])
def confirm_password_reset(request):
    token = request.data.get('token', '')
    new_password = request.data.get('password', '')
    if not token or not new_password:
        return Response({'status': 'error', 'message': 'Token and password are required'}, status=400)
    token_data = password_reset_tokens.get(token)
    if not token_data:
        return Response({'status': 'error', 'message': 'Invalid or expired token'}, status=400)
    if datetime.utcnow() > token_data['expires']:
        del password_reset_tokens[token]
        return Response({'status': 'error', 'message': 'Token has expired'}, status=400)
    try:
        user = User.objects.get(id=token_data['user_id'])
        user.set_password(new_password)
        user.save()
        del password_reset_tokens[token]
        return Response({'status': 'success', 'message': 'Password reset successfully'})
    except User.DoesNotExist:
        return Response({'status': 'error', 'message': 'User not found'}, status=404)


# ===== EDIT JOB =====
@csrf_exempt
@api_view(['POST'])
def edit_job(request, job_id):
    try:
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        payload = jwt.decode(token, 'your-secret-key', algorithms=['HS256'])
        user = User.objects.get(id=payload['user_id'])
        profile = user.userprofile
    except:
        return Response({'status': 'error', 'message': 'Unauthorized'}, status=401)
    try:
        job = Job.objects.get(id=job_id, employer=profile)
    except Job.DoesNotExist:
        return Response({'status': 'error', 'message': 'Job not found'}, status=404)
    data = request.data
    job.title = data.get('title', job.title)
    job.category = data.get('category', job.category)
    job.job_type = data.get('job_type', job.job_type)
    job.location = data.get('location', job.location)
    job.salary = data.get('salary', job.salary)
    job.description = data.get('description', job.description)
    job.requirements = data.get('requirements', job.requirements)
    job.contact_email = data.get('contact_email', job.contact_email)
    job.contact_phone = data.get('contact_phone', job.contact_phone)
    job.save()
    return Response({'status': 'success', 'message': 'Job updated successfully'})


# ===== DELETE JOB =====
@csrf_exempt
@api_view(['POST'])
def delete_job(request, job_id):
    try:
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        payload = jwt.decode(token, 'your-secret-key', algorithms=['HS256'])
        user = User.objects.get(id=payload['user_id'])
        profile = user.userprofile
    except:
        return Response({'status': 'error', 'message': 'Unauthorized'}, status=401)
    try:
        job = Job.objects.get(id=job_id, employer=profile)
        job.delete()
        return Response({'status': 'success', 'message': 'Job deleted'})
    except Job.DoesNotExist:
        return Response({'status': 'error', 'message': 'Job not found'}, status=404)


# ===== JOB INTEREST NOTIFICATION =====
@csrf_exempt
@api_view(['POST'])
def job_interest(request, job_id):
    try:
        job = Job.objects.get(id=job_id)
    except Job.DoesNotExist:
        return Response({'status': 'error', 'message': 'Job not found'}, status=404)

    name = request.data.get('name', 'A job seeker')
    email = request.data.get('email', '')
    phone = request.data.get('phone', '')
    message = request.data.get('message', '')

    employer_email = job.contact_email
    if job.employer:
        employer_email = job.employer.user.email or job.contact_email

    try:
        send_email_safe(
            subject=f'New Interest in Your Job: {job.title} — Bamenda Connect',
            message=f'Hello,\n\nSomeone is interested in your job listing "{job.title}" on Bamenda Connect.\n\n'
                    f'Name: {name}\n'
                    f'Email: {email}\n'
                    f'Phone: {phone or "Not provided"}\n'
                    f'Message: {message or "No message"}\n\n'
                    f'Log in to your dashboard to view and respond.\n\nBamenda Connect Team',
            recipient_list=[employer_email],
            fail_silently=False,
        )
        if email:
            send_email_safe(
                subject=f'Your interest in "{job.title}" has been sent — Bamenda Connect',
                message=f'Dear {name},\n\nYour interest in "{job.title}" at {job.company} has been sent to the employer.\nThey will contact you directly if they wish to proceed.\n\nBamenda Connect Team',
                recipient_list=[email],
                fail_silently=True,
            )
    except Exception as e:
        return Response({'status': 'error', 'message': str(e)}, status=500)

    return Response({'status': 'success', 'message': 'Interest sent to employer'})


# ===== JOB VIEWS COUNTER =====
@csrf_exempt
@api_view(['POST'])
def increment_job_views(request, job_id):
    try:
        job = Job.objects.get(id=job_id)
        job.views_count += 1
        job.save(update_fields=['views_count'])
        return Response({'status': 'success', 'views': job.views_count})
    except Job.DoesNotExist:
        return Response({'status': 'error'}, status=404)


# ===== EMPLOYER VERIFICATION (admin only) =====
@login_required(login_url='/dashboard/login/')
@user_passes_test(is_admin, login_url='/dashboard/login/')
def verify_employer(request, user_id):
    profile = get_object_or_404(UserProfile, id=user_id, role='employer')
    profile.is_verified = not profile.is_verified
    profile.save()
    return redirect('admin_users')


# ===== SITE RATINGS =====
@csrf_exempt
@api_view(['POST'])
def submit_site_rating(request):
    try:
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        payload = jwt.decode(token, 'your-secret-key', algorithms=['HS256'])
        user = User.objects.get(id=payload['user_id'])
        profile = user.userprofile
    except:
        return Response({'status': 'error', 'message': 'Unauthorized'}, status=401)
    score = request.data.get('score')
    comment = request.data.get('comment', '')
    if not score:
        return Response({'status': 'error', 'message': 'Score required'}, status=400)
    rating, created = SiteRating.objects.update_or_create(
        user=profile,
        defaults={'score': int(score), 'comment': comment}
    )
    return Response({'status': 'success', 'message': 'Rating submitted', 'id': rating.id})


@csrf_exempt
@api_view(['GET'])
def get_site_ratings(request):
    ratings = SiteRating.objects.select_related('user__user').all()
    total = ratings.count()
    avg = round(sum(r.score for r in ratings) / total, 1) if total > 0 else 0
    dist = {i: ratings.filter(score=i).count() for i in range(1, 6)}
    # Get current user for like status
    current_profile = None
    try:
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        if token:
            payload = jwt.decode(token, 'your-secret-key', algorithms=['HS256'])
            user = User.objects.get(id=payload['user_id'])
            current_profile = user.userprofile
    except:
        pass
    data = [{
        'id': r.id,
        'name': r.user.user.get_full_name() or r.user.user.username,
        'score': r.score,
        'comment': r.comment,
        'likes': r.likes.count(),
        'liked_by_me': current_profile in r.likes.all() if current_profile else False,
        'date': r.created_at.strftime('%d %b %Y'),
        'role': r.user.get_role_display(),
    } for r in ratings if r.comment]
    return Response({'status': 'success', 'average': avg, 'total': total, 'distribution': dist, 'ratings': data})


@csrf_exempt
@api_view(['POST'])
def like_site_rating(request, rating_id):
    try:
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        payload = jwt.decode(token, 'your-secret-key', algorithms=['HS256'])
        user = User.objects.get(id=payload['user_id'])
        profile = user.userprofile
    except:
        return Response({'status': 'error', 'message': 'Unauthorized'}, status=401)
    try:
        rating = SiteRating.objects.get(id=rating_id)
    except SiteRating.DoesNotExist:
        return Response({'status': 'error', 'message': 'Not found'}, status=404)
    if profile in rating.likes.all():
        rating.likes.remove(profile)
        liked = False
    else:
        rating.likes.add(profile)
        liked = True
    return Response({'status': 'success', 'liked': liked, 'likes': rating.likes.count()})


# ===== ONLINE STATUS TRACKER (in-memory) =====
from datetime import datetime as dt
online_users = {}  # {user_id: last_ping_timestamp}

@csrf_exempt
@api_view(['POST'])
def ping_online(request):
    try:
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        payload = jwt.decode(token, 'your-secret-key', algorithms=['HS256'])
        user = User.objects.get(id=payload['user_id'])
        online_users[user.id] = dt.utcnow()
        return Response({'status': 'success'})
    except:
        return Response({'status': 'error'}, status=401)

def is_online(user_id):
    last = online_users.get(user_id)
    if not last: return False
    return (dt.utcnow() - last).total_seconds() < 60  # online if pinged within 60s


# ===== MESSAGING =====
@csrf_exempt
@api_view(['POST'])
def send_message(request):
    try:
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        payload = jwt.decode(token, 'your-secret-key', algorithms=['HS256'])
        user = User.objects.get(id=payload['user_id'])
        sender = user.userprofile
    except:
        return Response({'status': 'error', 'message': 'Unauthorized'}, status=401)
    receiver_id = request.data.get('receiver_id')
    content = request.data.get('content', '').strip()
    job_id = request.data.get('job_id')
    if not receiver_id or not content:
        return Response({'status': 'error', 'message': 'receiver_id and content required'}, status=400)
    try:
        receiver = UserProfile.objects.get(id=receiver_id)
    except UserProfile.DoesNotExist:
        return Response({'status': 'error', 'message': 'User not found'}, status=404)
    job = None
    if job_id:
        try:
            job = Job.objects.get(id=job_id)
        except:
            pass
    msg = Message.objects.create(sender=sender, receiver=receiver, content=content, job=job)
    try:
        send_email_safe(
            subject=f'New message from {user.first_name} — Bamenda Connect',
            message=f'Dear {receiver.user.first_name},\n\nYou have a new message from {user.get_full_name()} on Bamenda Connect:\n\n"{content}"\n\nLog in to reply.\n\nBamenda Connect Team',
            recipient_list=[receiver.user.email],
        )
    except:
        pass
    return Response({'status': 'success', 'message_id': msg.id})


@csrf_exempt
@api_view(['GET'])
def get_inbox(request):
    try:
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        payload = jwt.decode(token, 'your-secret-key', algorithms=['HS256'])
        user = User.objects.get(id=payload['user_id'])
        profile = user.userprofile
    except:
        return Response({'status': 'error', 'message': 'Unauthorized'}, status=401)
    from django.db.models import Q
    conversations = {}
    messages = Message.objects.filter(Q(sender=profile) | Q(receiver=profile)).order_by('created_at')
    for m in messages:
        other = m.receiver if m.sender == profile else m.sender
        conversations[other.id] = {
            'user_id': other.id,
            'name': other.user.get_full_name() or other.user.username,
            'role': other.get_role_display(),
            'last_message': m.content,
            'last_time': m.created_at.strftime('%H:%M'),
            'unread': Message.objects.filter(sender=other, receiver=profile, is_read=False).count(),
            'job_title': m.job.title if m.job else '',
            'is_online': is_online(other.user.id),
        }
    return Response({'status': 'success', 'conversations': list(conversations.values())})


@csrf_exempt
@api_view(['GET'])
def get_conversation(request, user_id):
    try:
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        payload = jwt.decode(token, 'your-secret-key', algorithms=['HS256'])
        user = User.objects.get(id=payload['user_id'])
        profile = user.userprofile
    except:
        return Response({'status': 'error', 'message': 'Unauthorized'}, status=401)
    try:
        other = UserProfile.objects.get(id=user_id)
    except:
        return Response({'status': 'error', 'message': 'User not found'}, status=404)
    from django.db.models import Q
    msgs = Message.objects.filter(
        Q(sender=profile, receiver=other) | Q(sender=other, receiver=profile)
    ).order_by('created_at')
    # Mark as read with timestamp
    now = timezone.now()
    msgs.filter(sender=other, receiver=profile, is_read=False).update(is_read=True, read_at=now)
    data = [{
        'id': m.id,
        'content': m.content,
        'is_mine': m.sender == profile,
        'time': m.created_at.strftime('%H:%M'),
        'is_read': m.is_read,
        'read_at': m.read_at.strftime('%H:%M') if m.read_at else None,
        'job_title': m.job.title if m.job else '',
    } for m in msgs]
    return Response({
        'status': 'success',
        'messages': data,
        'other_name': other.user.get_full_name() or other.user.username,
        'other_phone': other.phone_number or '',
        'other_online': is_online(other.user.id),
    })


@csrf_exempt
@api_view(['POST'])
def delete_message(request, msg_id):
    try:
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        payload = jwt.decode(token, 'your-secret-key', algorithms=['HS256'])
        user = User.objects.get(id=payload['user_id'])
        profile = user.userprofile
    except:
        return Response({'status': 'error', 'message': 'Unauthorized'}, status=401)
    for_everyone = request.data.get('for_everyone', False)
    try:
        msg = Message.objects.get(id=msg_id, sender=profile)
        msg.delete()
        return Response({'status': 'success'})
    except Message.DoesNotExist:
        # Delete for me only — mark as deleted for this user by hiding
        try:
            msg = Message.objects.get(id=msg_id, receiver=profile)
            msg.delete()
            return Response({'status': 'success'})
        except Message.DoesNotExist:
            return Response({'status': 'error', 'message': 'Not found'}, status=404)


@csrf_exempt
@api_view(['POST'])
def delete_conversation(request, user_id):
    try:
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        payload = jwt.decode(token, 'your-secret-key', algorithms=['HS256'])
        user = User.objects.get(id=payload['user_id'])
        profile = user.userprofile
    except:
        return Response({'status': 'error', 'message': 'Unauthorized'}, status=401)
    try:
        other = UserProfile.objects.get(id=user_id)
    except:
        return Response({'status': 'error', 'message': 'User not found'}, status=404)
    from django.db.models import Q
    Message.objects.filter(
        Q(sender=profile, receiver=other) | Q(sender=other, receiver=profile)
    ).delete()
    return Response({'status': 'success'})


@csrf_exempt
@api_view(['GET'])
def unread_message_count(request):
    try:
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        payload = jwt.decode(token, 'your-secret-key', algorithms=['HS256'])
        user = User.objects.get(id=payload['user_id'])
        profile = user.userprofile
    except:
        return Response({'status': 'error', 'message': 'Unauthorized'}, status=401)
    count = Message.objects.filter(receiver=profile, is_read=False).count()
    return Response({'status': 'success', 'unread': count})


@login_required(login_url='/dashboard/login/')
@user_passes_test(is_admin, login_url='/dashboard/login/')
def admin_ratings(request):
    ratings = SiteRating.objects.select_related('user__user').order_by('-created_at')
    avg = round(sum(r.score for r in ratings) / ratings.count(), 1) if ratings.count() > 0 else 0
    return render(request, 'jobs/admin_ratings.html', {'ratings': ratings, 'avg': avg})
