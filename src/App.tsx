import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import HeroSection from "./components/hero/HeroSection";
import OurProducts from "./components/products/OurProducts";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div id="muse-group-landing">
            <Header/>
            <HeroSection/>
            <OurProducts />
            <Footer />
        </div>
    );
}

export default App;
