import React, { useState } from 'react';
import './StudentView.css';
import { useEnglishCourse } from '../../hooks/useEnglishCourse';

const StudentView = () => {
    const {
        currentLesson,
        lessons,
        isLoading,
        completeLesson,
        submitAssignment,
        getUpcomingClasses,
        getStatistics,
        getPastClasses
    } = useEnglishCourse();

    const [activeModal, setActiveModal] = useState(null);
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [selectedAssignment, setSelectedAssignment] = useState(null);
    const [studentNotes, setStudentNotes] = useState({});

    const statistics = getStatistics();
    const upcomingClasses = getUpcomingClasses();
    const pastClasses = getPastClasses();

    // Funciones para acciones rápidas
    const handleQuickAction = (action) => {
        switch(action) {
            case 'calendar':
                setActiveModal('calendar');
                break;
            case 'library':
                setActiveModal('library');
                break;
            case 'chat':
                setActiveModal('chat');
                break;
            case 'stats':
                setActiveModal('stats');
                break;
            case 'practice':
                setActiveModal('practice');
                break;
            case 'resources':
                setActiveModal('resources');
                break;
            case 'current-lesson':
                if (currentLesson) {
                    setSelectedLesson(currentLesson);
                    setActiveModal('lesson');
                }
                break;
            default:
                alert('Acción no disponible');
        }
    };

    const handleCompleteLesson = () => {
        if (currentLesson) {
            completeLesson(currentLesson.id);
            setActiveModal(null);
        }
    };

    const handleSubmitAssignment = (assignmentId) => {
        const grade = Math.floor(Math.random() * 20) + 80; // Simular calificación
        submitAssignment(assignmentId, grade);
        setActiveModal(null);
    };

    const openModal = (modalType, data = null) => {
        setActiveModal(modalType);
        if (modalType === 'past-class') setSelectedLesson(data);
    };

    const closeModal = () => {
        setActiveModal(null);
        setSelectedLesson(null);
        setSelectedAssignment(null);
    };

    const handleSaveNotes = (lessonId) => {
        const textarea = document.querySelector('.student-notes-textarea');
        if (textarea) {
            const notes = textarea.value;
            setStudentNotes(prev => ({
                ...prev,
                [lessonId]: notes
            }));
            alert('✅ Notas guardadas exitosamente!\n\nTus notas personales han sido guardadas para esta clase.');
        }
    };

    const getStudentNotes = (lessonId) => {
        return studentNotes[lessonId] || '';
    };

    return (
        <div className="student-view">
            <div className="student-header">
                <div className="course-title-section">
                    <h1>🎓 Mi Curso de Inglés</h1>
                    <p>Bienvenido de vuelta! Continúa tu aprendizaje del inglés.</p>
                </div>
                <div className="course-dates">
                    <div className="date-item">
                        <span className="date-label">📅 Inicio del Curso</span>
                        <span className="date-value">21 de Agosto, 2025</span>
                    </div>
                    <div className="date-item">
                        <span className="date-label">🏁 Fin del Curso</span>
                        <span className="date-value">24 de Septiembre, 2025</span>
                    </div>
                    <div className="date-item">
                        <span className="date-label">⏱️ Duración</span>
                        <span className="date-value">5 semanas</span>
                    </div>
                    <div className="date-item">
                        <span className="date-label">📚 Total de Lecciones</span>
                        <span className="date-value">12 lecciones</span>
                    </div>
                </div>
            </div>

            <div className="student-dashboard">
                {/* Progress Overview - Primero y con más indicadores */}
                <div className="progress-overview">
                    <h2>📊 Mi Progreso en Inglés</h2>
                    <div className="progress-cards">
                        <div className="progress-card clickable" onClick={() => openModal('lessons-progress')}>
                            <div className="progress-icon">📚</div>
                            <div className="progress-info">
                                <h3>{statistics.completedLessons}/{statistics.totalLessons}</h3>
                                <p>Lecciones Completadas</p>
                            </div>
                        </div>
                        <div className="progress-card clickable" onClick={() => openModal('course-progress')}>
                            <div className="progress-icon">📈</div>
                            <div className="progress-info">
                                <h3>{Math.round((statistics.completedLessons / statistics.totalLessons) * 100)}%</h3>
                                <p>Progreso del Curso</p>
                            </div>
                        </div>
                        <div className="progress-card clickable" onClick={() => openModal('objectives')}>
                            <div className="progress-icon">🎯</div>
                            <div className="progress-info">
                                <h3>{statistics.objectivesCompleted}</h3>
                                <p>Objetivos Cumplidos</p>
                            </div>
                        </div>
                        <div className="progress-card">
                            <div className="progress-icon">⏱️</div>
                            <div className="progress-info">
                                <h3>{statistics.totalStudyTime}</h3>
                                <p>Tiempo de Estudio</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Próxima Clase */}
                <div className="next-class-card">
                    <div className="next-class-header">
                        <h3>🎯 Próxima Clase</h3>
                        <span className="class-badge virtual">Virtual Meet</span>
                    </div>
                    <div className="next-class-content">
                        <div className="class-date">
                            <span className="date">10 de Septiembre</span>
                            <span className="time">7:00 AM</span>
                        </div>
                        <div className="class-details">
                            <h4>Lección 6: Saludos y Presentaciones</h4>
                            <div className="class-topics">
                                <span className="topic-tag">Greetings</span>
                                <span className="topic-tag">Introductions</span>
                                <span className="topic-tag">Conversations</span>
                            </div>
                        </div>
                        <div className="next-class-actions">
                            <button className="btn-primary" onClick={() => openModal('next-class')}>
                                👁️ Ver Contenido
                            </button>
                            <button className="btn-secondary" onClick={() => openModal('edit-notes')}>
                                ✏️ Editar Notas
                            </button>
                        </div>
                    </div>
                </div>

                    {/* Clases Pasadas */}
                    <div className="past-classes">
                        <h2>📚 Clases Pasadas</h2>
                        <div className="classes-grid">
                            {pastClasses.slice(0, 4).map((classItem) => (
                                <div key={classItem.id} className="class-card" onClick={() => openModal('past-class', classItem)}>
                                    <div className="class-header">
                                        <h3>Lección {classItem.lesson}</h3>
                                        <span className="class-date">{classItem.date}</span>
                                    </div>
                                    <div className="class-content">
                                        <h4>{classItem.title}</h4>
                                        <p className="class-duration">⏱️ {classItem.duration}</p>
                                        <div className="class-topics">
                                            {classItem.topics.slice(0, 2).map((topic, index) => (
                                                <span key={index} className="topic-tag">{topic}</span>
                                            ))}
                                            {classItem.topics.length > 2 && (
                                                <span className="topic-tag">+{classItem.topics.length - 2} más</span>
                                            )}
                                        </div>
                                        <div className="class-content-info">
                                            <div className="class-details">
                                                <p className="class-location">📍 {classItem.location}</p>
                                                <p className="class-teacher">👨‍🏫 Prof. Laura Chaves</p>
                                            </div>
                                            <div className="class-progress">
                                                <span className="progress-indicator">✅ Completada</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {pastClasses.length > 4 && (
                            <button 
                                className="view-all-btn"
                                onClick={() => openModal('all-past-classes')}
                            >
                                Ver Todas las Clases ({pastClasses.length})
                            </button>
                        )}
                    </div>



            </div>

            {/* Modals */}
            {activeModal === 'lesson' && selectedLesson && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>{selectedLesson.title}</h3>
                            <button className="close-btn" onClick={closeModal}>×</button>
                        </div>
                        <div className="modal-body">
                            <p>{selectedLesson.description}</p>
                            <div className="lesson-content">
                                <h4>Temas a cubrir:</h4>
                                <ul>
                                    {selectedLesson.topics.map((topic, index) => (
                                        <li key={index}>{topic}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn-primary" onClick={handleCompleteLesson}>
                                Completar Lección
                            </button>
                            <button className="btn-secondary" onClick={closeModal}>
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {activeModal === 'assignment' && selectedAssignment && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>{selectedAssignment.title}</h3>
                            <button className="close-btn" onClick={closeModal}>×</button>
                        </div>
                        <div className="modal-body">
                            <p>{selectedAssignment.description}</p>
                            <div className="assignment-details">
                                <p><strong>Tipo:</strong> {selectedAssignment.type}</p>
                                <p><strong>Puntos:</strong> {selectedAssignment.points}</p>
                                <p><strong>Fecha límite:</strong> {selectedAssignment.dueDate}</p>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button 
                                className="btn-primary" 
                                onClick={() => handleSubmitAssignment(selectedAssignment.id)}
                            >
                                Enviar Tarea
                            </button>
                            <button className="btn-secondary" onClick={closeModal}>
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {activeModal === 'calendar' && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>📅 Calendario de Clases</h3>
                            <button className="close-btn" onClick={closeModal}>×</button>
                        </div>
                        <div className="modal-body">
                            <div className="calendar-events">
                                {upcomingClasses.map(event => (
                                    <div key={event.id} className="calendar-event">
                                        <div className="event-date">
                                            <span className="date">{event.date}</span>
                                            <span className="time">{event.time}</span>
                                        </div>
                                        <div className="event-info">
                                            <h4>{event.title}</h4>
                                            <p>{event.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeModal === 'stats' && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>📊 Mis Estadísticas</h3>
                            <button className="close-btn" onClick={closeModal}>×</button>
                        </div>
                        <div className="modal-body">
                            <div className="stats-grid">
                                <div className="stat-item">
                                    <h4>Lecciones Completadas</h4>
                                    <p>{statistics.completedLessons} de {statistics.totalLessons}</p>
                                </div>
                                <div className="stat-item">
                                    <h4>Tiempo de Estudio</h4>
                                    <p>{statistics.totalStudyTime}</p>
                                </div>
                                <div className="stat-item">
                                    <h4>Objetivos Cumplidos</h4>
                                    <p>{statistics.objectivesCompleted} de 7</p>
                                </div>
                                <div className="stat-item">
                                    <h4>Progreso del Curso</h4>
                                    <p>{Math.round((statistics.completedLessons / statistics.totalLessons) * 100)}%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeModal === 'resources' && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>📖 Recursos de Aprendizaje</h3>
                            <button className="close-btn" onClick={closeModal}>×</button>
                        </div>
                        <div className="modal-body">
                            <div className="resources-grid">
                                <div className="resource-item">
                                    <h4>Diccionario Oxford Online</h4>
                                    <p>Diccionario completo con pronunciación</p>
                                    <button className="btn-small">Acceder</button>
                                </div>
                                <div className="resource-item">
                                    <h4>Gramática Básica PDF</h4>
                                    <p>Guía completa de gramática inglesa</p>
                                    <button className="btn-small">Acceder</button>
                                </div>
                                <div className="resource-item">
                                    <h4>Videos de Pronunciación</h4>
                                    <p>Serie de videos para mejorar pronunciación</p>
                                    <button className="btn-small">Acceder</button>
                                </div>
                                <div className="resource-item">
                                    <h4>Ejercicios Interactivos</h4>
                                    <p>Juegos y ejercicios para practicar</p>
                                    <button className="btn-small">Acceder</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeModal === 'past-class' && selectedLesson && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content large" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>📚 {selectedLesson.title}</h3>
                            <button className="close-btn" onClick={closeModal}>×</button>
                        </div>
                        <div className="modal-body">
                            <div className="class-details">
                                <div className="class-info">
                                    <div className="info-row">
                                        <span className="label">📅 Fecha:</span>
                                        <span>{selectedLesson.date} a las {selectedLesson.time}</span>
                                    </div>
                                    <div className="info-row">
                                        <span className="label">⏱️ Duración:</span>
                                        <span>{selectedLesson.duration}</span>
                                    </div>
                                    <div className="info-row">
                                        <span className="label">📖 Lección:</span>
                                        <span>Lección {selectedLesson.lesson}</span>
                                    </div>
                                    <div className="info-row">
                                        <span className="label">👨‍🏫 Profesor:</span>
                                        <span>Prof. Laura Chaves</span>
                                    </div>
                                    <div className="info-row">
                                        <span className="label">📍 Ubicación:</span>
                                        <span>{selectedLesson.location}</span>
                                    </div>
                                </div>
                                
                                <div className="topics-section">
                                    <h4>🎯 Temas Cubiertos</h4>
                                    <div className="topics-list">
                                        {selectedLesson.topics.map((topic, index) => (
                                            <span key={index} className="topic-tag">{topic}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="homework-section">
                                    <h4>📝 Notas Estudiante</h4>
                                    <div className="editable-content">
                                        <textarea 
                                            className="student-notes-textarea"
                                            defaultValue={getStudentNotes(selectedLesson.id) || selectedLesson.homework}
                                            placeholder="Agrega tus notas personales sobre esta clase..."
                                            rows="3"
                                        />
                                        <button 
                                            className="save-notes-btn"
                                            onClick={() => handleSaveNotes(selectedLesson.id)}
                                        >
                                            💾 Guardar Notas
                                        </button>
                                    </div>
                                </div>

                                <div className="notes-section">
                                    <h4>📝 Notas del Profesor</h4>
                                    <p>{selectedLesson.notes}</p>
                                </div>

                                <div className="materials-section">
                                    <h4>📁 Materiales</h4>
                                    <div className="materials-list">
                                        <div className="material-item google-drive-item">
                                            <span>📁</span>
                                            <span>Google Drive - Carpeta de la Clase</span>
                                            <button className="btn-small google-drive-btn" onClick={() => alert('🔗 Abriendo Google Drive...\n\nCarpeta: Lección 1 - Introducción\nContenido:\n• Presentación de la clase\n• Materiales de apoyo\n• Ejercicios prácticos\n• Recursos adicionales')}>
                                                📂 Abrir Carpeta
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeModal === 'all-past-classes' && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content large" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>📚 Todas las Clases Pasadas</h3>
                            <button className="close-btn" onClick={closeModal}>×</button>
                        </div>
                        <div className="modal-body">
                            <div className="all-classes-list">
                                {pastClasses.map((classItem) => (
                                    <div key={classItem.id} className="class-list-item" onClick={() => {
                                        setSelectedLesson(classItem);
                                        setActiveModal('past-class');
                                    }}>
                                        <div className="class-item-header">
                                            <h4>Lección {classItem.lesson}: {classItem.title}</h4>
                                            <span className="class-date">{classItem.date}</span>
                                        </div>
                                        <div className="class-item-details">
                                            <span className="duration">⏱️ {classItem.duration}</span>
                                            <span className="location">📍 {classItem.location}</span>
                                            <span className="progress-indicator">✅ Completada</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeModal === 'next-class' && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content large" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>🎯 Próxima Clase - Lección 6</h3>
                            <button className="close-btn" onClick={closeModal}>×</button>
                        </div>
                        <div className="modal-body">
                            <div className="class-info">
                                <div className="info-row">
                                    <span className="label">📅 Fecha:</span>
                                    <span>10 de Septiembre, 2025</span>
                                </div>
                                <div className="info-row">
                                    <span className="label">🕐 Hora:</span>
                                    <span>7:00 AM</span>
                                </div>
                                <div className="info-row">
                                    <span className="label">💻 Plataforma:</span>
                                    <span>Virtual Meet</span>
                                </div>
                                <div className="info-row">
                                    <span className="label">👨‍🏫 Profesor:</span>
                                    <span>Prof. Laura Chaves</span>
                                </div>
                            </div>

                            <div className="topics-section">
                                <h4>📝 Temas de la Clase</h4>
                                <div className="topics-list">
                                    <span className="topic-tag">Greetings</span>
                                    <span className="topic-tag">Introductions</span>
                                    <span className="topic-tag">Conversations</span>
                                </div>
                            </div>

                            <div className="class-description">
                                <h4>📖 Descripción</h4>
                                <p>En esta clase aprenderás saludos formales e informales, cómo presentarte correctamente y mantener conversaciones básicas en inglés. Practicaremos diálogos comunes y vocabulario esencial para situaciones cotidianas.</p>
                            </div>

                            <div className="preparation-section">
                                <h4>📋 Preparación Requerida</h4>
                                <ul>
                                    <li>Revisar vocabulario de saludos básicos</li>
                                    <li>Practicar pronunciación de frases comunes</li>
                                    <li>Preparar una breve presentación personal</li>
                                    <li>Verificar conexión a internet y micrófono</li>
                                </ul>
                            </div>

                            <div className="materials-section">
                                <h4>📁 Materiales</h4>
                                <div className="materials-list">
                                    <div className="material-item google-drive-item">
                                        <span>📁</span>
                                        <span>Google Drive - Carpeta de la Clase</span>
                                        <button className="btn-small google-drive-btn" onClick={() => alert('🔗 Abriendo Google Drive...\n\nCarpeta: Lección 6 - Saludos y Presentaciones\nContenido:\n• Presentación de la clase\n• Ejercicios de práctica\n• Vocabulario\n• Grabaciones de audio')}>
                                            📂 Abrir Carpeta
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn-primary" onClick={() => alert('🎥 Uniéndose a la clase virtual...\n\nClase: Lección 6 - Saludos y Presentaciones\nFecha: 10 de Septiembre\nHora: 7:00 AM\nPlataforma: Virtual Meet\n\n🔗 Link: meet.google.com/abc-defg-hij')}>
                                🎥 Unirse a la Clase
                            </button>
                            <button className="btn-secondary" onClick={closeModal}>
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {activeModal === 'lessons-progress' && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content large" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>📚 Lecciones Completadas</h3>
                            <button className="close-btn" onClick={closeModal}>×</button>
                        </div>
                        <div className="modal-body">
                            <div className="progress-summary">
                                <div className="progress-stats">
                                    <div className="stat-item">
                                        <h4>Progreso General</h4>
                                        <div className="progress-circle">
                                            <div className="circle-progress" style={{'--progress': `${(statistics.completedLessons / statistics.totalLessons) * 100}%`}}>
                                                <span className="progress-text">{Math.round((statistics.completedLessons / statistics.totalLessons) * 100)}%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="stat-item">
                                        <h4>Lecciones Completadas</h4>
                                        <p className="big-number">{statistics.completedLessons}</p>
                                        <p>de {statistics.totalLessons} lecciones</p>
                                    </div>
                                    <div className="stat-item">
                                        <h4>Lecciones Restantes</h4>
                                        <p className="big-number">{statistics.totalLessons - statistics.completedLessons}</p>
                                        <p>lecciones por completar</p>
                                    </div>
                                </div>
                            </div>

                            <div className="lessons-timeline">
                                <h4>📅 Cronología de Lecciones</h4>
                                <div className="timeline">
                                    {lessons.map((lesson, index) => (
                                        <div key={lesson.id} className={`timeline-item ${lesson.status}`}>
                                            <div className="timeline-marker">
                                                {lesson.status === 'completed' ? '✅' : 
                                                 lesson.status === 'current' ? '🔄' : '⏳'}
                                            </div>
                                            <div className="timeline-content">
                                                <h5>Lección {lesson.id}: {lesson.title}</h5>
                                                <p>{lesson.description}</p>
                                                <div className="lesson-details">
                                                    <span className="lesson-duration">⏱️ {lesson.duration}</span>
                                                    <span className="lesson-difficulty">📊 {lesson.difficulty}</span>
                                                    <span className="lesson-status">
                                                        {lesson.status === 'completed' ? 'Completada' :
                                                         lesson.status === 'current' ? 'En Progreso' : 'Pendiente'}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="achievements-section">
                                <h4>🏆 Logros Desbloqueados</h4>
                                <div className="achievements-grid">
                                    <div className="achievement-item completed">
                                        <div className="achievement-icon">🎯</div>
                                        <div className="achievement-content">
                                            <h5>Primera Lección</h5>
                                            <p>Completaste tu primera lección de inglés</p>
                                        </div>
                                    </div>
                                    <div className="achievement-item completed">
                                        <div className="achievement-icon">📚</div>
                                        <div className="achievement-content">
                                            <h5>Estudiante Dedicado</h5>
                                            <p>Completaste 4 lecciones consecutivas</p>
                                        </div>
                                    </div>
                                    <div className="achievement-item pending">
                                        <div className="achievement-icon">🔥</div>
                                        <div className="achievement-content">
                                            <h5>Racha de Estudio</h5>
                                            <p>Completa 8 lecciones para desbloquear</p>
                                        </div>
                                    </div>
                                    <div className="achievement-item pending">
                                        <div className="achievement-icon">🎓</div>
                                        <div className="achievement-content">
                                            <h5>Graduado</h5>
                                            <p>Completa todas las 12 lecciones</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn-primary" onClick={() => alert('📚 Progreso actualizado!\n\nTu progreso en las lecciones ha sido registrado correctamente.')}>
                                💾 Actualizar Progreso
                            </button>
                            <button className="btn-secondary" onClick={closeModal}>
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {activeModal === 'course-progress' && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content large" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>📈 Progreso del Curso</h3>
                            <button className="close-btn" onClick={closeModal}>×</button>
                        </div>
                        <div className="modal-body">
                            <div className="progress-overview">
                                <div className="main-progress">
                                    <h4>Progreso General del Curso</h4>
                                    <div className="progress-bar-large">
                                        <div className="progress-fill-large" style={{width: `${(statistics.completedLessons / statistics.totalLessons) * 100}%`}}></div>
                                    </div>
                                    <p className="progress-percentage">{Math.round((statistics.completedLessons / statistics.totalLessons) * 100)}% Completado</p>
                                </div>
                            </div>

                            <div className="progress-metrics">
                                <div className="metrics-grid">
                                    <div className="metric-item">
                                        <div className="metric-icon">📚</div>
                                        <div className="metric-content">
                                            <h5>Lecciones</h5>
                                            <p className="metric-value">{statistics.completedLessons}/{statistics.totalLessons}</p>
                                            <p className="metric-label">Completadas</p>
                                        </div>
                                    </div>
                                    <div className="metric-item">
                                        <div className="metric-icon">⏱️</div>
                                        <div className="metric-content">
                                            <h5>Tiempo</h5>
                                            <p className="metric-value">{statistics.totalStudyTime}</p>
                                            <p className="metric-label">Estudiado</p>
                                        </div>
                                    </div>
                                    <div className="metric-item">
                                        <div className="metric-icon">🎯</div>
                                        <div className="metric-content">
                                            <h5>Objetivos</h5>
                                            <p className="metric-value">{statistics.objectivesCompleted}/7</p>
                                            <p className="metric-label">Cumplidos</p>
                                        </div>
                                    </div>
                                    <div className="metric-item">
                                        <div className="metric-icon">📅</div>
                                        <div className="metric-content">
                                            <h5>Duración</h5>
                                            <p className="metric-value">5 semanas</p>
                                            <p className="metric-label">Total</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="progress-chart">
                                <h4>📊 Progreso Semanal</h4>
                                <div className="chart-container">
                                    <div className="chart-bars">
                                        <div className="chart-bar">
                                            <div className="bar-fill" style={{height: '20%'}}></div>
                                            <span className="bar-label">Sem 1</span>
                                        </div>
                                        <div className="chart-bar">
                                            <div className="bar-fill" style={{height: '40%'}}></div>
                                            <span className="bar-label">Sem 2</span>
                                        </div>
                                        <div className="chart-bar">
                                            <div className="bar-fill" style={{height: '60%'}}></div>
                                            <span className="bar-label">Sem 3</span>
                                        </div>
                                        <div className="chart-bar">
                                            <div className="bar-fill" style={{height: '33%'}}></div>
                                            <span className="bar-label">Sem 4</span>
                                        </div>
                                        <div className="chart-bar">
                                            <div className="bar-fill" style={{height: '0%'}}></div>
                                            <span className="bar-label">Sem 5</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="next-milestones">
                                <h4>🎯 Próximos Hitos</h4>
                                <div className="milestones-list">
                                    <div className="milestone-item">
                                        <div className="milestone-icon">📚</div>
                                        <div className="milestone-content">
                                            <h5>Lección 6</h5>
                                            <p>Saludos y Presentaciones</p>
                                            <span className="milestone-status">Próxima</span>
                                        </div>
                                    </div>
                                    <div className="milestone-item">
                                        <div className="milestone-icon">🎯</div>
                                        <div className="milestone-content">
                                            <h5>Objetivo 2</h5>
                                            <p>Vocabulario Profesional</p>
                                            <span className="milestone-status">En Progreso</span>
                                        </div>
                                    </div>
                                    <div className="milestone-item">
                                        <div className="milestone-icon">🏆</div>
                                        <div className="milestone-content">
                                            <h5>50% del Curso</h5>
                                            <p>6 lecciones completadas</p>
                                            <span className="milestone-status">Pendiente</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn-primary" onClick={() => alert('📈 Progreso actualizado!\n\nTu progreso del curso ha sido registrado correctamente.')}>
                                💾 Actualizar Progreso
                            </button>
                            <button className="btn-secondary" onClick={closeModal}>
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {activeModal === 'objectives' && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content large" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>🎯 Objetivos del Curso de Inglés</h3>
                            <button className="close-btn" onClick={closeModal}>×</button>
                        </div>
                        <div className="modal-body">
                            <div className="objectives-list">
                                <div className="objective-item completed">
                                    <div className="objective-icon">✅</div>
                                    <div className="objective-content">
                                        <h4>Comunicación Básica</h4>
                                        <p>Dominar saludos, presentaciones y conversaciones cotidianas en inglés</p>
                                        <div className="objective-progress">
                                            <span className="progress-text">Completado (100%)</span>
                                            <div className="progress-bar">
                                                <div className="progress-fill" style={{width: '100%'}}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="objective-item in-progress">
                                    <div className="objective-icon">🔄</div>
                                    <div className="objective-content">
                                        <h4>Vocabulario Profesional</h4>
                                        <p>Ampliar vocabulario técnico y profesional para el entorno laboral</p>
                                        <div className="objective-progress">
                                            <span className="progress-text">En Progreso (75%)</span>
                                            <div className="progress-bar">
                                                <div className="progress-fill" style={{width: '75%'}}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="objective-item in-progress">
                                    <div className="objective-icon">🔄</div>
                                    <div className="objective-content">
                                        <h4>Fluidez Conversacional</h4>
                                        <p>Desarrollar confianza y naturalidad en conversaciones espontáneas</p>
                                        <div className="objective-progress">
                                            <span className="progress-text">En Progreso (60%)</span>
                                            <div className="progress-bar">
                                                <div className="progress-fill" style={{width: '60%'}}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="objective-item pending">
                                    <div className="objective-icon">⏳</div>
                                    <div className="objective-content">
                                        <h4>Entrevistas de Trabajo</h4>
                                        <p>Preparación completa para entrevistas laborales en inglés</p>
                                        <div className="objective-progress">
                                            <span className="progress-text">Pendiente (0%)</span>
                                            <div className="progress-bar">
                                                <div className="progress-fill" style={{width: '0%'}}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="objective-item pending">
                                    <div className="objective-icon">⏳</div>
                                    <div className="objective-content">
                                        <h4>Presentaciones Ejecutivas</h4>
                                        <p>Crear y realizar presentaciones profesionales impactantes</p>
                                        <div className="objective-progress">
                                            <span className="progress-text">Pendiente (0%)</span>
                                            <div className="progress-bar">
                                                <div className="progress-fill" style={{width: '0%'}}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="objective-item pending">
                                    <div className="objective-icon">⏳</div>
                                    <div className="objective-content">
                                        <h4>Comprensión Avanzada</h4>
                                        <p>Entender diferentes acentos, velocidades y contextos profesionales</p>
                                        <div className="objective-progress">
                                            <span className="progress-text">Pendiente (0%)</span>
                                            <div className="progress-bar">
                                                <div className="progress-fill" style={{width: '0%'}}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="objective-item pending">
                                    <div className="objective-icon">⏳</div>
                                    <div className="objective-content">
                                        <h4>Escritura Corporativa</h4>
                                        <p>Desarrollar habilidades de escritura formal y empresarial</p>
                                        <div className="objective-progress">
                                            <span className="progress-text">Pendiente (0%)</span>
                                            <div className="progress-bar">
                                                <div className="progress-fill" style={{width: '0%'}}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="objectives-summary">
                                <h4>📊 Resumen de Progreso</h4>
                                <div className="summary-stats">
                                    <div className="summary-item">
                                        <span className="summary-label">Objetivos Completados:</span>
                                        <span className="summary-value">1 de 7</span>
                                    </div>
                                    <div className="summary-item">
                                        <span className="summary-label">En Progreso:</span>
                                        <span className="summary-value">2 de 7</span>
                                    </div>
                                    <div className="summary-item">
                                        <span className="summary-label">Progreso General:</span>
                                        <span className="summary-value">14%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn-primary" onClick={() => alert('🎯 Objetivos actualizados!\n\nTu progreso ha sido registrado correctamente. Continúa trabajando en los objetivos pendientes para completar tu curso de inglés.')}>
                                💾 Actualizar Progreso
                            </button>
                            <button className="btn-secondary" onClick={closeModal}>
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {activeModal === 'edit-notes' && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>✏️ Editar Notas de la Próxima Clase</h3>
                            <button className="close-btn" onClick={closeModal}>×</button>
                        </div>
                        <div className="modal-body">
                            <div className="notes-editor">
                                <h4>📝 Notas Personales</h4>
                                <textarea 
                                    className="student-notes-textarea"
                                    placeholder="Agrega tus notas, preguntas o recordatorios para la próxima clase..."
                                    rows="6"
                                />
                                <h4>❓ Preguntas para el Profesor</h4>
                                <textarea 
                                    className="student-notes-textarea"
                                    placeholder="Escribe las preguntas que quieres hacer en la próxima clase..."
                                    rows="4"
                                />
                                <h4>🎯 Objetivos Personales</h4>
                                <textarea 
                                    className="student-notes-textarea"
                                    placeholder="Define tus objetivos específicos para esta clase..."
                                    rows="3"
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn-primary" onClick={() => alert('💾 Notas guardadas exitosamente!\n\nTus notas personales han sido guardadas y estarán disponibles durante la clase.')}>
                                💾 Guardar Notas
                            </button>
                            <button className="btn-secondary" onClick={closeModal}>
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isLoading && (
                <div className="loading-overlay">
                    <div className="loading-spinner">⏳</div>
                    <p>Procesando...</p>
                </div>
            )}
        </div>
    );
};

export default StudentView;