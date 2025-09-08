import React from 'react';
import './StudentDashboard.css';
import CourseInfo from '../CourseInfo/CourseInfo';
import ClassCalendar from '../ClassCalendar/ClassCalendar';
import ProgressStats from '../ProgressStats/ProgressStats';
import UpcomingClasses from '../UpcomingClasses/UpcomingClasses';

function StudentDashboard({ student, onLogout }) {
    const handleLiveClass = () => {
        // Aquí puedes agregar la lógica para abrir la clase en vivo
        // Por ejemplo, abrir una nueva ventana o redirigir a una URL
        window.open('#', '_blank'); // Reemplaza '#' con la URL de la clase en vivo
    };

    return (
        <div className="student-dashboard">
            <div className="dashboard-header">
                <div className="student-info">
                    <h1>Bienvenida, {student.name}</h1>
                    <p>Curso: {student.course} - Semestre {student.semester}</p>
                </div>
                <div className="header-actions">
                    <button onClick={handleLiveClass} className="live-class-button">
                        📹 Clase en Vivo
                    </button>
                    <button onClick={onLogout} className="logout-button">
                        Cerrar Sesión
                    </button>
                </div>
            </div>

            <div className="dashboard-content">
                <div className="dashboard-grid">
                    <div className="grid-item course-info">
                        <CourseInfo student={student} />
                    </div>
                    
                    <div className="grid-item calendar">
                        <ClassCalendar />
                    </div>
                    
                    <div className="grid-item progress">
                        <ProgressStats student={student} />
                    </div>
                    
                    <div className="grid-item upcoming">
                        <UpcomingClasses student={student} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentDashboard;
