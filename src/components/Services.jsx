/**
 * Node modules
 */
import React from 'react';

/**
 * Components
 */
import ServiceCard from './ServiceCard';
import services from '../services';

/**
 * Images
 */
import MarketingLogo from "/Marketing SVG.svg";



const Services = () => {
    return (
        <>
        <div id="services" className="w-full pb-32 bg-[#567C8D]">
            <div className="flex justify-center pt-10 pb-10">
                <h2 className="font-bold text-[3rem] text-white flex justify-center">Naše služby</h2>
            </div>
            <div className="flex p-4 gap-5 overflow-x-scroll hide-scroll-bar">
                <div className="flex flex-nowrap ml-10 gap-10">
                    {services.map((service => (
                        <ServiceCard title={service.service} description={service.description} image={MarketingLogo} />
                    )))}
                </div>
            </div>
        </div>
        </>
    );
}

export default Services; 




