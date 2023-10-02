import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import photosData from "../../../public/data/photos.json";
import LatestWork from "../../components/LatestWork/LatestWork";
import { FaWindowClose } from "react-icons/fa"

const services = [
    "Enclosed Patios/Porches",
    "Sun Rooms",
    "Solar Screens",
    "Snaps Lock Roof",
    "Storm Doors",
    "Screen Doors",
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
                    <div className="mt-10 h-[500px] w-[800px] bg-white p-8 max-w-md rounded-lg">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl text-black font-semibold">{selectedService}</h2>
                            <button
                                className="text-xl font-semibold text-gray-600 hover:text-gray-800"
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
                    <div className="mt-10 w-[800px] bg-white p-8 max-w-md rounded-lg">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl text-black font-semibold">Before/After</h2>
                            <button
                                className="text-xl font-semibold text-gray-600 hover:text-gray-800"
                                style={{ border: "none" }}
                                onClick={closeModal}
                            >
                                <FaWindowClose />
                            </button>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            {[1, 2, 3].map((index) => (
                                <img
                                    key={index}
                                    src={`https://via.placeholder.com/150?text=Before ${index}`}
                                    alt={`Before ${index}`}
                                    className="w-full h-[300px] object-contain"
                                />
                            ))}
                            {[1, 2, 3].map((index) => (
                                <img
                                    key={index}
                                    src={`https://via.placeholder.com/150?text=After ${index}`}
                                    alt={`After ${index}`}
                                    className="w-full h-[300px] object-contain"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <LatestWork />
        </section>
    );
}

export default ServicesPage;