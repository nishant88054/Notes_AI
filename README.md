<div id="readme-content">

🧠 AI-Powered Notes App
An intelligent, full-stack MERN application that allows users to create, manage, and enhance their notes with the power of AI. This app uses a locally-run TinyLlama model via Ollama to provide smart summarization features, ensuring user data remains private and secure.

✨ Features
✍️ Full CRUD Functionality: Create, Read, Update, and Delete notes with a clean and intuitive interface.

🧠 AI-Powered Summaries: Instantly generate concise summaries of your notes using the integrated TinyLlama model.

🔒 Secure Authentication: Robust user registration and login system using JWT for secure session management.

☁️ Persistent Storage: All user notes and account details are securely stored in a MongoDB database.

🎨 Modern UI: A responsive and stylish frontend built with React and Tailwind CSS.

🛠️ Tech Stack
Frontend: React, Tailwind CSS, React Router

Backend: Node.js, Express.js

Database: MongoDB with Mongoose

AI Engine: Ollama running TinyLlama

Authentication: JSON Web Tokens (JWT)

🚀 Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
Make sure you have the following software installed on your system:

Node.js (v14 or later)

npm or Yarn

MongoDB or access to a MongoDB Atlas cluster.

Ollama

1. Run the Local AI Model
Before starting the application, you must have the Ollama server running with the TinyLlama model. Open your terminal and run:

Bash

ollama run tinyllama
This will start the local AI server, typically at http://localhost:11434. Keep this terminal window open.

2. Clone the Repository
Bash

git clone https://github.com/YOUR_USERNAME/notes-ai-app.git
cd notes-ai-app
3. Backend Setup
Navigate to the server directory, install dependencies, and set up your environment variables.

Bash

# Go to the server folder
cd server

# Install dependencies
npm install
Create a .env file in the server directory and add the following variables.

File: server/.env

MONGO_URI=mongodb://localhost:27017/notes-ai-app
JWT_SECRET=YOUR_SUPER_SECRET_KEY
PORT=5001
4. Frontend Setup
In a new terminal, navigate to the client directory and install its dependencies.

Bash

# Go to the frontend folder (from the root directory)
cd ai-notes-client

# Install dependencies
npm install
5. Run the Application
You will need two separate terminals to run both the backend and frontend servers simultaneously.

In your first terminal (for the backend):

Bash

# Navigate to the server directory
cd server

# Start the server
npm start
Your backend API will be running at http://localhost:5001.

In your second terminal (for the frontend):

Bash

# Navigate to the client directory
cd ai-notes-client

# Start the React development server
npm run dev
Your React application will open in your browser, usually at http://localhost:5173.

📡 API Endpoints
The backend server provides the following RESTful API endpoints:

Endpoint	Method	Description	Requires Auth
/api/auth/signup	POST	Register a new user.	No
/api/auth/login	POST	Log in a user and get a JWT.	No
/api/notes	GET	Get all notes for the logged-in user.	Yes
/api/notes	POST	Create a new note.	Yes
/api/notes/:id	PUT	Update an existing note.	Yes
/api/notes/:id	DELETE	Delete a note.	Yes
/api/ai/summarize	POST	Generate a summary from note content.	Yes

Export to Sheets
💡 Future Improvements
[ ] Folders & Tags: Implement a system for organizing notes into folders and with tags.

[ ] Rich Text Editing: Integrate a WYSIWYG editor like TinyMCE for enhanced note formatting.

[ ] Real-time Collaboration: Add functionality for multiple users to edit a note simultaneously.

[ ] Expanded AI Features: Use different models for grammar correction, content expansion, or tone analysis.

📄 License
This project is licensed under the MIT License - see the LICENSE.md file for details.

</div>