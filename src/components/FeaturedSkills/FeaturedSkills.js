import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../FeaturedProjects/FeaturedProjects.css';

const FeaturedSkills = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const skills = [
        {
            title: "Desarrollo de Software",
            description: "Plataformas web, middleware industrial y aplicaciones VR. Desarrollo de soluciones tecnológicas para el sector energético y educativo.",
            icon: "💻"
        },
        {
            title: "Ingeniería Eléctrica",
            description: "Diseño de sistemas eléctricos de potencia, protecciones adaptativas y análisis de confiabilidad. Especialización en transformadores y coordinación de protecciones.",
            icon: "🔌"
        },
        {
            title: "Investigación & Innovación",
            description: "Investigación académica en eficiencia energética, automatización y digitalización. Desarrollo de gemelos digitales y plataformas educativas STEAM.",
            icon: "🔬"
        }
    ];

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const next = () => {
        if (isMobile) {
            setCurrentIndex(prev => prev < skills.length - 1 ? prev + 1 : prev);
        } else {
            setCurrentIndex(prev => prev < skills.length - 3 ? prev + 1 : prev);
        }
    };

    const prev = () => {
        setCurrentIndex(prev => prev > 0 ? prev - 1 : prev);
    };

    const visibleItems = isMobile 
        ? [skills[currentIndex]]
        : skills.slice(currentIndex, currentIndex + 3);

    const visibleCount = isMobile ? 1 : 3;
    const totalSteps = Math.max(1, skills.length - visibleCount + 1);

    const renderPagination = () => (
        <div className="pagination-progress">
            <div 
                className="pagination-progress-bar" 
                style={{ width: `${(Math.min(currentIndex + 1, totalSteps) / totalSteps) * 100}%` }}
            />
        </div>
    );

    return (
        <div className="featured-projects">
            <div className="projects-header">
                <h2>Skills y Especializaciones</h2>
                <p>Especializaciones técnicas en energías renovables, desarrollo de software e ingeniería eléctrica</p>
            </div>

            <div className="project-carousel">
                <div className="carousel-row">
                    <div className="projects-grid">
                        {visibleItems.map((item, index) => (
                            <div key={currentIndex + index} className="project-card">
                                <div className="project-icon">{item.icon}</div>
                                <h3 className="project-title">{item.title}</h3>
                                <p className="project-description">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bottom-controls">
                <button 
                    className="nav-arrow prev-arrow" 
                    onClick={prev}
                    disabled={currentIndex === 0}
                    aria-label="Anterior"
                >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                    </svg>
                </button>
                <div className="carousel-progress">
                    {renderPagination()}
                </div>
                <button 
                    className="nav-arrow next-arrow" 
                    onClick={next}
                    disabled={isMobile ? currentIndex === skills.length - 1 : currentIndex >= skills.length - 2}
                    aria-label="Siguiente"
                >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                    </svg>
                </button>
            </div>

            <div className="view-more-section">
                <a href="mailto:gustavoarteaga0508@gmail.com" className="view-more-btn">Contactar</a>
            </div>
        </div>
    );
};

export default FeaturedSkills;
