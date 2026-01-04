import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Layout
import MainLayout from './MainLayout.jsx';

// Pages
import App from './App.jsx';
import Apps from './assets/pages/Apps.jsx';
import AppsDetailsPage from './assets/pages/AppsDetailsPage.jsx';
import Installations from './assets/pages/Installations.jsx';
import NotFoundPage from './NotFoundPage.jsx';

// Define the router
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundPage />, // Handles invalid routes
    children: [
      {
        index: true, // Home page
        element: <App />,
        loader: async () => {
          const res = await fetch('/data.json');
          return res.json();
        },
      },
      {
        path: 'apps', // All Apps page
        element: <Apps />,
        loader: async () => {
          const res = await fetch('/data2.json');
          return res.json();
        },
      },
      {
        path: 'details/:id', // App Details page
        element: <AppsDetailsPage />,
        loader: async ({ params }) => {
          const res = await fetch('/data2.json');
          const data = await res.json();
          return data.find(app => app.id === Number(params.id)) || null;
        },
      },
      {
        path: 'installation', // My Installation page
        element: <Installations />,
      },
      // No need for path "*" because errorElement handles it
    ],
  },
]);

// Render the app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster position="top-right" />
  </StrictMode>
);
