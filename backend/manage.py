#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys
import ssl
ssl._create_default_https_context = ssl._create_unverified_context
# Patch smtplib to use unverified SSL
import smtplib
_orig_SMTP_SSL = smtplib.SMTP_SSL
class _PatchedSMTP_SSL(_orig_SMTP_SSL):
    def __init__(self, *args, **kwargs):
        ctx = ssl.create_default_context()
        ctx.check_hostname = False
        ctx.verify_mode = ssl.CERT_NONE
        kwargs['context'] = ctx
        super().__init__(*args, **kwargs)
smtplib.SMTP_SSL = _PatchedSMTP_SSL

_orig_SMTP = smtplib.SMTP
class _PatchedSMTP(_orig_SMTP):
    def starttls(self, *args, **kwargs):
        ctx = ssl.create_default_context()
        ctx.check_hostname = False
        ctx.verify_mode = ssl.CERT_NONE
        kwargs['context'] = ctx
        return super().starttls(*args, **kwargs)
smtplib.SMTP = _PatchedSMTP


def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'tubahjobs.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()
