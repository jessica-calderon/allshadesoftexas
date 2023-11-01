import React from "react";
import { FaEnvelope, FaFacebook, FaPhoneAlt, FaStar } from "react-icons/fa";
import angi from "/assets/photos/icons/angi.svg";

const Footer: React.FC = () => {
    return (
        <div className="bg-gray-900 text-white p-6 w-full">
            <div className="container mx-auto flex flex-col md:flex-row justify-between">
                {/* Third Column */}
                <div className="md:w-1/3 flex flex-col items-center justify-center h-full mb-4 text-center">
                    <div className="mb-3 mx-auto">
                        {/* Place for the logo */}
                        <img width="175" src="/assets/logo/logoTransparent.png" alt="Logo" />
                    </div>
                    <div className="flex space-x-4 mt-2">
                        <a href="mailto:allshadesoftexas@yahoo.com" className="text-blue-400 hover:text-blue-600">
                            <FaEnvelope size={24} />
                        </a>
                        <a href="https://www.facebook.com/allshadesoftexas" target='_blank' rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                            <FaFacebook size={24} />
                        </a>
                        <a href="tel:2104400007" className="text-blue-400 hover:text-blue-600">
                            <FaPhoneAlt size={24} />
                        </a>
                    </div>
                    <div className='flex justify-center items-center text-white hover:text-[red] mt-2'>
                        <a href="https://www.facebook.com/allshadesoftexas/reviews" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center font-semibold text-white px-4 py-2 rounded-md inline-block my-2 transition-colors duration-300'>
                            <FaStar /> <span className='ml-2'>Leave a Review</span>
                        </a>
                    </div>

                </div>

                {/* Separator for smaller screens */}
                <div className="w-full md:hidden border-t border-gray-700 mb-4"></div>

                {/* Second Column */}
                <div className="md:w-1/3 px-6 md:border-l md:border-r border-gray-700 mb-10 md:mb-0">
                    <p className="mb-2 font-semibold">WE ACCEPT</p>
                    <p className="mb-2">Cash | Check | Credit/Debit Card | Money Order</p>

                    <div className="flex flex-col items-center justify-center gap-1 mt-16">
                        <p className="mb-2">Find us on Angi! <em>Formerly Angie's List</em></p>
                        {/* TODO: insert angi list link */}
                        <div className=''>
                            <img src={angi} alt="Angi logo" />
                        </div>
                    </div>
                </div>

                {/* Separator for smaller screens */}
                <div className="w-full md:hidden border-t border-gray-700 mb-4"></div>

                {/* First Column */}
                <div className="md:w-1/3 pl-6 lg:pl-0 border-gray-700 mb-4 md:mb-0">
                    <p className="mb-2 leading-6">7601 Daffan Ln. Unit #344</p>
                    <p className="mb-2 leading-6">Austin, TX 78724</p>
                    <a
                        href="https://www.google.com/maps/place/Austin,+TX+78724/@30.2887673,-97.6994283,12z/data=!3m1!4b1!4m6!3m5!1s0x8644b7f0cf9233d5:0xb615a290ff3e4771!8m2!3d30.2944269!4d-97.6222665!16s%2Fm%2F020yt_x?hl=en&entry=ttu"
                        className="text-blue-400 mb-2"
                    >
                        View Map
                    </a>
                    <p className="mb-2">
                        <a href="tel:2104400007" className="text-blue-400">
                            (210) 440-0007
                        </a>
                    </p>
                    <p className="mb-2">Serving San Antonio, Austin, & Surrounding Areas</p>

                    <a href="/request-an-appointment" className="text-blue-400">
                        Send Us A Message
                    </a>

                </div>
            </div>
        </div>
    );
};

export default Footer;
