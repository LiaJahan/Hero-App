import React from 'react';
import { useNavigate } from 'react-router-dom';

const AppCard = ({ app }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${app.id}`);
  };

  return (
    <div
      className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:shadow-lg transition"
      onClick={handleClick}
    >
      <img src={app.image} alt={app.title} className="w-full h-32 object-cover rounded" />
      <h3 className="text-lg font-semibold mt-2">{app.title}</h3>
      <p className="text-gray-500 text-sm">{app.downloads.toLocaleString()} Downloads</p>
      <p className="text-yellow-500">⭐ {app.ratingAvg}</p>
    </div>
  );
};

export default AppCard;
