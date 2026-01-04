// src/components/HeroSection.jsx
import React from 'react';
import heroImage from '../assets/hero-image.jpeg'; // Make sure the path is correct

function HeroSection() {
    return (
        <div className="hero-card">
            <div className="content-side">
                <p className="welcome-text">Welcome!</p>
                <h1>Navigating My Professional Landscape</h1>
                <p className="description-text">
                    This portfolio is your guide to my education, experience, and accomplishments, showcasing my professional background and skills in a comprehensive manner.
                </p>
                <button
                    className="learn-more-btn"
                    onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })}
                >
                    Learn More
                </button>
            </div>
            <div className="image-side">
                <img src={heroImage} alt="Professional portrait" />
            </div>
        </div>
    );
}

export default HeroSection;