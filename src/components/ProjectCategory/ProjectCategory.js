import React from 'react';
import './ProjectCategory.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function ProjectCategory({ title, projects, onProjectClick }) {
    return (
        <div className="project-category">
            <h2>{title}</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <Card 
                        key={index} 
                        className="project-card"
                        onClick={() => onProjectClick(project)}
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
                                    const message = `Hola Gustavo! Me interesa tu proyecto: ${project.title}. Quiero contactar contigo para más información.`;
                                    const whatsappUrl = `https://wa.me/573001234567?text=${encodeURIComponent(message)}`;
                                    window.open(whatsappUrl, '_blank');
                                }}
                            >
                                Contactar por WhatsApp
                            </button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default ProjectCategory; 