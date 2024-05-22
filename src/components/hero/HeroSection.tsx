import React from "react";
import hero from "./hero.png";
import "./HeroSection.css";
import HeroSectionForm from "./HeroSectionForm";

const HeroSection = () => {
    return (
        <div id="hero-section">
            <h1>Muse Group Frontend Academy</h1>
            <p id="academy-description-paragraph">
                Our academy offers a transformative learning experience designed to empower you with the skills and
                knowledge needed to succeed in the ever-evolving field of frontend development.
            </p>
            <img src={hero} alt="hero"/>
            <p id="invitation-paragraph">
                Are you ready to turn your passion for technology into a thriving career?
            </p>
            <HeroSectionForm />
        </div>
    );
};

export default HeroSection;