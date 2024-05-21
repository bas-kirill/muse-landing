import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import HeroSection from "./components/hero/HeroSection";

function App() {
  return (
      <div id="landing-wrapper">
          <Header />
          <HeroSection />
      </div>
  );
}

export default App;
