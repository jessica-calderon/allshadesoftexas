import { useNavigate } from "react-router-dom";
import logo from "/assets/logo/logoTransparent.png";
import hero from "/assets/photos/hero/img_1.jpg";

function Hero() {
    const navigate = useNavigate();

    const handleApptClick = () => {
        navigate("/request-an-appointment");
    };

    return (
        <div>
            {/* hero image */}
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
