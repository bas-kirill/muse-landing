import React from "react";
import InstagramIcon from "./icons/InstagramIcon";
import TelegramIcon from "./icons/TelegramIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import FacebookIcon from "./icons/FacebookIcon";
import "./styles/Socials.css";

const Socials = () => {
    return (
        <div id="socials-wrapper">
            <div style={{marginRight: "16px"}}>
                <InstagramIcon/>
            </div>
            <div style={{marginLeft: "30px", marginRight: "30px"}}>
                <TelegramIcon/>
            </div>
            <div style={{marginLeft: "30px", marginRight: "30px"}}>
                <LinkedInIcon/>
            </div>
            <div style={{marginLeft: "30px"}}>
                <FacebookIcon/>
            </div>

        </div>
    );
}

export default Socials;