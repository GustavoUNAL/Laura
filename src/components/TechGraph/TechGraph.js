import React from 'react';
import './TechGraph.css';

const TechGraph = ({ currentPage, isMobile, techCategories }) => {
    // Mostrar 1 categoría por página en móvil, 2 en desktop
    const itemsPerPage = isMobile ? 1 : 2;
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleCategories = techCategories.slice(startIndex, endIndex);

    return (
        <div className="tech-graph">
            {visibleCategories.map((category, index) => (
                <div key={category.name} className="tech-category">
                    <div className="category-header">
                        <span className="category-icon">{category.icon}</span>
                        <h3>{category.name}</h3>
                    </div>
                    <p className="category-description">{category.description}</p>
                    <div className="tech-items">
                        {category.technologies.map((tech, techIndex) => (
                            <div key={techIndex} className="tech-item">
                                <h4 className="tech-name">{tech.name}</h4>
                                <p className="tech-desc">{tech.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            
            {/* Indicador de página solo en móvil */}
            {isMobile && (
                <div className="mobile-page-indicator">
                    <div className="page-info">
                        Página {currentPage + 1} de {Math.ceil(techCategories.length / itemsPerPage)}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TechGraph; 