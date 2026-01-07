import React from 'react';

const eduData = [
    {
        degree: "Bachelor of Technology",
        school: "Bharati Vidyapeeth's College of Engineering, New Delhi",
        year: "2016 - 2020",
        specialization: "Specialized in Computer Science and Engineering with final CGPA - 9.38/10"
    },
    {
        degree: "High School",
        school: "St. Mark's Girls Sr. Sec. School",
        year: "2014 - 2016",
        specialization: "PCMB Stream with X CGPA - 10 and XII Per - 94.8%"
    }
];

function Education() {
    return (
        <section className="section" id="education">
            <h2 className="section-title">Education</h2>
            <div className="edu-container">
                {eduData.map((edu, idx) => (
                    <div key={idx} className="edu-card">
                        <div className="edu-dot"></div>
                        <span className="edu-year">{edu.year}</span>
                        <h3>{edu.degree}</h3>
                        <h4>{edu.school}</h4>
                        <p>{edu.specialization}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Education;