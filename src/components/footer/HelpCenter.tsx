import React from "react";
import "./styles/HelpCenter.css";

const HelpCenter = () => {
    return (
        <div id="help-center-wrapper">
            <div style={{marginRight: "16px"}}>Help Center</div>
            <div style={{marginLeft: "16px", marginRight: "16px"}}>Privacy Policy</div>
            <div style={{marginLeft: "16px"}}>Terms of Service</div>
        </div>
    );
}

export default HelpCenter;