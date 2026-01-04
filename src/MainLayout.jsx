import React from 'react';
import Navbar from './assets/Components/Navbar';
import Footer from './assets/Components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            
            <Outlet></Outlet>

            <Footer></Footer>
        </div>
    );
};

export default MainLayout;