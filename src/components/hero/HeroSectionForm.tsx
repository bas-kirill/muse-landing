import React from "react";
import CaretRight from "./CaretRight";

const HeroSectionForm = () => {
    return (
        <div id="hero-section-form">
            <form method="POST">
                <input type="text" placeholder="Email"/>
                <button type="submit">
                    Join <CaretRight />
                </button>
            </form>
        </div>
    );
};

export default HeroSectionForm;