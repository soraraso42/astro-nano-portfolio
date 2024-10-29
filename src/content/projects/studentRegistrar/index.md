---
title: "Student Registrar Web App"
description: "A dynamic web application built with Blazor and ASP.NET Core for managing student enrollments and course registrations, featuring MySQL integration, responsive Bootstrap UI, and role-based course validation."
date: " Oct 22 2024 "
repoURL: "https://github.com/soraraso42/Registrar-public-access"
---

## Overview
The **Registrar Web Application** is a dynamic, database-driven platform developed with **Blazor** and **ASP.NET Core**, designed to manage student enrollments and course registrations. Users can add students, view the list of registered students, and enroll students in courses. The application's data is managed using **MySQL**, with a clean and responsive UI built using **Bootstrap** for ease of use.

![ezgif com-crop(1)](https://github.com/user-attachments/assets/4b0cbafe-0c93-4489-94f2-2dd8927b13f9)


## Features
- **Home Page**: Displays a list of students with their details. Provides options to add a new student or register courses for existing students.
- **Add Student**: A form-driven interface that allows users to add new students, with validation checks for missing or incorrect inputs.
- **Course Registration**: Facilitates course registration for students based on their type (Full Time, Part Time, or Coop), with validation ensuring compliance with registration rules.

## Tech Stack
- **Blazor**: Powers the front-end with real-time interactivity and dynamic data binding.
- **ASP.NET Core**: Manages the back-end logic and data interactions.
- **C#**: Implements the core logic, models, and database connections.
- **MySQL**: Serves as the database for storing student and course data.
- **Dapper**: A lightweight ORM used for querying and interacting with the MySQL database.
- **Bootstrap**: Ensures the UI is responsive and user-friendly across devices.

## Features Overview

### Home Page (Students List)
- **Description**: Displays a list of all students in a tabular format. The data is fetched from a MySQL database via an asynchronous SQL query and is dynamically bound to the UI using Blazor’s data-binding capabilities.
- **Navigation**: Each student entry has a button that allows users to register the student for courses. Clicking the "Register" button navigates to the **Course Registration** page for the selected student.

### Add Student
- **Form Inputs**: Users can enter a student's first name, last name, and type (Full Time, Part Time, or Coop).
- **Validation**: Input validation is implemented using **DataAnnotations** to ensure all fields are filled correctly. 
- **Database Integration**: After submission, the form data is inserted into the database using an SQL `INSERT` query.
- **Student ID Generation**: A unique 6-digit student ID is randomly generated for each new student.

### Register Courses
- **Course List**: Displays a list of available courses. Each course includes a checkbox for enrollment, allowing students to be registered in multiple courses at once.
- **Course Registration Rules**: Validation is based on student type:
    - **Full Time**: Maximum of 16 weekly course hours.
    - **Part Time**: Maximum of 3 courses.
    - **Coop**: Maximum of 2 courses and 4 weekly course hours.
- **Validation Feedback**: The system provides feedback if the selected courses exceed the allowed limits for the student's type.
- **Database Updates**: Upon form submission, existing course registrations are cleared, and new registrations are inserted into the database.

## How It Works
1. **Student List (Home Page)**:
   - On page load, the app retrieves all registered students from the MySQL database using an asynchronous SQL query.
   - The student data is dynamically bound to an HTML table, displaying relevant information.
   - Users can add a new student or register courses for existing students.
   
2. **Adding Students**:
   - The "Add Student" page uses an **EditForm** to capture student data. Upon submission, data is validated, and if valid, a new student record is inserted into the database.
   - A unique 6-digit student ID is generated for each new student.

3. **Course Registration**:
   - The registration page loads a list of available courses from the database.
   - Based on the student's type, the application enforces registration rules (e.g., maximum hours, number of courses ).
   - If the selected courses violate the rules, an error message is displayed. If valid, the course registration is saved to the database and a success message is displayed.


## Workflow
1. **Home Page**: Lists all students and allows navigation to the "Add Student" or "Register Course" pages.
2. **Add Student**: Users input student details, which are validated and then inserted into the database. Upon success, the user is redirected back to the home page.
3. **Register Courses**: After selecting courses and passing validation, course registration details are updated in the database. Invalid selections triggers specific feedback messages displayed to the user.

## Challenges Encountered
- **Handling Asynchronous Data Fetching**: Ensuring data is correctly loaded and displayed required careful management of Blazor's `async` lifecycle methods.
- **Dynamic Form Validation**: Implementing custom validation based on student types for the course registration page required handling validation messages and state updates programmatically.
- **Data Binding**: Managing two-way data binding between form inputs and the model, especially for dynamically loaded content like the course list, required precise use of Blazor’s `EditContext`.

## Future Improvements
- **Improved Error Handling**: More granular error messages and logging can be added to better handle edge cases during database interactions.
- **Enhanced UI/UX**: The UI could be improved with additional styling and usability features, such as search filters for students or courses, and a more intuitive form layout for better user experience.
- **Pagination**: For larger datasets, especially in the student and course lists, implementing pagination would improve performance and usability.

