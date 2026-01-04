import React from 'react';
import { Link } from 'react-router';

const ThirdLayout = ({ cartoons }) => {
  return (
    <div className="bg-pink-50 text-center py-12 px-4">

      <h1 className="font-bold text-5xl sm:text-4xl pb-5">
        Trending Apps
      </h1>
      <h4 className="text-gray-600 mb-10">
        Explore All Trending Apps on the Market developed by us
      </h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center w-full">
        {cartoons?.map((cartoon) => (
          <Link
            key={cartoon.id}
            to={`/details/${cartoon.id}`}
            className="card bg-base-100 w-80 shadow-sm hover:shadow-lg transition-shadow block no-underline"
          >
            <figure className="px-6 pt-6">
              <img
                src={cartoon.image}
                alt={cartoon.title}
                className="rounded-xl h-30 object-cover w-fit"
              />
            </figure>

            <div className="card-body items-center text-center">
              <h2 className="card-title text-black">
                {cartoon.title} : {cartoon.description}
              </h2>

              <div className="flex justify-between items-center w-full mx-2 mt-2">
                <button className='border-green-400 bg-green-200 rounded-l p-1'>
                  <i className="fa-solid fa-download mr-2"></i>{cartoon.downloads.toLocaleString()}
                </button>
                <button className='border-amber-400 bg-amber-200 rounded-l p-1'>
                  ⭐ {cartoon.ratingAvg}
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Link
        to="/apps"
        className="btn mt-10 text-xl text-white rounded-l bg-[#7F00FF] transition-all duration-300 inline-block"
      >
        Show All
      </Link>

    </div>
  );
};

export default ThirdLayout;
