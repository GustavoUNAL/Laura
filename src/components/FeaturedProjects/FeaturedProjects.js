import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FeaturedProjects.css';

function FeaturedProjects() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const projects = [
        {
            title: "Microrred 360",
            description: "Sistema inteligente para estimar el potencial energético fotovoltaico de microrredes. Integra análisis técnico-económico con datos geográficos específicos.",
            icon: "⚡",
            highlights: ["Machine Learning", "Análisis de Datos", "Sistemas Energéticos"]
        },
        {
            title: "Sistema Fotovoltaico 70 kW",
            description: "Instalación solar completa de 70 kW para empresa industrial. Diseño, implementación y monitoreo del sistema.",
            icon: "☀️",
            highlights: ["Energía Solar", "Autocad", "Monitoreo SCADA"]
        },
        {
            title: "Protecciones Adaptativas",
            description: "Sistema de protección inteligente con curvas de sobrecorriente personalizadas y coordinación automática.",
            icon: "🔌",
            highlights: ["MATLAB", "Simulink", "Protecciones"]
        },
        {
            title: "Control de Microrredes con IA",
            description: "Aplicación de inteligencia artificial para el control de frecuencia y estabilidad en microrredes.",
            icon: "🤖",
            highlights: ["Python", "TensorFlow", "Control"]
        },
        {
            title: "Blessing SAS - Sistema Corporativo",
            description: "Desarrollo de software empresarial a la medida para gestión integral de operaciones.",
            icon: "💻",
            highlights: ["React", "Node.js", "PostgreSQL"]
        },
        {
            title: "Gemelo Digital - Sistema Energético",
            description: "Modelo virtual de sistema energético para simulación y análisis predictivo.",
            icon: "🎯",
            highlights: ["Unity", "C#", "Simulación"]
        }
    ];

    const nextProjects = () => {
        setCurrentIndex((prevIndex) => {
            const maxIndex = projects.length - 3;
            return prevIndex >= maxIndex ? 0 : prevIndex + 1;
        });
    };

    const prevProjects = () => {
        setCurrentIndex((prevIndex) => {
            const maxIndex = projects.length - 3;
            return prevIndex <= 0 ? maxIndex : prevIndex - 1;
        });
    };

    const handleEmailContact = (projectName) => {
        const subject = `Interés en proyecto: ${projectName}`;
        const body = `Hola Gustavo,\n\nMe interesa tu proyecto: ${projectName}.\n\nQuiero contactar contigo para más información.\n\nSaludos cordiales.`;
        const mailtoUrl = `mailto:gustavoarteaga0508@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoUrl;
    };

    const visibleProjects = projects.slice(currentIndex, currentIndex + 3);

    return (
        <div className="featured-projects">
            <div className="projects-header">
                <h2>Proyectos</h2>
                <p>Algunos de mis proyectos más destacados en sistemas energéticos y desarrollo de software</p>
            </div>
            
            <div className="project-carousel">
                <button className="nav-arrow prev-arrow" onClick={prevProjects}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                    </svg>
                </button>
                
                <div className="projects-grid">
                    {visibleProjects.map((project, index) => (
                        <div key={currentIndex + index} className="project-card">
                            <div className="project-icon">{project.icon}</div>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-highlights">
                                {project.highlights.map((highlight, highlightIndex) => (
                                    <span key={highlightIndex} className="project-highlight">{highlight}</span>
                                ))}
                            </div>
                            <div className="project-actions">
                                <button 
                                    className="project-btn primary-btn"
                                    onClick={() => handleEmailContact(project.title)}
                                >
                                    Contactar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                
                <button className="nav-arrow next-arrow" onClick={nextProjects}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                    </svg>
                </button>
            </div>
            
            <div className="carousel-indicators">
                {Array.from({ length: Math.ceil(projects.length / 3) }, (_, index) => (
                    <button
                        key={index}
                        className={`indicator ${Math.floor(currentIndex / 3) === index ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index * 3)}
                    />
                ))}
            </div>
            
            <div className="view-more-section">
                <Link to="/projects" className="view-more-btn">
                    Ver más proyectos
                    <svg className="arrow-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                    </svg>
                </Link>
            </div>
        </div>
    );
}

export default FeaturedProjects; 