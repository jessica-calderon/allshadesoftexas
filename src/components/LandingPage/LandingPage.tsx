import React from "react";
import { FaFacebook, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import Blurbs from "../Blurbs/Blurbs";
import QRComponent from "../QRComponent/QRComponent";
import MapComponent from "../MapComponent/MapComponent";

const LandingPage: React.FC = () => {
    return (
        <div className='flex flex-col h-screen'>
            {/* Sticky Banner */}
            <div className='sticky bg-gray-900 top-0 bg-blue-500 p-4 flex justify-between items-center z-50'>
                {/* Logo */}
                {/* <div className='text-2xl text-white font-bold'>All Shades of Texas</div> */}
                <div className='flex'>
                    <img className='h-[50px]' src='./src/assets/logo/gradient1.png' />
                    <img className='h-[50px]' src='./src/assets/logo/text.png' />
                </div>
                {/* Icons */}
                <div className='flex space-x-4'>
                    <a href='#' className='text-white'>
                        <FaFacebook size={24} />
                    </a>
                    <a href='#' className='text-white'>
                        <FaEnvelope size={24} />
                    </a>
                    <a href='tel:2104400007' className='text-white'>
                        <FaPhoneAlt size={24} />
                    </a>
                </div>
            </div>
            <Navbar />
            <Hero />
            <Blurbs />
            <QRComponent />
            <MapComponent />
            <Footer />
        </div>
    );
};

export default LandingPage;
