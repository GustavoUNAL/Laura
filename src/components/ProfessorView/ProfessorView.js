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
                alert('📚 Resources Management\n\nHere you can:\n• Upload materials\n• Organize by lessons\n• Share with students\n• Manage versions');
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
                                <h3>English Course - Gustavo Arteaga</h3>
                                <p className="course-subtitle">Personalized Course</p>
                            </div>
                        </div>
                        <div className="course-content-info">
                            <div className="course-details">
                                <p><strong>Students:</strong> 1 student</p>
                                <p><strong>Duration:</strong> 5 weeks</p>
                                <p><strong>Progress:</strong> 33% completed</p>
                            </div>
                            <div className="course-progress">
                                <div className="progress-indicator">
                                    <span>Course Progress: 33%</span>
                                    <div className="progress-bar">
                                        <div className="progress-fill" style={{width: '33%'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="course-stats">
                            <div className="stat-item">
                                <span className="stat-label">Classes</span>
                                <span className="stat-value">4/12</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Average</span>
                                <span className="stat-value">87.5%</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Active</span>
                                <span className="stat-value">1</span>
                            </div>
                        </div>
                    </div>

                    {/* Curso de Fernanda */}
                    <div className="course-card" onClick={() => alert('📚 Fernanda\'s Course\n\nThis course is under development.\nComing soon.')}>
                        <div className="course-header">
                            <div className="course-icon">👩‍🎓</div>
                            <div className="course-info">
                                <h3>English Course - Fernanda</h3>
                                <p className="course-subtitle">Beginner Course</p>
                            </div>
                        </div>
                        <div className="course-content-info">
                            <div className="course-details">
                                <p><strong>Students:</strong> 1 student</p>
                                <p><strong>Duration:</strong> 4 weeks</p>
                                <p><strong>Progress:</strong> 0% completed</p>
                            </div>
                            <div className="course-progress">
                                <div className="progress-indicator">
                                    <span>Course Progress: 0%</span>
                                    <div className="progress-bar">
                                        <div className="progress-fill" style={{width: '0%'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="course-stats">
                            <div className="stat-item">
                                <span className="stat-label">Classes</span>
                                <span className="stat-value">0/8</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Average</span>
                                <span className="stat-value">-</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Active</span>
                                <span className="stat-value">1</span>
                            </div>
                        </div>
                    </div>

                    {/* Curso de Sebastián */}
                    <div className="course-card" onClick={() => alert('📚 Sebastián\'s Course\n\nThis course is under development.\nComing soon.')}>
                        <div className="course-header">
                            <div className="course-icon">👨‍🎓</div>
                            <div className="course-info">
                                <h3>English Course - Sebastián</h3>
                                <p className="course-subtitle">Intermediate Course</p>
                            </div>
                        </div>
                        <div className="course-content-info">
                            <div className="course-details">
                                <p><strong>Students:</strong> 1 student</p>
                                <p><strong>Duration:</strong> 6 weeks</p>
                                <p><strong>Progress:</strong> 0% completed</p>
                            </div>
                            <div className="course-progress">
                                <div className="progress-indicator">
                                    <span>Course Progress: 0%</span>
                                    <div className="progress-bar">
                                        <div className="progress-fill" style={{width: '0%'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="course-stats">
                            <div className="stat-item">
                                <span className="stat-label">Classes</span>
                                <span className="stat-value">0/10</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Average</span>
                                <span className="stat-value">-</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-label">Active</span>
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
                            <h3>🎓 English Course - Gustavo Arteaga</h3>
                            <button className="close-btn" onClick={closeModal}>×</button>
                        </div>
                        <div className="modal-body">
                            {/* Progress Overview */}
                            <div className="progress-overview">
                                <h2>📊 His English Progress</h2>
                                <div className="progress-cards">
                                    <div className="progress-card clickable" onClick={() => alert('📚 Lessons Completed\n\n4 of 12 lessons completed\nProgress: 33%')}>
                                        <div className="progress-icon">📚</div>
                                        <div className="progress-info">
                                            <h3>4/12</h3>
                                            <p>Lessons Completed</p>
                                        </div>
                                    </div>
                                    <div className="progress-card clickable" onClick={() => alert('📈 Course Progress\n\n33% of the course completed\n8 lessons remaining')}>
                                        <div className="progress-icon">📈</div>
                                        <div className="progress-info">
                                            <h3>33%</h3>
                                            <p>Course Progress</p>
                                        </div>
                                    </div>
                                    <div className="progress-card clickable" onClick={() => alert('🎯 Objectives Achieved\n\n1 of 5 objectives achieved\nCurrent objective: Professional Interview')}>
                                        <div className="progress-icon">🎯</div>
                                        <div className="progress-info">
                                            <h3>1</h3>
                                            <p>Objectives Achieved</p>
                                        </div>
                                    </div>
                                    <div className="progress-card clickable" onClick={() => alert('⏱️ Study Time\n\n6 total study hours\nAverage: 1.5 hours per week')}>
                                        <div className="progress-icon">⏱️</div>
                                        <div className="progress-info">
                                            <h3>6h</h3>
                                            <p>Study Time</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* Next Class */}
                            <div className="next-class-section">
                                <h2>🎯 Next Class</h2>
                                <div className="next-class-card">
                                    <div className="next-class-info">
                                        <div className="next-class-header">
                                            <h3>Virtual Meet</h3>
                                            <span className="class-type">Virtual</span>
                                        </div>
                                        <div className="next-class-details">
                                        <p><strong>Date:</strong> September 10, 2025</p>
                                        <p><strong>Time:</strong> 7:00 AM</p>
                                        <p><strong>Lesson:</strong> Lesson 6: Greetings and Introductions</p>
                                        </div>
                                        <div className="next-class-topics">
                                            <h4>Topics to Cover:</h4>
                                            <div className="topics-list">
                                                <span className="topic-tag">Greetings</span>
                                                <span className="topic-tag">Introductions</span>
                                                <span className="topic-tag">Conversations</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="next-class-actions">
                                        <button className="btn-primary" onClick={() => alert('📖 View Content\n\nAccess to class materials:\n• Greetings presentation\n• Conversation exercises\n• Vocabulary list')}>
                                            📖 View Content
                                        </button>
                                        <button className="btn-secondary" onClick={() => alert('📝 Edit Notes\n\nAdd personal notes:\n• Important points\n• Questions\n• Reminders')}>
                                            📝 Edit Notes
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Past Classes */}
                            <div className="past-classes-section">
                                <h2>📚 Past Classes</h2>
                                <div className="past-classes-grid">
                                    <div className="past-class-card" onClick={() => alert('📖 Class 4: Personal Introduction\n\nDate: September 1, 2025\nTime: 7:00 AM\nMode: Virtual\n\nCovered topics:\n• Personal introduction\n• Basic information\n• Initial conversation\n\nTeacher notes:\n• Excellent participation\n• Good vocabulary control\n• Improve pronunciation')}>
                                        <div className="past-class-header">
                                            <div className="past-class-icon">📖</div>
                                            <div className="past-class-info">
                                                <h3>Class 4: Personal Introduction</h3>
                                                <p className="past-class-date">September 1, 2025</p>
                                            </div>
                                        </div>
                                        <div className="past-class-content-info">
                                            <div className="past-class-details">
                                                <p><strong>Mode:</strong> Virtual</p>
                                                <p><strong>Time:</strong> 7:00 AM</p>
                                                <p><strong>Duration:</strong> 60 min</p>
                                                <div className="attendance-status">
                                                    ✅
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="past-class-card" onClick={() => alert('📖 Class 3: Greetings and Farewells II\n\nDate: August 29, 2025\nTime: 7:00 AM\nMode: Virtual\n\nCovered topics:\n• Formal and informal greetings\n• Common farewells\n• Polite expressions\n\nTeacher notes:\n• Very participative\n• Good use of expressions\n• Practice more conversation')}>
                                        <div className="past-class-header">
                                            <div className="past-class-icon">📖</div>
                                            <div className="past-class-info">
                                                <h3>Class 3: Greetings and Farewells II</h3>
                                                <p className="past-class-date">August 29, 2025</p>
                                            </div>
                                        </div>
                                        <div className="past-class-content-info">
                                            <div className="past-class-details">
                                                <p><strong>Mode:</strong> Virtual</p>
                                                <p><strong>Time:</strong> 7:00 AM</p>
                                                <p><strong>Duration:</strong> 60 min</p>
                                                <div className="attendance-status">
                                                    ✅
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="past-class-card" onClick={() => alert('📖 Class 2: Greetings and Farewells I\n\nDate: August 28, 2025\nTime: 7:00 AM\nMode: Virtual\n\nCovered topics:\n• Basic greetings\n• Simple farewells\n• Common questions\n\nTeacher notes:\n• Good progress\n• Needs more practice\n• Very motivated')}>
                                        <div className="past-class-header">
                                            <div className="past-class-icon">📖</div>
                                            <div className="past-class-info">
                                                <h3>Class 2: Greetings and Farewells I</h3>
                                                <p className="past-class-date">August 28, 2025</p>
                                            </div>
                                        </div>
                                        <div className="past-class-content-info">
                                            <div className="past-class-details">
                                                <p><strong>Mode:</strong> Virtual</p>
                                                <p><strong>Time:</strong> 7:00 AM</p>
                                                <p><strong>Duration:</strong> 60 min</p>
                                                <div className="attendance-status">
                                                    ✅
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="past-class-card" onClick={() => alert('📖 Class 1: Introduction\n\nDate: August 21, 2025\nTime: 4:00 PM\nMode: In-person\n\nCovered topics:\n• Course overview\n• Learning objectives\n• Methodology\n• Initial evaluation\n\nTeacher notes:\n• Successful first class\n• Good initial level\n• Very enthusiastic')}>
                                        <div className="past-class-header">
                                            <div className="past-class-icon">📖</div>
                                            <div className="past-class-info">
                                                <h3>Class 1: Introduction</h3>
                                                <p className="past-class-date">August 21, 2025</p>
                                            </div>
                                        </div>
                                        <div className="past-class-content-info">
                                            <div className="past-class-details">
                                                <p><strong>Mode:</strong> In-person</p>
                                                <p><strong>Time:</strong> 4:00 PM</p>
                                                <p><strong>Duration:</strong> 60 min</p>
                                                <div className="attendance-status">
                                                    ✅
                                                </div>
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
                                    <h4>Information</h4>
                                    <p><strong>Email:</strong> {selectedStudent.email}</p>
                                    <p><strong>Level:</strong> {selectedStudent.level}</p>
                                    <p><strong>Last Activity:</strong> {selectedStudent.lastActivity}</p>
                                </div>
                                
                                <div className="student-progress-section">
                                    <h4>Student Progress</h4>
                                    <div className="progress-stats">
                                        <div className="progress-item">
                                            <span>General Progress</span>
                                            <div className="progress-bar">
                                                <div className="progress-fill" style={{width: `${selectedStudent.progress}%`}}></div>
                                            </div>
                                            <span>{selectedStudent.progress}%</span>
                                        </div>
                                        <div className="progress-item">
                                            <span>Attendance</span>
                                            <div className="progress-bar">
                                                <div className="progress-fill" style={{width: `${selectedStudent.attendance}%`}}></div>
                                            </div>
                                            <span>{selectedStudent.attendance}%</span>
                                        </div>
                                        <div className="progress-item">
                                            <span>Average Grade</span>
                                            <div className="progress-bar">
                                                <div className="progress-fill" style={{width: `${selectedStudent.averageGrade}%`}}></div>
                                            </div>
                                            <span>{selectedStudent.averageGrade}%</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="student-notes-section">
                                    <h4>Teacher Notes</h4>
                                    <p>{selectedStudent.notes}</p>
                                </div>

                                <div className="student-strengths-section">
                                    <h4>Strengths</h4>
                                    <div className="tags">
                                        {selectedStudent.strengths.map((strength, index) => (
                                            <span key={index} className="tag positive">{strength}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="student-improvements-section">
                                    <h4>Areas to Improve</h4>
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
