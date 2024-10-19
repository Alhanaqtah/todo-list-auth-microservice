# Auth Microservice

The **Auth Microservice** is responsible for managing user authentication, registration, and role-based access control (RBAC). It provides functionality for user login, signup, and role management. This service is designed to be used as part of a microservices architecture and communicates with other services (such as a Todo List service) via RabbitMQ.

## Features

- User registration
- User login with JWT-based authentication
- Role-based access control (RBAC)
- CRUD operations for user roles (admin access required)
- Integration with RabbitMQ for inter-service communication

## Installation

1. Clone the repository
```bash
  git clone https://github.com/Alhanaqtah/todo-list-auth-microservice.git
  cd todo-list-auth-microservice
```

2. Install dependencies
```bash
  npm install
````

3. Environment Configuration
Create a `.env` file in the root directory and configure environment variables like in `.example.env`.

4. Running the service
- With Docker
If you prefer to run the service with Docker, simply build and run the Docker container:
```bash
  docker build -t auth-microservice .
  docker run -p 3001:3001 --env-file .env auth-microservice
```
- Without Docker
To run the service locally without Docker, use the following command:
```bash
  npm run start:dev
```
