# Task Management Application

This is a simple task management application built with Express.js. The application's setup and execution are managed through Docker and Docker Compose, making it straightforward to get up and running regardless of your local development environment. Below are the instructions to build and execute the application.

## Prerequisites

Before proceeding, ensure you have the following installed on your system:

- Docker
- Docker Compose

You can verify the installation of Docker and Docker Compose by running `docker -v` and `docker-compose -v` in your terminal, respectively.

## Setup Instructions

### Building and Running the Application Using Docker

1. **Build the Docker Image**

   To build the Docker image for the application, execute the following command in your terminal:

   docker build -t task-management .

   This command constructs a Docker image named task-management based on the Dockerfile located in the current directory.

2. **Start the Application**

    Once the image is built, you can start the application by running:

    docker run -p 3000:3000 task-management

    This command runs the task-management Docker container and maps port 3000 of the container to port 3000 on your host. This mapping allows you to access the application at http://localhost:3000.

### Using Docker Compose for Building and Running

    Alternatively, Docker Compose can be used to streamline the build and run process:

1. **Build and Start with Docker Compose**

    Execute the following command:

    docker-compose up --build

    This command utilizes docker-compose to build the image (if it's not already built) and starts the container as defined in docker-compose.yml. The application will then be accessible at http://localhost:3000.

## Stopping the Application

    If you started the application using Docker directly, you could stop it by pressing Ctrl+C in the terminal where the container is running.

    If you used Docker Compose, the application could be stopped by executing docker-compose down in the terminal. This command stops and removes the containers, networks, and volumes created by docker-compose up.