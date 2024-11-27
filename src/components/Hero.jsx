/**
 * Node modules
 */
import React from 'react';

/**
 * Components
 */
import Logo from '/Willyspace logo vector.svg';

/**
 * Css and Images
 */
import '../custom.css';
import IgLogo from '/instagram-svgrepo-com.svg';
import FbLogo from '/facebook-svgrepo-com.svg';
import TwLogo from '/twitter-svgrepo-com.svg';


const Hero = () => {
    return (

    <div className="w-full h-screen custom-hero-gradient-bg flex items-center justify-center overflow-hidden relative">
      <div className="w-11/12 sm:w-[85%] md:w-[90%] lg:w-[90%] h-[85%] bg-white bg-opacity-85 backdrop-blur-lg rounded-3xl custom-shadow flex flex-col p-6">
        {/* Navbar */}
        <nav className="flex md:flex-row items-center justify-between w-full  mb-6">
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="w-10 h-auto mr-2" /> {/* Adjust size as needed */}
            <span className="text-xl font-bold text-gray-800">Willy Space</span>
          </div>
          <div className="md:flex space-x-6 hidden lg:mr-10">
            <a href="#services" className="text-gray-600 hover:text-gray-800 transition-colors">O nás</a>
            <a href="#section2" className="text-gray-600 hover:text-gray-800 transition-colors">Služby</a>
            <a href="#section3" className="text-gray-600 hover:text-gray-800 transition-colors">Tím</a>
            <a href="#section4" className="text-gray-600 hover:text-gray-800 transition-colors">Klienti</a>
          </div>
        </nav>

        {/* Split content below navbar */}
        <div className="flex flex-col justify-between mt-6 flex-grow">
          <div className="flex flex-col justify-center w-full sm:w-1/2 relative top-[1rem] sm:top-[3rem] lg:right-[-2rem]">
            <h2 className="text-[2.5rem] font-bold text-gray-800">Welcome to Willy Space</h2>
            <p className="text-gray-600 text-xl mt-10">
              Your success, our passion!
            </p>
            <hr className="mt-8 w-[70%] mx-auto" />
            <div className="mt-8 flex justify-evenly items-center">
              <a href="https://www.instagram.com/willyspace.sk/" className="rounded-2xl w-12 h-12 bg-[#2F4156]/30 hover:bg-[#2F4156]/65 transition-colors flex justify-center items-center">
                <img src={IgLogo} alt="Instagram logo" className="w-8 h-8" />
              </a>
              <a href="#" className="rounded-2xl w-12 h-12 bg-[#2F4156]/30 hover:bg-[#2F4156]/65 transition-colors flex justify-center items-center">
                <img src={FbLogo} alt="Instagram logo" className="w-7 h-7" />
              </a>
              <a href="#" className="rounded-2xl w-12 h-12 bg-[#2F4156]/30 hover:bg-[#2F4156]/65 transition-colors flex justify-center items-center">
                <img src={TwLogo} alt="Instagram logo" className="w-7 h-7" />
              </a>
            </div>
          </div>
          <div className="absolute bottom-[-3rem] right-[-3rem] sm:bottom-[-5rem] sm:right-[-5.5rem] md:bottom-[-7rem] md:right-[-7rem] lg:bottom-[-9rem] lg:right-[-9rem] transform rotate-[15deg]">
            <img 
                src={Logo} 
                alt="Logo" 
                className="w-[240px] h-[240px] sm:w-[380px] sm:h-[380px] md:w-[500px] md:h-[500px] lg:w-[630px] lg:h-[630px]" 
                style={{ filter: 'drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.5))' }}
            />
          </div>
        </div>
      </div>
    </div>

    );
}

export default Hero;