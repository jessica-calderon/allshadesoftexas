import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import Blurbs from "../Blurbs/Blurbs";
import QRComponent from "../QRComponent/QRComponent";
import MapComponent from "../MapComponent/MapComponent";

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
