import React, { useState, useEffect } from 'react';
import './Technologies.css';

const Technologies = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const technologies = [
        {
            title: "Energías Renovables",
            description: "Especialización en sistemas fotovoltaicos, hidroeléctricos y microrredes. Diseño, implementación y certificación RETIE de proyectos de generación distribuida.",
            icon: "⚡",
            highlights: ["Sistemas FV", "Hidroeléctricas", "Microrredes", "RETIE", "CEDENAR"]
        },
        {
            title: "Desarrollo de Software",
            description: "Plataformas web, middleware industrial y aplicaciones VR. Desarrollo de soluciones tecnológicas para el sector energético y educativo.",
            icon: "💻",
            highlights: ["React", "Unity", "AWS", "DNP3", "SCADA"]
        },
        {
            title: "Ingeniería Eléctrica",
            description: "Diseño de sistemas eléctricos de potencia, protecciones adaptativas y análisis de confiabilidad. Especialización en transformadores y coordinación de protecciones.",
            icon: "🔌",
            highlights: ["Sistemas de Potencia", "Protecciones", "Transformadores", "NEPLAN", "Análisis"]
        },
        {
            title: "Investigación & Innovación",
            description: "Investigación académica en eficiencia energética, automatización y digitalización. Desarrollo de gemelos digitales y plataformas educativas STEAM.",
            icon: "🔬",
            highlights: ["Investigación", "STEAM", "Gemelos Digitales", "LMS", "VR/AR"]
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

    const nextTechnologies = () => {
        if (isMobile) {
            setCurrentIndex(prev => prev < technologies.length - 1 ? prev + 1 : prev);
        } else {
            setCurrentIndex(prev => prev < technologies.length - 3 ? prev + 1 : prev);
        }
    };

    const prevTechnologies = () => {
        setCurrentIndex(prev => prev > 0 ? prev - 1 : prev);
    };

    const handleEmailContact = (techTitle) => {
        const subject = encodeURIComponent(`Consulta sobre tecnología: ${techTitle}`);
        const body = encodeURIComponent(`Hola Gustavo,\n\nMe interesa tu experiencia en "${techTitle}". ¿Podrías contarme más detalles?\n\nSaludos,`);
        window.location.href = `mailto:gustavoarteaga0508@gmail.com?subject=${subject}&body=${body}`;
    };

    const visibleTechnologies = isMobile 
        ? [technologies[currentIndex]]
        : technologies.slice(currentIndex, currentIndex + 3);

    // Solo mostrar paginación en móviles
    const totalPages = technologies.length;

    const renderPagination = () => {
        return (
            <div className="pagination-progress">
                <div 
                    className="pagination-progress-bar" 
                    style={{ width: `${((currentIndex + 1) / totalPages) * 100}%` }}
                />
            </div>
        );
    };

    return (
        <div className="featured-technologies">
            <div className="technologies-header">
                <h2>Tecnologías</h2>
                <p>Especializaciones técnicas en energías renovables, desarrollo de software e ingeniería eléctrica</p>
            </div>
            
            <div className="technology-carousel">
                <div className="technologies-grid">
                    {visibleTechnologies.map((technology, index) => (
                        <div key={currentIndex + index} className="technology-card">
                            <div className="technology-icon">
                                {technology.icon}
                            </div>
                            <h3 className="technology-title">{technology.title}</h3>
                            <p className="technology-description">{technology.description}</p>
                            <div className="technology-highlight">{technology.highlights.map((highlight, highlightIndex) => (
                                <span key={highlightIndex} className="technology-highlight">{highlight}</span>
                            ))}</div>
                            <div className="technology-actions">
                                <button 
                                    className="technology-btn primary-btn"
                                    onClick={() => handleEmailContact(technology.title)}
                                    aria-label={`Contactar sobre ${technology.title}`}
                                >
                                    Contactar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Mobile Navigation Container */}
                <div className="mobile-nav-container">
                    <button 
                        className="nav-arrow prev-arrow" 
                        onClick={prevTechnologies}
                        disabled={currentIndex === 0}
                        aria-label="Tecnología anterior"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                        </svg>
                    </button>
                    
                    {/* Mobile Pagination - Now in the middle */}
                    <div className="mobile-pagination">
                        <div className="pagination-info">
                            <span className="pagination-text">Tecnología</span>
                            <span className="pagination-counter">{currentIndex + 1} de {totalPages}</span>
                        </div>
                        
                        {renderPagination()}
                    </div>
                    
                    <button 
                        className="nav-arrow next-arrow" 
                        onClick={nextTechnologies}
                        disabled={isMobile ? currentIndex === technologies.length - 1 : currentIndex >= technologies.length - 3}
                        aria-label="Tecnología siguiente"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                        </svg>
                    </button>
                </div>
            </div>
            
            <div className="view-more-section">
                <a href="#about" className="view-more-btn">
                    Ver más sobre mí
                </a>
            </div>
        </div>
    );
}

export default Technologies;
