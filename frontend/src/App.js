import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage.tsx';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;