import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import photosData from "../../../public/data/photos.json";
import beforeAfterData from "../../../public/data/before_after.json"; // Import the Before/After images JSON file
import LatestWork from "../../components/LatestWork/LatestWork";
import { FaWindowClose } from "react-icons/fa";

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
        <section className="flex flex-col w-screen items-center justify-center h-full py-10 bg-slate-800">
            <div className="mx-auto w-[65%] p-8 sm:p-8 bg-white rounded-lg overflow-hidden shadow-md mb-8">
                <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-6">
                    Click On A Service To See Pictures!
                </h1>
                <div className="flex flex-wrap justify-center p-1">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 text-white p-4 border rounded-md cursor-pointer hover:bg-gray-700 w-1/2"
                            onClick={() => handleServiceClick(service)}
                        >
                            {service}
                        </div>
                    ))}
                </div>
            </div>

            <div className="mx-auto p-8 bg-white rounded-lg shadow-md mb-8 w-[65%]">
                <div className="flex">
                    <div
                        className="bg-gray-800 text-white p-4 border rounded-md cursor-pointer hover:bg-gray-700 w-full"
                        onClick={handleBeforeAfterClick}
                    >
                        Before/After
                    </div>
                </div>
            </div>

            {selectedService && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="mt-24 h-[440px] bg-white p-8 max-w-md rounded-lg relative">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl text-black font-semibold">{selectedService}</h2>
                            <button
                                className="text-xl font-semibold text-gray-600 hover:text-gray-800 absolute top-2 right-2"
                                style={{ border: "none" }}
                                onClick={closeModal}
                            >
                                <FaWindowClose />
                            </button>
                        </div>
                        <Slider dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1}>
                            {filteredPhotos.map((photo, index) => (
                                <div className="w-[400px]" key={index}>
                                    <img src={photo.url} alt={photo.title} className="w-full h-[300px] object-contain" />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            )}

            {showBeforeAfter && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="mt-24 w-[80%] overflow-hidden bg-white p-8 max-w-md rounded-lg relative h-[425px]">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl text-black font-semibold">Before/After</h2>
                            <button
                                className="text-xl font-semibold text-gray-600 hover:text-gray-800 absolute top-2 right-2"
                                style={{ border: "none" }}
                                onClick={closeModal}
                            >
                                <FaWindowClose />
                            </button>
                        </div>
                        <Slider dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1}>
                            {beforeAfterImages.map((image, index) => (
                                <div className="w-[400px]" key={index}>
                                    <img src={image} alt={`Before/After ${index}`} className="w-full h-[300px] object-contain" />
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
