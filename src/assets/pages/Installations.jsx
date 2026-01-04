import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Installations = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    const apps = JSON.parse(localStorage.getItem('installedApps')) || [];
    setInstalledApps(apps);
  }, []);

  const handleUninstall = (id) => {
    const updated = installedApps.filter(app => app.id !== id);
    setInstalledApps(updated);
    localStorage.setItem('installedApps', JSON.stringify(updated));
    toast.success('App Uninstalled!');
  };

  const sortedApps = [...installedApps].sort((a, b) => {
    if (sortBy === 'size') return a.size - b.size;
    if (sortBy === 'name') return a.title.localeCompare(b.title);
    return 0;
  });

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="font-extrabold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Your Installed Apps
          </h1>
          <h3 className="text-gray-600 text-base sm:text-lg md:text-xl mt-1 sm:mt-2">
            Explore all trending Apps marketed by us
          </h3>
        </div>

       
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <label className="font-semibold">Sort By:</label>
          <select
            className="border border-gray-300 rounded px-3 py-1 w-full sm:w-auto"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="name">Name</option>
            <option value="size">Size</option>
          </select>
        </div>
      </div>

   
      <p className="text-gray-700 font-semibold">
        {installedApps.length} App{installedApps.length !== 1 ? 's' : ''} found
      </p>

     
      <div className="flex flex-col gap-4">
        {sortedApps.length > 0 ? (
          sortedApps.map((app) => (
            <div
              key={app.id}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full p-4 bg-white shadow rounded"
            >
              <div className="flex items-start sm:items-center gap-4 w-full sm:w-auto">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-16 h-16 sm:w-12 sm:h-12 rounded object-cover"
                />
                <div className="flex flex-col">
                  <h3 className="font-semibold text-sm sm:text-base">{app.title}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm">{app.companyName}</p>
                </div>
              </div>

            
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-2 sm:mt-0">
                <p className="text-gray-600 text-sm">{app.size} MB</p>
                <button
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm"
                  onClick={() => handleUninstall(app.id)}
                >
                  Uninstall
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center mt-4">No apps installed yet.</p>
        )}
      </div>
    </div>
  );
};

export default Installations;
