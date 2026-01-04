import React, { useState } from 'react';
import { useLoaderData } from 'react-router';

const Apps = () => {
  const apps = useLoaderData();
  const [search, setSearch] = useState('');

  // Partial match filter (case-insensitive)
  const filteredApps = apps?.filter(app =>
    app.title.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <div className="bg-pink-50 text-center py-12 px-4">

      {/* Heading */}
      <h1 className="font-bold text-5xl sm:text-4xl pb-5">
        Our All Applications
      </h1>
      <h4 className="text-gray-600 mb-10">
        Explore all apps in the Market developed by us
      </h4>

      {/* Search + Total */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-5">

        {/* Total apps */}
        <h3 className="text-lg font-semibold">
          Total Apps: {filteredApps.length}
        </h3>

        {/* Search */}
        <label className="input input-bordered flex items-center gap-2 w-full sm:w-auto">
          <input
            type="search"
            placeholder="Search apps by name"
            className="grow px-2 py-1"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>

      {/* Cards Grid */}
      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center w-full">
          {filteredApps.map((app) => (
            <div key={app.id} className="card bg-base-100 w-80 shadow-sm">

              <figure className="px-6 pt-6">
                <img
                  src={app.image}
                  alt={app.title}
                  className="rounded-xl h-[120px] object-cover w-full"
                />
              </figure>

              <div className="card-body text-center">
                <h2 className="card-title text-base">{app.title}</h2>
                <p className="text-sm text-gray-600">{app.description}</p>

                <div className="flex justify-between items-center w-full mt-3">
                  <button className="bg-green-200 text-green-800 px-2 py-1 rounded text-sm">
                    <i className="fa-solid fa-download mr-1"></i>
                    {app.downloads.toLocaleString()}
                  </button>
                  <button className="bg-amber-200 text-amber-800 px-2 py-1 rounded text-sm">
                    ⭐ {app.ratingAvg}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-10 text-gray-500 text-lg">
          No apps found matching "{search}"
        </p>
      )}
    </div>
  );
};

export default Apps;
