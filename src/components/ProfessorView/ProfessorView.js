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
            {/* Courses Overview */}
            <div className="courses-overview">
                <div className="course-header-section">
                    <div className="course-header-content">
                        <h1>📚 Mis Cursos</h1>
                        <p>Bienvenido de vuelta! Gestiona tus cursos de inglés.</p>
                    </div>
                </div>
                <div className="courses-grid">
                    {/* Curso de Gustavo */}
                    <div className="course-card" onClick={() => openModal('gustavo-course')}>
                        <div className="course-header">
                            <div className="course-icon">🎓</div>
                            <div className="course-info">
                                <h3>Curso de Inglés - Gustavo Arteaga</h3>
                                <p className="course-subtitle">Curso Personalizado</p>
                            </div>
                        </div>
                        <div className="course-content-info">
                            <div className="course-details">
                                <p><strong>Estudiantes:</strong> 1 estudiante</p>
                                <p><strong>Duración:</strong> 5 semanas</p>
                                <p><strong>Progreso:</strong> 33% completado</p>
                            </div>
                            <div className="course-progress">
                                <div className="progress-indicator">
                                    <span>Progreso del Curso: 33%</span>
                                    <div className="progress-bar">
                                        <div className="progress-fill" style={{width: '33%'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="course-stats">
                            <div className="stat-item">
                                <span className="stat-label">Clases</span>
                                <span className="stat-value">4/12</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Promedio</span>
                                <span className="stat-value">87.5%</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Activos</span>
                                <span className="stat-value">1</span>
                            </div>
                        </div>
                    </div>

                    {/* Curso de Fernanda */}
                    <div className="course-card" onClick={() => alert('📚 Curso de Fernanda\n\nEste curso está en desarrollo.\nPróximamente disponible.')}>
                        <div className="course-header">
                            <div className="course-icon">👩‍🎓</div>
                            <div className="course-info">
                                <h3>Curso de Inglés - Fernanda</h3>
                                <p className="course-subtitle">Curso Básico</p>
                            </div>
                        </div>
                        <div className="course-content-info">
                            <div className="course-details">
                                <p><strong>Estudiantes:</strong> 1 estudiante</p>
                                <p><strong>Duración:</strong> 4 semanas</p>
                                <p><strong>Progreso:</strong> 0% completado</p>
                            </div>
                            <div className="course-progress">
                                <div className="progress-indicator">
                                    <span>Progreso del Curso: 0%</span>
                                    <div className="progress-bar">
                                        <div className="progress-fill" style={{width: '0%'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="course-stats">
                            <div className="stat-item">
                                <span className="stat-label">Clases</span>
                                <span className="stat-value">0/8</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Promedio</span>
                                <span className="stat-value">-</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Activos</span>
                                <span className="stat-value">1</span>
                            </div>
                        </div>
                    </div>

                    {/* Curso de Sebastián */}
                    <div className="course-card" onClick={() => alert('📚 Curso de Sebastián\n\nEste curso está en desarrollo.\nPróximamente disponible.')}>
                        <div className="course-header">
                            <div className="course-icon">👨‍🎓</div>
                            <div className="course-info">
                                <h3>Curso de Inglés - Sebastián</h3>
                                <p className="course-subtitle">Curso Intermedio</p>
                            </div>
                        </div>
                        <div className="course-content-info">
                            <div className="course-details">
                                <p><strong>Estudiantes:</strong> 1 estudiante</p>
                                <p><strong>Duración:</strong> 6 semanas</p>
                                <p><strong>Progreso:</strong> 0% completado</p>
                            </div>
                            <div className="course-progress">
                                <div className="progress-indicator">
                                    <span>Progreso del Curso: 0%</span>
                                    <div className="progress-bar">
                                        <div className="progress-fill" style={{width: '0%'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="course-stats">
                            <div className="stat-item">
                                <span className="stat-label">Clases</span>
                                <span className="stat-value">0/10</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Promedio</span>
                                <span className="stat-value">-</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Activos</span>
                                <span className="stat-value">1</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modals */}
            {activeModal === 'gustavo-course' && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content large" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>🎓 Curso de Inglés - Gustavo Arteaga</h3>
                            <button className="close-btn" onClick={closeModal}>×</button>
                        </div>
                        <div className="modal-body">
                            <div className="course-details-section">
                                <h4>📚 Información del Curso</h4>
                                <div className="course-info-grid">
                                    <div className="info-item">
                                        <span className="info-label">Duración:</span>
                                        <span className="info-value">5 semanas</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="info-label">Lecciones:</span>
                                        <span className="info-value">12 lecciones</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="info-label">Progreso:</span>
                                        <span className="info-value">33% completado</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="info-label">Estudiantes:</span>
                                        <span className="info-value">1 estudiante</span>
                                    </div>
                                </div>
                            </div>

                            <div className="students-section">
                                <h4>👥 Estudiantes del Curso</h4>
                                <div className="students-grid">
                                    {students.map(student => (
                                        <div key={student.id} className="student-card" onClick={() => openModal('student', student)}>
                                            <div className="student-header">
                                                <div className="student-avatar">
                                                    {student.name.charAt(0)}
                                                </div>
                                                <div className="student-info">
                                                    <h5>{student.name}</h5>
                                                    <p>{student.email}</p>
                                                </div>
                                            </div>
                                            <div className="student-progress">
                                                <div className="progress-item">
                                                    <span>Progreso: {student.progress}%</span>
                                                    <div className="progress-bar">
                                                        <div className="progress-fill" style={{width: `${student.progress}%`}}></div>
                                                    </div>
                                                </div>
                                                <div className="student-stats">
                                                    <div className="stat">
                                                        <span className="stat-label">Promedio</span>
                                                        <span className="stat-value">{student.averageGrade}%</span>
                                                    </div>
                                                    <div className="stat">
                                                        <span className="stat-label">Lecciones</span>
                                                        <span className="stat-value">{student.completedLessons}/{student.totalLessons}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

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
