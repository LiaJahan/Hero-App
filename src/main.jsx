import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import MainLayout from './MainLayout.jsx';
import About from './About.jsx';
import Apps from './assets/pages/Apps.jsx';
import Installations from './assets/pages/Installations.jsx';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <App></App>,
        loader: async () => {
          const res = await fetch('/data.json');
          return res.json();
        },
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/apps',
        element: <Apps></Apps>,
        loader: async () => {
          const res = await fetch('/data2.json');
          return res.json();
        },
      },
      {
        path: '/installation',
        element: <Installations></Installations>
      }
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
    <Toaster position="top-right" />
  </StrictMode>,
)
