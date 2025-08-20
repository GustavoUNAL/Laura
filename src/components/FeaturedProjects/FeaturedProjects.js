import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FeaturedProjects.css';

const FeaturedProjects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const projects = [
        {
            title: "E-commerce Platform",
            description: "Plataforma completa de comercio electrónico con gestión de inventario, pagos y análisis de ventas.",
            icon: "🛒",
            highlights: ["React", "Node.js", "MongoDB", "Stripe"]
        },
        {
            title: "Task Management App",
            description: "Aplicación de gestión de tareas con colaboración en tiempo real y notificaciones push.",
            icon: "✅",
            highlights: ["Vue.js", "Firebase", "PWA", "Real-time"]
        },
        {
            title: "Portfolio Website",
            description: "Sitio web personal con diseño responsive y animaciones fluidas para mostrar proyectos.",
            icon: "🎨",
            highlights: ["HTML5", "CSS3", "JavaScript", "GSAP"]
        },
        {
            title: "Weather Dashboard",
            description: "Dashboard meteorológico con mapas interactivos y pronósticos detallados.",
            icon: "🌤️",
            highlights: ["React", "D3.js", "Weather API", "Charts"]
        },
        {
            title: "Fitness Tracker",
            description: "Aplicación de seguimiento de fitness con métricas personalizadas y objetivos.",
            icon: "💪",
            highlights: ["React Native", "Redux", "HealthKit", "Analytics"]
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
        window.location.href = `mailto:gustavo@example.com?subject=${subject}&body=${body}`;
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
                <p>Descubre mis trabajos más recientes y creativos</p>
            </div>
            
            <div className="project-carousel">
                <div className="projects-grid">
                    {visibleProjects.map((project, index) => (
                        <div key={currentIndex + index} className="project-card">
                            <div className="project-icon">
                                {project.icon}
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