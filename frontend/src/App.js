import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage.tsx';
import Adminpage from './Pages/AdminPage/Adminpage.tsx';
import TeacherRegForm from './Pages/TeacherRegForm/TeacherRegForm.tsx';

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
      path: '/teacher-reg',
      element: <TeacherRegForm />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
