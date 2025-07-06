# Backend Server

This is a Node.js backend server built with Express.js and TypeScript, containerized using Docker for consistent development and production environments. It uses Mongoose for MongoDB interactions and supports module aliases (`@app/`).

## Table of Contents
- [Prerequisites](#prerequisites)
- [Development Setup](#development-setup)
  - [Starting the Development Server](#starting-the-development-server)
  - [Common Development Commands](#common-development-commands)
- [Production Deployment](#production-deployment)
  - [Building the Production Image](#building-the-production-image)
  - [Running the Production Container](#running-the-production-container)
  - [Managing the Production Container](#managing-the-production-container)

## Prerequisites
Before you begin, ensure you have the following installed on your system:

- [**Docker Desktop**](https://www.docker.com/products/docker-desktop) (includes Docker Engine and Docker Compose v2+)

## Development Setup

Follow these steps to get the development environment up and running using Docker Compose.

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd server
```

### 2. Create Environment File

Create a `.env` file in the root of the project (`/home/meowveloper/Desktop/yaphets/for-portfolio/server/.env`) and add your MongoDB Atlas connection string. You can copy the structure from `.env.example`.

```
MONGO_URI=your_mongodb_atlas_connection_string
```

### 3. Starting the Development Server

This command will build the Docker image (if it hasn't been built yet), start the `server` container, and run `nodemon` inside it for live reloading. The server will be accessible at `http://localhost:8000`.

```bash
docker compose up -d
```

To view the server logs:

```bash
docker compose logs -f
```

### Common Development Commands

- **Stop the development server:**
  ```bash
  docker compose down
  ```

- **Install a new npm package (run inside the container):**
  ```bash
  docker compose exec server npm install <package-name>
  ```

- **Run tests (example):**
  ```bash
  docker compose exec server npm run test
  ```

## Production Deployment

For production, we build a lean Docker image and run it directly. This process does not use `docker compose`.

### 1. Building the Production Image

This command compiles the TypeScript code and creates an optimized Docker image. It uses `tsc-alias` to resolve module aliases during the build process.

```bash
docker build -t plot-wisp-server-prod .
```

### 2. Create Production Environment File

Create a `.env.production` file in the root of the project (`/home/meowveloper/Desktop/yaphets/for-portfolio/server/.env.production`). This file should contain your production-specific environment variables, including your production MongoDB Atlas connection string.

```
MONGO_URI=your_production_mongodb_atlas_connection_string
# Add other production variables here
```

**Important:** Do NOT commit this file to version control if it contains sensitive information.

### 3. Running the Production Container

First, ensure no other processes are using port `8000` (e.g., your development container).

```bash
docker stop plot-wisp-production-server # Stop if already running
docker rm plot-wisp-production-server   # Remove if already exists
```

Then, run the production container, passing the environment variables from your `.env.production` file:

```bash
docker run -d -p 8000:8000 --name plot-wisp-production-server --restart always --env-file ./.env.production plot-wisp-server-prod
```

### Managing the Production Container

- **View production server logs:**
  ```bash
  docker logs plot-wisp-production-server
  ```

- **Stop the production server:**
  ```bash
  docker stop plot-wisp-production-server
  ```

- **Start a stopped production server:**
  ```bash
  docker start plot-wisp-production-server
  ```

- **Remove the production container:**
  ```bash
  docker rm plot-wisp-production-server
  ```

- **Access the server:**
  The production server will be accessible at `http://localhost:8000`.
