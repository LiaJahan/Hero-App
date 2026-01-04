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
      <img src={app.image} alt={app.title} className="w-fit h-30 object-cover rounded" />
      <h3 className="text-lg font-semibold mt-2">{app.title}</h3>
      <p className="text-gray-500 text-sm">{app.downloads.toLocaleString()} Downloads</p>
      <div className="flex justify-between items-center w-full mx-2 mt-2">
                <button className='border-green-400 bg-green-200 rounded-l p-1'>
                  <i className="fa-solid fa-download mr-2"></i>{app.downloads.toLocaleString()}
                </button>
                <button className='border-amber-400 bg-amber-200 rounded-l p-1'>
                  ⭐ {app.ratingAvg}
                </button>
              </div>
    </div>
  );
};

export default AppCard;
