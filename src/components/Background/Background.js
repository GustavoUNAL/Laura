import React from 'react';
import './Background.css';

const Background = () => {

    const handleWhatsAppContact = () => {
        const phoneNumber = '+573134593201';
        const message = 'Hola, me gustaría obtener más información sobre los servicios de GRAP Ingeniería.';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const experiences = [
        {
            icon: '☀️🏗️',
            value: '+120 kW',
            title: 'De energía solar instalada',
            description: 'Instalaciones solares completas en diferentes proyectos'
        },
        {
            icon: '💻📱',
            value: '7',
            title: 'Desarrollos de Software',
            description: 'a la medida.'
        },
        {
            icon: '🐸👷',
            value: '2 MW',
            title: 'Diseñados',
            description: 'Perfil ingeniería granja solar y PCH.'
        }
    ];

    return (
        <section className="experience-section">
            <div className="container">
                {/* Título principal */}
                <div className="text-center mb-16">
                    <h2 className="experience-title">EXPERIENCIA</h2>
                </div>
                
                {/* Grid de tres columnas */}
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
                <div className="text-center mb-16">
                    <button
                        onClick={handleWhatsAppContact}
                        className="contact-button"
                    >
                        <span>Contactanos</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Background; 