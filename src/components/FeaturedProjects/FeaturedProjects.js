import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FeaturedProjects.css';

// Import project cover images
import solarCidtca from '../../img/projects/solar-cidtca.svg';
import vlesimEnergy from '../../img/projects/vlesim-energy.svg';
import dnp3Gateway from '../../img/projects/dnp3-gateway.svg';
import solarCommercial from '../../img/projects/solar-commercial.svg';
import vrSteam from '../../img/projects/vr-steam.svg';
import hydroelectric from '../../img/projects/hydroelectric.svg';

const FeaturedProjects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const projects = [
        {
            title: "SFV CIDTCA SOLAR – 70,11 kWp",
            description: "Sistema fotovoltaico de 114 módulos Jinko Solar (615 Wp) sobre cubierta metálica, con inversor trifásico Huawei SUN2000-80K-MGL0. Cubre hasta el 80% de la demanda energética del Centro de Investigación y Desarrollo Tecnológico en Ciencias Aplicadas.",
            icon: "☀️",
            image: solarCidtca,
            highlights: ["70.11 kWp", "114 Módulos", "Huawei Inversor", "RETIE", "CEDENAR"]
        },
        {
            title: "VLESIM Energy – Plataforma de Confiabilidad",
            description: "Plataforma web para analizar y gestionar la confiabilidad en sistemas eléctricos de potencia. Permite simulación de fallas, análisis de riesgo e integración de métricas de confiabilidad y disponibilidad.",
            icon: "⚡",
            image: vlesimEnergy,
            highlights: ["Web Platform", "Análisis de Riesgo", "Simulación", "Reportes Técnicos", "SCADA"]
        },
        {
            title: "Gateway Virtual DNP3 – VLESIM SAS",
            description: "Plataforma middleware para conversión de datos en texto plano (JSON) a formato DNP3 para integración con sistemas SCADA. Garantiza interoperabilidad y comunicación confiable en entornos industriales.",
            icon: "🔗",
            image: dnp3Gateway,
            highlights: ["DNP3", "Middleware", "SCADA", "JSON", "Industrial"]
        },
        {
            title: "SFV Comercial – 11.16 kWp",
            description: "Sistema de 18 módulos Jinko Solar de 620 W y 5 microinversores APSYSTEMS DS3D. Incluye protecciones AC/DC, puesta a tierra e integración a la red de distribución con certificación RETIE aprobada.",
            icon: "🏢",
            image: solarCommercial,
            highlights: ["11.16 kWp", "18 Módulos", "Microinversores", "RETIE", "Comercial"]
        },
        {
            title: "Experiencias VR STEAM – Oculus Quest 3",
            description: "Diseño de experiencias en realidad virtual con enfoque pedagógico para fomentar habilidades STEAM en edad temprana. Entornos interactivos en Unity con gamificación y aprendizaje integrado.",
            icon: "🥽",
            image: vrSteam,
            highlights: ["VR", "Unity", "STEAM", "Gamificación", "Educación"]
        },
        {
            title: "PCH de 1 MW – Perfil de Ingeniería",
            description: "Estudio preliminar y perfil de ingeniería para una Pequeña Central Hidroeléctrica de 1 MW. Incluye estudios topográficos, hidráulicos, estimaciones de caudal y análisis de factibilidad económica.",
            icon: "🌊",
            image: hydroelectric,
            highlights: ["1 MW", "Hidroeléctrica", "Topografía", "Factibilidad", "Energía"]
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

    const nextProjects = () => {
        if (isMobile) {
            setCurrentIndex(prev => prev < projects.length - 1 ? prev + 1 : prev);
        } else {
            setCurrentIndex(prev => prev < projects.length - 3 ? prev + 1 : prev);
        }
    };

    const prevProjects = () => {
        setCurrentIndex(prev => prev > 0 ? prev - 1 : prev);
    };

    const handleEmailContact = (projectTitle) => {
        const subject = encodeURIComponent(`Consulta sobre proyecto: ${projectTitle}`);
        const body = encodeURIComponent(`Hola Gustavo,\n\nMe interesa tu proyecto "${projectTitle}". ¿Podrías contarme más detalles?\n\nSaludos,`);
        window.location.href = `mailto:gustavoarteaga0508@gmail.com?subject=${subject}&body=${body}`;
    };

    const visibleProjects = isMobile 
        ? [projects[currentIndex]]
        : projects.slice(currentIndex, currentIndex + 3);

    // Solo mostrar paginación en móviles
    const totalPages = projects.length;

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
        <div className="featured-projects">
            <div className="projects-header">
                <h2>Proyectos Destacados</h2>
                <p>Descubre mis trabajos más recientes en energía renovable y desarrollo tecnológico</p>
            </div>
            
            <div className="project-carousel">
                <div className="projects-grid">
                    {visibleProjects.map((project, index) => (
                        <div key={currentIndex + index} className="project-card">
                            <div className="project-cover">
                                <img src={project.image} alt={project.title} className="project-cover-image" />
                                <div className="project-icon-overlay">
                                    {project.icon}
                                </div>
                            </div>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-highlight">{project.highlights.map((highlight, highlightIndex) => (
                                <span key={highlightIndex} className="project-highlight">{highlight}</span>
                            ))}</div>
                            <div className="project-actions">
                                <button 
                                    className="project-btn primary-btn"
                                    onClick={() => handleEmailContact(project.title)}
                                    aria-label={`Contactar sobre ${project.title}`}
                                >
                                    Contactar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* New Mobile Navigation Container */}
                <div className="mobile-nav-container">
                    <button 
                        className="nav-arrow prev-arrow" 
                        onClick={prevProjects}
                        disabled={currentIndex === 0}
                        aria-label="Proyecto anterior"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                        </svg>
                    </button>
                    
                    {/* Mobile Pagination - Now in the middle */}
                    <div className="mobile-pagination">
                        <div className="pagination-info">
                            <span className="pagination-text">Proyecto</span>
                            <span className="pagination-counter">{currentIndex + 1} de {totalPages}</span>
                        </div>
                        
                        {renderPagination()}
                    </div>
                    
                    <button 
                        className="nav-arrow next-arrow" 
                        onClick={nextProjects}
                        disabled={isMobile ? currentIndex === projects.length - 1 : currentIndex >= projects.length - 3}
                        aria-label="Proyecto siguiente"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                        </svg>
                    </button>
                </div>
            </div>
            
            <div className="view-more-section">
                <Link to="/projects" className="view-more-btn">
                    Ver todos los proyectos
                </Link>
            </div>
        </div>
    );
}

export default FeaturedProjects;
