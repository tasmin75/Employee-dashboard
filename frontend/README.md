# Employee Management System

## Overview

A web application built with ReactJS and NodeJS for managing company employee data. It provides CRUD functionality, data visualization, and user-friendly forms.

## Features

### Backend API

1. **Create Employee**
   - **Endpoint**: `POST /api/employees`
   - **Description**: Stores new employee details.
   
2. **Read Employee**
   - **Endpoint**: `GET /api/employees`
   - **Description**: Retrieves all employee data with optional filtering.
   
3. **Update Employee**
   - **Endpoint**: `PUT /api/employees/:id`
   - **Description**: Updates existing employee details.
   
4. **Delete Employee**
   - **Endpoint**: `DELETE /api/employees/:id`
   - **Description**: Deletes an employee record.

### Data Visualization

- **Charts**: Visualize age distribution, department counts, and salary ranges.

### User Interface

1. **Landing Page**
   - Dashboard with key metrics and charts.
   
2. **Employee List**
   - Table with pagination and sorting.

3. **Employee Details Card**
   - Detailed view with action buttons.

4. **Employee Form**
   - For adding/editing employee details with validation.

## Tech Stack

- **Frontend**: ReactJS, Chart.js, Tailwind CSS, Framer-motion
- **Backend**: NodeJS, Express
- **Database**: MongoDB
- **Tools**: Git, npm, Postman

## Setup and Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-repo/employee-management-system.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd employee-management-system
   ```

3. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

4. **Install frontend dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

5. **Set up environment variables:**
   - Create a `.env` file in the `backend` directory:
     ```env
     MONGO_URI=your_mongodb_connection_string
     PORT=8000
     ```

6. **Run the backend server:**
   ```bash
   cd backend
   npm run dev
   ```

7. **Run the frontend server:**
   ```bash
   cd ../frontend
   npm run dev
   ```

8. **Access the application:**
   - Open your browser and navigate to `http://localhost:5173`.

## Conclusion

This project aims to provide a robust solution for managing employee data within a company. With a focus on functionality, code quality, and user interface design, it ensures a seamless experience for users and maintainers alike.