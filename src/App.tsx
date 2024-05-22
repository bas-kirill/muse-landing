import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import HeroSection from "./components/hero/HeroSection";
import OurProducts from "./components/products/OurProducts";

function App() {
    return (
        <div id="muse-group-landing">
            <Header/>
            <HeroSection/>
            <OurProducts />
        </div>
    );
}

export default App;
