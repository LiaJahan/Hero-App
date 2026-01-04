import React from 'react';

const SecondLayout = () => {
    return (
        <div className="bg-[#7F00FF] text-white py-20 px-4">

            <h1 className="text-center text-5xl font-bold sm:text-4xl mb-12">Trusted by Millions, Built for You</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">

                <div className="stat bg-transparent shadow-none">
                    <div className="stat-title text-white text-lg">Total Downloads</div>
                    <div className="stat-value text-4xl sm:text-5xl font-extrabold">29.6M</div>
                    <div className="stat-desc text-white">21% More Than Last Month</div>
                </div>

                <div className="stat bg-transparent shadow-none">
                    <div className="stat-title text-white text-lg">Total Reviews</div>
                    <div className="stat-value text-4xl sm:text-5xl font-extrabold">906K</div>
                    <div className="stat-desc text-white">46% More Than Last Month</div>
                </div>

                <div className="stat bg-transparent shadow-none">
                    <div className="stat-title text-white text-lg">Active Apps</div>
                    <div className="stat-value text-4xl sm:text-5xl font-extrabold">132+</div>
                    <div className="stat-desc text-white">31 More Will Launch</div>
                </div>

            </div>
        </div>
    );
};

export default SecondLayout;
