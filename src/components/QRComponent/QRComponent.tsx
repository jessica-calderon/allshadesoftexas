import React from "react";
import { FaAddressBook } from "react-icons/fa";
const QRComponent: React.FC = () => {
    return (
        <div className='flex flex-col items-center p-6 space-y-4 bg-gray-500 shadow-lg'>
            {/* Icon and Text */}
            <div className='flex items-center space-x-2'>
                <FaAddressBook size={32} />
            </div>
            <p className='text-center text-xl'>Scan the QR code with your phone to add us to your contacts!</p>
            {/* Display QR Code */}
            <img src='/assets/allShadesQr.png' alt='QR Code' width='300px' className='' />
        </div>
    );
};

export default QRComponent;
