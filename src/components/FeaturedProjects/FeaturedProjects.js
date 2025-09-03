import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FeaturedProjects.css';

// Project icons are now emojis only

const FeaturedProjects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const projects = [
        {
            title: "SFV CIDTCA SOLAR – 70,11 kWp",
            description: "Sistema fotovoltaico de 114 módulos Jinko Solar (615 Wp) sobre cubierta metálica, con inversor trifásico Huawei SUN2000-80K-MGL0. Cubre hasta el 80% de la demanda energética del Centro de Investigación y Desarrollo Tecnológico en Ciencias Aplicadas.",
            icon: "☀️",
            highlights: ["70.11 kWp", "114 Módulos", "Huawei Inversor", "RETIE", "CEDENAR"]
        },
        {
            title: "VLESIM Energy – Plataforma de Confiabilidad",
            description: "Plataforma web para analizar y gestionar la confiabilidad en sistemas eléctricos de potencia. Permite simulación de fallas, análisis de riesgo e integración de métricas de confiabilidad y disponibilidad.",
            icon: "⚡",
            highlights: ["Web Platform", "Análisis de Riesgo", "Simulación", "Reportes Técnicos", "SCADA"]
        },
        {
            title: "Gateway Virtual DNP3 – VLESIM SAS",
            description: "Plataforma middleware para conversión de datos en texto plano (JSON) a formato DNP3 para integración con sistemas SCADA. Garantiza interoperabilidad y comunicación confiable en entornos industriales.",
            icon: "🔗",
            highlights: ["DNP3", "Middleware", "SCADA", "JSON", "Industrial"]
        },
        {
            title: "SFV Comercial – 11.16 kWp",
            description: "Sistema de 18 módulos Jinko Solar de 620 W y 5 microinversores APSYSTEMS DS3D. Incluye protecciones AC/DC, puesta a tierra e integración a la red de distribución con certificación RETIE aprobada.",
            icon: "🏢",
            highlights: ["11.16 kWp", "18 Módulos", "Microinversores", "RETIE", "Comercial"]
        },
        {
            title: "Experiencias VR STEAM – Oculus Quest 3",
            description: "Diseño de experiencias en realidad virtual con enfoque pedagógico para fomentar habilidades STEAM en edad temprana. Entornos interactivos en Unity con gamificación y aprendizaje integrado.",
            icon: "🥽",
            highlights: ["VR", "Unity", "STEAM", "Gamificación", "Educación"]
        },
        {
            title: "PCH de 1 MW – Perfil de Ingeniería",
            description: "Estudio preliminar y perfil de ingeniería para una Pequeña Central Hidroeléctrica de 1 MW. Incluye estudios topográficos, hidráulicos, estimaciones de caudal y análisis de factibilidad económica.",
            icon: "🌊",
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



    const visibleProjects = isMobile 
        ? [projects[currentIndex]]
        : projects.slice(currentIndex, currentIndex + 3);

    // Progreso de paginación basado en los pasos reales (1 en mobile, 3 en desktop)
    const visibleCount = isMobile ? 1 : 3;
    const totalSteps = Math.max(1, projects.length - visibleCount + 1);

    const renderPagination = () => {
        return (
            <div className="pagination-progress">
                <div 
                    className="pagination-progress-bar" 
                    style={{ width: `${(Math.min(currentIndex + 1, totalSteps) / totalSteps) * 100}%` }}
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
                <div className="carousel-row">
                    <div className="projects-grid">
                        {visibleProjects.map((project, index) => (
                            <div key={currentIndex + index} className="project-card">
                                <div className="project-icon">
                                    {project.icon}
                                </div>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom controls: arrows + pagination */}
            <div className="bottom-controls">
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
                <div className="carousel-progress">
                    {renderPagination()}
                </div>
                <button 
                    className="nav-arrow next-arrow" 
                    onClick={nextProjects}
                    disabled={isMobile ? currentIndex === projects.length - 1 : currentIndex >= projects.length - 2}
                    aria-label="Proyecto siguiente"
                >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                    </svg>
                </button>
            </div>

            {/* View more button below */}
            <div className="view-more-section">
                <Link to="/projects" className="view-more-btn">Ver todos los proyectos</Link>
            </div>
        </div>
    );
}

export default FeaturedProjects;
