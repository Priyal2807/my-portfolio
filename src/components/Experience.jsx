// src/components/Experience.jsx
import React, { useState } from 'react';
import flipIconImg from '../assets/flip-icon.png'; // Make sure this file exists in assets

const experiences = [
    {
        role: "Consultant", // or your specific role
        company: "Capgemini",
        period: "2025 - Present",
        desc: "Specialized in enterprise-scale Azure cloud integrations.",
        details: `• Integrated D365, SFTP, SharePoint & CosmosDB via Logic Apps & Azure C# functions
• Secured APIs with OAuth/JWT policies in Azure APIM
• Streamlined CI/CD and version control via Azure DevOps
• Implemented Cloud Security using Key Vault & RBAC
• Accelerated workflows with Azure OpenAI & Copilot
• Collaborated on containerization initiatives, learning Docker and Kubernetes (K8s) concepts.`
    },
    {
        role: "IT Analyst", // or your specific role
        company: "Tata Consultancy Services",
        period: "2020 - 2025",
        desc: "Specialized in enterprise-scale Azure cloud integrations.",
        details: `• Built 50+ Azure Integrations (Logic Apps, APIM, ADF) connecting systems like SAP & CRM.
• Designed ETL pipelines for SQL & Data Lake with full/delta load strategies.
• Reduced API errors by 35% via optimized APIM caching and rate-limiting.
• Automated ARM deployments using YAML DevOps pipelines & PowerShell.
• Developed C# Functions for encryption/decryption and zipping of files.
• Worked with dotliquid templates for JSON mapping.
• Managed Cloud Stack: Logic Apps (Standard), KQL, Key Vault, and Synapse.`
    },
    {
        role: "Software Engineer Intern",
        company: "Ministry of Electronics & IT, Govt. of India",
        period: "June 2019 - Sept 2019",
        desc: "Developed full-stack applications using HTML, CSS, JavaScript, and Spring Boot.",
        details: "Worked on the frontend design of the company website using jQuery, HTML, JS, CSS for the same. Worked on the backend system of the website by populating the data from the backend to the frontend using Java, JSP and Servlets for the same"
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