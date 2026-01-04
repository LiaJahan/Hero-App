import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import MainLayout from './MainLayout.jsx';

import App from './App.jsx';
import Apps from './assets/pages/Apps.jsx';
import AppsDetailsPage from './assets/pages/AppsDetailsPage.jsx';
import Installations from './assets/pages/Installations.jsx';
import NotFoundPage from './NotFoundPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <App />,
        loader: async () => {
          const res = await fetch('/data.json');
          return res.json();
        },
      },
      {
        path: 'apps', 
        element: <Apps />,
        loader: async () => {
          const res = await fetch('/data2.json');
          return res.json();
        },
      },
      {
        path: 'details/:id',
        element: <AppsDetailsPage />,
        loader: async ({ params }) => {
          const res = await fetch('/data2.json');
          const data = await res.json();
          return data.find(app => app.id === Number(params.id)) || null;
        },
      },
      {
        path: 'installation', 
        element: <Installations />,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster position="top-right" />
  </StrictMode>
);
