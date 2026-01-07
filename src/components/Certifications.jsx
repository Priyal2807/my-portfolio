import React from 'react';

const certs = [
    "AZ-204: Developer", "AZ-104: Administrator",
    "AZ-400: DevOps", "AI-102: AI Engineer", "DP-203: Data Engineer",
    "AZ-900: Fundamentals", "DP-900: Data Fundamentals", "AI-900: AI Fundamentals", "PL-900: Power Platform Fundamentals"
];

function Certifications() {
    return (
        <section className="section" id="certifications">
            <h2 className="section-title">Microsoft Cloud Certifications</h2>
            <div className="cert-wall">
                {certs.map((cert, idx) => (
                    <div key={idx} className="cert-badge">
                        <div className="ms-box"></div>
                        <span>{cert}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Certifications;