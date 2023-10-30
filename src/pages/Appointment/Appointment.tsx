import { AiOutlineMail, AiOutlineMessage, AiOutlineUser } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";
import './appointment.css';

const services = [
    "Enclosed Patios/Porches",
    "Sun Rooms",
    "Solar Screens",
    "Storm Doors",
    "Screen Doors",
    "Roller Shades - Motorized & Manual",
    "Retractable Garage Sliders",
];

function Appointment() {
    return (
        <div className='flex h-full w-screen py-8 justify-center bg-gray-500'>
            <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-2xl'>
                <h2 className='text-xl font-bold mb-4 text-black'>Request an Appointment</h2>
                <form className='space-y-4 text-start'>
                    <div className='relative'>
                        <label htmlFor='name' className='block text-sm font-medium text-black'>
                            Name <span className='text-red-500'>*</span>
                        </label>
                        <div className='mt-1 relative rounded-md shadow-sm'>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                required
                                className='form-input rounded block w-full sm:text-sm sm:leading-5 p-2 pl-10 bg-white border text-black border-black'
                                placeholder='John Doe'
                            />
                            <AiOutlineUser className='absolute text-gray-400 left-3 top-1/2 transform -translate-y-1/2' />
                        </div>
                    </div>

                    <div>
                        <label htmlFor='email' className='block text-sm font-medium text-black'>
                            Email <span className='text-red-500'>*</span>
                        </label>
                        <div className='mt-1 relative rounded-md shadow-sm'>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                required
                                className='form-input rounded block p-2 w-full text-black sm:text-sm sm:leading-5 pl-10 bg-white border border-black'
                                placeholder='johndoe@example.com'
                            />
                            <AiOutlineMail className='absolute text-gray-400 left-3 top-1/2 transform -translate-y-1/2' />
                        </div>
                    </div>

                    <div>
                        <label htmlFor='contactDate' className='block text-sm font-medium text-black'>
                            Preferred Contact Date
                        </label>
                        <div className='mt-1 relative rounded-md shadow-sm'>
                            <input type='date' id='contactDate' name='contactDate' className='form-input rounded block w-full text-black sm:text-sm p-2 sm:leading-5 bg-white border border-black' />
                        </div>
                    </div>

                    <div className='flex justify-between'>
                        <div className='w-1/2 mr-2'>
                            <label htmlFor='propertyType' className='block text-sm font-medium text-black'>
                                Property Type
                            </label>
                            <div className='mt-1 relative rounded-md shadow-sm'>
                                <select id='propertyType' name='propertyType' className='form-select block rounded p-2 w-full sm:text-sm sm:leading-5 bg-white text-black border border-black'>
                                    <option value='residential'>Residential</option>
                                    <option value='commercial'>Commercial</option>
                                    <option value='n/a'>N/A</option>
                                </select>
                                <MdArrowDropDown className='absolute text-gray-400 top-3 right-3' />
                            </div>
                        </div>

                        <div className='w-1/2'>
                            <label htmlFor='service' className='block text-sm font-medium text-black'>
                                Service
                            </label>
                            <div className='mt-1 relative rounded-md shadow-sm'>
                                <select id='service' name='service' className='form-select rounded block w-full text-black sm:text-sm sm:leading-5 p-2 bg-white border border-black'>
                                    {services.map((service, index) => (
                                        <option key={index} value={service}>
                                            {service}
                                        </option>
                                    ))}
                                    <option value='Something Else'>Something Else</option>
                                </select>
                                <MdArrowDropDown className='absolute text-gray-400 top-3 right-3' />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor='message' className='block text-sm font-medium text-black'>
                            Message <span className='text-red-500'>*</span>
                        </label>
                        <div className='mt-1 relative rounded-md shadow-sm'>
                            <textarea
                                id='message'
                                name='message'
                                required
                                rows={4}
                                className='form-textarea rounded p-2 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 bg-white text-black border border-black'
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
