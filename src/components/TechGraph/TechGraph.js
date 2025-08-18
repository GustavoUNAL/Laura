import React from 'react';
import './TechGraph.css';

function TechGraph() {
    return (
        <div className="tech-graph">
            <div className="tech-category energy">
                <div className="category-header">
                    <span className="category-icon">⚡</span>
                    <h3>Energía y Simulación</h3>
                </div>
                <div className="tech-items">
                    <div className="tech-item">
                        <span className="tech-name">NEPLAN</span>
                        <span className="tech-desc">Modelado de sistemas eléctricos</span>
                    </div>
                    <div className="tech-item">
                        <span className="tech-name">PowerFactory (DIgSILENT)</span>
                        <span className="tech-desc">Estudios de flujo de carga y cortocircuito</span>
                    </div>
                    <div className="tech-item">
                        <span className="tech-name">MATLAB/Simulink</span>
                        <span className="tech-desc">Modelado dinámico y simulación de microrredes</span>
                    </div>
                </div>
            </div>

            <div className="tech-category software">
                <div className="category-header">
                    <span className="category-icon">💻</span>
                    <h3>Desarrollo de Software</h3>
                </div>
                <div className="tech-items">
                    <div className="tech-item">
                        <span className="tech-name">Python</span>
                        <span className="tech-desc">Backend, automatización, análisis de datos, APIs</span>
                    </div>
                    <div className="tech-item">
                        <span className="tech-name">JavaScript/TypeScript</span>
                        <span className="tech-desc">Aplicaciones web</span>
                    </div>
                    <div className="tech-item">
                        <span className="tech-name">React</span>
                        <span className="tech-desc">Frontend moderno, UI dinámica</span>
                    </div>
                    <div className="tech-item">
                        <span className="tech-name">Node.js/Express</span>
                        <span className="tech-desc">Servidores escalables, microservicios</span>
                    </div>
                    <div className="tech-item">
                        <span className="tech-name">Unity</span>
                        <span className="tech-desc">Experiencias interactivas y VR</span>
                    </div>
                </div>
            </div>

            <div className="tech-category ai">
                <div className="category-header">
                    <span className="category-icon">🤖</span>
                    <h3>Inteligencia Artificial y Ciencia de Datos</h3>
                </div>
                <div className="tech-items">
                    <div className="tech-item">
                        <span className="tech-name">TensorFlow/PyTorch</span>
                        <span className="tech-desc">Deep learning y redes neuronales</span>
                    </div>
                    <div className="tech-item">
                        <span className="tech-name">Scikit-learn</span>
                        <span className="tech-desc">Modelos predictivos y machine learning</span>
                    </div>
                    <div className="tech-item">
                        <span className="tech-name">Pandas/NumPy/Matplotlib</span>
                        <span className="tech-desc">Análisis de datos y visualización</span>
                    </div>
                    <div className="tech-item">
                        <span className="tech-name">Gemelos Digitales</span>
                        <span className="tech-desc">Control inteligente en sistemas energéticos</span>
                    </div>
                </div>
            </div>

            <div className="tech-category cloud">
                <div className="category-header">
                    <span className="category-icon">☁️</span>
                    <h3>Infraestructura y Nube</h3>
                </div>
                <div className="tech-items">
                    <div className="tech-item">
                        <span className="tech-name">Git/GitHub</span>
                        <span className="tech-desc">Control de versiones y colaboración</span>
                    </div>
                    <div className="tech-item">
                        <span className="tech-name">Docker</span>
                        <span className="tech-desc">Contenedorización y despliegue</span>
                    </div>
                    <div className="tech-item">
                        <span className="tech-name">AWS</span>
                        <span className="tech-desc">EC2, S3, Lambda para servicios en la nube</span>
                    </div>
                    <div className="tech-item">
                        <span className="tech-name">Linux/Nginx</span>
                        <span className="tech-desc">Servidores y administración de entornos</span>
                    </div>
                    <div className="tech-item">
                        <span className="tech-name">Moodle</span>
                        <span className="tech-desc">Plataformas de e-learning en VPS</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TechGraph; 