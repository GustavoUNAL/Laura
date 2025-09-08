import React from 'react';
import './UpcomingClasses.css';

function UpcomingClasses({ student }) {
    // Datos de ejemplo de próximas clases
    const upcomingClasses = [
        {
            id: 1,
            date: new Date(2024, 0, 22), // 22 de enero
            time: '10:00 AM - 12:00 PM',
            topic: 'Arte Medieval: Gótico y Románico',
            type: 'Teoría',
            classroom: 'Aula 201',
            professor: 'Laura María Chaves Timarán',
            materials: ['Libro de texto: Capítulo 4', 'Presentación digital', 'Cuaderno de apuntes'],
            objectives: [
                'Identificar características del arte gótico',
                'Analizar ejemplos de arquitectura románica',
                'Comprender el contexto histórico del período'
            ],
            preparation: 'Revisar el capítulo 4 del libro de texto y traer ejemplos de arte medieval'
        },
        {
            id: 2,
            date: new Date(2024, 0, 24), // 24 de enero
            time: '10:00 AM - 12:00 PM',
            topic: 'Renacimiento Italiano: Florencia y Roma',
            type: 'Teoría',
            classroom: 'Aula 201',
            professor: 'Laura María Chaves Timarán',
            materials: ['Libro de texto: Capítulo 5', 'Imágenes de obras', 'Mapa de Italia'],
            objectives: [
                'Estudiar los grandes maestros del Renacimiento',
                'Analizar la perspectiva y proporción',
                'Conectar arte con humanismo'
            ],
            preparation: 'Investigar sobre Leonardo da Vinci y Miguel Ángel'
        },
        {
            id: 3,
            date: new Date(2024, 0, 29), // 29 de enero
            time: '10:00 AM - 12:00 PM',
            topic: 'Taller de Análisis de Obras',
            type: 'Práctica',
            classroom: 'Aula 201',
            professor: 'Laura María Chaves Timarán',
            materials: ['Reproducciones de obras', 'Lupas', 'Formularios de análisis'],
            objectives: [
                'Aplicar técnicas de análisis visual',
                'Desarrollar vocabulario artístico',
                'Presentar análisis en grupo'
            ],
            preparation: 'Traer una obra de arte favorita para analizar'
        }
    ];

    const getDayName = (date) => {
        return date.toLocaleDateString('es-ES', { weekday: 'long' });
    };

    const getDateString = (date) => {
        return date.toLocaleDateString('es-ES', { 
            day: 'numeric', 
            month: 'long' 
        });
    };

    const getTimeUntilClass = (date) => {
        const now = new Date();
        const diffTime = date - now;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 0) return 'Hoy';
        if (diffDays === 1) return 'Mañana';
        if (diffDays < 7) return `En ${diffDays} días`;
        return `En ${Math.ceil(diffDays / 7)} semanas`;
    };

    const getTypeColor = (type) => {
        switch (type) {
            case 'Teoría':
                return 'theory';
            case 'Práctica':
                return 'practice';
            case 'Taller':
                return 'workshop';
            default:
                return 'default';
        }
    };

    return (
        <div className="upcoming-classes">
            <h2>Próximas Clases</h2>
            
            <div className="classes-list">
                {upcomingClasses.map(cls => (
                    <div key={cls.id} className="class-card">
                        <div className="class-header">
                            <div className="class-date-info">
                                <div className="class-day">{getDayName(cls.date)}</div>
                                <div className="class-date">{getDateString(cls.date)}</div>
                                <div className="class-time">{cls.time}</div>
                            </div>
                            <div className="class-time-until">
                                {getTimeUntilClass(cls.date)}
                            </div>
                        </div>

                        <div className="class-content">
                            <div className="class-topic">
                                <h3>{cls.topic}</h3>
                                <span className={`class-type ${getTypeColor(cls.type)}`}>
                                    {cls.type}
                                </span>
                            </div>

                            <div className="class-details">
                                <div className="detail-row">
                                    <span className="detail-label">Aula:</span>
                                    <span className="detail-value">{cls.classroom}</span>
                                </div>
                                <div className="detail-row">
                                    <span className="detail-label">Profesora:</span>
                                    <span className="detail-value">{cls.professor}</span>
                                </div>
                            </div>

                            <div className="class-materials">
                                <h4>Materiales Necesarios:</h4>
                                <ul>
                                    {cls.materials.map((material, index) => (
                                        <li key={index}>{material}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="class-objectives">
                                <h4>Objetivos de la Clase:</h4>
                                <ul>
                                    {cls.objectives.map((objective, index) => (
                                        <li key={index}>{objective}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="class-preparation">
                                <h4>Preparación:</h4>
                                <p>{cls.preparation}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="upcoming-summary">
                <div className="summary-item">
                    <span className="summary-number">{upcomingClasses.length}</span>
                    <span className="summary-label">Clases Programadas</span>
                </div>
                <div className="summary-item">
                    <span className="summary-number">
                        {upcomingClasses.filter(cls => cls.type === 'Teoría').length}
                    </span>
                    <span className="summary-label">Teóricas</span>
                </div>
                <div className="summary-item">
                    <span className="summary-number">
                        {upcomingClasses.filter(cls => cls.type === 'Práctica').length}
                    </span>
                    <span className="summary-label">Prácticas</span>
                </div>
            </div>
        </div>
    );
}

export default UpcomingClasses;
