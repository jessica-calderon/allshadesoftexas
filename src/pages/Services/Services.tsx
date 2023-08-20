import React, { useState } from "react";
import LatestWork from "../../components/LatestWork/LatestWork";

const services = [
    "Enclosed Patios/Porches",
    "Sun Rooms",
    "Solar Screens",
    "Snaps Lock Roof",
    "Storm Doors",
    "Screen Doors",
    "Roller Shades - Motorized & Manual",
    "Retractable Garage Sliders",
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

    return (
        <section className='flex flex-col items-center justify-center h-full py-10 bg-slate-800'>
            <div className='max-w-5xl mx-auto p-8 sm:p-8 bg-white rounded-lg shadow-md mb-8'>
                <div className='grid grid-cols-2 gap-4'>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className='bg-gray-800 text-white p-4 border rounded-md cursor-pointer hover:bg-gray-700'
                            onClick={() => handleServiceClick(service)}
                        >
                            {service}
                        </div>
                    ))}
                </div>
            </div>

            <div className='max-w-5xl mx-auto p-8 bg-white rounded-lg shadow-md mb-8 w-[65%]'>
                <div className='flex'>
                    <div
                        className='bg-gray-800 text-white p-4 border rounded-md cursor-pointer hover:bg-gray-700 w-full'
                        onClick={handleBeforeAfterClick}
                    >
                        Before/After
                    </div>
                </div>
            </div>

            {selectedService && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                    <div className='bg-white p-8 max-w-md rounded-lg'>
                        <h2 className='text-xl font-semibold mb-4'>{selectedService}</h2>
                        {/* Placeholder for photo gallery */}
                        <div className='grid grid-cols-3 gap-4'>
                            {[1, 2, 3].map((index) => (
                                <img
                                    key={index}
                                    src={`https://via.placeholder.com/150?text=Image ${index}`}
                                    alt={`Image ${index}`}
                                    className='w-full h-auto'
                                />
                            ))}
                        </div>
                        <button className='mt-4 text-sm text-gray-500 hover:text-gray-700' onClick={closeModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}

            {showBeforeAfter && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                    {/* Before/After Modal */}
                    <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full'>
                        <div className='bg-white p-8 max-w-md rounded-lg'>
                            <h2 className='text-xl font-semibold mb-4'>Before/After</h2>
                            {/* Placeholder for before/after gallery */}
                            <div className='grid grid-cols-3 gap-4'>
                                {[1, 2, 3].map((index) => (
                                    <img
                                        key={index}
                                        src={`https://via.placeholder.com/150?text=Before ${index}`}
                                        alt={`Before ${index}`}
                                        className='w-full h-auto'
                                    />
                                ))}
                                {[1, 2, 3].map((index) => (
                                    <img
                                        key={index}
                                        src={`https://via.placeholder.com/150?text=After ${index}`}
                                        alt={`After ${index}`}
                                        className='w-full h-auto'
                                    />
                                ))}
                            </div>
                            <button className='mt-4 text-sm text-gray-500 hover:text-gray-700' onClick={closeModal}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <LatestWork />
        </section>
    );
}

export default ServicesPage;
