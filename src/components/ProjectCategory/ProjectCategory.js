import React from 'react';
import './ProjectCategory.css';

function ProjectCategory({ title, projects, onProjectClick }) {
    return (
        <div className="project-category">
            <h2 className="project-category-title">{title}</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div 
                        key={index} 
                        className="project-card"
                        onClick={() => onProjectClick(project)}
                    >
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-technologies">
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            <div className="project-actions">
                                <button 
                                    className="project-btn"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onProjectClick(project);
                                    }}
                                >
                                    Ver Detalles
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectCategory;
