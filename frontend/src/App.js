import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage.tsx';
import Adminpage from './Pages/AdminPage/Adminpage.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateEvent from './Pages/AddNewEvent/AddNewEvent.jsx';
import TeacherRegForm from './Components/TeacherRegForm/TeacherRegForm.tsx'
import TeacherRegPage from './Pages/TeacherRegPage.jsx/TeacherRegPage.jsx';


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
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
