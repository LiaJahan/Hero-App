import React from 'react';
import hero from '/image/hero.png'
const FirstLayout = () => {
    return (
        <div className='bg-pink-50 text-center px-20 pt-20'>
            <h2 className="font-extrabold leading-tight text-4xl md:text-5xl lg:text-6xl">
                We Build <br />
                <span className="text-[#7F00FF]">Productive</span> Apps
            </h2>
            <p className='text-gray-600'>
                <br />
                At HERO.IO we craft innovation apps designed to make everyday life simpler, smarter and more exciting. <br />
                Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>
            <div className='my-10 flex justify-center'>
                <a 
                    href="https://play.google.com/store" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='btn mr-10 text-xl p-6 flex items-center justify-center'
                >
                    <i className="fa-brands fa-google-play mr-2"></i> Google Play
                </a>
                <a 
                    href="https://www.apple.com/app-store/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='btn text-xl p-6 flex items-center justify-center'
                >
                    <i className="fa-brands fa-app-store-ios mr-2"></i> App Store
                </a>
            </div>
            <div className="flex justify-center items-center">
                <img 
                    src={hero} 
                    alt="Hero" 
                    className="max-w-full h-auto w-[90%] sm:w-[80%] md:w-[60%] lg:w-[45%]" 
                />
            </div>
        </div>
    );
};

export default FirstLayout;
