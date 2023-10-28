import { FaCreditCard, FaDollarSign, FaMoneyBill, FaMoneyCheckAlt, FaSun, FaPhoneAlt } from "react-icons/fa";

function AboutUs() {
    return (
        <><section className='px-10 flex w-screen h-full pt-10 items-start justify-start bg-gray-500'>
            <div className='container mx-auto grid grid-cols-3 gap-6'>
                {/* Column 1 */}
                <div className='bg-gray-800 p-4 rounded-md'>
                    <h2 className='text-2xl font-bold mb-4'>All Shades of Texas</h2>
                    <p>Licensed, Insured, Expert Work</p>
                    <p>Over 25 years experience</p>
                    <p>Serving San Antonio, Texas, Austin, Texas, and Surrounding Areas</p>
                </div>

                {/* Column 2 */}
                <div className='bg-gray-800 py-4 px-3 rounded-md'>
                    <h3 className='text-2xl font-bold mb-4'>Our services include</h3>
                    <ul className='list-disc pl-4 mb-6'>
                        <li className='flex items-center'>
                            <FaSun className='text-yellow-400 mr-2' />
                            Enclosed Patios/Porches
                        </li>
                        <li className='flex items-center'>
                            <FaSun className='text-yellow-400 mr-2' />
                            Sun Rooms
                        </li>
                        <li className='flex items-center'>
                            <FaSun className='text-yellow-400 mr-2' />
                            Solar Screens
                        </li>
                        <li className='flex items-center'>
                            <FaSun className='text-yellow-400 mr-2' />
                            Snaps Lock Roof
                        </li>
                        <li className='flex items-center'>
                            <FaSun className='text-yellow-400 mr-2' />
                            Storm Doors
                        </li>
                        <li className='flex items-center'>
                            <FaSun className='text-yellow-400 mr-2' />
                            Screen Doors
                        </li>
                        <li className='flex items-center'>
                            <FaSun className='text-yellow-400 mr-2' />
                            <span className='whitespace-nowrap'> Motorized & Manual Roller Shades</span>
                        </li>
                        <li className='flex items-center'>
                            <FaSun className='text-yellow-400 mr-2' />
                            Retractable Garage Sliders
                        </li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div className='bg-gray-800 justify-center p-4 rounded-md'>
                    <h3 className='text-2xl font-bold mb-4'>Payment Methods</h3>
                    <ul className='list-disc pl-6 mb-6'>
                        <li className='flex items-center'>
                            <FaMoneyBill className='mr-2' />
                            Cash
                        </li>
                        <li className='flex items-center'>
                            <FaMoneyCheckAlt className='mr-2' />
                            Check
                        </li>
                        <li className='flex items-center'>
                            <FaCreditCard className='mr-2' />
                            Credit Card
                        </li>
                        <li className='flex items-center'>
                            <FaDollarSign className='mr-2' />
                            Money Order
                        </li>
                    </ul>
                    <div className='flex flex-col w-full justify-center'>
                        <p className=''>Made in Texas</p>
                        <p>Limited Lifetime Warranty</p>
                        <p>10% Military Discount</p>
                        <span className='flex w-full justify-center mr-2'>
                            Contact us for a free estimate
                        </span>
                        {/* Insert contact button here */}
                    </div>
                </div>
            </div>
        </section>
            <section className='bg-gray-500 p-4 flex justify-center items-center font-bold text-3xl text-black'>
                <span className='animate-bounce w-full flex justify-center items-center gap-2'>
                    CALL US TODAY FOR A FREE ESTIMATE!!{" "}<span className='rotate-120'><FaPhoneAlt /></span>
                    <a href='tel:2104400007' className='text-white'>
                        (210) 440-0007
                    </a>
                </span>
            </section>
        </>
    );
}

export default AboutUs;
