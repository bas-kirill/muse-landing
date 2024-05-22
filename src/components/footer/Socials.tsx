import React from "react";
import InstagramIcon from "./icons/InstagramIcon";
import TelegramIcon from "./icons/TelegramIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import FacebookIcon from "./icons/FacebookIcon";
import "./styles/Socials.css";

const Socials = () => {
    return (
        <div id="socials-wrapper">
            <div style={{marginRight: "30px"}}>
                <a href="https://www.instagram.com/animaapp"><InstagramIcon/></a>
            </div>
            <div style={{marginLeft: "30px", marginRight: "30px"}}>
                <TelegramIcon/>
            </div>
            <div style={{marginLeft: "30px", marginRight: "30px"}}>
                <LinkedInIcon/>
            </div>
            <div style={{marginLeft: "30px"}}>
                <a href="https://discord.gg/eQxkYTNxSp"><FacebookIcon/></a>
            </div>

        </div>
    );
}

export default Socials;