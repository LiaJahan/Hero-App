import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from './assets/image/error-404.png';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50 text-center p-4">
      <img src={errorImg} alt="App not found" />
      <Link
        to="/"
        className="bg-[#7F00FF] text-white px-6 py-3 mt-5 rounded hover:bg-[#5f00bf]"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
