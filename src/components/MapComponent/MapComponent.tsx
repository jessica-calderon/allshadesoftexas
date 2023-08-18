import React from "react";

const MapComponent: React.FC = () => {
    return (
        <div className='map-container'>
            <iframe
                title='Austin TX Map'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13757.663534864142!2d-97.69942831924869!3d30.28876730720921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b7f0cf9233d5%3A0xb615a290ff3e4771!2sAustin%2C%20TX%2078724%2C%20USA!5e0!3m2!1sen!2sus!4v1631754462293!5m2!1sen!2sus'
                width='100%'
                style={{ border: 0 }}
                allowFullScreen={true}
                loading='lazy'
            ></iframe>
        </div>
    );
};

export default MapComponent;
