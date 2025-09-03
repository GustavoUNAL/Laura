import React from 'react';
import './ProjectCategory.css';

function ProjectCategory({ title, projects, onProjectClick }) {
    const getImageTheme = (project) => {
        const text = `${project.title} ${project.description} ${(project.technologies || []).join(' ')}`.toLowerCase();
        if (/(sfv|solar|fotovolta|kwp|pv)/.test(text)) return 'solar';
        if (/(microrred|microgrid)/.test(text)) return 'microgrid';
        if (/(dnp3|gateway)/.test(text)) return 'dnp3';
        if (/(vr|unity|quest)/.test(text)) return 'vr';
        if (/(confiabilidad|reliability|mtbf|mttr)/.test(text)) return 'reliability';
        if (/(scada|neplan)/.test(text)) return 'scada';
        if (/(ia|ai|tensorflow|ml|machine learning)/.test(text)) return 'ai';
        if (/(gemelo|digital twin)/.test(text)) return 'twin';
        // Fallback by normalized category labels used upstream
        const cat = (project.category || '').toLowerCase();
        if (cat.includes('energ')) return 'solar';
        if (cat.includes('software')) return 'software';
        return 'research';
    };

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
                        <div className={`project-image image-theme-${getImageTheme(project)}`}>
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
