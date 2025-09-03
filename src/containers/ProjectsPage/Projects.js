import React, { useState } from 'react';
import './Projects.css';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import ProjectsHeader from '../../components/ProjectsHeader/ProjectsHeader';
import ProjectCategory from '../../components/ProjectCategory/ProjectCategory';
import ProjectDialog from '../../components/ProjectDialog/ProjectDialog';

// Import project images
import microgrid360 from '../../img/projects/microgrid-360.svg';
import solarCidtca from '../../img/projects/solar-cidtca.svg';
import adaptiveProtection from '../../img/projects/adaptive-protection.svg';
import aiMicrogrid from '../../img/projects/ai-microgrid.svg';
import blessingSas from '../../img/projects/vlesim-energy.svg';
import digitalTwin from '../../img/projects/digital-twin.svg';
import mobileApp from '../../img/projects/solar-commercial.svg';
import vrIndustrial from '../../img/projects/vr-industrial.svg';
import hologramGaleras from '../../img/projects/hologram-galeras.svg';
import adaptiveThesis from '../../img/projects/dnp3-gateway.svg';
import doctoralProject from '../../img/projects/hydroelectric.svg';

function Projects() {
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "Microrred 360",
            description: "Sistema inteligente para estimar el potencial energético fotovoltaico de microrredes. Integra análisis técnico-económico con datos geográficos específicos.",
            category: "Energía y Sistemas de Potencia",
            image: microgrid360,
            technologies: ["Python", "Machine Learning", "Análisis de Datos", "GIS"]
        },
        {
            title: "Sistema Fotovoltaico 70 kW",
            description: "Instalación solar completa de 70 kW para empresa industrial. Diseño, implementación y monitoreo del sistema.",
            category: "Proyectos Fotovoltaicos",
            image: solarCidtca,
            technologies: ["Autocad", "PVsyst", "Monitoreo SCADA", "Energía Solar"]
        },
        {
            title: "Protecciones Adaptativas",
            description: "Sistema de protección inteligente con curvas de sobrecorriente personalizadas y coordinación automática.",
            category: "Protecciones Inteligentes",
            image: adaptiveProtection,
            technologies: ["MATLAB", "Simulink", "Protecciones", "Microrredes"]
        },
        {
            title: "Control de Microrredes con IA",
            description: "Aplicación de inteligencia artificial para el control de frecuencia y estabilidad en microrredes.",
            category: "Control Avanzado de Microrredes",
            image: aiMicrogrid,
            technologies: ["Python", "TensorFlow", "Control", "IA"]
        },
        {
            title: "Blessing SAS - Sistema Corporativo",
            description: "Desarrollo de software empresarial a la medida para gestión integral de operaciones.",
            category: "Aplicaciones Industriales a la Medida",
            image: blessingSas,
            technologies: ["React", "Node.js", "PostgreSQL", "Docker"]
        },
        {
            title: "Gemelo Digital - Sistema Energético",
            description: "Modelo virtual de sistema energético para simulación y análisis predictivo.",
            category: "Gemelos Digitales & Simulación",
            image: digitalTwin,
            technologies: ["Unity", "C#", "Simulación", "3D"]
        },
        {
            title: "App Móvil - Gestión Energética",
            description: "Aplicación multiplataforma para monitoreo y control de sistemas energéticos.",
            category: "Proyectos Web y Móviles",
            image: mobileApp,
            technologies: ["React Native", "Firebase", "APIs", "Mobile"]
        },
        {
            title: "Experiencia VR - Entorno Industrial",
            description: "Desarrollo de entorno virtual inmersivo para entrenamiento en sistemas industriales.",
            category: "Tecnologías Inmersivas y Arte Digital",
            image: vrIndustrial,
            technologies: ["Unity", "VR", "C#", "3D Modeling"]
        },
        {
            title: "Holografía - Volcán Galeras",
            description: "Proyecto holográfico y visualización 3D del volcán Galeras en erupción.",
            category: "Tecnologías Inmersivas y Arte Digital",
            image: hologramGaleras,
            technologies: ["Holografía", "3D Modeling", "Visualización", "Arte Digital"]
        },
        {
            title: "Tesis Maestría - Protecciones Adaptativas",
            description: "Investigación sobre protecciones eléctricas adaptativas en microrredes eléctricas.",
            category: "Investigación y Producción Académica",
            image: adaptiveThesis,
            technologies: ["Investigación", "Algoritmos", "Optimización", "Ciencia de Datos"]
        },
        {
            title: "Proyecto Doctoral - IA y Ciberseguridad",
            description: "Investigación en inteligencia artificial aplicada a la ciberseguridad en sistemas eléctricos.",
            category: "Investigación y Producción Académica",
            image: doctoralProject,
            technologies: ["IA", "Ciberseguridad", "Sistemas Eléctricos", "Machine Learning"]
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
                <ProjectsHeader />
                
                <div className="projects-content">
                    {Object.entries(groupedProjects).map(([category, categoryProjects]) => (
                        <ProjectCategory
                            key={category}
                            title={category}
                            projects={categoryProjects}
                            onProjectClick={handleOpenDialog}
                        />
                    ))}
                </div>
            </div>
            
            <ProjectDialog
                open={openDialog}
                project={selectedProject}
                onClose={handleCloseDialog}
            />
            
            <Footer />
        </>
    );
}

export default Projects;
