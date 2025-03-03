import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage.tsx';
import Adminpage from './Pages/AdminPage/Adminpage.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateEvent from './Pages/AddNewEvent/AddNewEvent.jsx';
import TeacherRegForm from './Components/TeacherRegForm/TeacherRegForm.tsx';
import TeacherRegPage from './Pages/TeacherRegPage.jsx/TeacherRegPage.jsx';
import Teacherlist from './Pages/Teacher_list/Teacherlist.jsx';
import Login from './Pages/Login/Login.jsx';  // Import Login component
import Signup from './Pages/Login/Signup.jsx'; // Import Signup component
import Dashboard from './Pages/Dashboard/Dashboard.tsx';  // Add Dashboard route

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/admin',
      element: <Adminpage />,
    },
    {
      path: '/teacher-reg-page',
      element: <TeacherRegPage />,
    },
    {
      path: '/event',
      element: <CreateEvent />,
    },
    {
      path: '/teacher_list',
      element: <Teacherlist />,
    },
    {
      path: '/login',
      element: <Login />, // Add Login route
    },
    {
      path: '/signup',
      element: <Signup />, // Add Signup route
    },
    {
      path: '/dashboard',
      element: <Dashboard />, // Add Dashboard route
    },
    // Define a catch-all error page to show on routing errors
    {
      path: '*',
      element: <div>404 Not Found</div>,
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
