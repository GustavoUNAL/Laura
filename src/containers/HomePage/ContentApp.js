import React, { useEffect } from 'react';
import './ContentApp.css';
import { Navigate } from "react-router-dom";
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import Background from '../../components/Background/Background';
import profile from '../../img/profile.jpeg';
import profile3 from '../../img/profile3.jpeg';

function ContentApp() {
    const handleWhatsAppContact = (projectName) => {
        const message = `Hola Gustavo! Me interesa tu proyecto: ${projectName}. Quiero contactar contigo para más información.`;
        const whatsappUrl = `https://wa.me/573001234567?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleProjectView = (projectName) => {
        // Aquí puedes agregar lógica para ver más detalles del proyecto
        console.log(`Ver proyecto: ${projectName}`);
    };

    return (
        <>
            <Navbar />
            <div className="container">

                <div id="about" className="about">
                    <div className="flex-container">
                        <div className='img_profile'>
                            <img src={profile3} className="profile-image" alt="Profile"></img>
                        </div>
                    </div>
                    <div className="flex-container">
                        <div className="about_class" >
                            <h1 className="title">GUSTAVO ARTEAGA</h1>
                            <div id="recent-projects" className="titular">
                                <p>Sistemas energéticos | Ciencia de datos | Desarrollo de software</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="featured-projects">
                    <h2>Proyectos Destacados</h2>
                    <div className="featured-projects-grid">
                        <div className="featured-project-card">
                            <div className="project-icon">☀️🏗️</div>
                            <h3 className="project-title">Microrred 360</h3>
                            <p className="project-description">
                                Sistema inteligente para estimar el potencial energético fotovoltaico de microrredes. 
                                Integra análisis técnico-económico con datos geográficos específicos.
                            </p>
                            <div className="project-highlights">
                                <div className="project-highlight">Premio a la Innovación 2023 Colombia Inteligente</div>
                                <div className="project-highlight">Desarrollado con GERS SAS Colombia</div>
                                <div className="project-highlight">Análisis técnico-económico integral</div>
                            </div>
                            <div className="project-actions">
                                <button 
                                    className="project-btn primary-btn"
                                    onClick={() => handleWhatsAppContact("Microrred 360")}
                                >
                                    Contactar
                                </button>
                                <button 
                                    className="project-btn secondary-btn"
                                    onClick={() => handleProjectView("Microrred 360")}
                                >
                                    Ver más
                                </button>
                            </div>
                        </div>

                        <div className="featured-project-card">
                            <div className="project-icon">⚡🔒</div>
                            <h3 className="project-title">Protecciones Inteligentes</h3>
                            <p className="project-description">
                                Sistema de protección adaptativa con curvas de sobrecorriente personalizadas. 
                                Coordinación automática de protecciones en sistemas de potencia complejos.
                            </p>
                            <div className="project-highlights">
                                <div className="project-highlight">Coordinación adaptativa automática</div>
                                <div className="project-highlight">Curvas de sobrecorriente personalizadas</div>
                                <div className="project-highlight">Detección inteligente de fallas</div>
                            </div>
                            <div className="project-actions">
                                <button 
                                    className="project-btn primary-btn"
                                    onClick={() => handleWhatsAppContact("Protecciones Inteligentes")}
                                >
                                    Contactar
                                </button>
                                <button 
                                    className="project-btn secondary-btn"
                                    onClick={() => handleProjectView("Protecciones Inteligentes")}
                                >
                                    Ver más
                                </button>
                            </div>
                        </div>

                        <div className="featured-project-card">
                            <div className="project-icon">🎨🌋</div>
                            <h3 className="project-title">Visualización 3D - Volcán Galeras</h3>
                            <p className="project-description">
                                Proyecto holográfico y de visualización 3D del volcán Galeras en erupción. 
                                Aplicación de tecnologías inmersivas para estudios geológicos y educativos.
                            </p>
                            <div className="project-highlights">
                                <div className="project-highlight">Visualización holográfica avanzada</div>
                                <div className="project-highlight">Modelado 3D científico</div>
                                <div className="project-highlight">Aplicaciones educativas</div>
                            </div>
                            <div className="project-actions">
                                <button 
                                    className="project-btn primary-btn"
                                    onClick={() => handleWhatsAppContact("Visualización 3D - Volcán Galeras")}
                                >
                                    Contactar
                                </button>
                                <button 
                                    className="project-btn secondary-btn"
                                    onClick={() => handleProjectView("Visualización 3D - Volcán Galeras")}
                                >
                                    Ver más
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <Background />

            </div>
            <Footer />
        </>
    )
}

export default ContentApp