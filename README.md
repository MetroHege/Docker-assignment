# Express MongoDB Docker App

## Description

This is a simple Express application that connects to a MongoDB database. The application is designed to run inside a Docker container.

## Prerequisites

- Docker
- Docker Compose

## Installation

1. Clone the repository:

   ```sh
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Build and run the Docker containers:
   ```sh
   docker-compose up --build
   ```

## Usage

Once the Docker containers are up and running, the application will be accessible at `http://localhost:3000`.

### Endpoints

- `GET /`: Returns a welcome message.

  ```sh
  curl http://localhost:3000/
  ```

- `GET /api`: Returns a JSON message from the API endpoint.
  ```sh
  curl http://localhost:3000/api
  ```

## Commands used:

mkdir express-docker-app
cd express-docker-app
npm init -y
npm install express
docker build -t express-docker-app .
docker run -p 3000:3000 express-docker-app
docker-compose up
