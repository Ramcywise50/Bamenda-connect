# Bamenda Connect

A local Django job marketplace for Bamenda with employer and seeker workflows, payment gating, and mobile-friendly search.

## Features

- Job browsing and search
- Employer job posting and quota-based plans
- Job seeker registration and application flow
- Login/register gating for actions
- Mobile-friendly hero search UI

## Getting Started

1. Create and activate a Python virtual environment.
2. Install dependencies:
   ```bash
   cd backend
   pip install -r requirements.txt
   ```
3. Apply migrations:
   ```bash
   python manage.py migrate
   ```
4. Run the development server:
   ```bash
   python manage.py runserver
   ```
5. Open the app in your browser at `http://127.0.0.1:8000/`.

## Notes

- Do not commit secrets. Database configuration now uses MySQL and should be set via environment variables.
- Frontend logic is in `backend/jobs/static/jobs/script-backend.js`.
- Templates are under `backend/jobs/templates/jobs/`.

## Repository

`https://github.com/Ramcywise50/Bamenda-connect`
