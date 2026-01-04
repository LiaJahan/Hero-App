import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AppCard from './AppCard';

const Apps = () => {
  const appsData = useLoaderData();
  const [search, setSearch] = useState('');
  const [filteredApps, setFilteredApps] = useState(appsData);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    setLoading(true); 

    setTimeout(() => {
      const filtered = appsData.filter(app =>
        app.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredApps(filtered);
      setLoading(false);
    }, 300);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <p>Total Apps: {filteredApps.length}</p>
        <input
          type="text"
          placeholder="Searching apps only for you!"
          value={search}
          onChange={handleSearch}
          className="border border-gray-300 rounded px-4 py-2"
        />
      </div>

      {loading && (
        <div className="flex justify-center my-6">
          <div className="loader border-t-4 border-purple-600 w-12 h-12 rounded-full animate-spin"></div>
        </div>
      )}

      {!loading && filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredApps.map(app => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        !loading && <p className="text-center text-gray-600 mt-6">No App Found</p>
      )}
    </div>
  );
};

export default Apps;
