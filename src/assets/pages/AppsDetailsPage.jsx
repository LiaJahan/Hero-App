import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

const AppsDetailsPage = () => {
  // Get the app object from loader
  const app = useLoaderData();

  // State for Install button
  const [installed, setInstalled] = useState(false);

  // Check localStorage if app is already installed
  useEffect(() => {
    const installedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
    setInstalled(installedApps.some(item => item.id === app?.id));
  }, [app?.id]);

  // Handle Install button click
  const handleInstall = () => {
    const installedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
    localStorage.setItem(
      'installedApps',
      JSON.stringify([...installedApps, app])
    );
    setInstalled(true);
    toast.success('App Installed Successfully!');
  };

  // If no app found (invalid ID)
  if (!app) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-semibold">App Not Found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-10">
      {/* App Info Section */}
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <img src={app.image} alt={app.title} className="w-full rounded-lg shadow-md" />
        <div>
          <h1 className="text-3xl font-bold">{app.title}</h1>
          <p className="text-gray-600 mt-1">{app.companyName}</p>

          <div className="flex gap-6 mt-4 text-gray-700">
            <span>⭐ {app.ratingAvg}</span>
            <span>{app.downloads.toLocaleString()} Downloads</span>
            <span>{app.reviews} Reviews</span>
          </div>

          <button
            onClick={handleInstall}
            disabled={installed}
            className={`mt-6 px-6 py-2 rounded font-semibold ${
              installed ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-600 text-white hover:bg-purple-700'
            }`}
          >
            {installed ? 'Installed' : 'Install'}
          </button>
        </div>
      </div>

      {/* App Review Chart */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Ratings Breakdown</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={app.ratings}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#7F00FF" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* App Description */}
      <div>
        <h2 className="text-2xl font-semibold mb-3">Description</h2>
        <p className="text-gray-700 leading-relaxed">{app.description}</p>
      </div>
    </div>
  );
};

export default AppsDetailsPage;
