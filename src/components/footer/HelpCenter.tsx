import React from "react";
import "./styles/HelpCenter.css";

const HelpCenter = () => {
    return (
        <div id="help-center-wrapper">
            <div style={{marginRight: "16px"}}>
                <a href="https://support.animaapp.com/en">Help Center</a>
            </div>
            <div style={{marginLeft: "16px", marginRight: "16px"}}>
                <a href="https://forum.animaapp.com/privacy">Privacy Policy</a>
            </div>
            <div style={{marginLeft: "16px"}}>
                <a href="https://forum.animaapp.com/tos">Terms of Service</a>
            </div>
        </div>
    );
}

export default HelpCenter;
