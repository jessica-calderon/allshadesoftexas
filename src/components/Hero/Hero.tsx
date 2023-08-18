import React from "react";

function Hero() {
    return (
        <div>
            {/* Slideshow Placeholder */}
            <div className='relative h-96 bg-gray-300 mt-8'>
                {/* Slide Image Placeholder */}
                <img src='https://via.placeholder.com/1600x600' alt='Placeholder Slide' className='w-full h-full object-cover' />

                {/* Overlay Text and Button */}
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white'>
                    <h2 className='text-3xl mb-4'>All Shades of Texas</h2>
                    <button className='hover:bg-[rgb(251,175,68)] p-2 rounded'>Contact Us</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
