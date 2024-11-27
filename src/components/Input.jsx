/**
 * Node modules
 */
import React from 'react';

/**
 * Components
 */


import '../custom.css';

const Input = ({ type, label }) => {
  if (type === "text" || type === "email" || type === "tel") {
    return (
        <div className="flex flex-col gap-3 w-full sm:w-[75%] lg:w-[50%]">
            <label for={label} className="text-gray-800 text-lg">{label} :</label>
            <input id={label} type={type} className="bg-[#567C8D]/60 ring-1 rounded text-white px-2 py-2" placeholder="..." required />
            <div></div>
        </div>
    );
  } else if (type === "textarea") {
    return (
        <div className="flex flex-col gap-3 w-full sm:w-[75%] lg:w-[50%]">
            <label for={label} className="text-gray-800 text-lg">{label}</label>
            <textarea id={label} rows="5" className="bg-[#567C8D]/60 ring-1 rounded text-white px-2 py-2" placeholder="..." required />
        </div>
    );
  }
}

export default Input