import { useState, useEffect } from "react";
import { FaEnvelope, FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    // useEffect(() => {
    //     function handleClickOutside(event: MouseEvent) {
    //         const targetElement = event.target as HTMLElement;

    //         if (targetElement && !targetElement.closest(".navbar") && isMenuOpen) {
    //             setIsMenuOpen(false);
    //         }
    //     }

    //     window.addEventListener("click", handleClickOutside);
    //     return () => window.removeEventListener("click", handleClickOutside);
    // }, [isMenuOpen]);


    return (
        <>
            <div className='sticky top-0 bg-gray-900 p-4 flex justify-between items-center z-100'>
                <div className='flex items-center space-x-4'>
                    <a href='/' className='flex'>
                        <img className='h-[50px]' src='./src/assets/logo/gradient1.png' alt="Logo" />
                    </a>
                    <div className='hidden lg:flex gap-4'>
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

                <div className='hidden lg:flex'>
                    <p className='animate-pulse md:text-[12px] lg:text-[14px] font-bold text-[#00A9DD] ml-4'>
                        CALL FOR A FREE ESTIMATE!{" "}
                        <a href='tel:2104400007' className='text-white'>
                            (210) 440-0007
                        </a>
                    </p>
                </div>

                <div className='flex items-center space-x-4'>
                    <button onClick={toggleMenu} className='lg:hidden text-white p-2'>
                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                        </svg>
                    </button>
                    <div className='hidden lg:flex w-full justify-end items-center '>
                        {[
                            { text: "Home", link: "/" },
                            { text: "About Us", link: "/about-us" },
                            { text: "Services", link: "/services" },
                            { text: "Request An Appointment", link: "/request-an-appointment" },
                            { text: "Contact Us", link: "/contact-us" },
                        ].map((linkItem) => (
                            <Link
                                key={linkItem.text}
                                to={linkItem.link}
                                className='flex text-white hover:underline lg:my-2 whitespace-nowrap mx-2 hover:bg-gray-800 px-2 py-1 transition-all duration-300 rounded'
                            >
                                {linkItem.text}
                            </Link>

                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`${isMenuOpen ? "block" : "hidden"} fixed top-16 w-full bg-gray-700 px-4 py-2 z-150 navbar`}>

                <div className='flex flex-col items-center justify-center'>
                    {[
                        { text: "Home", link: "/" },
                        { text: "About Us", link: "/about-us" },
                        { text: "Services", link: "/services" },
                        { text: "Request An Appointment", link: "/request-an-appointment" },
                        { text: "Contact Us", link: "/contact-us" },
                    ].map((linkItem) => (
                        <div key={linkItem.text} className="w-full border-b border-gray-600">
                            <Link
                                key={linkItem.text}
                                to={linkItem.link}
                                className='block w-full text-center py-2 text-white hover:underline hover:bg-gray-800 transition-all duration-300'
                            >
                                {linkItem.text}
                            </Link>
                        </div>
                    ))}

                    <div className='flex w-full items-center justify-center mt-4'>
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
