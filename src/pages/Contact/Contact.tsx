import { FaEnvelope, FaFacebook, FaPhone, FaStar } from "react-icons/fa";
import Logo from "/assets/logo/logoTransparent.png";
import MapComponent from "../../components/MapComponent/MapComponent";
// import { Link } from 'react-router-dom';


function Contact() {
    return (
        <>
            <div className='flex w-full bg-slate-600 items-center justify-center z-50'>
                <p className='animate-bounce lg:text-[24px] mt-6 sm:text-[20px] text-[#00A9DD] font-bold'>
                    CONTACT US FOR A FREE ESTIMATE!!{" "}
                    <a href='tel:2104400007' className='text-white'>
                        (210) 440-0007
                    </a>
                </p>
            </div>
            <div className='bg-slate-600 w-screen  py-8'>
                <div className='flex items-center justify-center bg-slate-600'>
                    <div className='bg-slate-800 p-8 rounded-lg shadow-md'>
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
                                <a
                                    href='https://www.facebook.com/allshadesoftexas'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='hover:text-indigo-600'
                                >
                                    Visit us on Facebook
                                </a>
                            </div>
                            <div className='flex items-center justify-center space-x-4'>
                                <FaStar className='text-white' />
                                <a
                                    href='https://www.facebook.com/allshadesoftexas/reviews'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='hover:text-indigo-600'
                                >
                                    Leave Us A Review
                                </a>
                            </div>

                            <div className='flex items-center justify-center space-x-4'>
                                <FaEnvelope className='text-white' />
                                <a href='mailto:allshadesoftexas@yahoo.com' className='hover:text-indigo-600'>
                                    allshadesoftexas@yahoo.com
                                </a>
                            </div>
                        </div>
                        <div>
                            <p className='mb-2'>Serving San Antonio, Austin, & Surrounding Areas</p>
                            <img src={Logo} alt='Logo' className='w-32 md:w-40 mx-auto' />
                        </div>
                    </div>
                </div>
            </div>
            <MapComponent />
        </>
    );
}

export default Contact;
