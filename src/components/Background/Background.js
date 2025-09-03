import React, { useState, useEffect } from 'react';
import './Background.css';

const Background = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const experiences = [
        {
            icon: '☀️',
            value: '+162 kW',
            title: 'De energía solar instalada',
            description: 'Instalaciones solares completas en diferentes proyectos'
        },
        {
            icon: '💻',
            value: '+13',
            title: 'Desarrollos de Software',
            description: 'a la medida.'
        },
        {
            icon: '👷',
            value: '1+ MW',
            title: 'Diseñados',
            description: 'Perfil ingeniería granja solar y PCH.'
        }
    ];

    // Detectar si es móvil
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Auto-scroll del carrusel en móviles
    useEffect(() => {
        if (!isMobile) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % experiences.length);
        }, 3000); // Cambia cada 3 segundos

        return () => clearInterval(interval);
    }, [isMobile, experiences.length]);

    return (
        <section className="experience-section">
            <div className="container">
                {/* Encabezado al estilo de Tecnologías */}
                <div className="experience-header">
                    <h2>Experiencia</h2>
                    <p>Trayectoria y logros en energía y desarrollo de software</p>
                </div>
                
                {/* Desktop: Grid de tres columnas */}
                {!isMobile && (
                    <div className="experience-grid">
                        {experiences.map((exp, index) => (
                            <div key={index} className="experience-column">
                                {/* Ícono circular */}
                                <div className="experience-icon">
                                    <span className="icon-text">{exp.icon}</span>
                                </div>
                                
                                {/* Valor numérico */}
                                <div className="experience-value">
                                    {exp.value}
                                </div>
                                
                                {/* Título */}
                                <div className="experience-title-text">
                                    {exp.title}
                                </div>
                                
                                {/* Descripción */}
                                <div className="experience-description">
                                    {exp.description}
                                </div>
                                
                                {/* Línea divisoria vertical (excepto para la última columna) */}
                                {index < experiences.length - 1 && (
                                    <div className="vertical-divider"></div>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* Mobile: Carrusel futurista */}
                {isMobile && (
                    <div className="experience-carousel-futuristic">
                        {experiences.map((exp, index) => (
                            <div 
                                key={index} 
                                className={`futuristic-slide ${index === currentSlide ? 'active' : ''}`}
                            >
                                {/* Efecto de fondo futurista */}
                                <div className="futuristic-bg"></div>
                                
                                {/* Ícono circular con efectos */}
                                <div className="experience-icon-futuristic">
                                    <div className="icon-glow"></div>
                                    <span className="icon-text">{exp.icon}</span>
                                </div>
                                
                                {/* Valor numérico con animación */}
                                <div className="experience-value-futuristic">
                                    {exp.value}
                                </div>
                                
                                {/* Título con efecto de escritura */}
                                <div className="experience-title-futuristic">
                                    {exp.title}
                                </div>
                                
                                {/* Descripción con fade */}
                                <div className="experience-description-futuristic">
                                    {exp.description}
                                </div>
                                
                                {/* Líneas de conexión futuristas */}
                                <div className="connection-lines">
                                    <div className="line line-1"></div>
                                    <div className="line line-2"></div>
                                    <div className="line line-3"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Background; 