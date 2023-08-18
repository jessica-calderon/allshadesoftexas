import React from "react";
// Assume you have react-icons library installed for email and Facebook icons
import { FaFacebook, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <div className='bg-gray-900 text-white p-6'>
            <div className='container mx-auto flex justify-between'>
                {/* First Column */}
                <div className='w-1/3 gap-4'>
                    <h3>All Shades of Texas</h3>
                    <p>7601 Daffan Ln. Unit #344</p>
                    <p>Austin, TX 78724</p>
                    <a
                        href='https://www.google.com/maps/place/Austin,+TX+78724/@30.2887673,-97.6994283,12z/data=!3m1!4b1!4m6!3m5!1s0x8644b7f0cf9233d5:0xb615a290ff3e4771!8m2!3d30.2944269!4d-97.6222665!16s%2Fm%2F020yt_x?hl=en&entry=ttu'
                        className='text-blue-400'
                    >
                        View Map
                    </a>
                    <p>
                        <a href='tel:2104400007'>(210) 440-0007</a>
                    </p>
                    <h3>AREAS WE SERVE</h3>
                    <p>San Antonio, Austin, & Surrounding Areas</p>
                </div>

                {/* Second Column */}
                <div className='w-1/3'>
                    <h3>HOURS</h3>
                    <p>Monday-Friday 8am-6pm</p>
                    <p>WE ACCEPT</p>
                    <p>Cash | Check | Credit/Debit Card | Money Order</p>
                    <a href='#' className='text-blue-400'>
                        Send Us A Message
                    </a>
                </div>

                {/* Third Column */}
                <div className='w-1/3 flex gap-1 flex-col items-center'>
                    <div className='mt-4'>
                        {/* Place for the logo */}
                        <img width='175px' src='./src/assets/logo/logoTransparent.png' alt='Logo' />
                    </div>
                    <p>All Shade of Texas</p>
                    <div className='flex space-x-4'>
                        <a href='#' className='text-blue-400 hover:text-blue-600'>
                            <FaEnvelope size={24} />
                        </a>
                        <a href='#' className='text-blue-400 hover:text-blue-600'>
                            <FaFacebook size={24} />
                        </a>
                        <a href='tel:2104400007' className='text-blue-400 hover:text-blue-600'>
                            <FaPhoneAlt size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
