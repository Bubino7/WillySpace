/**
 * Node modules
 */
import React from 'react';

/**
 * Components
 */
import ServiceCard from './ServiceCard';
import services from '../services';


const Services = () => {
    return (
        <>
        <div id="services" className="w-full pb-32 bg-[#C8D9E6]">
            <div className="flex justify-center pt-10 pb-10">
                <h2 className="text-[3rem] text-[#2F4156] flex justify-center super-water-font">Naše služby</h2>
            </div>
            <div className="flex p-4 gap-5 overflow-x-scroll hide-scroll-bar">
                <div className="flex flex-nowrap mx-10 gap-10">
                    {services.map((service => (
                        <ServiceCard title={service.service} description={service.description} image={service.img} />
                    )))}
                </div>
            </div>
        </div>
        </>
    );
}

export default Services; 




