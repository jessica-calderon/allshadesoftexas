import React from "react";
import Blurbs from "../Blurbs/Blurbs";
import Hero from "../Hero/Hero";
import MapComponent from "../MapComponent/MapComponent";
import QRComponent from "../QRComponent/QRComponent";

const LandingPage: React.FC = () => {
    return (
        <>
            <Hero />
            <Blurbs />
            <QRComponent />
            <MapComponent />
        </>
    );
};

export default LandingPage;
