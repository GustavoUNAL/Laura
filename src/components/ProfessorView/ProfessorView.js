import React, { useState } from 'react';
import './ProfessorView.css';
import { professorData } from '../../data/professorData';
import { useEnglishCourse } from '../../hooks/useEnglishCourse';

const ProfessorView = () => {
    const [activeModal, setActiveModal] = useState(null);
    const [selectedStudent, setSelectedStudent] = useState(null);
    
    const { professor, course, students, upcomingClasses, recentActivity, statistics, resources } = professorData;
    const {
        currentLesson,
        lessons,
        isLoading,
        completeLesson,
        submitAssignment,
        getUpcomingClasses: getStudentUpcomingClasses,
        getStatistics: getStudentStatistics,
        getPastClasses: getStudentPastClasses
    } = useEnglishCourse();

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
                            {/* Progress Overview */}
                            <div className="progress-overview">
                                <h2>📊 Su Progreso en Inglés</h2>
                                <div className="progress-cards">
                                    <div className="progress-card clickable" onClick={() => alert('📚 Lecciones Completadas\n\n4 de 12 lecciones completadas\nProgreso: 33%')}>
                                        <div className="progress-icon">📚</div>
                                        <div className="progress-info">
                                            <h3>4/12</h3>
                                            <p>Lecciones Completadas</p>
                                        </div>
                                    </div>
                                    <div className="progress-card clickable" onClick={() => alert('📈 Progreso del Curso\n\n33% del curso completado\n8 lecciones restantes')}>
                                        <div className="progress-icon">📈</div>
                                        <div className="progress-info">
                                            <h3>33%</h3>
                                            <p>Progreso del Curso</p>
                                        </div>
                                    </div>
                                    <div className="progress-card clickable" onClick={() => alert('🎯 Objetivos Cumplidos\n\n1 de 5 objetivos completados\nObjetivo actual: Professional Interview')}>
                                        <div className="progress-icon">🎯</div>
                                        <div className="progress-info">
                                            <h3>1</h3>
                                            <p>Objetivos Cumplidos</p>
                                        </div>
                                    </div>
                                    <div className="progress-card clickable" onClick={() => alert('⏱️ Tiempo de Estudio\n\n6 horas totales de estudio\nPromedio: 1.5 horas por semana')}>
                                        <div className="progress-icon">⏱️</div>
                                        <div className="progress-info">
                                            <h3>6h</h3>
                                            <p>Tiempo de Estudio</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Professor Actions */}
                            <div className="professor-actions">
                                <h2>⚡ Acciones del Profesor</h2>
                                <div className="actions-grid">
                                    <button className="action-btn" onClick={() => alert('📅 Agregar Nueva Clase\n\n• Programar fecha y hora\n• Seleccionar modalidad (presencial/virtual)\n• Definir temas y objetivos\n• Enviar recordatorio al estudiante')}>
                                        📅 Agregar Clase
                                    </button>
                                    <button className="action-btn" onClick={() => alert('📝 Crear Tarea\n\n• Asignar nueva tarea\n• Establecer fecha límite\n• Definir criterios de evaluación\n• Enviar notificación')}>
                                        📝 Crear Tarea
                                    </button>
                                    <button className="action-btn" onClick={() => alert('📊 Ver Estadísticas Detalladas\n\n• Progreso del estudiante\n• Asistencia y puntualidad\n• Calificaciones y rendimiento\n• Tiempo de estudio')}>
                                        📊 Ver Estadísticas
                                    </button>
                                    <button className="action-btn" onClick={() => alert('📁 Subir Material\n\n• Presentaciones\n• Documentos\n• Videos\n• Ejercicios\n• Recursos adicionales')}>
                                        📁 Subir Material
                                    </button>
                                    <button className="action-btn" onClick={() => alert('💬 Enviar Mensaje\n\n• Comunicación directa\n• Feedback personalizado\n• Recordatorios\n• Motivación')}>
                                        💬 Enviar Mensaje
                                    </button>
                                    <button className="action-btn" onClick={() => alert('📋 Generar Reporte\n\n• Reporte de progreso\n• Evaluación del estudiante\n• Recomendaciones\n• Exportar PDF')}>
                                        📋 Generar Reporte
                                    </button>
                                </div>
                            </div>

                            {/* Next Class */}
                            <div className="next-class-section">
                                <h2>🎯 Próxima Clase</h2>
                                <div className="next-class-card">
                                    <div className="next-class-info">
                                        <div className="next-class-header">
                                            <h3>Virtual Meet</h3>
                                            <span className="class-type">Virtual</span>
                                        </div>
                                        <div className="next-class-details">
                                            <p><strong>Fecha:</strong> 10 de Septiembre, 2025</p>
                                            <p><strong>Hora:</strong> 7:00 AM</p>
                                            <p><strong>Lección:</strong> Lección 6: Saludos y Presentaciones</p>
                                        </div>
                                        <div className="next-class-topics">
                                            <h4>Temas a Cubrir:</h4>
                                            <div className="topics-list">
                                                <span className="topic-tag">Greetings</span>
                                                <span className="topic-tag">Introductions</span>
                                                <span className="topic-tag">Conversations</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="next-class-actions">
                                        <button className="btn-primary" onClick={() => alert('📖 Ver Contenido\n\nAcceso a materiales de la clase:\n• Presentación de saludos\n• Ejercicios de conversación\n• Lista de vocabulario')}>
                                            📖 Ver Contenido
                                        </button>
                                        <button className="btn-secondary" onClick={() => alert('📝 Editar Notas\n\nAgregar notas personales:\n• Puntos importantes\n• Dudas\n• Recordatorios')}>
                                            📝 Editar Notas
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Past Classes */}
                            <div className="past-classes-section">
                                <h2>📚 Clases Pasadas</h2>
                                <div className="past-classes-grid">
                                    <div className="past-class-card" onClick={() => alert('📖 Clase 4: Presentación Personal\n\nFecha: 1 de Septiembre, 2025\nHora: 7:00 AM\nModalidad: Virtual\n\nTemas cubiertos:\n• Presentación personal\n• Información básica\n• Conversación inicial\n\nNotas del profesor:\n• Excelente participación\n• Buen dominio del vocabulario\n• Necesita mejorar pronunciación')}>
                                        <div className="class-header">
                                            <div className="class-icon">📖</div>
                                            <div className="class-info">
                                                <h3>Clase 4: Presentación Personal</h3>
                                                <p className="class-date">1 de Septiembre, 2025</p>
                                            </div>
                                        </div>
                                        <div className="class-content-info">
                                            <div className="class-details">
                                                <p><strong>Modalidad:</strong> Virtual</p>
                                                <p><strong>Hora:</strong> 7:00 AM</p>
                                                <p><strong>Duración:</strong> 60 min</p>
                                                <p><strong>Asistencia:</strong> ✅ Presente</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="past-class-card" onClick={() => alert('📖 Clase 3: Saludos y Despedidas II\n\nFecha: 29 de Agosto, 2025\nHora: 7:00 AM\nModalidad: Virtual\n\nTemas cubiertos:\n• Saludos formales e informales\n• Despedidas comunes\n• Expresiones de cortesía\n\nNotas del profesor:\n• Muy participativo\n• Buen uso de expresiones\n• Practicar más conversación')}>
                                        <div className="class-header">
                                            <div className="class-icon">📖</div>
                                            <div className="class-info">
                                                <h3>Clase 3: Saludos y Despedidas II</h3>
                                                <p className="class-date">29 de Agosto, 2025</p>
                                            </div>
                                        </div>
                                        <div className="class-content-info">
                                            <div className="class-details">
                                                <p><strong>Modalidad:</strong> Virtual</p>
                                                <p><strong>Hora:</strong> 7:00 AM</p>
                                                <p><strong>Duración:</strong> 60 min</p>
                                                <p><strong>Asistencia:</strong> ✅ Presente</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="past-class-card" onClick={() => alert('📖 Clase 2: Saludos y Despedidas I\n\nFecha: 28 de Agosto, 2025\nHora: 7:00 AM\nModalidad: Virtual\n\nTemas cubiertos:\n• Saludos básicos\n• Despedidas simples\n• Preguntas comunes\n\nNotas del profesor:\n• Buen progreso\n• Necesita más práctica\n• Muy motivado')}>
                                        <div className="class-header">
                                            <div className="class-icon">📖</div>
                                            <div className="class-info">
                                                <h3>Clase 2: Saludos y Despedidas I</h3>
                                                <p className="class-date">28 de Agosto, 2025</p>
                                            </div>
                                        </div>
                                        <div className="class-content-info">
                                            <div className="class-details">
                                                <p><strong>Modalidad:</strong> Virtual</p>
                                                <p><strong>Hora:</strong> 7:00 AM</p>
                                                <p><strong>Duración:</strong> 60 min</p>
                                                <p><strong>Asistencia:</strong> ✅ Presente</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="past-class-card" onClick={() => alert('📖 Clase 1: Introducción\n\nFecha: 21 de Agosto, 2025\nHora: 4:00 PM\nModalidad: Presencial\n\nTemas cubiertos:\n• Presentación del curso\n• Objetivos de aprendizaje\n• Metodología\n• Evaluación inicial\n\nNotas del profesor:\n• Primera clase exitosa\n• Buen nivel inicial\n• Muy entusiasta')}>
                                        <div className="class-header">
                                            <div className="class-icon">📖</div>
                                            <div className="class-info">
                                                <h3>Clase 1: Introducción</h3>
                                                <p className="class-date">21 de Agosto, 2025</p>
                                            </div>
                                        </div>
                                        <div className="class-content-info">
                                            <div className="class-details">
                                                <p><strong>Modalidad:</strong> Presencial</p>
                                                <p><strong>Hora:</strong> 4:00 PM</p>
                                                <p><strong>Duración:</strong> 60 min</p>
                                                <p><strong>Asistencia:</strong> ✅ Presente</p>
                                            </div>
                                        </div>
                                    </div>
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
