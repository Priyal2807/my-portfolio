import React from 'react';

const skillCategories = [
    {
        title: "Programming Languages & Frameworks",
        skills: ["C#", ".NET", "JavaScript", "Java", "React", "SQL", "Python", "HTML", "CSS"]
    },// Inside Skills.jsx, update the Cloud & Tools entry to be more organized
    {
        title: "Azure Cloud & Integration",
        skills: ["Data Factory", "Logic apps", "Service Bus", "Event Hub", "Event Grid", "API Management", "Function App", "On Premises Data Gateway"],
        featured: true // We can use this flag for styling
    },
    {
        title: "Observability & Infrastructure",
        skills: ["Azure Application Insights", "Azure Log Analytics", "KQL", "Azure Key Vault", "Azure Bicep", "Kubernetes", "Storage Account"],
    },
    {
        title: "Database Management",
        skills: ["Microsoft SQL Server", "Oracle", "MongoDB"]
    },
    {
        title: "Project Management Tools",
        skills: ["JIRA", "Confluence", "ServiceNow", "Azure DevOps", "GitHub"]
    },
    {
        title: "CI/CD & DevOps Tools",
        skills: ["Azure DevOps Pipelines", "GitHub Actions", "Git"]
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