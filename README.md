### Shape Data Application

This is a full-stack web application for managing shape data (name, type, and color). It includes a React frontend and a Django REST API backend.

## 📦 Features

- Add new shapes (name, shape type, color)
- View shapes in a dynamic data grid
- Real-time display (manual or auto-refresh)
- Edit and delete existing entries
- SQLite for local data persistence
- CORS setup for seamless frontend-backend integration

## 🔧 Tech Stack

- **Frontend**: React, Axios, React Router
- **Backend**: Django, Django REST Framework
- **Database:** SQLite
- **Testing**:
  - Unit & Integration: Jest, React Testing Library
  - End-to-End: Cypress

---

## 📁 Folder Structure

alphv/
├── backend/ # Django backend
│ ├── backend/ # Django project config
│ ├── api/ # Django app
│ └── db.sqlite3
│ └──requirements.txt
├── frontend/ # React frontend (Create React App)
│ ├── src/
│ ├── cypress
├── myenv
├──images
├──manage.py
├──README.md
├──TESTING.md
|

## 🚀 Getting Started

### 🔧 Backend Setup (Django)

1. Create and activate a virtual environment:
   python -m venv myenv
   myenv\Scripts\activate # On Windows
   source myenv/bin/activate # On macOS/Linux

   _if you encounter a permission error here, try changing the project directory to your local directory_

2. Navigate to backend directory:

   ````bash
   cd backend```

   ````

3. Install dependencies:
   pip install -r requirements.txt

4. Run migrations:
   python manage.py makemigrations
   python manage.py migrate

5. Create a superuser (admin login):
   python manage.py createsuperuser

6. Start the backend server:
   python manage.py runserver

![You will see this](/images/server.png)

- Navigate to http://127.0.0.1:8000/admin/login/?next=/admin/ to log in using the superuser you just created
- API runs on: http://127.0.0.1:8000/api/data/

### Frontend Setup (React)

1. Create and activate a virtual environment:

   myenv\Scripts\activate # On Windows
   source myenv/bin/activate # On macOS/Linux

   _if you encounter a permission error here, try changing the project directory to your local directory_

2. Navigate to the frontend directory:
   cd frontend

3. Install dependencies:
   npm install

4. Start the frontend dev server:
   npm start

- Frontend runs on: http://localhost:3000

- You will be directed to the Welcome Page
- Select either one of the two view; Admin Login View or User View.

### 👤 Admin Login

🛡️ **Admin Login for Demo (Temporary)**

- URL: http://localhost:3000/login
- Username: 'the superuser you created earlier'
- Password: 'the password you created for your superuser earlier'

### Live Deployment

This project is also deployed and accessible online:

Frontend: https://shape-data-application-frontend.onrender.com

Backend (Django Admin/API): https://shape-data-application.onrender.com

# Admin Login

To access the admin dashboard online:

Go to Backend Admin Panel: https://shape-data-application.onrender.com/admin/login/?next=/admin/
Use your Django superuser credentials to log in

# Enjoy navigating!
