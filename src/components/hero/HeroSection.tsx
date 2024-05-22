import React from "react";
import "./HeroSection.css";
import HeroSectionForm from "./form/HeroSectionForm";
import HeroImage from "./HeroImage";

const HeroSection = () => {
    return (
        <div id="hero-section-wrapper">
            <h1>Muse Group Frontend Academy</h1>
            <p id="hero-section-description">
                Our academy offers a transformative learning experience designed to empower you with the skills and
                knowledge needed to succeed in the ever-evolving field of frontend development.
            </p>
            <HeroImage />
            <p id="hero-section-question">
                Are you ready to turn your passion for technology into a thriving career?
            </p>
            <HeroSectionForm />
        </div>
    );
};

export default HeroSection;