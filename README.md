# Quote Generator

Quote Generator is a full-stack web application that allows users to discover random inspirational quotes and add their own. The application features a React frontend and a Django REST Framework backend, making it a robust and modern solution for managing and serving quotes.

---

## Features

- Fetch and display a random quote
- Add new custom quotes
- Responsive and clean user interface
- RESTful API with Django REST Framework
- Seamless integration between frontend and backend

---

## Technology Stack

**Frontend:**
- React (with Vite)
- Axios for API requests
- Custom CSS

**Backend:**
- Django
- Django REST Framework
- SQLite (default; can be swapped for other databases)

---

## Getting Started

### Backend Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/maithilimukherjee/Quote-Generator.git
   cd Quote-Generator/backend
   ```

2. **Create and activate a virtual environment:**
   ```bash
   python -m venv .venv
   source .venv/bin/activate    # On Windows: .venv\Scripts\activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Apply migrations:**
   ```bash
   python manage.py migrate
   ```

5. **(Optional) Create an admin user:**
   ```bash
   python manage.py createsuperuser
   ```

6. **Run the backend server:**
   ```bash
   python manage.py runserver
   ```

   The API will be available at `http://localhost:8000/`.

---

### Frontend Setup

1. **Open a new terminal and navigate to the frontend directory:**
   ```bash
   cd ../frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173/`.

---

## API Endpoints

- **Get all quotes:**  
  `GET /api/quotes/`
- **Add a new quote:**  
  `POST /api/quotes/` (provide `text` and `author` in the request body)

You can explore more endpoints or test them via Django admin or tools like Postman.

---

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request. If you find bugs or have suggestions, open an issue for discussion.

---

## Troubleshooting

- **CORS Errors:** Ensure the backend is running on the correct port and CORS headers are properly set.
- **Database Errors:** Make sure migrations have been applied before starting the backend server.
- **API Connection Issues:** Verify both frontend and backend servers are running and the endpoints are correctly configured in the frontend code.

For further assistance, please create an issue in the repository.

---
