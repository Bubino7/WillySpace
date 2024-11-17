/**
 * Node modules
 */
import React from 'react';


const ServiceCard = ({ title, description, image }) => {
    // Function to truncate text to 100 characters and append "..."
    const truncateText = (text, maxLength = 100) => {
      if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
      }
      return text;
    };
  
    return (
        <div className="w-[300px] h-[300px] rounded-2xl overflow-hidden custom-shadow2 bg-[#F5EFEB] p-3 flex flex-col items-center justify-between">
        {/* Logo in a circle with dark background */}
          <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4 custom-shadow2">
            <img src={image} alt={title} className="w-8 h-8" />
          </div>
    
          {/* Divider */}
          <hr className="w-full border-t-2 border-gray-300 mb-4" />
    
          {/* Heading */}
          <h3 className="text-lg font-bold mb-2 text-center">{title}</h3>
    
          {/* Truncated Description */}
          <p className="text-gray-700 text-sm mb-4 text-center">
            {truncateText(description)}
          </p>
    
          {/* Button */}
          <button
            className="bg-blue-gray-600 text-white px-4 py-2 rounded hover:bg-blue-gray-900 focus:outline-none mt-auto"
            onClick={() => console.log(`More info about ${title}`)}
          >
            More Info
          </button>
      </div>
    );
  };

  export default ServiceCard;