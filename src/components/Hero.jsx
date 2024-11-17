/**
 * Node modules
 */
import React from 'react';

/**
 * Components
 */
import Logo from '/Willyspace logo vector.svg';

import '../custom.css';


const Hero = () => {
    return (

    <div className="w-full h-screen custom-hero-gradient-bg flex items-center justify-center overflow-hidden relative">
      <div className="w-11/12 sm:w-9/12 md:w-3/4 lg:w-3/4 h-3/4 bg-white bg-opacity-85 backdrop-blur-lg rounded-3xl custom-shadow flex flex-col p-6">
        {/* Navbar */}
        <nav className="sm:flex sm:flex-col md:flex-row items-center justify-between w-full  mb-6">
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="w-10 h-auto mr-2" /> {/* Adjust size as needed */}
            <span className="text-xl font-bold text-gray-800">Willy Space</span>
          </div>
          <div className="sm:flex space-x-6 hidden">
            <a href="#services" className="text-gray-600 hover:text-gray-800">Section 1</a>
            <a href="#section2" className="text-gray-600 hover:text-gray-800">Section 2</a>
            <a href="#section3" className="text-gray-600 hover:text-gray-800">Section 3</a>
            <a href="#section4" className="text-gray-600 hover:text-gray-800">Section 4</a>
          </div>
        </nav>

        {/* Split content below navbar */}
        <div className="flex flex-col justify-between mt-6 flex-grow">
          <div className="flex flex-col justify-center w-full sm:w-1/2 relative top-[1rem] sm:top-[3rem] lg:right-[-2rem]">
            <h2 className="text-[2.5rem] font-bold text-gray-800">Welcome to Your Website</h2>
            <p className="text-gray-600 mt-10">
              Your paragraph text goes here. This can be a brief description or some information.
            </p>
          </div>
          <div className="absolute bottom-[-3rem] right-[-3rem] sm:bottom-[-5rem] sm:right-[-5.5rem] md:bottom-[-7rem] md:right-[-7rem] lg:bottom-[-9rem] lg:right-[-9rem] transform rotate-[15deg]">
            <img 
                src={Logo} 
                alt="Logo" 
                className="w-[240px] h-[240px] sm:w-[430px] sm:h-[430px] md:w-[500px] md:h-[500px] lg:w-[630px] lg:h-[630px]" 
                style={{ filter: 'drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.5))' }}
            />
          </div>
        </div>
      </div>
    </div>

    );
}

export default Hero;