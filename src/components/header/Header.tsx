import React from "react";
import MuseGroupLogo from "../logo/MuseGroupLogo";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <div id="muse-group-logo">
                <MuseGroupLogo/>
            </div>
        </header>
    );
}

export default Header;