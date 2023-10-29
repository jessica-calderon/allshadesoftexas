import { useEffect, useState } from "react";
import img1 from "../../assets/solar/img1.png";
import img2 from "../../assets/solar/img2.png";
import img3 from "../../assets/solar/img3.png";
import img4 from "../../assets/solar/img4.png";
import img5 from "../../assets/solar/img5.png";
import hero from "../../assets/photos/hero/img_1.jpg"
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logoTransparent.png";

function Hero() {
    const images = [img1, img2, img3, img4, img5];
    const [currentImage, setCurrentImage] = useState(0);
    const navigate = useNavigate();

    const handleApptClick = () => {
        navigate("/request-an-appointment");
    };

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    //     }, 5000); // Change image every 5 seconds

    //     return () => clearInterval(interval);
    // }, []);

    return (
        <div>
            {/* Slideshow */}
            <div className='relative h-96 overflow-hidden'>
                <div className='relative w-full h-full'>
                    <img src={hero} alt='Solar screen with natural light shining through and green foliage in background' className='w-full h-full object-cover' />
                    <div className='absolute inset-0 bg-black opacity-70'></div>
                </div>

                {/* Overlay Text and Button */}
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white'>
                    {/* <h2 className='text-3xl mb-4'>All Shades of Texas</h2> */}
                    <div className='mb-4'>
                        <img src={logo} width={"200px"} />
                    </div>
                    <button onClick={handleApptClick} className='bg-[rgb(251,175,68)] hover:border hover:border-white text-black p-2 rounded'>
                        Request an Appointment
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
