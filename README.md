## Getting Started

This project is a React application integrated with Firebase. Follow the steps below to set up and run the application locally:

### Steps to Run the App

```bash
# Step 1: Navigate to the backend directory and install dependencies
cd backend
npm install

# Step 2: Start the backend using Firebase emulators
firebase emulators:start --only functions

# Step 3: Open a new terminal, navigate to the frontend directory, and install dependencies
cd frontend
npm install

# Step 4: Start the frontend development server
npm start
