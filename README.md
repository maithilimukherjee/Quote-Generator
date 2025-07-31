# DailyQuotes — a Random Code Generator

**DailyQuotes** is a full-stack web app that serves a fresh quote each time you click the button. You can even contribute your own quotes. Built using **React** for the frontend and **Django + Django REST Framework** for the backend.

---

## Features

- Fetch a random quote with a single click
- Add your own quotes to the system
- Simple, elegant, and responsive UI
- Backend API with Django REST Framework
- CORS configured for frontend-backend integration

---

## Tech Stack

### Frontend
- React
- CSS (custom)
- Axios (for API calls)

### Backend
- Django
- Django REST Framework
- SQLite3

🚀 How to Run This Project Locally
🔧 Backend (Django)
Clone the repo

bash
Copy
Edit
git clone https://github.com/your-username/daily-quote-generator.git
cd daily-quote-generator/backend
Create a virtual environment

bash
Copy
Edit
python -m venv .venv
source .venv/bin/activate  # on Windows: .venv\Scripts\activate
Install dependencies

bash
Copy
Edit
pip install -r requirements.txt
Run migrations

bash
Copy
Edit
python manage.py migrate
(Optional) Add some quotes via the admin panel

bash
Copy
Edit
python manage.py createsuperuser
python manage.py runserver
Access: http://localhost:8000/admin

💻 Frontend (React)
Open a new terminal window and go to the frontend folder

bash
Copy
Edit
cd ../frontend
Install dependencies

bash
Copy
Edit
npm install
Start the dev server

bash
Copy
Edit
npm run dev
App runs at http://localhost:5173

🛠 API Endpoint Example
To get all quotes:

http
Copy
Edit
GET http://localhost:8000/api/quotes/
🤝 Note
Collabs are welcome! Also, deployment kept crashing 🫠
If you spot the issue, please do help — PRs appreciated 💙

---
