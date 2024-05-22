import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import HeroSection from "./components/hero/HeroSection";

function App() {
    return (
        <html>
        <head>
            <title>Desktop</title>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
            </style>
        </head>
        <body>
        <Header/>
        <HeroSection/>
        </body>
        </html>
    );
}

export default App;
