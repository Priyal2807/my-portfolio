import React from 'react';
import pubimage from '../assets/pub-image.jpg';

const publications = [
    {
        title: "Time Series Forecasting for Coronavirus (COVID-19)",
        journal: "SPRINGER FTNCT 2020",
        link: "https://link.springer.com/chapter/10.1007/978-981-16-1480-4_27",
        image: pubimage
    },
    {
        title: "Scene detection and recognition by analysing deep features using PlacesCNN",
        journal: "ACM MAURICON ICONIC 2020",
        link: "https://dl.acm.org/doi/abs/10.1145/3415088.3415091",
        image: pubimage
    },
    {
        title: "EnsemV3X: a novel ensembled deep learning architecture for multi-label scene classification",
        journal: "PeerJ Computer Science",
        link: "https://peerj.com/articles/cs-557",
        image: pubimage
    }
];


function Research() {
    return (
        <section className="section" id="publications">
            <h2 className="section-title">Publications & Research</h2>
            <div className="pub-grid">
                {publications.map((pub, idx) => (
                    <a href={pub.link} key={idx} className="pub-card-link" target="_blank" rel="noopener noreferrer">
                        <div className="pub-card">
                            <div
                                className="pub-image"
                                style={{ backgroundImage: `url(${pub.image})` }}
                            ></div>
                            <div className="pub-content">
                                <span className="pub-journal">{pub.journal}</span>
                                <h3>{pub.title}</h3>
                                <span className="read-more">Read Paper →</span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Research;