# Online Survey Management System

A **full stack hybrid multiplatform application** designed for comprehensive **online survey management**. This project combines a robust backend powered by **Node.js, Express, Sequelize, and MySQL**, with a sleek, responsive frontend built using **Ionic, Angular, and Capacitor**. The application is deployable across web and mobile platforms (Android/iOS), ensuring a seamless and a professional-grade user experience.

---

## Table of Contents

1. [Description](#description)
2. [Features](#features)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
   - [Project Setup](#1-project-setup)
   - [Backend Setup](#2-backend-setup)
   - [Frontend Setup](#3-frontend-setup)
5. [Usage](#usage)
6. [API Documentation](#api-documentation)
7. [Built With](#built-with-tools-and-technologies)
8. [License](#license)
9. [Acknowledgments](#acknowledgments)

---

## Description

The **Online Survey Management System** provides an integrated platform for creating, managing, and analyzing surveys. Designed with modern web and mobile application frameworks, this project is ideal for organizations aiming to collect actionable insights through tailored surveys.

The backend offers secure authentication with **JWT**, file uploads with **Multer**, and a robust database structure leveraging **Sequelize ORM**. On the frontend, **Ionic and Angular** ensure a dynamic, responsive interface, while **Capacitor** enables cross-platform mobile deployment.

This project follows best practices for code structure, version control, and deployment, ensuring scalability and maintainability.

[🔼 Back to Top](#table-of-contents)

---

## Features

- **Authentication:** Secure login and signup with hashed passwords using **bcrypt** and **JWT-based authorization**.
- **Survey Management:** Create, update, delete, and analyze surveys in **real time**.
- **File Uploads:** Upload survey-related assets using **Multer**.
- **Cross-Platform Deployment:** Optimized for web, Android, and iOS platforms using **Ionic** and **Capacitor**.
- **Database Management:** Seamless integration with **MySQL**, leveraging the power of **Sequelize ORM**.
- **Role-Based Access:** Restricts functionalities based on **user roles** (e.g., Admin, Respondent).

[🔼 Back to Top](#table-of-contents)

---

## Prerequisites

Ensure the following tools are installed on your system:

- [Git](https://git-scm.com/downloads) - For version control.
- [Node.js (LTS)](https://nodejs.org/) - Required to run backend and frontend environments.
- [MySQL](https://dev.mysql.com/downloads/) - For database management.
- [Ionic CLI](https://ionicframework.com/docs/cli) - To manage and serve the frontend.
- **Optional:**
  - [Android Studio](https://developer.android.com/studio) - For Android builds.
  - [Xcode](https://developer.apple.com/xcode/) - For iOS builds (macOS only).

[🔼 Back to Top](#table-of-contents)

---

## Installation

### 1. Project Setup

1. Clone the project repository:
   ```bash
   git clone https://github.com/yourusername/online-survey-management-system.git
   ```
2. Navigate to the project directory:
   ```bash
   cd online-survey-management-system
   ```

[🔼 Back to Top](#table-of-contents)

### 2. Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure the environment variables:
   - Create a `.env` file in the `backend` directory and populate it as follows:  
     ```env
     JWT_SECRET=YourStrongJWTSecret
     MYSQL_DATABASE=onlinesurveymanagementsystem
     MYSQL_USER=root
     MYSQL_PASSWORD=YourDatabasePassword
     MYSQL_ROOT_PASSWORD=YourDatabasePassword
     DB_HOST=localhost
     NODE_ENV=development
     ```
4. Ensure MySQL is running and create the database:
   ```sql
   CREATE DATABASE onlinesurveymanagementsystem;
   ```
5. Start the backend server:
   ```bash
   node app.js
   ```

[🔼 Back to Top](#table-of-contents)

### 3. Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend server:
   ```bash
   ionic serve
   ```

[🔼 Back to Top](#table-of-contents)

---

## Usage

- Access the application in a browser at `http://localhost:8100` after running the frontend server.
- Use **Postman** or any REST API client to interact with the backend APIs.
- Build and deploy the app for Android and iOS using **Android Studio** or **Xcode**.

[🔼 Back to Top](#table-of-contents)

---

## API Documentation

The API documentation is hosted on **Postman** for detailed endpoint specifications:

- [Online Survey Management System API Documentation](https://www.postman.com/online-survey-management-system-api-team/online-survey-management-system-api)

[🔼 Back to Top](#table-of-contents)

---

## Built With (Tools and Technologies)

### Backend

- **Node.js**: JavaScript runtime.
- **Express**: Web framework.
- **Sequelize**: ORM for database management.
- **MySQL**: Relational database.
- **Multer**: Middleware for file uploads.
- **Pug**: Template engine.
- **bcrypt**: Password hashing.
- **jsonwebtoken**: Authentication via JWT.
- **dotenv**: Environment variable management.

### Frontend

- **Ionic**: Hybrid mobile framework.
- **Angular**: Frontend web framework.
- **Capacitor**: Cross-platform deployment.

### Development Tools

- **Visual Studio Code**: Code editor.
- **MySQL Workbench**: Database management.
- **Android Studio**: For Android builds.
- **Xcode**: For iOS builds.

[🔼 Back to Top](#table-of-contents)

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.

[🔼 Back to Top](#table-of-contents)

---

## Acknowledgments

- **[Tiburcio Cruz Ravelo](https://github.com/tcrurav):** For his invaluable mentorship, support, and expertise throughout this project.
- **[PurpleBooth](https://github.com/PurpleBooth):** For providing the [original README template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) that inspired this documentation.
- **[Ionic Team](https://github.com/ionic-team):** For their exceptional hybrid app framework.

[🔼 Back to Top](#table-of-contents)

---

Enjoy using the **Online Survey Management System** and feel free to contribute! 🎉🚀📊

[🔼 Back to Top](#table-of-contents)
