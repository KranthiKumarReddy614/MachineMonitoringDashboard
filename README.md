Machine Monitoring Dashboard

A full-stack application built using Next.js (Frontend) and NestJS (Backend) to display and manage real-time machine monitoring data such as status, temperature, and energy usage.

This project was created as part of the Scitech Industries – SDE Intern Assessment.

📌 How to Run the Project

This guide explains how to run both the backend (NestJS) and frontend (Next.js) on your local machine.

🚀 1. How to Run the Backend (NestJS)
Step 1 — Install Dependencies
cd backend
npm install

Step 2 — Start the Backend Server
npm run start

Backend will run at:
http://localhost:3000

🌐 2. How to Run the Frontend (Next.js)
Step 1 — Install Dependencies
cd frontend
npm install

Step 2 — Start the Frontend
npm run dev

Frontend will run at:
http://localhost:3001


(Or http://localhost:3000 if that port is available.)

🔑 Login Credentials

To access the dashboard, use the following static credentials:

Field	Value
Email	admin@example.com
Password	password123

A JWT token is generated upon successful login.

🔌 API Endpoints

Below are the backend API routes implemented using NestJS.

🔐 Authentication
Login
POST /login


Description: Validates email & password and returns a JWT token.

Body Example:

{
  "email": "admin@example.com",
  "password": "password123"
}

🏭 Machine Endpoints (Protected)

These routes require a valid JWT passed in the Authorization header:

Authorization: Bearer <token>

1️⃣ Get All Machines
GET /machines


Returns the full list of machine data.

2️⃣ Get Machine by ID
GET /machines/:id


Returns data for a specific machine.

3️⃣ Update Machine Readings
POST /machines/:id/update


Updates status, temperature, or energy consumption.

Example Request Body:

{
  "temperature": 82,
  "energyConsumption": 1400
}

🧩 Project Features
Frontend (Next.js)

Login page with JWT authentication

Dashboard table listing:

Machine Name

Status

Temperature (°C)

Energy Consumption (kWh)

Machine details page with:

Full machine info

Temperature trend chart (Recharts)

Token-based protected routes

Backend (NestJS)

JWT-based authentication

Protected machine API routes

Dummy machine data

Modular and clean architecture

📦 Tech Stack

Next.js (Frontend)

React

NestJS (Backend)

TypeScript

JWT Authentication

Recharts

Axios

📤 Submission

This repository contains both the frontend and backend code required for the assessment.
Follow the instructions above to run and test the application locally.