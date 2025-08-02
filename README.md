# Task-Manager-API
Backend project using Node.js, Express.js, and MySQL, Key Features: User Registration &amp; Login  Users can create, update, delete tasks  Each task has a due date, status (pending, completed), and priority  MySQL for database  JSON Web Token (JWT) for user authentication  RESTful API structure


Folder Structure
task-manager-api/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   └── taskController.js
│
├── models/
│   ├── userModel.js
│   └── taskModel.js
│
├── routes/
│   ├── auth.js
│   └── tasks.js
│
├── middleware/
│   └── authMiddleware.js
│
├── .env
├── app.js
├── package.json
