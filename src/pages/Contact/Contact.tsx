import React from "react";
import { FaPhone, FaFacebook, FaEnvelope } from "react-icons/fa";
import Logo from "../../assets/logo/logoTransparent.png"; // Update the logo path

function Contact() {
    return (
        <div className='bg-slate-600 py-8'><div className='flex items-center justify-center bg-slate-600'>
            <div className='bg-slate-700 w-full md:w-[800px] p-8 rounded-lg shadow-md'>
                <h2 className='text-xl font-semibold mb-4'>Contact Us</h2>
                <div className='mb-4'>
                    <div className='flex items-center justify-center space-x-4'>
                        <FaPhone className='text-white' />
                        <a href='tel:(210) 440-0007' className='hover:text-indigo-600'>
                            (210) 440-0007
                        </a>
                    </div>
                    <div className='flex items-center justify-center space-x-4'>
                        <FaFacebook className='text-white' />
                        <a href='https://www.facebook.com/yourpage' target='_blank' rel='noopener noreferrer' className='hover:text-indigo-600'>
                            Visit us on Facebook
                        </a>
                    </div>
                    <div className='flex items-center justify-center space-x-4'>
                        <FaEnvelope className='text-white' />
                        <a href='mailto:contact@example.com' className='hover:text-indigo-600'>
                            contact@example.com
                        </a>
                    </div>
                </div>
                <div>
                    <p className='mb-2'>Serving San Antonio, Austin, & Surrounding Areas</p>
                    <img src={Logo} alt='Logo' className='w-32 md:w-40 mx-auto' />
                </div>
            </div>
        </div><div className='flex md:w-[800px] mx-auto mt-4'>
                <iframe
                    title='Austin/San Antonio Map'
                    width='100%'
                    height='400'
                    frameBorder='0'
                    style={{ border: 0 }}
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3849.5845436211225!2d-98.4936!3d29.4241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c58f6e5c73fa1%3A0x5fadc63008a72463!2sSan%20Antonio%2C%20TX!5e0!3m2!1sen!2sus!4v1629957285353!5m2!1sen!2sus'
                    allowFullScreen
                ></iframe>
            </div></div>
    );
}

export default Contact;
