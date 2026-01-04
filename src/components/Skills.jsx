import React from 'react';

const skillCategories = [
    {
        title: "Development",
        skills: ["HTML5", "CSS3", "JavaScript", "Java", "React", "Node.js"]
    },
    {
        title: "Cloud & Tools",
        skills: ["Microsoft Azure", "Python", "SQL", "Git", "Docker", "Figma"]
    }
];

function Skills() {
    return (
        <section className="skills-section" id="skills">
            <h2 className="section-title">Technical Expertise</h2>
            <div className="skills-container">
                {skillCategories.map((cat, index) => (
                    <div key={index} className="skill-category-card">
                        <h3>{cat.title}</h3>
                        <div className="skills-grid">
                            {cat.skills.map((skill, idx) => (
                                <div key={idx} className="skill-pill">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;