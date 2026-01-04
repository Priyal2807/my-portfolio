// src/components/Experience.jsx
import React, { useState } from 'react';
import flipIconImg from '../assets/flip-icon.png'; // Make sure this file exists in assets

const experiences = [
    {
        role: "Senior Researcher",
        company: "Tech Institute",
        period: "2022 - Present",
        desc: "Leading AI research focused on neural networks.",
        details: "Published 3 papers in IEEE, managed a team of 5 researchers, and optimized model training time by 40%."
    },
    {
        role: "Junior Developer",
        company: "Software Hub",
        period: "2020 - 2022",
        desc: "Developed full-stack applications using React.",
        details: "Built 12+ client projects, migrated legacy code to modern React, and improved lighthouse scores by 20%."
    },
    {
        role: "Data Analyst Intern",
        company: "Insights Corp",
        period: "2019 - 2020",
        desc: "Analyzed consumer behavior patterns.",
        details: "Created automated Python scripts for data cleaning and visualized trends using D3.js and Tableau."
    }
];

function ExperienceCard({ exp }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
            <div className="flip-card-inner">
                {/* FRONT SIDE */}
                <div className="exp-card front">
                    <button className="flip-btn" onClick={() => setIsFlipped(true)}>

                    </button>
                    <span className="exp-period">{exp.period}</span>
                    <h3>{exp.role}</h3>
                    <h4>{exp.company}</h4>
                    <p>{exp.desc}</p>
                </div>

                {/* BACK SIDE */}
                <div className="exp-card back">
                    <button className="flip-btn" onClick={() => setIsFlipped(false)}>

                    </button>
                    <h3>Key Accomplishments</h3>
                    <p className="details-text">{exp.details}</p>
                </div>
            </div>
        </div>
    );
}

function Experience() {
    return (
        <section className="experience-section" id="work">
            <h2 className="section-title">Professional Journey</h2>
            <div className="experience-grid">
                {experiences.map((exp, index) => (
                    <ExperienceCard key={index} exp={exp} />
                ))}
            </div>
        </section>
    );
}

export default Experience;