# Task Manager App

A production-ready Full Stack Task Manager Web Application built using the MERN stack (MongoDB, Express, React, Node.js). This app provides a personal dashboard for users to manage their tasks securely.

## Features
- **User Authentication**: Secure sign up and login using JSON Web Tokens (JWT) and bcrypt password hashing.
- **Task Management**: Create, view, update (status change), and delete personal tasks.
- **Protected Routes**: Dashboard is only accessible to authenticated users.
- **Responsive UI**: Modern interface styled with Tailwind CSS.

## Tech Stack
- **Frontend**: React.js, Vite, Tailwind CSS, Axios, React Router v6, Lucide React (icons).
- **Backend**: Node.js, Express.js, Mongoose.
- **Database**: MongoDB.
- **Security**: Helmet, CORS, JWT.

---

## Folder Structure

```
task-manager/
├── backend/            # Express server, MongoDB models, API routes
│   ├── config/         # Database connection configuration
│   ├── controllers/    # Route controllers (Auth, Tasks)
│   ├── middleware/     # Custom auth middleware
│   ├── models/         # Mongoose schemas (User, Task)
│   ├── routes/         # Express API routes
│   ├── server.js       # Backend entry point
│   └── package.json    # Backend dependencies
├── frontend/           # React + Vite frontend app
│   ├── src/
│   │   ├── components/ # Reusable React components
│   │   ├── context/    # React Context (Auth state)
│   │   ├── pages/      # Route pages (Login, Signup, Dashboard)
│   │   ├── services/   # API logic (Axios interceptor)
│   │   ├── App.jsx     # Main React App routing
│   │   └── main.jsx    # React rendering root
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── package.json
└── README.md
```

---

## Local Setup Instructions

### 1. Prerequisites
- Node.js installed (v16+)
- MongoDB connection string (from MongoDB Atlas or local MongoDB instance)

### 2. Backend Setup
Navigate to the `backend` folder and install dependencies:
```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder and add:
```env
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

Start the backend server:
```bash
npm start
# or use nodemon for dev
npm run dev
```

### 3. Frontend Setup
Navigate to the `frontend` folder and install dependencies:
```bash
cd frontend
npm install
```

Start the React development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173` and communicate with the backend on `http://localhost:5000`.

---

## 🚀 Deployment Instructions

### Backend Deployment (Render)
1. Push your code to a GitHub repository.
2. Go to [Render](https://render.com) and sign in.
3. Click "New" -> "Web Service".
4. Connect your GitHub repository.
5. Setup the service:
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
6. Add your Environment Variables (`MONGO_URI`, `JWT_SECRET`, `PORT=5000`).
7. Click "Create Web Service". Copy the deployed URL.

### Frontend Deployment (Vercel)
1. Go to [Vercel](https://vercel.com) and sign in.
2. Click "Add New" -> "Project" and import your repository.
3. Configure the Project:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Before clicking Deploy, update `frontend/src/services/api.js` to use your Render backend URL:
   ```javascript
   const api = axios.create({
     baseURL: 'https://your-render-url.onrender.com/api',
   });
   ```
   *(Alternatively, configure an environment variable `VITE_API_URL`)*
5. Click "Deploy". Your app is now live!
