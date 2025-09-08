import React from 'react';
import './ProgressStats.css';

function ProgressStats({ student }) {
    // Datos de ejemplo de progreso
    const progressData = {
        overallProgress: 65,
        assignments: {
            completed: 8,
            total: 12,
            percentage: 67
        },
        attendance: {
            present: 15,
            total: 18,
            percentage: 83
        },
        grades: {
            average: 4.2,
            highest: 4.8,
            lowest: 3.5
        },
        recentActivities: [
            {
                id: 1,
                type: 'assignment',
                title: 'Análisis de Obra Renacentista',
                grade: 4.5,
                date: '2024-01-10',
                status: 'completed'
            },
            {
                id: 2,
                type: 'quiz',
                title: 'Quiz Arte Medieval',
                grade: 4.0,
                date: '2024-01-08',
                status: 'completed'
            },
            {
                id: 3,
                type: 'participation',
                title: 'Participación en Clase',
                grade: 4.8,
                date: '2024-01-05',
                status: 'completed'
            }
        ]
    };

    const getGradeColor = (grade) => {
        if (grade >= 4.5) return 'excellent';
        if (grade >= 4.0) return 'good';
        if (grade >= 3.5) return 'average';
        return 'poor';
    };

    const getActivityIcon = (type) => {
        switch (type) {
            case 'assignment':
                return '📝';
            case 'quiz':
                return '📋';
            case 'participation':
                return '💬';
            default:
                return '📄';
        }
    };

    return (
        <div className="progress-stats">
            <h2>Estadísticas de Progreso</h2>
            
            <div className="overall-progress">
                <div className="progress-circle">
                    <div className="progress-percentage">
                        {progressData.overallProgress}%
                    </div>
                    <div className="progress-label">Progreso General</div>
                </div>
            </div>

            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-header">
                        <span className="stat-icon">📚</span>
                        <span className="stat-title">Asignaciones</span>
                    </div>
                    <div className="stat-content">
                        <div className="stat-numbers">
                            {progressData.assignments.completed}/{progressData.assignments.total}
                        </div>
                        <div className="stat-percentage">
                            {progressData.assignments.percentage}%
                        </div>
                    </div>
                    <div className="progress-bar">
                        <div 
                            className="progress-fill" 
                            style={{ width: `${progressData.assignments.percentage}%` }}
                        ></div>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-header">
                        <span className="stat-icon">✅</span>
                        <span className="stat-title">Asistencia</span>
                    </div>
                    <div className="stat-content">
                        <div className="stat-numbers">
                            {progressData.attendance.present}/{progressData.attendance.total}
                        </div>
                        <div className="stat-percentage">
                            {progressData.attendance.percentage}%
                        </div>
                    </div>
                    <div className="progress-bar">
                        <div 
                            className="progress-fill" 
                            style={{ width: `${progressData.attendance.percentage}%` }}
                        ></div>
                    </div>
                </div>
            </div>

            <div className="grades-section">
                <h3>Calificaciones</h3>
                <div className="grades-grid">
                    <div className="grade-item">
                        <span className="grade-label">Promedio</span>
                        <span className={`grade-value ${getGradeColor(progressData.grades.average)}`}>
                            {progressData.grades.average}
                        </span>
                    </div>
                    <div className="grade-item">
                        <span className="grade-label">Más Alta</span>
                        <span className={`grade-value ${getGradeColor(progressData.grades.highest)}`}>
                            {progressData.grades.highest}
                        </span>
                    </div>
                    <div className="grade-item">
                        <span className="grade-label">Más Baja</span>
                        <span className={`grade-value ${getGradeColor(progressData.grades.lowest)}`}>
                            {progressData.grades.lowest}
                        </span>
                    </div>
                </div>
            </div>

            <div className="recent-activities">
                <h3>Actividades Recientes</h3>
                <div className="activities-list">
                    {progressData.recentActivities.map(activity => (
                        <div key={activity.id} className="activity-item">
                            <div className="activity-icon">
                                {getActivityIcon(activity.type)}
                            </div>
                            <div className="activity-details">
                                <div className="activity-title">{activity.title}</div>
                                <div className="activity-date">
                                    {new Date(activity.date).toLocaleDateString('es-ES')}
                                </div>
                            </div>
                            <div className={`activity-grade ${getGradeColor(activity.grade)}`}>
                                {activity.grade}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProgressStats;
