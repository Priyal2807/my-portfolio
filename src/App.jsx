// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Experience from './components/Experience';
import Education from './components/Education';
import Research from './components/Research';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="main-wrapper" id="home">
      <Navbar />
      <div className="app-container">
        <HeroSection />
      </div>
      <Experience />
      <Education />
      <Research />
      <Certifications />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;