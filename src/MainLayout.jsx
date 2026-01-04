import React from 'react';
import Navbar from './assets/Components/Navbar';
import Footer from './assets/Components/Footer';
import { Outlet, useNavigation } from 'react-router-dom';

const MainLayout = () => {
  const navigation = useNavigation();

  return (
    <div className="relative min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Page content */}
      <Outlet />

      {/* Footer */}
      <Footer />

      {/* Loading overlay */}
      {navigation.state === 'loading' && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 z-50">
          <div className="loader border-t-4 border-purple-600 w-16 h-16 rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default MainLayout;
