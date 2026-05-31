from django.db import models
from django.contrib.auth.models import User
from datetime import datetime, timedelta
from django.conf import settings
from django.utils import timezone


class UserProfile(models.Model):
    ROLE_CHOICES = [
        ('seeker', 'Job Seeker'),
        ('employer', 'Employer'),
    ]
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)
    company_name = models.CharField(max_length=255, blank=True, null=True)
    phone_number = models.CharField(max_length=20, blank=True)
    paid = models.BooleanField(default=False)
    pay_method = models.CharField(max_length=20, blank=True)
    pay_phone = models.CharField(max_length=20, blank=True)
    job_alert_category = models.CharField(max_length=50, blank=True)
    # Seeker profile fields
    bio = models.TextField(blank=True)
    skills = models.TextField(blank=True)
    education = models.TextField(blank=True)
    experience_years = models.IntegerField(default=0)
    cv_file = models.FileField(upload_to='cvs/', blank=True, null=True)
    profile_photo = models.ImageField(upload_to='profiles/', blank=True, null=True)
    # Employer fields
    is_verified = models.BooleanField(default=False)
    company_description = models.TextField(blank=True)
    company_website = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user.get_full_name()} ({self.get_role_display()})"


class Job(models.Model):
    TYPE_CHOICES = [
        ('Full-time', 'Full-time'),
        ('Part-time', 'Part-time'),
        ('Contract', 'Contract'),
        ('Seasonal', 'Seasonal'),
        ('Volunteer', 'Volunteer'),
    ]
    CATEGORY_CHOICES = [
        ('Agriculture', 'Agriculture'),
        ('Education', 'Education'),
        ('Health', 'Health'),
        ('Construction', 'Construction'),
        ('Trade', 'Trade'),
        ('Technology', 'Technology'),
        ('Other', 'Other'),
    ]
    employer = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='posted_jobs', null=True, blank=True)
    title = models.CharField(max_length=255)
    company = models.CharField(max_length=255)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    job_type = models.CharField(max_length=20, choices=TYPE_CHOICES, default='Full-time')
    location = models.CharField(max_length=255, default='Bamenda')
    salary = models.CharField(max_length=100, blank=True, default='Negotiable')
    description = models.TextField()
    requirements = models.TextField(blank=True)
    contact_email = models.EmailField()
    contact_phone = models.CharField(max_length=20, blank=True)
    is_featured = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    pay_method = models.CharField(max_length=20, blank=True)
    pay_phone = models.CharField(max_length=20, blank=True)
    expires_at = models.DateTimeField(null=True, blank=True)
    deadline = models.DateField(null=True, blank=True)
    views_count = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def save(self, *args, **kwargs):
        if not self.expires_at:
            days = 60 if self.is_featured else 30
            self.expires_at = timezone.now() + timedelta(days=days)
        super().save(*args, **kwargs)

    @property
    def is_expired(self):
        return self.expires_at and timezone.now() > self.expires_at

    def __str__(self):
        return f"{self.title} - {self.company}"


class JobApplication(models.Model):
    STATUS_CHOICES = [
        ('submitted', 'Submitted'),
        ('reviewed', 'Reviewed'),
        ('shortlisted', 'Shortlisted'),
        ('rejected', 'Rejected'),
    ]
    applicant = models.ForeignKey(UserProfile, on_delete=models.SET_NULL, related_name='applications', null=True, blank=True)
    job = models.ForeignKey(Job, on_delete=models.CASCADE, related_name='applications')
    full_name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True)
    cover_letter = models.TextField(blank=True)
    experience = models.TextField(blank=True)
    cv_file = models.FileField(upload_to='application_cvs/', blank=True, null=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='submitted')
    applied_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-applied_at']

    def __str__(self):
        return f"{self.full_name} - {self.job.title}"


class Notification(models.Model):
    TYPE_CHOICES = [
        ('application', 'New Application'),
        ('status', 'Status Update'),
        ('job', 'New Job'),
        ('system', 'System'),
    ]
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='notifications')
    title = models.CharField(max_length=255)
    message = models.TextField()
    notif_type = models.CharField(max_length=20, choices=TYPE_CHOICES, default='system')
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.user} — {self.title}"


class Rating(models.Model):
    RATING_CHOICES = [(i, str(i)) for i in range(1, 6)]
    reviewer = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='given_ratings')
    reviewed = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='received_ratings')
    application = models.ForeignKey(JobApplication, on_delete=models.CASCADE, related_name='ratings')
    score = models.IntegerField(choices=RATING_CHOICES)
    comment = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('reviewer', 'application')

    def __str__(self):
        return f"{self.reviewer} rated {self.reviewed} — {self.score}/5"


class SiteRating(models.Model):
    RATING_CHOICES = [(i, str(i)) for i in range(1, 6)]
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='site_ratings')
    score = models.IntegerField(choices=RATING_CHOICES)
    comment = models.TextField(blank=True)
    likes = models.ManyToManyField(UserProfile, related_name='liked_ratings', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('user',)
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.user} — {self.score}/5"


class ContactMessage(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    subject = models.CharField(max_length=255)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} — {self.subject}"


class NewsletterSubscriber(models.Model):
    email = models.EmailField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.email


class Message(models.Model):
    sender = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='sent_messages')
    receiver = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='received_messages')
    job = models.ForeignKey(Job, on_delete=models.SET_NULL, null=True, blank=True, related_name='messages')
    content = models.TextField()
    is_read = models.BooleanField(default=False)
    read_at = models.DateTimeField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['created_at']

    def __str__(self):
        return f"{self.sender} → {self.receiver}: {self.content[:40]}"
