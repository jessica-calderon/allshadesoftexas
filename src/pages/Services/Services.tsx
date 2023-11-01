import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import photosData from "../../../public/data/photos.json";
import beforeAfterData from "../../../public/data/before_after.json"; // Import the Before/After images JSON file
import LatestWork from "../../components/LatestWork/LatestWork";
import { FaWindowClose, FaArrowRight, FaArrowLeft } from "react-icons/fa";

const services = [
    "Enclosed Patios/Porches",
    "Sun Rooms",
    "Solar Screens",
    "Storm & Screen Doors",
    "Screen Rooms",
    "Roller Shades - Motorized & Manual",
    "Retractable Garage Enclosures & Sliders",
    "Replacement Glass Windows",
    "Aluminum Rails",
    "Patio Covers"
];

function ServicesPage() {
    const [selectedService, setSelectedService] = useState<string | null>(null);
    const [showBeforeAfter, setShowBeforeAfter] = useState<boolean>(false);
    const [beforeAfterImages, setBeforeAfterImages] = useState<string[]>([]);

    useEffect(() => {
        // Map the 'url' property from the Before/After images JSON file
        const images = beforeAfterData.map((item: { url: string }) => item.url);
        setBeforeAfterImages(images);
    }, []);

    const handleServiceClick = (service: string) => {
        setSelectedService(service);
        setShowBeforeAfter(false); // Close Before/After modal if open
    };

    const handleBeforeAfterClick = () => {
        setSelectedService(null); // Close Service modal if open
        setShowBeforeAfter(!showBeforeAfter);
    };

    const closeModal = () => {
        setSelectedService(null);
        setShowBeforeAfter(false);
    };

    // Filter photos for the selected category
    const filteredPhotos = photosData.filter((photo) => photo.category === selectedService);

    return (
        <section className="flex flex-col items-center justify-center w-screen h-full py-10 bg-slate-800">
            <div className="md:w-[90%] p-8 mx-auto mb-8 overflow-hidden bg-white rounded-lg shadow-md sm:p-8">
                <h1 className="mb-6 text-3xl font-extrabold text-center text-gray-900">
                    Click On A Service To See Pictures!
                </h1>
                <div className="flex flex-wrap justify-center p-1">
                    {services.map((service, index) => (
                        <div key={index} className="w-1/2 p-4 text-white bg-gray-800 border rounded-md cursor-pointer hover:bg-gray-700" onClick={() => handleServiceClick(service)}>
                           <span className='my-auto'>{service}</span> 
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-[65%] p-8 mx-auto mb-8 bg-white rounded-lg shadow-md">
                <div className="flex">
                    <div className="w-full p-4 text-white bg-gray-800 border rounded-md cursor-pointer hover:bg-gray-700" onClick={handleBeforeAfterClick}>
                        Before/After
                    </div>
                </div>
            </div>

            {selectedService && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative p-8 mt-24 bg-white rounded-lg max-w-md h-[440px]">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-semibold text-black">{selectedService}</h2>
                            <button className="absolute text-xl font-semibold text-gray-600 top-2 right-2 hover:text-gray-800" style={{ border: "none" }} onClick={closeModal}>
                                <FaWindowClose />
                            </button>
                        </div>
                        <Slider dots={true} infinite={true} speed={500} slidesToShow={1} arrows={true} slidesToScroll={1} nextArrow={<FaArrowRight />} prevArrow={<FaArrowLeft />}>
                            {filteredPhotos.map((photo, index) => (
                                <div key={index} className="w-[400px]">
                                    <img src={photo.url} alt={photo.title} className="object-contain w-full h-[300px]" />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            )}

            {showBeforeAfter && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative p-8 mt-24 bg-white rounded-lg max-w-md h-[425px] w-[80%] overflow-hidden">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-semibold text-black">Before/After</h2>
                            <button className="absolute text-xl font-semibold text-gray-600 top-2 right-2 hover:text-gray-800" style={{ border: "none" }} onClick={closeModal}>
                                <FaWindowClose />
                            </button>
                        </div>
                        <Slider dots={true} infinite={true} speed={500} slidesToShow={1} arrows={true} slidesToScroll={1} nextArrow={<FaArrowRight />} prevArrow={<FaArrowLeft />}>
                            {beforeAfterImages.map((image, index) => (
                                <div key={index} className="w-[400px]">
                                    <img src={image} alt={`Before/After ${index}`} className="object-contain w-full h-[300px]" />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            )}

            <LatestWork />
        </section>
    );
}
export default ServicesPage;
