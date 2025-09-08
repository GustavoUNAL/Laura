import React, { useState } from 'react';
import './CourseSummary.css';

function CourseSummary({ student, onContinue }) {
    const [isVisible, setIsVisible] = useState(true);

    const handleContinue = () => {
        setIsVisible(false);
        setTimeout(() => {
            onContinue();
        }, 300);
    };

    if (!isVisible) return null;

    return (
        <div className="course-summary-overlay">
            <div className="course-summary-container">
                <div className="summary-header">
                    <h2>Resumen del Curso</h2>
                    <p>Bienvenida al portal estudiantil</p>
                </div>
                
                <div className="summary-content">
                    <div className="course-overview">
                        <h3>{student.course}</h3>
                        <div className="course-details">
                            <div className="detail-item">
                                <span className="label">Semestre:</span>
                                <span className="value">{student.semester}</span>
                            </div>
                            <div className="detail-item">
                                <span className="label">Estudiante:</span>
                                <span className="value">{student.name}</span>
                            </div>
                            <div className="detail-item">
                                <span className="label">ID:</span>
                                <span className="value">{student.id}</span>
                            </div>
                        </div>
                    </div>

                    <div className="course-stats">
                        <div className="stat-card">
                            <div className="stat-number">24</div>
                            <div className="stat-label">Clases Totales</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">8</div>
                            <div className="stat-label">Semanas</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">3</div>
                            <div className="stat-label">Horas por Semana</div>
                        </div>
                    </div>

                    <div className="course-description">
                        <h4>Descripción del Curso</h4>
                        <p>
                            Este curso te introducirá a los conceptos fundamentales de la Historia del Arte, 
                            explorando diferentes períodos, movimientos artísticos y técnicas. A través de 
                            análisis visuales y contextuales, desarrollarás una comprensión profunda del 
                            arte como expresión cultural y social.
                        </p>
                    </div>

                    <div className="learning-objectives">
                        <h4>Objetivos de Aprendizaje</h4>
                        <ul>
                            <li>Identificar características de diferentes períodos artísticos</li>
                            <li>Analizar obras de arte desde perspectivas históricas y culturales</li>
                            <li>Desarrollar habilidades de observación y crítica artística</li>
                            <li>Comprender la evolución del arte a través del tiempo</li>
                        </ul>
                    </div>
                </div>

                <div className="summary-actions">
                    <button onClick={handleContinue} className="continue-button">
                        Continuar al Portal
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CourseSummary;
