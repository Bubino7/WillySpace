/**
 * Node modules
 */
import React from 'react';

/**
 * Components
 */
import Input from './Input';


import '../custom.css';


const ContactForm = () => {
  return (
    <section id="contact-us" className="w-full min-h-screen flex justify-center items-center custom-form-gradient-bg pt-7">
        <div className="h-[75vh] w-[90vw] flex flex-col justify-around">
            <h1 className="text-gray-800 text-center text-5xl font-body italic">Napíšte nám</h1>
            <div className="flex flex-col items-center">
                <div className="flex flex-col lg:flex-row lg:gap-3 items-center w-full lg:w-[50%]">
                    <Input type="text" label="Meno" />
                    <Input type="text" label="Priezvisko" />
                </div>
                <Input type="email" label="Email" />
                <Input type="textarea" label="O akú službu by ste mali záujem ?" />
            </div>
            <div className="flex justify-center">
                <div className="flex w-full sm:w-[75%] lg:w-[50%] justify-between mt-5 lg:mt-0">
                    <div className="flex items-center gap-2 text-xs font-light">
                        <input type="checkbox" id="agreement" className=""/>
                        <label for="agreement">Súhlasím so spracovaním mojich osobných údajov.</label>
                    </div>
                    <button className="rounded p-2 bg-[#567C8D] text-white">Odoslať</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactForm