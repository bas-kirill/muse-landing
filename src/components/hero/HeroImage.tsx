import React from "react";
import hero from "./pics/hero-medium.png";
import "./HeroImage.css";

const HeroImage = () => {
    return (
        <img src={hero} alt="hero"/>
    );
};

export default HeroImage;