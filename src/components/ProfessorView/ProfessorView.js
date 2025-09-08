import React, { useState } from 'react';
import './ProfessorView.css';
import { professorData } from '../../data/professorData';

const ProfessorView = () => {
    const [activeModal, setActiveModal] = useState(null);
    const [selectedStudent, setSelectedStudent] = useState(null);
    
    const { professor, course, students, upcomingClasses, recentActivity, statistics, resources } = professorData;

    const openModal = (modalType, data = null) => {
        setActiveModal(modalType);
        if (modalType === 'student') setSelectedStudent(data);
    };

    const closeModal = () => {
        setActiveModal(null);
        setSelectedStudent(null);
    };

    const handleQuickAction = (action) => {
        switch(action) {
            case 'create-assignment':
                alert('📝 Funcionalidad: Crear nueva tarea\n\nAquí podrás:\n• Definir el título y descripción\n• Establecer fecha límite\n• Asignar a estudiantes específicos\n• Configurar criterios de evaluación');
                break;
            case 'grade-assignments':
                alert('⭐ Funcionalidad: Calificar tareas\n\nAquí podrás:\n• Ver todas las tareas pendientes\n• Calificar por estudiante\n• Agregar comentarios\n• Enviar retroalimentación');
                break;
            case 'student-progress':
                alert('📊 Funcionalidad: Ver progreso detallado\n\nAquí podrás:\n• Ver estadísticas individuales\n• Comparar rendimiento\n• Generar reportes\n• Identificar áreas de mejora');
                break;
            case 'schedule-class':
                alert('📅 Funcionalidad: Programar clase\n\nAquí podrás:\n• Seleccionar fecha y hora\n• Definir tema de la clase\n• Enviar recordatorios\n• Gestionar asistencia');
                break;
            case 'resources':
                alert('📚 Funcionalidad: Gestión de recursos\n\nAquí podrás:\n• Subir materiales\n• Organizar por lecciones\n• Compartir con estudiantes\n• Gestionar versiones');
                break;
            case 'settings':
                alert('⚙️ Funcionalidad: Configuración\n\nAquí podrás:\n• Configurar notificaciones\n• Personalizar interfaz\n• Gestionar perfil\n• Configurar preferencias');
                break;
            default:
                break;
        }
    };

    return (
        <div className="professor-view">
            <div className="professor-header">
                <div className="professor-info">
                    <div className="professor-avatar">{professor.avatar}</div>
                    <div className="professor-details">
                        <h1>👨‍🏫 {professor.name}</h1>
                        <p className="professor-title">{professor.title}</p>
                        <p className="professor-bio">{professor.bio}</p>
                    </div>
                </div>
            </div>

            <div className="professor-dashboard">
                {/* Course Overview */}
                <div className="course-overview">
                    <h2>📚 Curso de Inglés - Gustavo Arteaga</h2>
                    <div className="course-card-main">
                        <div className="course-header">
                            <h3>Curso Personalizado de Inglés</h3>
                            <span className="course-code">{course.code}</span>
                        </div>
                        <div className="course-details">
                            <div className="course-info">
                                <p><strong>Semestre:</strong> {course.semester}</p>
                                <p><strong>Nivel:</strong> {course.level}</p>
                                <p><strong>Estudiantes:</strong> {course.totalStudents}</p>
                                <p><strong>Próxima Clase:</strong> {course.nextClass} a las {course.time}</p>
                                <p><strong>Descripción:</strong> Curso personalizado enfocado en comunicación práctica y desarrollo de confianza en el idioma inglés.</p>
                            </div>
                            <div className="course-progress">
                                <div className="progress-label">
                                    <span>Progreso del Curso</span>
                                    <span>{course.progress}%</span>
                                </div>
                                <div className="progress-track">
                                    <div 
                                        className="progress-fill" 
                                        style={{width: `${course.progress}%`}}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Statistics Overview */}
                <div className="stats-overview">
                    <h2>📊 Resumen del Curso</h2>
                    <div className="stats-cards">
                        <div className="stat-card" onClick={() => alert(`👥 Información de Estudiantes\n\nTotal: ${statistics.totalStudents} estudiantes\nActivos: ${statistics.activeStudents} estudiantes\nAsistencia promedio: ${statistics.averageAttendance}%`)}>
                            <div className="stat-icon">👥</div>
                            <div className="stat-info">
                                <h3>{statistics.totalStudents}</h3>
                                <p>Estudiantes</p>
                            </div>
                        </div>
                        <div className="stat-card" onClick={() => alert(`📚 Progreso de Clases\n\nCompletadas: ${statistics.completedClasses} clases\nTotal: ${course.totalLessons} lecciones\nProgreso: ${course.progress}%`)}>
                            <div className="stat-icon">📚</div>
                            <div className="stat-info">
                                <h3>{statistics.completedClasses}</h3>
                                <p>Clases Completadas</p>
                            </div>
                        </div>
                        <div className="stat-card" onClick={() => alert(`⭐ Rendimiento Académico\n\nPromedio general: ${statistics.averageGrade}%\nTareas calificadas: ${statistics.gradedAssignments}\nTareas pendientes: ${statistics.pendingGrading}`)}>
                            <div className="stat-icon">⭐</div>
                            <div className="stat-info">
                                <h3>{statistics.averageGrade}</h3>
                                <p>Promedio General</p>
                            </div>
                        </div>
                        <div className="stat-card" onClick={() => alert(`📝 Tareas Pendientes\n\nPor calificar: ${statistics.pendingGrading} tareas\nTotal asignadas: ${statistics.totalAssignments} tareas\nCalificadas: ${statistics.gradedAssignments} tareas`)}>
                            <div className="stat-icon">📝</div>
                            <div className="stat-info">
                                <h3>{statistics.pendingGrading}</h3>
                                <p>Tareas por Calificar</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Students Management */}
                <div className="students-section">
                    <h2>👥 Mis Cursos de Inglés</h2>
                    <div className="courses-grid">
                        {students.map(student => (
                            <div key={student.id} className="course-card" onClick={() => openModal('student', student)}>
                                <div className="course-header">
                                    <div className="student-avatar">
                                        {student.name.charAt(0)}
                                    </div>
                                    <div className="course-title">
                                        <h3>{student.course}</h3>
                                        <p className="student-name">{student.name}</p>
                                    </div>
                                </div>
                                <div className="course-info">
                                    <div className="course-details">
                                        <p><strong>Nivel:</strong> {student.level}</p>
                                        <p><strong>Email:</strong> {student.email}</p>
                                        <p><strong>Última Actividad:</strong> {student.lastActivity}</p>
                                    </div>
                                    <div className="course-progress">
                                        <div className="progress-label">
                                            <span>Progreso del Estudiante</span>
                                            <span>{student.progress}%</span>
                                        </div>
                                        <div className="progress-track">
                                            <div
                                                className="progress-fill"
                                                style={{width: `${student.progress}%`}}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="course-stats">
                                    <div className="stat-item">
                                        <span className="stat-label">Progreso</span>
                                        <span className="stat-value">{student.progress}%</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-label">Promedio</span>
                                        <span className="stat-value">{student.averageGrade}%</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-label">Lecciones</span>
                                        <span className="stat-value">{student.completedLessons}/{student.totalLessons}</span>
                                    </div>
                                </div>
                                <div className="course-content">
                                    <h4>📚 Contenido de la Clase</h4>
                                    <div className="content-topics">
                                        {student.currentTopics.map((topic, index) => (
                                            <span key={index} className="content-tag">{topic}</span>
                                        ))}
                                    </div>
                                    <p className="content-description">{student.classDescription}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Upcoming Classes */}
                <div className="upcoming-classes">
                    <h2>📅 Próximas Clases del Curso</h2>
                    <div className="classes-list">
                        {upcomingClasses.map(classItem => (
                            <div key={classItem.id} className="class-item">
                                <div className="class-time">
                                    <div className="class-date">{classItem.date}</div>
                                    <div className="class-hour">{classItem.time}</div>
                                </div>
                                        <div className="class-info">
                                            <h4>Lección {classItem.lesson}: {classItem.title}</h4>
                                            <p><strong>Duración:</strong> {classItem.duration}</p>
                                            <p><strong>Ubicación:</strong> {classItem.location}</p>
                                            <p><strong>Estudiantes:</strong> {classItem.students}</p>
                                            <div className="class-topics">
                                                {classItem.topics.map((topic, index) => (
                                                    <span key={index} className="topic-tag">{topic}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="class-actions">
                                            <button 
                                                className="btn-primary" 
                                                onClick={() => alert(`🎥 Iniciando clase: ${classItem.title}\n\nFecha: ${classItem.date}\nHora: ${classItem.time}\nDuración: ${classItem.duration}\nUbicación: ${classItem.location}\nEstudiantes: ${classItem.students}\n\nTemas a cubrir:\n${classItem.topics.map(topic => `• ${topic}`).join('\n')}`)}
                                            >
                                                🎥 Iniciar Clase
                                            </button>
                                            <button 
                                                className="btn-secondary"
                                                onClick={() => alert(`📝 Preparando clase: ${classItem.title}\n\nUbicación: ${classItem.location}\nMateriales necesarios:\n${classItem.materials.map(material => `• ${material}`).join('\n')}\n\nTemas a preparar:\n${classItem.topics.map(topic => `• ${topic}`).join('\n')}`)}
                                            >
                                                📝 Preparar
                                            </button>
                                        </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="recent-activity">
                    <h2>🔄 Actividad Reciente del Curso</h2>
                    <div className="activity-list">
                        {recentActivity.map(activity => (
                            <div 
                                key={activity.id} 
                                className="activity-item"
                                onClick={() => {
                                    const activityType = activity.type === 'assignment_submitted' ? 'Tarea Enviada' :
                                                       activity.type === 'class_completed' ? 'Clase Completada' :
                                                       'Tarea Calificada';
                                    alert(`${activityType}\n\nEstudiante: ${activity.student}\nActividad: ${activity.assignment || activity.class}\nFecha: ${activity.date}\nHora: ${activity.time}${activity.grade ? `\nCalificación: ${activity.grade}` : ''}`);
                                }}
                            >
                                <div className={`activity-icon ${activity.type}`}>
                                    {activity.type === 'assignment_submitted' && '📝'}
                                    {activity.type === 'class_completed' && '✅'}
                                    {activity.type === 'assignment_graded' && '⭐'}
                                </div>
                                <div className="activity-content">
                                    <h4>{activity.student} - {activity.assignment || activity.class}</h4>
                                    <p>{activity.date} • {activity.time}</p>
                                    {activity.grade && <p className="grade">Calificación: {activity.grade}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="quick-actions">
                    <h2>⚡ Acciones Rápidas del Curso</h2>
                    <div className="action-buttons">
                        <button className="action-btn" onClick={() => handleQuickAction('create-assignment')}>
                            📝 Crear Tarea
                        </button>
                        <button className="action-btn" onClick={() => handleQuickAction('grade-assignments')}>
                            ⭐ Calificar Tareas
                        </button>
                        <button className="action-btn" onClick={() => handleQuickAction('student-progress')}>
                            📊 Ver Progreso
                        </button>
                        <button className="action-btn" onClick={() => handleQuickAction('schedule-class')}>
                            📅 Programar Clase
                        </button>
                        <button className="action-btn" onClick={() => handleQuickAction('resources')}>
                            📚 Recursos
                        </button>
                        <button className="action-btn" onClick={() => handleQuickAction('settings')}>
                            ⚙️ Configuración
                        </button>
                    </div>
                </div>
            </div>

            {/* Modals */}
            {activeModal === 'student' && selectedStudent && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content large" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>👤 {selectedStudent.name}</h3>
                            <button className="close-btn" onClick={closeModal}>×</button>
                        </div>
                        <div className="modal-body">
                            <div className="student-details">
                                <div className="student-info-section">
                                    <h4>Información Personal</h4>
                                    <p><strong>Email:</strong> {selectedStudent.email}</p>
                                    <p><strong>Nivel:</strong> {selectedStudent.level}</p>
                                    <p><strong>Última Actividad:</strong> {selectedStudent.lastActivity}</p>
                                </div>
                                
                                <div className="student-progress-section">
                                    <h4>Progreso del Estudiante</h4>
                                    <div className="progress-stats">
                                        <div className="progress-item">
                                            <span>Progreso General</span>
                                            <div className="progress-bar">
                                                <div className="progress-fill" style={{width: `${selectedStudent.progress}%`}}></div>
                                            </div>
                                            <span>{selectedStudent.progress}%</span>
                                        </div>
                                        <div className="progress-item">
                                            <span>Asistencia</span>
                                            <div className="progress-bar">
                                                <div className="progress-fill" style={{width: `${selectedStudent.attendance}%`}}></div>
                                            </div>
                                            <span>{selectedStudent.attendance}%</span>
                                        </div>
                                        <div className="progress-item">
                                            <span>Promedio General</span>
                                            <div className="progress-bar">
                                                <div className="progress-fill" style={{width: `${selectedStudent.averageGrade}%`}}></div>
                                            </div>
                                            <span>{selectedStudent.averageGrade}%</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="student-notes-section">
                                    <h4>Notas del Profesor</h4>
                                    <p>{selectedStudent.notes}</p>
                                </div>

                                <div className="student-strengths-section">
                                    <h4>Fortalezas</h4>
                                    <div className="tags">
                                        {selectedStudent.strengths.map((strength, index) => (
                                            <span key={index} className="tag positive">{strength}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="student-improvements-section">
                                    <h4>Áreas a Mejorar</h4>
                                    <div className="tags">
                                        {selectedStudent.areasToImprove.map((area, index) => (
                                            <span key={index} className="tag improvement">{area}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfessorView;
