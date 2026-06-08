from rest_framework import serializers
from django.contrib.auth.models import User
from .models import UserProfile, Job, JobApplication
import jwt
from datetime import datetime, timedelta
from django.conf import settings


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['id', 'role', 'company_name', 'phone_number', 'created_at', 'paid', 'job_posts_remaining', 'last_paid_date']


class JobApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobApplication
        fields = ['id', 'job', 'full_name', 'email', 'phone', 'cover_letter', 'experience', 'status', 'applied_at']


class JobListSerializer(serializers.ModelSerializer):
    icon = serializers.SerializerMethodField()
    featured = serializers.BooleanField(source='is_featured')
    company_name = serializers.CharField(source='company')
    contact = serializers.CharField(source='contact_email')
    phone = serializers.CharField(source='contact_phone')
    type = serializers.CharField(source='job_type')
    desc = serializers.CharField(source='description')
    reqs = serializers.CharField(source='requirements')
    expires_at = serializers.DateTimeField()
    date = serializers.SerializerMethodField()
    employer_profile_id = serializers.SerializerMethodField()
    
    class Meta:
        model = Job
        fields = ['id', 'title', 'company', 'company_name', 'category', 'type', 'location', 'salary', 
                  'desc', 'reqs', 'contact', 'phone', 'featured', 'icon', 'expires_at', 'date', 'employer_profile_id']

    def get_employer_profile_id(self, obj):
        return obj.employer.id if obj.employer else None

    def get_icon(self, obj):
        icon_map = {
            'agriculture': '🌾',
            'education': '📚',
            'health': '🏥',
            'construction': '🏗️',
            'trade': '🛒',
            'technology': '💻',
            'other': '💼'
        }
        return icon_map.get(obj.category, '💼')

    def get_date(self, obj):
        now = datetime.now()
        created = obj.created_at.replace(tzinfo=None)
        diff = now - created
        
        if diff.days == 0:
            if diff.seconds < 3600:
                mins = diff.seconds // 60
                return f"{mins} minute{'s' if mins != 1 else ''} ago" if mins > 0 else "Just now"
            else:
                hours = diff.seconds // 3600
                return f"{hours} hour{'s' if hours != 1 else ''} ago"
        elif diff.days == 1:
            return "1 day ago"
        elif diff.days < 7:
            return f"{diff.days} days ago"
        elif diff.days < 30:
            weeks = diff.days // 7
            return f"{weeks} week{'s' if weeks != 1 else ''} ago"
        else:
            return f"{diff.days // 30} month{'s' if diff.days // 30 != 1 else ''} ago"


class JobDetailSerializer(serializers.ModelSerializer):
    applications = JobApplicationSerializer(many=True, read_only=True)
    icon = serializers.SerializerMethodField()
    featured = serializers.BooleanField(source='is_featured')
    type = serializers.CharField(source='job_type')
    desc = serializers.CharField(source='description')
    reqs = serializers.CharField(source='requirements')
    contact = serializers.CharField(source='contact_email')
    phone = serializers.CharField(source='contact_phone')
    
    class Meta:
        model = Job
        fields = ['id', 'title', 'company', 'category', 'type', 'location', 'salary', 
                  'desc', 'reqs', 'contact', 'phone', 'featured', 'icon', 'applications', 'created_at']

    def get_icon(self, obj):
        icon_map = {
            'agriculture': '🌾',
            'education': '📚',
            'health': '🏥',
            'construction': '🏗️',
            'trade': '🛒',
            'technology': '💻',
            'other': '💼'
        }
        return icon_map.get(obj.category, '💼')


class RegisterSerializer(serializers.Serializer):
    first_name = serializers.CharField(max_length=150)
    last_name = serializers.CharField(max_length=150)
    email = serializers.EmailField()
    phone_number = serializers.CharField(max_length=20)
    password = serializers.CharField(min_length=6, write_only=True)
    role = serializers.ChoiceField(choices=['seeker', 'employer'])
    company_name = serializers.CharField(max_length=255, required=False, allow_blank=True)

    def validate_email(self, value):
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("An account with this email already exists.")
        return value

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['email'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            password=validated_data['password']
        )
        profile = UserProfile.objects.create(
            user=user,
            role=validated_data['role'],
            phone_number=validated_data['phone_number'],
            company_name=validated_data.get('company_name', '')
        )
        return user


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)


class UserSerializer(serializers.ModelSerializer):
    profile = UserProfileSerializer(source='userprofile')
    
    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'last_name', 'profile']
