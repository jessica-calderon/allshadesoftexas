import React from "react";
import { AiOutlineUser, AiOutlineMail, AiOutlineCalendar, AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";
import './appointment.css';


const services = [
    "Enclosed Patios/Porches",
    "Sun Rooms",
    "Solar Screens",
    "Snaps Lock Roof",
    "Storm Doors",
    "Screen Doors",
    "Roller Shades - Motorized & Manual",
    "Retractable Garage Sliders",
];

function Appointment() {
    return (
        <div className='flex h-screen w-screen py-8 justify-center bg-gray-500'>
            <div className='bg-white p-8 rounded-lg shadow-md w-[500px]'>
                <h2 className='text-xl font-semibold mb-4 text-black'>Request an Appointment</h2>
                <form className='space-y-4'>
                    <div className='relative'>
                        <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
                            Name <span className='text-red-500'>*</span>
                        </label>
                        <div className='mt-1 relative rounded-md shadow-sm'>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                required
                                className='form-input block w-full sm:text-sm sm:leading-5 p-2 pl-10'
                                placeholder='John Doe'
                            />
                            <AiOutlineUser className='absolute text-gray-400 left-3 top-1/2 transform -translate-y-1/2' />
                        </div>
                    </div>

                    <div>
                        <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                            Email <span className='text-red-500'>*</span>
                        </label>
                        <div className='mt-1 relative rounded-md shadow-sm'>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                required
                                className='form-input block p-2 w-full sm:text-sm sm:leading-5 pl-10'
                                placeholder='johndoe@example.com'
                            />
                            <AiOutlineMail className='absolute text-gray-400 left-3 top-1/2 transform -translate-y-1/2' />
                        </div>
                    </div>

                    <div>
                        <label htmlFor='contactDate' className='block text-sm font-medium text-gray-700'>
                            Preferred Contact Date
                        </label>
                        <div className='mt-1 relative rounded-md shadow-sm'>
                            <input type='date' id='contactDate' name='contactDate' className='form-input block w-full sm:text-sm p-2 sm:leading-5' />
                        </div>
                    </div>

                    <div>
                        <label htmlFor='propertyType' className='block text-sm font-medium text-gray-700'>
                            Property Type
                        </label>
                        <div className='mt-1 relative rounded-md shadow-sm'>
                            <select id='propertyType' name='propertyType' className='form-select block p-2 w-full sm:text-sm sm:leading-5'>
                                <option value='residential'>Residential</option>
                                <option value='commercial'>Commercial</option>
                                <option value='n/a'>N/A</option>
                            </select>
                            <MdArrowDropDown className='absolute text-gray-400 top-3 right-3' />
                        </div>
                    </div>

                    <div>
                        <label htmlFor='service' className='block text-sm font-medium text-gray-700'>
                            Service
                        </label>
                        <div className='mt-1 relative rounded-md shadow-sm'>
                            <select id='service' name='service' className='form-select block w-full sm:text-sm sm:leading-5 p-2'>
                                {services.map((service, index) => (
                                    <option key={index} value={service}>
                                        {service}
                                    </option>
                                ))}
                            </select>
                            <MdArrowDropDown className='absolute text-gray-400 top-3 right-3' />
                        </div>
                    </div>

                    <div>
                        <label htmlFor='message' className='block text-sm font-medium text-gray-700'>
                            Message <span className='text-red-500'>*</span>
                        </label>
                        <div className='mt-1 relative rounded-md shadow-sm'>
                            <textarea
                                id='message'
                                name='message'
                                required
                                rows={4}
                                className='form-textarea block w-full transition duration-150 p-2 ease-in-out sm:text-sm sm:leading-5'
                                placeholder='Tell us more about your needs...'
                            />
                            <AiOutlineMessage className='absolute text-gray-400 top-3 right-3' />
                        </div>
                    </div>

                    <div>
                        <button
                            type='submit'
                            className='w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-800 transition duration-150 ease-in-out'
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Appointment;
