# MERN Stack Learning Management System (LMS)

## 📌 Project Overview

This project is a **Full Stack Learning Management System (LMS)** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.

The system allows:

* **Students** to browse and enroll in courses
* **Instructors** to create and manage courses
* **Admins** to manage users and courses

This project demonstrates **real-world full-stack development**, including authentication, role-based authorization, REST APIs, and database integration.

---

# 🛠 Technologies Used

## Frontend

* React JS
* React Router
* Axios
* Bootstrap / CSS

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Bcrypt
* Dotenv

---

# 👥 User Roles & Features

## Student

* Register and Login
* Browse available courses
* Enroll in courses
* View enrolled courses
* Access student dashboard

## Instructor

* Create new courses
* Edit course details
* Delete courses
* Upload lessons

## Admin

* View all users
* Delete users
* Manage courses
* View analytics

---

# 📄 Implemented Pages

## Public Pages

* Home Page
* About Page
* Course Listing Page
* Course Detail Page
* Login Page
* Register Page

## Dashboard Pages

### Student Dashboard

* My Courses
* Profile Page

### Instructor Dashboard

* Create Course
* Manage Courses
* Upload Lessons

### Admin Dashboard

* Manage Users
* Manage Courses
* Reports / Analytics

---

# 📂 Project Structure

```
mern-lms-project
│
├── backend
│   ├── models
│   ├── controllers
│   ├── routes
│   ├── middleware
│   ├── config
│   └── server.js
│
├── frontend
│   ├── components
│   ├── pages
│   ├── services
│   ├── routes
│   └── context
│
├── screenshots
│   ├── img1.png
│   ├── img2.png
│   ├── img3.png
│   ├── img4.png
│   ├── img5.png
│   ├── img6.png
│   ├── img7.png
│   └── img8.png
│
└── README.md
```

---

# ⚙️ Installation Steps

## 1. Clone the Repository

```
git clone https://github.com/MuneebMehmood260/MERN-LMS-Project.git
```

## 2. Navigate to Project Folder

```
cd MERN-LMS-Project
```

---

## 3. Install Backend Dependencies

```
cd backend
npm install
```

---

## 4. Install Frontend Dependencies

```
cd ../frontend
npm install
```

---

# 🔑 Environment Variables

Create a **.env file inside the backend folder**

Example:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/lmsdb
JWT_SECRET=your_secret_key
NODE_ENV=development
```

---

# ▶️ Run the Application

## Start Backend

```
cd backend
npm run dev
```

Backend will run on:

```
http://localhost:5000
```

---

## Start Frontend

Open a new terminal and run:

```
cd frontend
npm run dev
```

Frontend will run on:

```
http://localhost:3000
```

---

# 📊 Screenshots

## Home Page

![Home Page](screenshots/img1.png)

## About Page

![About](screenshots/img2.png)

## Course Page

![Courses](screenshots/img3.png)

## Course Details

![Course Details](screenshots/img4.png)

## Register Page

![Register](screenshots/img5.png)

## Registered Successfully

![Registered](screenshots/img6.png)

## Login Page

![Login](screenshots/img7.png)

## After Login

![Dashboard](screenshots/img8.png)

---

# 🔌 API Endpoints

## Authentication

* POST /api/auth/register
* POST /api/auth/login

## Courses

* GET /api/courses
* POST /api/courses
* PUT /api/courses/:id
* DELETE /api/courses/:id

## Users

* GET /api/users
* DELETE /api/users/:id

## Enrollment

* POST /api/enroll
* GET /api/my-courses

---

# 👨‍💻 Author

**Muneeb Mehmood**

MERN Stack Web Development Final Project

---

# 📜 License

This project is created for **educational purposes only**.
