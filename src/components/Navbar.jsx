import React, { useState, useEffect } from 'react';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    // Changes navbar background when user scrolls down
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-logo">PORTFOLIO</div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#work">Experience</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#publications">Research</a></li>
                <li><a href="#certifications">Certs</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;