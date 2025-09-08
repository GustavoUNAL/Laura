import React, { useState } from 'react';
import './ClassCalendar.css';

function ClassCalendar() {
    const [currentDate, setCurrentDate] = useState(new Date());
    
    // Datos de ejemplo de clases
    const classes = [
        {
            id: 1,
            date: new Date(2024, 0, 15), // 15 de enero
            time: '10:00 AM',
            topic: 'Introducción al Arte Clásico',
            type: 'Teoría',
            status: 'completed'
        },
        {
            id: 2,
            date: new Date(2024, 0, 17), // 17 de enero
            time: '10:00 AM',
            topic: 'Arte Griego y Romano',
            type: 'Teoría',
            status: 'completed'
        },
        {
            id: 3,
            date: new Date(2024, 0, 22), // 22 de enero
            time: '10:00 AM',
            topic: 'Arte Medieval',
            type: 'Teoría',
            status: 'upcoming'
        },
        {
            id: 4,
            date: new Date(2024, 0, 24), // 24 de enero
            time: '10:00 AM',
            topic: 'Renacimiento Italiano',
            type: 'Teoría',
            status: 'upcoming'
        },
        {
            id: 5,
            date: new Date(2024, 0, 29), // 29 de enero
            time: '10:00 AM',
            topic: 'Taller de Análisis',
            type: 'Práctica',
            status: 'upcoming'
        }
    ];

    const getMonthName = (date) => {
        return date.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });
    };

    const getDayName = (date) => {
        return date.toLocaleDateString('es-ES', { weekday: 'long' });
    };

    const getStatusClass = (status) => {
        switch (status) {
            case 'completed':
                return 'completed';
            case 'upcoming':
                return 'upcoming';
            case 'cancelled':
                return 'cancelled';
            default:
                return '';
        }
    };

    const getStatusText = (status) => {
        switch (status) {
            case 'completed':
                return 'Completada';
            case 'upcoming':
                return 'Próxima';
            case 'cancelled':
                return 'Cancelada';
            default:
                return '';
        }
    };

    const upcomingClasses = classes.filter(cls => cls.status === 'upcoming');
    const completedClasses = classes.filter(cls => cls.status === 'completed');

    return (
        <div className="class-calendar">
            <h2>Calendario de Clases</h2>
            
            <div className="calendar-header">
                <h3>{getMonthName(currentDate)}</h3>
            </div>

            <div className="calendar-stats">
                <div className="stat-item">
                    <span className="stat-number">{upcomingClasses.length}</span>
                    <span className="stat-label">Próximas</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">{completedClasses.length}</span>
                    <span className="stat-label">Completadas</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">{classes.length}</span>
                    <span className="stat-label">Total</span>
                </div>
            </div>

            <div className="classes-list">
                {classes.map(cls => (
                    <div key={cls.id} className={`class-item ${getStatusClass(cls.status)}`}>
                        <div className="class-date">
                            <span className="day">{cls.date.getDate()}</span>
                            <span className="month">{cls.date.toLocaleDateString('es-ES', { month: 'short' })}</span>
                        </div>
                        
                        <div className="class-details">
                            <div className="class-time">
                                {cls.time} - {getDayName(cls.date)}
                            </div>
                            <div className="class-topic">{cls.topic}</div>
                            <div className="class-type">{cls.type}</div>
                        </div>
                        
                        <div className="class-status">
                            <span className={`status-badge ${getStatusClass(cls.status)}`}>
                                {getStatusText(cls.status)}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ClassCalendar;
