import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isSmallerScreen = window.innerWidth < 768;

    return (
        <>
            <div className='sticky bg-gray-900 top-0 bg-blue-500 p-4 flex justify-between items-center z-50'>
                {/* Logo */}
                {/* <div className='text-2xl text-white font-bold'>All Shades of Texas</div> */}
                <a href='/'><div className='flex'>

                    <img className='h-[50px]' src='./src/assets/logo/gradient1.png' />
                    {/* <img className='h-[50px] sm:hidden' src='./src/assets/logo/text.png' /> */}
                </div></a>
                {/* contact us CTA */}
                <div className='flex w-full items-center justify-center'>
                    <p className='animate-pulse lg:text-[24px] sm:text-[20px] font-bold hide-on-small hide-on-medium'>
                        CONTACT US FOR A FREE ESTIMATE!{" "}
                        <a href='tel:2104400007' className='text-white'>
                            (210) 440-0007
                        </a>
                    </p>
                </div>
                {/* Icons */}
                <div className='flex space-x-4'>
                    <a href='#' className='text-white'>
                        <FaFacebook size={24} />
                    </a>
                    <a href='mailto:allshadesoftexas@yahoo.com' className='text-white'>
                        <FaEnvelope size={24} />
                    </a>
                    <a href='tel:2104400007' className='text-white'>
                        <FaPhoneAlt size={24} />
                    </a>
                </div>
            </div>
            {/* Hamburger Menu Button */}
            {isSmallerScreen && (
                <div className='flex w-full bg-gray-700 justify-end'>
                    <button onClick={toggleMenu} className='text-white lg:hidden bg-gray-700'>
                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                        </svg>
                    </button>
                </div>
            )}
            <div className='flex items-center'>
                <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
                </div>
            </div>

            {/* Navigation Menu */}
            <div className={`${isMenuOpen ? "block" : "hidden"} lg:block lg:sticky lg:top-16 bg-gray-700 px-4 py-2 z-50`}>
                <div className={`lg:flex ${isMenuOpen ? "flex-col" : "flex-row"} items-center justify-center`}>
                    {[
                        { text: "Home", link: "/" },
                        // { text: "Testimonials", link: "/testimonials" },
                        { text: "About Us", link: "/about-us" },
                        { text: "Services", link: "/services" },
                        // { text: "Offers", link: "/offers" },
                        { text: "Request An Appointment", link: "/request-an-appointment" },
                        { text: "Contact Us", link: "/contact-us" },
                    ].map((linkItem) => (
                        <Link
                            key={linkItem.text}
                            to={linkItem.link}
                            className={`flex text-white hover:underline lg:my-2 whitespace-nowrap ${isMenuOpen ? "my-2" : "mx-4"}`}
                        >
                            {linkItem.text}
                        </Link>



                    ))}
                    <div className='flex w-full items-center justify-end mr-4'>
                        <a href='tel:2104400007' className='text-white'>
                            (210) 440-0007
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
