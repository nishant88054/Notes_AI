# 🧠 AI-Powered Notes App

An intelligent, full-stack MERN application that allows users to create, manage, and enhance their notes with the power of a locally-run AI model. This app uses **Ollama** to run **TinyLlama**, providing smart summarization features while ensuring all user data remains private and secure on their local machine.

## ✨ Features

-   **Full CRUD Functionality**: Create, Read, Update, and Delete notes with a clean and intuitive interface.
-   **AI-Powered Summaries**: Instantly generate concise summaries of your notes using the integrated AI model.
-   **Secure Authentication**: Robust user registration and login system using JSON Web Tokens (JWT) for secure session management.
-   **Persistent Storage**: All user notes and account details are securely stored in a MongoDB database.
-   **Modern UI**: A responsive and stylish frontend built with React and Tailwind CSS.

---

## 🛠️ Tech Stack

-   **Frontend**: React, Vite, React Router, Tailwind CSS
-   **Backend**: Node.js, Express.js
-   **Database**: MongoDB (with Mongoose)
-   **Authentication**: JSON Web Tokens (JWT), bcrypt
-   **AI Engine**: Ollama running the `tinyllama` model

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing.

### Prerequisites

Make sure you have the following software installed on your system:

-   [Node.js](https://nodejs.org/) (v14 or later)
-   [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
-   [MongoDB](https://www.mongodb.com/try/download/community) or access to a MongoDB Atlas cluster.
-   [Ollama](https://ollama.com/)

### Installation & Setup

#### 1. Run the Local AI Model

Before starting the application, you must have the **Ollama** server running with the `tinyllama` model. Open your terminal and run:

```bash
ollama run tinyllama
```

This will start the local AI server, typically at `http://localhost:11434`. Keep this terminal window open while you use the application.

#### 2. Clone the Repository

```bash
git clone [https://github.com/YOUR_USERNAME/ai-notes-app.git](https://github.com/YOUR_USERNAME/ai-notes-app.git)
cd ai-notes-app
```

*Remember to replace `YOUR_USERNAME` with your actual GitHub username.*

#### 3. Backend Setup

Navigate to the `server` directory, install dependencies, and set up your environment variables.

```bash
# Go to the server folder
cd server

# Install dependencies
npm install
```

Next, create a `.env` file in the `server` directory and add the following variables.

**File: `server/.env`**

```env
MONGO_URI=mongodb://localhost:27017/ai-notes-app
JWT_SECRET=YOUR_SUPER_SECRET_KEY
PORT=5001
```

*Replace `YOUR_SUPER_SECRET_KEY` with a long, random string for security.*

#### 4. Frontend Setup

In a **new terminal**, navigate to the `ai-notes-client` directory and install its dependencies.

```bash
# Go to the frontend folder (from the root directory)
cd ai-notes-client

# Install dependencies
npm install
```

---

### Running the Application

You will need two separate terminals running to use the application: one for the backend and one for the frontend.

**Terminal 1: Start the Backend**

```bash
# Navigate to the server directory
cd server

# Start the server in development mode (with auto-reloading)
npm run dev
```

Your backend API will now be running at `http://localhost:5001`.

**Terminal 2: Start the Frontend**

```bash
# Navigate to the client directory
cd ai-notes-client

# Start the React development server
npm run dev
```

Your React application will open in your browser, usually at `http://localhost:5173`.

---

## 📡 API Endpoints

The backend server provides the following RESTful API endpoints:

| Endpoint           | Method  | Description                        | Requires Auth |
| :----------------  | :----:  | :--------------------------------- | :-----------: |
| `/api/auth/signup` | `POST`  | Register a new user.               |      No       |
| `/api/auth/login`  | `POST`  | Log in a user and get a JWT.       |      No       |
| `/api/notes`       | `GET`   | Get all notes for the user.        |      Yes      |
| `/api/notes`       | `POST`  | Create a new note.                 |      Yes      |
| `/api/notes/:id`   | `PUT`   | Update an existing note.           |      Yes      |
| `/api/notes/:id`   | `DELETE`| Delete a note.                     |      Yes      |
| `/api/ai/summarize`| `POST`  | Generate a summary from content.   |      Yes      |

---

## 💡 Future Improvements

-   [ ] **Folders & Tags**: Implement a system for organizing notes into folders and with tags.
-   [ ] **Rich Text Editing**: Integrate a WYSIWYG editor like TinyMCE for enhanced note formatting.
-   [ ] **Real-time Collaboration**: Add functionality for multiple users to edit a note simultaneously.
-   [ ] **Expanded AI Features**: Use different models for grammar correction, content expansion, or tone analysis.

---

## 📄 License

This project is licensed under the MIT License.

