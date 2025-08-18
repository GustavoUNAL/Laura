import React, { useState } from 'react';
import './Projects.css';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

function Projects() {
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        // Energía y Sistemas de Potencia
        {
            id: 1,
            category: "⚡ Energía y Sistemas de Potencia",
            title: "Proyectos Fotovoltaicos",
            description: "Sistema de 70 kW como caso insignia. Desarrollo de soluciones fotovoltaicas a gran escala con análisis técnico-económico integral.",
            fullDescription: "Desarrollo de proyectos fotovoltaicos a gran escala incluyendo el sistema insignia de 70 kW. Análisis técnico-económico integral, diseño de sistemas, implementación y mantenimiento. Experiencia en proyectos residenciales, comerciales e industriales con tecnologías de vanguardia.",
            technologies: ["Paneles Solares", "Inversores", "Sistemas de Monitoreo", "Análisis Económico"],
            image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500"
        },
        {
            id: 2,
            category: "⚡ Energía y Sistemas de Potencia",
            title: "Protecciones Inteligentes",
            description: "Coordinación adaptativa y curvas de sobrecorriente para sistemas de potencia avanzados.",
            fullDescription: "Implementación de sistemas de protección inteligentes con coordinación adaptativa y curvas de sobrecorriente personalizadas. Desarrollo de algoritmos para detección de fallas y coordinación automática de protecciones en sistemas de potencia complejos.",
            technologies: ["Relés Inteligentes", "Algoritmos de Coordinación", "Sistemas SCADA", "Análisis de Fallas"],
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500"
        },
        {
            id: 3,
            category: "⚡ Energía y Sistemas de Potencia",
            title: "Control Avanzado de Microrredes",
            description: "IA aplicada al control de frecuencia y estabilidad en sistemas de microrredes inteligentes.",
            fullDescription: "Desarrollo de sistemas de control avanzado para microrredes utilizando inteligencia artificial. Control de frecuencia, estabilidad de voltaje y gestión inteligente de recursos energéticos distribuidos.",
            technologies: ["Inteligencia Artificial", "Control de Frecuencia", "Microrredes", "Machine Learning"],
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500"
        },
        // Desarrollo de Software
        {
            id: 4,
            category: "💻 Desarrollo de Software y Soluciones Digitales",
            title: "Aplicaciones Industriales a la Medida",
            description: "Blessing SAS y desarrollos corporativos especializados para la industria.",
            fullDescription: "Desarrollo de aplicaciones industriales personalizadas para empresas como Blessing SAS. Soluciones de software especializadas en gestión de procesos industriales, control de calidad y optimización de operaciones.",
            technologies: ["Java", "Python", "Bases de Datos", "APIs REST", "Interfaces Industriales"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500"
        },
        {
            id: 5,
            category: "💻 Desarrollo de Software y Soluciones Digitales",
            title: "Gemelos Digitales & Simulación",
            description: "Modelos virtuales de sistemas energéticos para análisis y optimización.",
            fullDescription: "Creación de gemelos digitales para sistemas energéticos complejos. Modelado y simulación de sistemas de potencia para análisis de rendimiento, optimización y toma de decisiones en tiempo real.",
            technologies: ["Simulación Numérica", "Modelado 3D", "Análisis de Datos", "Visualización"],
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500"
        },
        {
            id: 6,
            category: "💻 Desarrollo de Software y Soluciones Digitales",
            title: "Proyectos Web y Móviles",
            description: "Herramientas digitales y aplicaciones multiplataforma para soluciones empresariales.",
            fullDescription: "Desarrollo de aplicaciones web y móviles multiplataforma para empresas. Herramientas digitales que optimizan procesos empresariales, gestión de clientes y análisis de datos.",
            technologies: ["React", "React Native", "Node.js", "MongoDB", "AWS"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500"
        },
        // Tecnologías Inmersivas
        {
            id: 7,
            category: "🎨 Tecnologías Inmersivas y Arte Digital",
            title: "Experiencias VR en Unity",
            description: "Desarrollo de entornos interactivos inmersivos para aplicaciones educativas y comerciales.",
            fullDescription: "Creación de experiencias de realidad virtual inmersivas utilizando Unity. Desarrollo de entornos interactivos para aplicaciones educativas, entrenamiento corporativo y experiencias comerciales innovadoras.",
            technologies: ["Unity 3D", "C#", "VR Development", "3D Modeling", "User Experience"],
            image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=500"
        },
        {
            id: 8,
            category: "🎨 Tecnologías Inmersivas y Arte Digital",
            title: "Holografía y Visualización 3D",
            description: "Ejemplo: volcán Galeras en erupción. Visualizaciones científicas avanzadas.",
            fullDescription: "Desarrollo de sistemas holográficos y visualizaciones 3D para aplicaciones científicas. Proyecto destacado: simulación holográfica del volcán Galeras en erupción para estudios geológicos y educativos.",
            technologies: ["Holografía", "Visualización 3D", "Realidad Aumentada", "Modelado Geológico"],
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500"
        },
        // Investigación Académica
        {
            id: 9,
            category: "🔬 Investigación y Producción Académica",
            title: "Tesis de Maestría",
            description: "Protecciones adaptativas en microrredes. Investigación avanzada en sistemas de protección inteligentes.",
            fullDescription: "Investigación doctoral sobre protecciones adaptativas en microrredes. Desarrollo de algoritmos inteligentes para sistemas de protección que se adaptan automáticamente a cambios en la topología de la red.",
            technologies: ["Investigación", "Algoritmos", "Microrredes", "Protecciones", "Análisis Matemático"],
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500"
        },
        {
            id: 10,
            category: "🔬 Investigación y Producción Académica",
            title: "Proyecto Doctoral",
            description: "IA y ciberseguridad aplicada a sistemas eléctricos. Investigación de vanguardia en seguridad energética.",
            fullDescription: "Investigación doctoral sobre la aplicación de inteligencia artificial y ciberseguridad en sistemas eléctricos. Desarrollo de métodos para detectar y prevenir ataques cibernéticos en infraestructura crítica energética.",
            technologies: ["Inteligencia Artificial", "Ciberseguridad", "Sistemas Eléctricos", "Machine Learning", "Análisis de Amenazas"],
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500"
        },
        {
            id: 11,
            category: "🔬 Investigación y Producción Académica",
            title: "Publicaciones, Conferencias y Colaboraciones",
            description: "Divulgación científica y técnica. Participación en eventos internacionales y colaboraciones académicas.",
            fullDescription: "Participación activa en la comunidad científica internacional. Publicaciones en revistas indexadas, presentaciones en conferencias internacionales y colaboraciones con investigadores de prestigiosas universidades.",
            technologies: ["Investigación", "Publicaciones", "Conferencias", "Colaboraciones", "Divulgación"],
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500"
        }
    ];

    const handleOpenDialog = (project) => {
        setSelectedProject(project);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setSelectedProject(null);
    };

    const handleWhatsAppContact = (projectName) => {
        const message = `Hola Gustavo! Me interesa tu proyecto: ${projectName}. Quiero contactar contigo para más información.`;
        const whatsappUrl = `https://wa.me/573001234567?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    // Agrupar proyectos por categoría
    const groupedProjects = projects.reduce((acc, project) => {
        if (!acc[project.category]) {
            acc[project.category] = [];
        }
        acc[project.category].push(project);
        return acc;
    }, {});

    return (
        <>
            <Navbar />
            <div className="projects-page">
                <div className="projects-header">
                    <h1>Proyectos y Experiencia</h1>
                    <p>Explora mi portafolio de proyectos en diferentes áreas de especialización</p>
                </div>

                <div className="projects-content">
                    {Object.entries(groupedProjects).map(([category, categoryProjects]) => (
                        <div key={category} className="project-category">
                            <h2>{category}</h2>
                            <div className="projects-grid">
                                {categoryProjects.map((project) => (
                                    <Card 
                                        key={project.id} 
                                        className="project-card"
                                        onClick={() => handleOpenDialog(project)}
                                    >
                                        <div className="project-image">
                                            <img src={project.image} alt={project.title} />
                                        </div>
                                        <CardContent>
                                            <h3>{project.title}</h3>
                                            <p>{project.description}</p>
                                            <button 
                                                className="whatsapp-btn"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleWhatsAppContact(project.title);
                                                }}
                                            >
                                                💬 Quiero contactar contigo
                                            </button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Popup del proyecto */}
                <Dialog 
                    open={openDialog} 
                    onClose={handleCloseDialog}
                    maxWidth="md"
                    fullWidth
                    className="project-dialog"
                >
                    {selectedProject && (
                        <>
                            <DialogTitle className="dialog-title">
                                <div className="dialog-header">
                                    <h2>{selectedProject.title}</h2>
                                    <IconButton
                                        aria-label="close"
                                        onClick={handleCloseDialog}
                                        className="close-button"
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                </div>
                                <span className="project-category-tag">{selectedProject.category}</span>
                            </DialogTitle>
                            <DialogContent className="dialog-content">
                                <div className="project-details">
                                    <div className="project-image-large">
                                        <img src={selectedProject.image} alt={selectedProject.title} />
                                    </div>
                                    <div className="project-info">
                                        <h3>Descripción Completa</h3>
                                        <p>{selectedProject.fullDescription}</p>
                                        
                                        <h3>Tecnologías Utilizadas</h3>
                                        <div className="technologies-list">
                                            {selectedProject.technologies.map((tech, index) => (
                                                <span key={index} className="tech-tag">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </DialogContent>
                            <DialogActions className="dialog-actions">
                                <Button 
                                    onClick={() => handleWhatsAppContact(selectedProject.title)}
                                    className="whatsapp-action-btn"
                                >
                                    💬 Contactar por WhatsApp
                                </Button>
                                <Button onClick={handleCloseDialog} className="close-action-btn">
                                    Cerrar
                                </Button>
                            </DialogActions>
                        </>
                    )}
                </Dialog>
            </div>
            <Footer />
        </>
    );
}

export default Projects; 