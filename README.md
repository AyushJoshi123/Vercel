# Vercel
A backend of how major three services of Vercell works
# 🚀 Vercel Clone

A simplified implementation of Vercel built using a microservices architecture.

This project accepts GitHub repositories, clones them, uploads source files to Cloudflare R2, queues builds using Redis, and deploys static websites.

---

## 🏗 Architecture

```text
                  User
                    │
                    ▼
         ┌────────────────────┐
         │ Request Service    │
         │ (Express API)      │
         └────────────────────┘
                    │
                    ▼
            ┌─────────────┐
            │ Redis Queue │
            └─────────────┘
                    │
                    ▼
         ┌────────────────────┐
         │ Upload Service     │
         │ Clone Repository   │
         │ Upload Files to R2 │
         └────────────────────┘
                    │
                    ▼
         ┌────────────────────┐
         │ Deployment Service │
         │ Build Project      │
         │ Serve Static Files │
         └────────────────────┘
```

---

## ✨ Features

* Accept GitHub repository URLs
* Clone repositories using Simple Git
* Upload source files to Cloudflare R2
* Queue deployments with Redis
* Asynchronous build processing
* Microservices architecture
* TypeScript support
* Express APIs
* Docker support

---

## 📂 Project Structure

```text
Vercel_logic
│
├── vercel_request_service
│
├── vercel_upload_service
│
├── vercel_deployment_service
│
└── README.md
```

---

## ⚙️ Tech Stack

### Backend

* Node.js
* TypeScript
* Express
* Redis

### Storage

* Cloudflare R2

### Utilities

* Simple Git

### Dev Tools

* Docker
* Git
* npm

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone <repository-url>
cd Vercel_logic
```

---

## Install dependencies

Inside each service:

```bash
npm install
```

---

## Start Redis

Using Docker:

```bash
docker run --name redis -d -p 6379:6379 redis
```

Verify:

```bash
docker ps
```

---

## Configure Environment Variables

Each service contains its own `.env` file.

Example:

```env
R2_ACCESS_KEY_ID=
R2_SECRET_ACCESS_KEY=
R2_ENDPOINT=
R2_BUCKET_NAME=vercel
REDIS_URL=redis://localhost:6379
```

---

## Run Services

### Request Service

```bash
cd vercel_request_service
npm run dev
```

---

### Upload Service

```bash
cd vercel_upload_service
npm run dev
```

---

### Deployment Service

```bash
cd vercel_deployment_service
npm run dev
```

---

## API

### Deploy Repository

```http
POST /deploy
```

Body:

```json
{
  "repoUrl": "https://github.com/user/repository"
}
```

Response:

```json
{
  "id": "deployment_id"
}
```

---

## Future Improvements

* Build logs
* Custom domains
* WebSocket deployment status
* Subdomain generation
* Authentication
* Build caching
* Containerized builds
* Kubernetes support

---

## Built With ❤️

Inspired by the architecture behind Vercel and modern CI/CD systems.
