import React, { useState } from 'react';
import './Projects.css';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import ProjectsHeader from '../../components/ProjectsHeader/ProjectsHeader';
import ProjectCategory from '../../components/ProjectCategory/ProjectCategory';
import ProjectDialog from '../../components/ProjectDialog/ProjectDialog';

// Import project images (unique pool)
import microgrid360 from '../../img/projects/microgrid-360.svg';
import solarCidtcaSvg from '../../img/projects/solar-cidtca.svg';
import solarCurve from '../../img/projects/solar-curve.svg';
import solarCurve2 from '../../img/projects/solar-curve-2.svg';
import solarCurve3 from '../../img/projects/solar-curve-3.svg';
import solarCurve4 from '../../img/projects/solar-curve-4.svg';
import adaptiveProtection from '../../img/projects/adaptive-protection.svg';
import aiMicrogrid from '../../img/projects/ai-microgrid.svg';
import vlesimEnergy from '../../img/projects/vlesim-energy.svg';
import digitalTwin from '../../img/projects/digital-twin.svg';
import mobileApp from '../../img/projects/solar-commercial.svg';
import vrIndustrial from '../../img/projects/vr-industrial.svg';
import vrCurve from '../../img/projects/vr-curve.svg';
import vrSteam from '../../img/projects/vr-steam.svg';
import hologramGaleras from '../../img/projects/hologram-galeras.svg';
import dnp3Gateway from '../../img/projects/dnp3-gateway.svg';
import gatewayCurve from '../../img/projects/gateway-curve.svg';
import reliabilityCurve from '../../img/projects/reliability-curve.svg';
import hydroelectric from '../../img/projects/hydroelectric.svg';
import pchCurve from '../../img/projects/pch-curve.svg';

function Projects() {
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        // Energía y Servicios Eléctricos (detallados)
        {
            title: "SFV CIDTCA SOLAR – 70,11 kWp",
            description: "114 módulos Jinko 615 Wp, inversor Huawei SUN2000-80K-MGL0, ~95 MWh/año. Cálculos eléctricos/estructurales (NSR-10), RETIE/NTC 2050, AGPE CEDENAR.",
            category: "Energía y Servicios Eléctricos",
            image: solarCidtcaSvg,
            technologies: ["Jinko 615 Wp", "Huawei 80K", "RETIE", "NSR-10", "AGPE"]
        },
        {
            title: "Techo Solar – 70,11 kW",
            description: "Sistema on-grid en cubierta metálica. 114 paneles, inversor 80 kW, optimizado para autoconsumo.",
            category: "Energía y Servicios Eléctricos",
            image: solarCurve2,
            technologies: ["On-Grid", "80 kW", "Autoconsumo", "Optimización"]
        },
        {
            title: "Sistema FV – Cadena Láctea",
            description: "Sistema para refrigeración y procesos lácteos. Hasta 40% de reducción de costos, menor huella de carbono y escalable.",
            category: "Energía y Servicios Eléctricos",
            image: solarCurve3,
            technologies: ["Industria", "Ahorro 40%", "CO2↓", "Escalable"]
        },
        {
            title: "SFV Comercial – 11.16 kWp",
            description: "18 módulos Jinko 620 W + 5 microinversores APS DS3D. Protecciones AC/DC, puesta a tierra, integración a red. RETIE aprobado.",
            category: "Energía y Servicios Eléctricos",
            image: solarCurve4,
            technologies: ["11.16 kWp", "APS DS3D", "RETIE", "Protecciones"]
        },
        {
            title: "SFV Veterinaria – 6.25 kWp",
            description: "10 paneles JA 625 W y 3 microinversores APS DS3D. Monitoreo ECU en línea. Cumplimiento RETIE.",
            category: "Energía y Servicios Eléctricos",
            image: solarCurve,
            technologies: ["6.25 kWp", "JA Solar", "APS DS3D", "ECU"]
        },
        {
            title: "SFV Residencial – 3.3 kWp",
            description: "6 módulos JA 565 W y un inversor Growab 3.6 kW. Planos, memorias y certificación RETIE.",
            category: "Energía y Servicios Eléctricos",
            image: hydroelectric,
            technologies: ["3.3 kWp", "JA Solar", "Growab 3.6", "RETIE"]
        },
        {
            title: "Perfil de Ingeniería PCH – 1 MW",
            description: "Estudios topográficos/hidráulicos, estimación de caudal y generación, diseño preliminar e interconexión, factibilidad económica.",
            category: "Energía y Servicios Eléctricos",
            image: pchCurve,
            technologies: ["Topografía", "Hidráulica", "Factibilidad", "1 MW"]
        },
        // Desarrollo Tecnológico y Software
        {
            title: "VLESIM Energy – Confiabilidad SEP",
            description: "Plataforma web para simulación de fallas, análisis de riesgo, métricas de confiabilidad/disponibilidad y reportes técnicos.",
            category: "Desarrollo Tecnológico y Software",
            image: reliabilityCurve,
            technologies: ["Confiabilidad", "Reportes", "Web", "Riesgo"]
        },
        {
            title: "Gateway Virtual DNP3 – VLESIM",
            description: "Middleware JSON→DNP3 para integración con SCADA. Interoperable y confiable en entornos industriales.",
            category: "Desarrollo Tecnológico y Software",
            image: gatewayCurve,
            technologies: ["DNP3", "SCADA", "JSON", "Middleware"]
        },
        {
            title: "Aplicación Web de Confiabilidad",
            description: "Software de estudios de confiabilidad con análisis probabilístico y generación de reportes técnicos.",
            category: "Desarrollo Tecnológico y Software",
            image: vlesimEnergy,
            technologies: ["Probabilístico", "Reportes", "Web"]
        },
        {
            title: "Servidor SMTP en AWS",
            description: "Servidor SMTP escalable con balanceador y orquestador para altos volúmenes empresariales.",
            category: "Desarrollo Tecnológico y Software",
            image: aiMicrogrid,
            technologies: ["AWS", "SMTP", "Escalable"]
        },
        {
            title: "Experiencias VR STEAM – Quest 3",
            description: "Experiencias VR educativas en Unity con gamificación y enfoque pedagógico STEAM.",
            category: "Desarrollo Tecnológico y Software",
            image: vrCurve,
            technologies: ["Unity", "VR", "STEAM"]
        },
        // Investigación e Innovación
        {
            title: "Protecciones Adaptativas en Microrredes",
            description: "Tesis de Maestría – estrategias adaptativas en redes distribuidas.",
            category: "Investigación y Producción Académica",
            image: adaptiveProtection,
            technologies: ["Protecciones", "Microrredes", "Tesis"]
        },
        {
            title: "Eficiencia Energética en Transformadores",
            description: "Investigación aplicada en pérdidas y eficiencia de transformadores de potencia.",
            category: "Investigación y Producción Académica",
            image: digitalTwin,
            technologies: ["Transformadores", "Eficiencia"]
        },
        {
            title: "Coordinación de Protecciones en Redes Malladas",
            description: "Automatización de la coordinación en redes malladas.",
            category: "Investigación y Producción Académica",
            image: dnp3Gateway,
            technologies: ["Automatización", "Protecciones"]
        },
        {
            title: "Microrred 360 – GERS (Premio)",
            description: "Aplicación web premiada por Colombia Inteligente para potencial FV en microrredes.",
            category: "Investigación y Producción Académica",
            image: microgrid360,
            technologies: ["Microrredes", "Premio", "Web"]
        },
        {
            title: "Power Dragon – Decimetrix",
            description: "Gemelo digital de sistemas eléctricos en campos petroleros.",
            category: "Investigación y Producción Académica",
            image: digitalTwin,
            technologies: ["Gemelo Digital", "3D"]
        },
        {
            title: "GERS Academy (LMS)",
            description: "Implementación de plataforma educativa virtual (LMS).",
            category: "Investigación y Producción Académica",
            image: reliabilityCurve,
            technologies: ["LMS", "Educación"]
        },
        {
            title: "SCADA Microrred – GERS USA",
            description: "Integración de SCADA con NEPLAN.",
            category: "Investigación y Producción Académica",
            image: vrIndustrial,
            technologies: ["SCADA", "NEPLAN"]
        },
        {
            title: "Migración STN a NEPLAN – GERS",
            description: "Optimización y migración de bases del sistema eléctrico nacional.",
            category: "Investigación y Producción Académica",
            image: hologramGaleras,
            technologies: ["NEPLAN", "STN"]
        },
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
            image: mobileApp,
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
            image: gatewayCurve,
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
            image: dnp3Gateway,
            technologies: ["Investigación", "Algoritmos", "Optimización", "Ciencia de Datos"]
        },
        {
            title: "Proyecto Doctoral - IA y Ciberseguridad",
            description: "Investigación en inteligencia artificial aplicada a la ciberseguridad en sistemas eléctricos.",
            category: "Investigación y Producción Académica",
            image: pchCurve,
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



    const normalizeCategory = (category) => {
        const text = category.toLowerCase();
        if (
            text.includes('energ') ||
            text.includes('potencia') ||
            text.includes('proteccion') ||
            text.includes('microrred') ||
            text.includes('fotovolta')
        ) {
            return 'Energía';
        }
        if (
            text.includes('aplicacion') ||
            text.includes('web') ||
            text.includes('móvil') || text.includes('movil') ||
            text.includes('software') ||
            text.includes('industrial') ||
            text.includes('vr') || text.includes('inmersiv') || text.includes('arte digital')
        ) {
            return 'Desarrollo de Software';
        }
        return 'Investigación';
    };

    // Remove duplicate cards by title (case-insensitive)
    const seenTitles = new Set();
    const uniqueProjects = projects.filter(project => {
        const key = project.title.trim().toLowerCase();
        if (seenTitles.has(key)) return false;
        seenTitles.add(key);
        return true;
    });

    // Generate a fully unique, themed SVG for every project (harmonized with content)
    const hashNumber = (seed) => {
        let h = 2166136261;
        for (let i = 0; i < seed.length; i += 1) {
            h ^= seed.charCodeAt(i);
            h = Math.imul(h, 16777619);
        }
        return (h >>> 0);
    };

    const pickPalette = (project) => {
        const text = `${project.title} ${project.description} ${(project.technologies || []).join(' ')}`.toLowerCase();
        // Brand-coherent dark bases + teal/cyan accents
        const baseDark = '#0f172a'; // slate-900
        const baseDeep = '#0b1320';
        if (/(sfv|solar|fotovolta|pv|kwp)/.test(text)) return [baseDeep, baseDark, '#22d3ee']; // cyan accent
        if (/(microrred|microgrid)/.test(text)) return ['#0b1414', '#0f1f1f', '#4ecdc4']; // teal accent
        if (/(dnp3|gateway|scada)/.test(text)) return ['#0a1016', '#0f1a24', '#45b7d1']; // blue-cyan accent
        if (/(vr|unity|quest|steam)/.test(text)) return ['#0d0a16', '#171225', '#a78bfa']; // violet accent
        if (/(confiabilidad|reliability|mtbf|mttr)/.test(text)) return ['#0a160d', '#0f1f17', '#34d399']; // green accent
        if (/(ai|ia|tensorflow|ml|machine)/.test(text)) return ['#07161a', '#0b1f24', '#22d3ee']; // cyan accent
        if (/(twin|gemelo|digital)/.test(text)) return ['#141821', '#1f2430', '#93a4b8']; // cool gray accent
        if (/(transformador|energ|potencia|hidroe|pch)/.test(text)) return ['#140e0e', '#1f1717', '#f87171']; // muted red accent
        return [baseDeep, baseDark, '#4ecdc4'];
    };

    const pickIcon = (project) => {
        const text = `${project.title} ${project.description} ${(project.technologies || []).join(' ')}`.toLowerCase();
        if (/(sfv|solar|fotovolta|pv|kwp)/.test(text)) {
            return '<g opacity="0.9"><circle cx="480" cy="90" r="34" fill="rgba(255,255,255,0.85)"/><g stroke="rgba(255,255,255,0.75)" stroke-width="4"><line x1="480" y1="40" x2="480" y2="10"/><line x1="480" y1="170" x2="480" y2="140"/><line x1="430" y1="90" x2="400" y2="90"/><line x1="560" y1="90" x2="530" y2="90"/><line x1="447" y1="57" x2="425" y2="35"/><line x1="513" y1="123" x2="535" y2="145"/><line x1="513" y1="57" x2="535" y2="35"/><line x1="447" y1="123" x2="425" y2="145"/></g></g>';
        }
        if (/(microrred|microgrid)/.test(text)) {
            return '<g fill="rgba(255,255,255,0.9)" opacity="0.95"><circle cx="120" cy="70" r="8"/><circle cx="220" cy="120" r="8"/><circle cx="320" cy="60" r="8"/><circle cx="420" cy="130" r="8"/><path d="M120 70 L220 120 L320 60 L420 130" stroke="rgba(255,255,255,0.6)" stroke-width="3" fill="none"/></g>';
        }
        if (/(dnp3|gateway|scada)/.test(text)) {
            return '<g stroke="rgba(255,255,255,0.85)" stroke-width="8" stroke-linecap="round" fill="none" opacity="0.9"><path d="M100 220 C180 160 220 160 300 220"/><path d="M300 220 C380 280 420 280 500 220"/><circle cx="300" cy="220" r="18" fill="rgba(255,255,255,0.85)"/></g>';
        }
        if (/(vr|unity|quest|steam)/.test(text)) {
            return '<g opacity="0.9"><rect x="190" y="90" rx="18" ry="18" width="220" height="90" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.8)" stroke-width="4"/><rect x="210" y="110" rx="10" ry="10" width="70" height="50" fill="rgba(255,255,255,0.85)"/><rect x="320" y="110" rx="10" ry="10" width="70" height="50" fill="rgba(255,255,255,0.85)"/></g>';
        }
        if (/(confiabilidad|reliability|mtbf|mttr)/.test(text)) {
            return '<path d="M60 240 C140 220 220 180 300 150 C380 120 460 110 540 80" stroke="rgba(255,255,255,0.85)" stroke-width="6" fill="none" opacity="0.9"/>';
        }
        if (/(ai|ia|tensorflow|ml|machine)/.test(text)) {
            return '<g opacity="0.9" stroke="rgba(255,255,255,0.85)" stroke-width="4" fill="none"><path d="M220 110 C200 80 250 60 270 90 C300 60 340 90 320 120 C360 120 360 170 320 170 C300 200 260 180 270 150 C240 170 210 150 220 120 Z"/></g>';
        }
        if (/(twin|gemelo|digital)/.test(text)) {
            return '<g opacity="0.9" stroke="rgba(255,255,255,0.85)" stroke-width="3" fill="rgba(255,255,255,0.1)"><rect x="180" y="80" width="80" height="80"/><rect x="240" y="120" width="80" height="80"/></g>';
        }
        if (/(transformador|energ|potencia|hidroe|pch)/.test(text)) {
            return '<path d="M300 70 L240 170 L300 170 L260 260 L360 140 L300 140 Z" fill="rgba(255,255,255,0.9)" opacity="0.9"/>';
        }
        return '<g opacity="0.9" stroke="rgba(255,255,255,0.85)" stroke-width="8" fill="none"><path d="M240 90 L200 120 L240 150"/><path d="M360 90 L400 120 L360 150"/></g>';
    };

    const generateThemedSVG = (project, index) => {
        const [c1, c2, c3] = pickPalette(project);
        const seed = `${project.title}-${index}`;
        const h = hashNumber(seed);
        const angle = h % 360;
        const wave1 = 70 + (h % 40);
        const wave2 = 160 + (Math.floor(h / 13) % 50);
        const dotX = 60 + (h % 480);
        const dotY = 60 + (Math.floor(h / 17) % 180);
        const icon = pickIcon(project);
        const label = project.title.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        const svg = `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="800" viewBox="0 0 600 300">\n  <defs>\n    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1" gradientTransform="rotate(${angle})">\n      <stop offset="0%" stop-color="${c1}"/>\n      <stop offset="100%" stop-color="${c2}"/>\n    </linearGradient>\n  </defs>\n  <rect width="600" height="300" fill="url(#bg)"/>\n  <circle cx="${dotX}" cy="${dotY}" r="22" fill="rgba(255,255,255,0.10)"/>\n  <circle cx="${(dotX + 300) % 600}" cy="${(dotY + 120) % 300}" r="14" fill="rgba(0,0,0,0.12)"/>\n  <path d="M0,${wave1} C120,${wave1 + 40} 240,${wave1 - 20} 360,${wave1 + 10} C480,${wave1 + 30} 540,${wave1 - 10} 600,${wave1 + 20} L600,0 L0,0 Z" fill="rgba(255,255,255,0.06)"/>\n  <path d="M0,${wave2} C120,${wave2 - 20} 240,${wave2 + 30} 360,${wave2 - 10} C480,${wave2 - 30} 540,${wave2 + 10} 600,${wave2 - 20} L600,300 L0,300 Z" fill="${c3}22"/>\n  ${icon}\n  <text x="20" y="284" font-family="Helvetica, Arial, sans-serif" font-size="18" fill="rgba(255,255,255,0.82)">${label}</text>\n</svg>`;
        return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
    };

    const projectsWithUniqueImages = uniqueProjects.map((p, idx) => ({
        ...p,
        image: generateThemedSVG(p, idx)
    }));

    const projectsNormalized = projectsWithUniqueImages.map(p => ({
        ...p,
        category: normalizeCategory(p.category)
    }));

    const groupedProjects = projectsNormalized.reduce((acc, project) => {
        const cat = project.category;
        if (!acc[cat]) {
            acc[cat] = [];
        }
        acc[cat].push(project);
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
