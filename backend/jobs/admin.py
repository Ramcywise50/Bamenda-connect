from django.contrib import admin
from .models import Job, UserProfile, JobApplication, NewsletterSubscriber

# 1. Register the Job Model
@admin.register(Job)
class JobAdmin(admin.ModelAdmin):
    list_display = ('title', 'company', 'location', 'salary')

# 2. Register the JobApplication Model (The New Version)
@admin.register(JobApplication)
class JobApplicationAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'job', 'email', 'status') 
    list_filter = ('status',)
    search_fields = ('full_name', 'email')

# 3. Register the UserProfile Model
admin.site.register(UserProfile)

# 4. Register newsletter subscribers
@admin.register(NewsletterSubscriber)
class NewsletterSubscriberAdmin(admin.ModelAdmin):
    list_display = ('email', 'created_at')
    search_fields = ('email',)
