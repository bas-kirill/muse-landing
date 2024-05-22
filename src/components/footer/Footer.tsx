import React from "react";
import HelpCenter from "./HelpCenter";
import Socials from "./Socials";
import "./styles/Footer.css";

const Footer = () => {
    return (
        <footer>
            <div id="social-and-text-wrapper">
                <Socials />
                <p>
                    You're not just a student - you're part of a vibrant community of like-minded individuals united by
                    a passion for frontend development. Collaborate, innovate, and grow alongside fellow learners and
                    industry professionals as you embark on this exciting journey together.
                </p>
            </div>
            <HelpCenter/>
        </footer>
    )
}

export default Footer;