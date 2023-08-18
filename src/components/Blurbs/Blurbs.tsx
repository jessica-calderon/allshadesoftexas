import React from "react";
// If you're using react-icons for the placeholder icons
import { FaRegSun, FaRegStar, FaRegCheckCircle } from "react-icons/fa";

const ThreeColumns: React.FC = () => {
    return (
        <div className='flex flex-col md:flex-row p-6 space-y-6 md:space-y-0 md:space-x-6 bg-gray-600'>
            {/* First Column */}
            <div className='flex-1 flex flex-col items-start space-y-4'>
                <p>We offer a wide variety of solar shade products to keep your home cooler and your utility costs lower.</p>
                <button className='px-4 py-2 text-white rounded-lg hover:bg-[rgb(251,175,68)]'>Our Services</button>
            </div>

            {/* Second Column */}
            <div className='flex-1 flex flex-col items-start space-y-4'>
                <p>Ready to get started? Contact us today to discuss how our solar shades can improve your home!</p>
                <button className='px-4 py-2 text-white rounded-lg hover:bg-[rgb(251,175,68)]'>Contact Us</button>
            </div>

            {/* Third Column */}
            <div className='flex-1 flex flex-col items-start space-y-4'>
                <div className='flex items-center space-x-2'>
                    <FaRegSun size={24} />
                    <p>Made In Texas</p>
                </div>
                <div className='flex items-center space-x-2'>
                    <FaRegStar size={24} />
                    <p>10% Military Discount</p>
                </div>
                <div className='flex items-center space-x-2'>
                    <FaRegCheckCircle size={24} />
                    <p>Limited Lifetime Warranty</p>
                </div>
            </div>
        </div>
    );
};

export default ThreeColumns;
