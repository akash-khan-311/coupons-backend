# Coupon Management API

A simple **RESTful API** built with **Express.js** and **Mongoose** for managing coupons.  
This project supports creating, applying, deleting, and generating reports for coupons with validation rules.

## Features

- User authentication:
  - Register
  - Login
  - JWT-based access & refresh tokens
- User roles: `user`, `admin`,
- Expense management:
  - Add new expense
  - Prevent duplicate titles per user
  - Filter by category
  - Sort by date
- Middleware for protected routes
- Validation using Zod
- Password hashing with bcrypt

---

## Tech Stack

- Node.js
- Express
- TypeScript
- MongoDB & Mongoose
- Zod for validation
- bcrypt for password hashing
- JWT for authentication
- http-status for HTTP codes

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/akash-khan-311/coupons-backend.git
cd backend
npm install
```

## Create a .env file in the root:

```bash
NODE_ENV=development
DATABASE_URL=your_database_url

```

## Run the server:

```bash
npm run dev
```
