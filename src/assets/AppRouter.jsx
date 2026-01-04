// AppRouter.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ThirdLayout from './ThirdLayout';
import Apps from './Apps';
import AppsDetailsPage from './AppsDetailsPage';
import NotFoundPage from './NotFoundPage';

// Example app data
const cartoonsData = [
  { id: 1, title: 'App One', description: 'Desc 1', image: '/image1.png', downloads: 1000, ratingAvg: 4.5 },
  { id: 2, title: 'App Two', description: 'Desc 2', image: '/image2.png', downloads: 500, ratingAvg: 4.0 },
];

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ThirdLayout cartoons={cartoonsData} />} />
      <Route path="/apps" element={<Apps cartoons={cartoonsData} />} />
      <Route path="/details/:id" element={<AppsDetailsPage cartoons={cartoonsData} />} />

      {/* Catch all invalid routes */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
