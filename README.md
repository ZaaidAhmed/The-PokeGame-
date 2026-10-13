[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Live demo](https://img.shields.io/badge/Demo-live-2ea44f?style=flat)](https://pokegame-frontend.onrender.com/)

# Pokémon Memory Game

[Play the live demo](https://pokegame-frontend.onrender.com)

A full-stack Pokémon memory game where players authenticate, progress through increasingly difficult rounds, and avoid selecting the same Pokémon twice.

## What it demonstrates

- Building a React frontend backed by a Node.js/Express API.
- Implementing registration and login with JWT authentication and password hashing.
- Persisting user data and game-related state with MongoDB/MongoDB Atlas.
- Managing client-side API requests, navigation, notifications, and responsive game flows.

## Features

- User registration and login.
- Progressive memory-game rounds.
- Score and game-state handling.
- Responsive React interface.
- Screenshots in `frontend/public` for the main flows.

## Tech stack

- Frontend: React, React Router, Axios, React Hot Toast
- Backend: Node.js, Express.js, JWT, Bcrypt
- Data: MongoDB and MongoDB Atlas
- Supporting tools: CORS and Cookie Parser

## Run locally

Prerequisites: Node.js 16+, npm, and a MongoDB database or MongoDB Atlas connection.

```bash
git clone https://github.com/ZaaidAhmed/The-PokeGame-.git
cd The-PokeGame-
```

### Backend

```bash
cd backend
npm install
npm start
```

Create `backend/.env` with values for `MONGO_URL`, `JWT_SECRET`, and `PORT` before starting the server.

### Frontend

In a second terminal:

```bash
cd frontend
npm install
npm run dev
```

The original project uses a backend on port 8000 and a frontend development server on port 5173; confirm the current scripts and API URL before deployment.

## Screenshots

The repository includes screenshots for the home, registration, login, and memory-game views under `frontend/public`.

## Project notes

This project is a portfolio example of full-stack JavaScript development, authentication, persistence, and interactive product logic.
