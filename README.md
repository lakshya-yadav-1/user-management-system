# User Management System

This project is a simple User Management System built as part of an internship task.

The system supports multiple admins. Each admin can register, log in, and manage their own list of users. Users themselves do not have login access and are only created, updated, or deleted by admins.

---

## Features

### Admin Authentication
- Admin registration
- Admin login
- JWT-based authentication
- Password hashing using bcrypt

### User Management (Admin Only)
- Add users with name and email
- Update user details
- Delete users
- View user list with pagination (5 users per page)
- Each admin can manage only their own users

### Validation & Security
- Input validation using Joi
- Protected routes using JWT middleware
- Environment variables for sensitive configuration

---

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Joi

### Frontend
- React.js
- Axios
- React Router

---

## Project Structure

```
backend/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── validation/
├── .env
└── server.js

frontend/
├── src/
├── public/
└── package.json
```

---

## Setup Instructions

### Prerequisites
- Node.js
- MongoDB running locally

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:
```env
PORT=5001
MONGODB_URL=mongodb://127.0.0.1:27017/user-management
JWT_SECRET=your_secret_key
```

Start the backend server:
```bash
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

The frontend will run on: `http://localhost:3000`

---

## API Endpoints

### Admin Authentication

**Register Admin**
```http
POST /api/auth/register
```

**Login Admin**
```http
POST /api/auth/login
```

### User Management (Protected Routes)

> **Note:** All routes below require a valid JWT token in the Authorization header.

**Get Users (with pagination)**
```http
GET /api/users?page=1
Authorization: Bearer <token>
```

**Add User**
```http
POST /api/users
Authorization: Bearer <token>
```

**Update User**
```http
PUT /api/users/:id
Authorization: Bearer <token>
```

**Delete User**
```http
DELETE /api/users/:id
Authorization: Bearer <token>
```

---

## Notes

- Only admins can access user management APIs
- Users do not have login or passwords
- Each admin manages an isolated list of users
- Pagination is limited to 5 users per page
