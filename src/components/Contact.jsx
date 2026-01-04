import React from 'react';

function Contact() {
    const contactLinks = [
        {
            label: "Email",
            value: "priyalsobti@gmail.com",
            url: "mailto:priyalsobti@gmail.com",
            icon: "📧"
        },
        {
            label: "LinkedIn",
            value: "linkedin.com/in/priyal287",
            url: "https://linkedin.com/in/priyal287",
            icon: "🔗"
        },
        {
            label: "Medium",
            value: "medium.com/@priyalsobti",
            url: "https://medium.com/@priyalsobti",
            icon: "📝"
        }
    ];

    return (
        <section className="contact-section" id="contact">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-container">
                <div className="contact-glass-card">
                    <p className="contact-intro">
                        I'm always open to discussing new research opportunities,
                        full-stack projects, or technical collaborations.
                    </p>
                    <div className="contact-links">
                        {contactLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-item"
                            >
                                <span className="contact-icon">{link.icon}</span>
                                <div className="contact-info">
                                    <span className="contact-label">{link.label}</span>
                                    <span className="contact-value">{link.value}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <footer className="simple-footer">
                <p>© 2026 Priyal Sobti • Built with React & Vite</p>
            </footer>
        </section>
    );
}

export default Contact;