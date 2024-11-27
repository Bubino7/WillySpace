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

const Footer = () => {
  return (
    <section className="custom-footer-gradient-bg h-[200px] w-full">

        <div className="flex flex-col justify-center items-center relative top-14 gap-2">
            <a href="tel:+421918392756" className="text-xs text-[#2F4156] italic">+421 918 392 756</a>
            <a href="mailto:mywillyspace@gmail.com" className="text-xs text-[#2F4156] italic font-bold">mywillyspace@gmail.com</a>
            <hr className="w-[70%] mx-auto border-[#2F4156]/20 mt-1" />
            <div className="flex justify-center gap-10 items-center w-full sm:w-[520px] mt-1">
              <a href="https://www.instagram.com/willyspace.sk/" className="rounded-2xl w-10 h-10 bg-[#2F4156]/30 hover:bg-[#2F4156]/65 transition-colors flex justify-center items-center">
                <img src={IgLogo} alt="Instagram logo" className="w-7 h-7" />
              </a>
              <a href="#" className="rounded-2xl w-10 h-10 bg-[#2F4156]/30 hover:bg-[#2F4156]/65 transition-colors flex justify-center items-center">
                <img src={FbLogo} alt="Instagram logo" className="w-6 h-6" />
              </a>
              <a href="#" className="rounded-2xl w-10 h-10 bg-[#2F4156]/30 hover:bg-[#2F4156]/65 transition-colors flex justify-center items-center">
                <img src={TwLogo} alt="Instagram logo" className="w-6 h-6" />
              </a>
            </div>
            <p className="mt-1 font-light text-xs opacity-50">
                Willy Space © Copyright 2024 All rights reserved.
            </p>
        </div>

    </section>
  )
}

export default Footer