web: cd backend && gunicorn tubahjobs.wsgi:application
release: cd backend && python manage.py collectstatic --noinput && python manage.py migrate