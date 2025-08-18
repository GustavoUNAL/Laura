// AboutPage/About.js
import React from 'react';
import './About.css';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import profile3 from '../../img/profile3.jpeg';

function About() {
    return (
        <>
            <Navbar />
            <div className="about-page">
                <div className="about-header">
                    <h1>Acerca de Mí</h1>
                </div>
                
                <div className="about-content">
                    <div className="profile-section">
                        <img src={profile3} className="profile-image" alt="Gustavo Arteaga" />
                    </div>
                    
                    <div className="about-text">
                        <h2>GUSTAVO ARTEAGA</h2>
                        <p className="subtitle">Ingeniero apasionado por la innovación en sistemas energéticos y desarrollo de software</p>
                        
                        <div className="about-description">
                            <p>
                                Soy un ingeniero con amplia experiencia en sistemas energéticos, especializado en microrredes, 
                                protecciones inteligentes y control avanzado de sistemas de potencia. Mi pasión por la tecnología 
                                me ha llevado a desarrollar soluciones innovadoras que combinan la ingeniería tradicional con 
                                las últimas tecnologías digitales.
                            </p>
                            
                            <p>
                                Con más de 7 años de experiencia en el sector energético, he liderado proyectos que incluyen 
                                la instalación de más de 120 kW de energía solar, el desarrollo de aplicaciones industriales 
                                a la medida, y la implementación de sistemas de protección inteligentes para infraestructura crítica.
                            </p>
                            
                            <p>
                                Mi enfoque se centra en la aplicación de inteligencia artificial y tecnologías inmersivas 
                                para resolver desafíos complejos en el sector energético, siempre buscando la excelencia 
                                técnica y la innovación sostenible.
                            </p>
                        </div>
                        
                        <div className="skills-section">
                            <h3>Áreas de Especialización</h3>
                            <div className="skills-grid">
                                <div className="skill-item">
                                    <span className="skill-icon">⚡</span>
                                    <span className="skill-text">Sistemas de Potencia</span>
                                </div>
                                <div className="skill-item">
                                    <span className="skill-icon">☀️</span>
                                    <span className="skill-text">Energía Renovable</span>
                                </div>
                                <div className="skill-item">
                                    <span className="skill-icon">💻</span>
                                    <span className="skill-text">Desarrollo de Software</span>
                                </div>
                                <div className="skill-item">
                                    <span className="skill-icon">🤖</span>
                                    <span className="skill-text">Inteligencia Artificial</span>
                                </div>
                                <div className="skill-item">
                                    <span className="skill-icon">🎨</span>
                                    <span className="skill-text">Tecnologías Inmersivas</span>
                                </div>
                                <div className="skill-item">
                                    <span className="skill-icon">🔬</span>
                                    <span className="skill-text">Investigación</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;