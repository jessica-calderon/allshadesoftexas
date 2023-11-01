import emailjs from 'emailjs-com';
import { useState } from 'react';
import { AiOutlineMail, AiOutlineMessage, AiOutlinePhone, AiOutlineUser } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";
import './appointment.css';

type ToastProps = {
    message: string;
    type: 'success' | 'error';
};


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
    const [toast, setToast] = useState<ToastProps & { visible: boolean }>({ visible: false, message: '', type: 'success' });

    const Toast: React.FC<ToastProps> = ({ message, type }) => (
        <div className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded shadow-lg ${type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white z-50`}>
            {message}
        </div>
    );

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.sendForm('service_bq7jehn', 'template_1gav2e8', e.currentTarget, 'giQ71sbYL43jliyHl')
            .then((result) => {
                setToast({ visible: true, message: 'Message sent successfully!', type: 'success' });
                setTimeout(() => setToast({ visible: false, message: '', type: 'success' }), 3000); // Hide toast after 3 seconds
                console.log(result.text);
            }, (error) => {
                setToast({ visible: true, message: 'Message could not be sent.', type: 'error' });
                setTimeout(() => setToast({ visible: false, message: '', type: 'error' }), 3000); // Hide toast after 3 seconds
                console.log(error.text);
            });
        e.currentTarget.reset();
    };

    return (

        <div className='flex h-full w-screen py-8 justify-center bg-gray-500'>
            {toast.visible && <Toast message={toast.message} type={toast.type} />}
            <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-2xl'>
                <h2 className='text-xl font-bold mb-4 text-black'>Request An Appointment</h2>
                <form className='space-y-4 text-start z-10' onSubmit={sendEmail}>
                    <div className='relative'>
                        <label htmlFor='name' className='block text-sm font-medium text-black'>
                            Name <span className='text-red-500'>*</span>
                        </label>
                        <div className='mt-1 relative rounded-md shadow-sm'>
                            <input
                                type='text'
                                id='name'
                                name='from_name'
                                required
                                className='form-input rounded block w-full sm:text-sm sm:leading-5 p-2 pl-10 bg-white border text-black border-black'
                                placeholder='John Doe'
                            />
                            <AiOutlineUser className='absolute text-gray-400 left-3 top-1/2 transform -translate-y-1/2' />
                        </div>
                    </div>


                    <div className="flex">
                        {/* <div className="flex-1 mr-2">
                            <label htmlFor='contactDate' className='block text-sm font-medium text-black'>
                                Preferred Contact Date
                            </label>
                            <div className='mt-1 relative rounded-md shadow-sm'>
                                <input
                                    type='date'
                                    id='date'
                                    name='date'
                                    className='form-input rounded block w-full text-black sm:text-sm p-2 sm:leading-5 bg-white border border-black'
                                    onChange={(e) => {
                                        console.log(e.target.value);
                                    }}
                                />

                                <AiOutlineCalendar className='absolute text-gray-400 top-3 right-3' />
                            </div>
                        </div> */}
                        <div className="flex-1 mr-2">
                            <label htmlFor='email' className='block text-sm font-medium text-black'>
                                Email <span className='text-red-500'>*</span>
                            </label>
                            <div className='mt-1 relative rounded-md shadow-sm'>
                                <input
                                    type='email'
                                    id='email'
                                    name='from_email'
                                    required
                                    className='form-input rounded block p-2 w-full text-black sm:text-sm sm:leading-5 pl-10 bg-white border border-black'
                                    placeholder='johndoe@example.com'
                                />
                                <AiOutlineMail className='absolute text-gray-400 left-3 top-1/2 transform -translate-y-1/2' />
                            </div>
                        </div>

                        <div className="flex-1 ml-2">
                            <label htmlFor='phone' className='block text-sm font-medium text-black'>
                                Phone Number
                            </label>
                            <div className='mt-1 relative rounded-md shadow-sm'>
                                <input type='text' id='phone' name='from_number' className='form-input rounded block p-2 w-full text-black sm:text-sm sm:leading-5 pl-10 bg-white border border-black' placeholder='(555) 555-5555' />
                                <AiOutlinePhone className='absolute text-gray-400 left-3 top-1/2 transform -translate-y-1/2' />
                            </div>
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
                                <select id='topic' name='topic' className='form-select rounded block w-full text-black sm:text-sm sm:leading-5 p-2 bg-white border border-black'>
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
