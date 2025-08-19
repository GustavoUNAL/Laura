import React, { useState, useEffect } from 'react';
import TechGraph from '../TechGraph/TechGraph';
import './Technologies.css';

const Technologies = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const nextPage = () => {
        const totalPages = Math.ceil(techCategories.length / (isMobile ? 1 : 2));
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const prevPage = () => {
        const totalPages = Math.ceil(techCategories.length / (isMobile ? 1 : 2));
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    // Datos de tecnologías
    const techCategories = [
        {
            name: "Frontend",
            icon: "🎨",
            description: "Tecnologías para la interfaz de usuario",
            technologies: [
                { name: "React", description: "Biblioteca para interfaces de usuario" },
                { name: "JavaScript", description: "Lenguaje de programación" },
                { name: "HTML5", description: "Marcado semántico" },
                { name: "CSS3", description: "Estilos y animaciones" },
                { name: "TypeScript", description: "JavaScript tipado" }
            ]
        },
        {
            name: "Backend",
            icon: "⚙️",
            description: "Tecnologías del lado del servidor",
            technologies: [
                { name: "Node.js", description: "Runtime de JavaScript" },
                { name: "Express", description: "Framework web minimalista" },
                { name: "Python", description: "Lenguaje versátil" },
                { name: "MongoDB", description: "Base de datos NoSQL" },
                { name: "PostgreSQL", description: "Base de datos relacional" }
            ]
        },
        {
            name: "DevOps",
            icon: "🚀",
            description: "Herramientas de desarrollo y despliegue",
            technologies: [
                { name: "Docker", description: "Contenedores de aplicaciones" },
                { name: "Git", description: "Control de versiones" },
                { name: "AWS", description: "Servicios en la nube" },
                { name: "CI/CD", description: "Integración continua" },
                { name: "Linux", description: "Sistema operativo" }
            ]
        },
        {
            name: "Mobile",
            icon: "📱",
            description: "Desarrollo de aplicaciones móviles",
            technologies: [
                { name: "React Native", description: "Apps nativas multiplataforma" },
                { name: "Flutter", description: "Framework de Google" },
                { name: "iOS", description: "Desarrollo para Apple" },
                { name: "Android", description: "Desarrollo para Google" },
                { name: "PWA", description: "Aplicaciones web progresivas" }
            ]
        }
    ];

    return (
        <section className="technologies-section">
            <div className="technologies-content">
                <div className="technologies-header">
                    <h2>Tecnologías</h2>
                    <p>Herramientas y tecnologías que utilizo para crear soluciones digitales</p>
                </div>
                
                <div className="technologies-carousel">
                    {/* Flecha izquierda */}
                    <button 
                        className="tech-nav-arrow prev-arrow"
                        onClick={prevPage}
                        aria-label="Página anterior"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 18l-6-6 6-6"/>
                        </svg>
                    </button>

                    {/* Contenido de tecnologías */}
                    <div className="tech-content">
                        <TechGraph 
                            currentPage={currentPage} 
                            isMobile={isMobile}
                            techCategories={techCategories}
                        />
                    </div>

                    {/* Flecha derecha */}
                    <button 
                        className="tech-nav-arrow next-arrow"
                        onClick={nextPage}
                        aria-label="Página siguiente"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 18l6-6-6-6"/>
                        </svg>
                    </button>
                </div>

                {/* Paginación solo en móviles */}
                {isMobile && (
                    <div className="tech-pagination">
                        <div className="tech-pagination-dots">
                            {Array.from({ length: Math.ceil(techCategories.length / (isMobile ? 1 : 2)) }, (_, index) => (
                                <button
                                    key={index}
                                    className={`tech-pagination-dot ${currentPage === index ? 'active' : ''}`}
                                    onClick={() => handlePageChange(index)}
                                    aria-label={`Ir a página ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Technologies; 