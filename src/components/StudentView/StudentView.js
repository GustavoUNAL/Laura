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
                alert('Action not available');
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
            alert('✅ Notes saved successfully!\n\nYour personal notes have been saved for this class.');
        }
    };

    const getStudentNotes = (lessonId) => {
        return studentNotes[lessonId] || '';
    };

    return (
        <div className="student-view">
            <div className="student-header">
                <div className="course-title-section">
                    <h1>🎓 My English Course</h1>
                    <p>Welcome back! Continue your English learning journey.</p>
                </div>
                <div className="course-dates">
                    <div className="date-item">
                        <span className="date-label">📅 Course Start</span>
                        <span className="date-value">August 21, 2025</span>
                    </div>
                    <div className="date-item">
                        <span className="date-label">🏁 Course End</span>
                        <span className="date-value">September 24, 2025</span>
                    </div>
                    <div className="date-item">
                        <span className="date-label">⏱️ Duration</span>
                        <span className="date-value">5 weeks</span>
                    </div>
                    <div className="date-item">
                        <span className="date-label">📚 Total Lessons</span>
                        <span className="date-value">12 lessons</span>
                    </div>
                </div>
            </div>

            <div className="student-dashboard">
                {/* Progress Overview - Primero y con más indicadores */}
                <div className="progress-overview">
                    <h2>📊 My English Progress</h2>
                    <div className="progress-cards">
                        <div className="progress-card clickable" onClick={() => openModal('lessons-progress')}>
                            <div className="progress-icon">📚</div>
                            <div className="progress-info">
                                <h3>{statistics.completedLessons}/{statistics.totalLessons}</h3>
                                <p>Lessons Completed</p>
                            </div>
                        </div>
                        <div className="progress-card clickable" onClick={() => openModal('course-progress')}>
                            <div className="progress-icon">📈</div>
                            <div className="progress-info">
                                <h3>{Math.round((statistics.completedLessons / statistics.totalLessons) * 100)}%</h3>
                                <p>Course Progress</p>
                            </div>
                        </div>
                        <div className="progress-card clickable" onClick={() => openModal('objectives')}>
                            <div className="progress-icon">🎯</div>
                            <div className="progress-info">
                                <h3>{statistics.objectivesCompleted}</h3>
                                <p>Objectives Achieved</p>
                            </div>
                        </div>
                        <div className="progress-card clickable" onClick={() => openModal('study-time')}>
                            <div className="progress-icon">⏱️</div>
                            <div className="progress-info">
                                <h3>{statistics.totalStudyTime}</h3>
                                <p>Study Time</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Próxima Clase */}
                <div className="next-class-card">
                    <div className="next-class-header">
                        <h3>🎯 Next Class</h3>
                        <span className="class-badge virtual">Virtual Meet</span>
                    </div>
                    <div className="next-class-content">
                        <div className="class-date">
                            <span className="date">September 10</span>
                            <span className="time">7:00 AM</span>
                        </div>
                        <div className="class-details">
                            <h4>Lesson 6: Greetings and Introductions</h4>
                            <div className="class-topics">
                                <span className="topic-tag">Greetings</span>
                                <span className="topic-tag">Introductions</span>
                                <span className="topic-tag">Conversations</span>
                            </div>
                        </div>
                        <div className="next-class-actions">
                            <button className="btn-primary" onClick={() => openModal('next-class')}>
                                👁️ View Content
                            </button>
                            <button className="btn-secondary" onClick={() => openModal('edit-notes')}>
                                ✏️ Edit Notes
                            </button>
                        </div>
                    </div>
                </div>

                    {/* Clases Pasadas */}
                    <div className="past-classes">
                        <h2>📚 Past Classes</h2>
                        <div className="classes-grid">
                            {pastClasses.slice(0, 4).map((classItem) => (
                                <div key={classItem.id} className="class-card" onClick={() => openModal('past-class', classItem)}>
                                    <div className="class-header">
                                        <h3>Lesson {classItem.lesson}</h3>
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
                                                <span className="topic-tag">+{classItem.topics.length - 2} more</span>
                                            )}
                                        </div>
                                        <div className="class-content-info">
                                            <div className="class-details">
                                                <p className="class-location">📍 {classItem.location}</p>
                                                <p className="class-teacher">👨‍🏫 Prof. Laura Chaves</p>
                                            </div>
                                            <div className="class-progress">
                                                <span className="progress-indicator">✅ Completed</span>
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
                                View All Classes ({pastClasses.length})
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
                                <h4>Topics Covered:</h4>
                                <ul>
                                    {selectedLesson.topics.map((topic, index) => (
                                        <li key={index}>{topic}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn-primary" onClick={handleCompleteLesson}>
                                Complete Lesson
                            </button>
                            <button className="btn-secondary" onClick={closeModal}>
                                Close
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
                                <p><strong>Type:</strong> {selectedAssignment.type}</p>
                                <p><strong>Points:</strong> {selectedAssignment.points}</p>
                                <p><strong>Due Date:</strong> {selectedAssignment.dueDate}</p>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button 
                                className="btn-primary" 
                                onClick={() => handleSubmitAssignment(selectedAssignment.id)}
                            >
                                Submit Assignment
                            </button>
                            <button className="btn-secondary" onClick={closeModal}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {activeModal === 'calendar' && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>📅 Class Calendar</h3>
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
                            <h3>📊 My Statistics</h3>
                            <button className="close-btn" onClick={closeModal}>×</button>
                        </div>
                        <div className="modal-body">
                            <div className="stats-grid">
                                <div className="stat-item">
                                    <h4>Lessons Completed</h4>
                                    <p>{statistics.completedLessons} of {statistics.totalLessons}</p>
                                </div>
                                <div className="stat-item">
                                    <h4>Study Time</h4>
                                    <p>{statistics.totalStudyTime}</p>
                                </div>
                                <div className="stat-item">
                                    <h4>Objectives Achieved</h4>
                                    <p>{statistics.objectivesCompleted} of 7</p>
                                </div>
                                <div className="stat-item">
                                    <h4>Course Progress</h4>
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
                            <h3>📖 Learning Resources</h3>
                            <button className="close-btn" onClick={closeModal}>×</button>
                        </div>
                        <div className="modal-body">
                            <div className="resources-grid">
                                <div className="resource-item">
                                    <h4>Oxford Online Dictionary</h4>
                                    <p>Complete dictionary with pronunciation</p>
                                    <button className="btn-small">Access</button>
                                </div>
                                <div className="resource-item">
                                    <h4>Basic Grammar PDF</h4>
                                    <p>Complete guide to English grammar</p>
                                    <button className="btn-small">Access</button>
                                </div>
                                <div className="resource-item">
                                    <h4>Pronunciation Videos</h4>
                                    <p>Series of videos to improve pronunciation</p>
                                    <button className="btn-small">Access</button>
                                </div>
                                <div className="resource-item">
                                    <h4>Interactive Exercises</h4>
                                    <p>Games and exercises to practice</p>
                                    <button className="btn-small">Access</button>
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
                                        <span className="label">📅 Date:</span>
                                        <span>{selectedLesson.date} at {selectedLesson.time}</span>
                                    </div>
                                    <div className="info-row">
                                        <span className="label">⏱️ Duration:</span>
                                        <span>{selectedLesson.duration}</span>
                                    </div>
                                    <div className="info-row">
                                        <span className="label">📖 Lesson:</span>
                                        <span>Lesson {selectedLesson.lesson}</span>
                                    </div>
                                    <div className="info-row">
                                        <span className="label">👨‍🏫 Teacher:</span>
                                        <span>Prof. Laura Chaves</span>
                                    </div>
                                    <div className="info-row">
                                        <span className="label">📍 Location:</span>
                                        <span>{selectedLesson.location}</span>
                                    </div>
                                </div>
                                
                                <div className="topics-section">
                                    <h4>🎯 Topics Covered</h4>
                                    <div className="topics-list">
                                        {selectedLesson.topics.map((topic, index) => (
                                            <span key={index} className="topic-tag">{topic}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="homework-section">
                                    <h4>📝 Student Notes</h4>
                                    <div className="editable-content">
                                        <textarea 
                                            className="student-notes-textarea"
                                            defaultValue={getStudentNotes(selectedLesson.id) || selectedLesson.homework}
                                            placeholder="Add your personal notes for this class..."
                                            rows="3"
                                        />
                                        <button 
                                            className="save-notes-btn"
                                            onClick={() => handleSaveNotes(selectedLesson.id)}
                                        >
                                            💾 Save Notes
                                        </button>
                                    </div>
                                </div>

                                <div className="notes-section">
                                    <h4>📝 Teacher Notes</h4>
                                    <p>{selectedLesson.notes}</p>
                                </div>

                                <div className="materials-section">
                                    <h4>📁 Materials</h4>
                                    <div className="materials-list">
                                        <div className="material-item google-drive-item">
                                            <span>📁</span>
                                            <span>Google Drive - Class Folder</span>
                                            <button className="btn-small google-drive-btn" onClick={() => alert('🔗 Opening Google Drive...\n\nFolder: Lesson 1 - Introduction\nContent:\n• Class Presentation\n• Supporting Materials\n• Practical Exercises\n• Additional Resources')}>
                                                📂 Open Folder
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
                            <h3>📚 All Past Classes</h3>
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
                                            <h4>Lesson {classItem.lesson}: {classItem.title}</h4>
                                            <span className="class-date">{classItem.date}</span>
                                        </div>
                                        <div className="class-item-details">
                                            <span className="duration">⏱️ {classItem.duration}</span>
                                            <span className="location">📍 {classItem.location}</span>
                                            <span className="progress-indicator">✅ Completed</span>
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
                            <h3>🎯 Next Class - Lesson 6</h3>
                            <button className="close-btn" onClick={closeModal}>×</button>
                        </div>
                        <div className="modal-body">
                            <div className="class-info">
                                <div className="info-row">
                                    <span className="label">📅 Date:</span>
                                    <span>September 10, 2025</span>
                                </div>
                                <div className="info-row">
                                    <span className="label">🕐 Time:</span>
                                    <span>7:00 AM</span>
                                </div>
                                <div className="info-row">
                                    <span className="label">💻 Platform:</span>
                                    <span>Virtual Meet</span>
                                </div>
                                <div className="info-row">
                                    <span className="label">👨‍🏫 Teacher:</span>
                                    <span>Prof. Laura Chaves</span>
                                </div>
                            </div>

                            <div className="topics-section">
                                <h4>📝 Class Topics</h4>
                                <div className="topics-list">
                                    <span className="topic-tag">Greetings</span>
                                    <span className="topic-tag">Introductions</span>
                                    <span className="topic-tag">Conversations</span>
                                </div>
                            </div>

                            <div className="class-description">
                                <h4>📖 Description</h4>
                                <p>In this class, you will learn formal and informal greetings, how to introduce yourself correctly, and basic conversations in English. We will practice common dialogues and essential vocabulary for everyday situations.</p>
                            </div>

                            <div className="preparation-section">
                                <h4>📋 Required Preparation</h4>
                                <ul>
                                    <li>Review basic greeting vocabulary</li>
                                    <li>Practice pronunciation of common phrases</li>
                                    <li>Prepare a brief personal introduction</li>
                                    <li>Check internet connection and microphone</li>
                                </ul>
                            </div>

                            <div className="materials-section">
                                <h4>📁 Materials</h4>
                                <div className="materials-list">
                                    <div className="material-item google-drive-item">
                                        <span>📁</span>
                                        <span>Google Drive - Class Folder</span>
                                        <button className="btn-small google-drive-btn" onClick={() => alert('🔗 Opening Google Drive...\n\nFolder: Lesson 6 - Greetings and Introductions\nContent:\n• Class Presentation\n• Practice Exercises\n• Vocabulary\n• Audio recordings')}>
                                            📂 Open Folder
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn-primary" onClick={() => alert('🎥 Joining virtual class...\n\nClass: Lesson 6 - Greetings and Introductions\nDate: September 10\nTime: 7:00 AM\nPlatform: Virtual Meet\n\n🔗 Link: meet.google.com/abc-defg-hij')}>
                                🎥 Join Class
                            </button>
                            <button className="btn-secondary" onClick={closeModal}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {activeModal === 'lessons-progress' && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content large" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>📚 Lessons Completed</h3>
                            <button className="close-btn" onClick={closeModal}>×</button>
                        </div>
                        <div className="modal-body">
                            <div className="progress-summary">
                                <div className="progress-stats">
                                    <div className="stat-item">
                                        <h4>Overall Progress</h4>
                                        <div className="progress-circle">
                                            <div className="circle-progress" style={{'--progress': `${(statistics.completedLessons / statistics.totalLessons) * 100}%`}}>
                                                <span className="progress-text">{Math.round((statistics.completedLessons / statistics.totalLessons) * 100)}%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="stat-item">
                                        <h4>Lessons Completed</h4>
                                        <p className="big-number">{statistics.completedLessons}</p>
                                        <p>of {statistics.totalLessons} lessons</p>
                                    </div>
                                    <div className="stat-item">
                                        <h4>Remaining Lessons</h4>
                                        <p className="big-number">{statistics.totalLessons - statistics.completedLessons}</p>
                                        <p>lessons to complete</p>
                                    </div>
                                </div>
                            </div>

                            <div className="lessons-timeline">
                                <h4>📅 Lesson Timeline</h4>
                                <div className="timeline">
                                    {lessons && lessons.length > 0 ? lessons.map((lesson, index) => (
                                        <div key={lesson.id} className={`timeline-item ${lesson.status}`}>
                                            <div className="timeline-marker">
                                                {lesson.status === 'completed' ? '✅' : 
                                                 lesson.status === 'current' ? '🔄' : '⏳'}
                                            </div>
                                            <div className="timeline-content">
                                                <h5>Lesson {lesson.id}: {lesson.title}</h5>
                                                <p>{lesson.description}</p>
                                                <div className="lesson-details">
                                                    <span className="lesson-duration">⏱️ {lesson.duration}</span>
                                                    <span className="lesson-difficulty">📊 {lesson.difficulty}</span>
                                                    <span className="lesson-status">
                                                        {lesson.status === 'completed' ? 'Completed' :
                                                         lesson.status === 'current' ? 'In Progress' : 'Pending'}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    )) : (
                                        <div className="no-lessons">
                                            <p>No lessons available</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="achievements-section">
                                <h4>🏆 Unlocked Achievements</h4>
                                <div className="achievements-grid">
                                    <div className="achievement-item completed">
                                        <div className="achievement-icon">🎯</div>
                                        <div className="achievement-content">
                                            <h5>First Lesson</h5>
                                            <p>You completed your first English lesson</p>
                                        </div>
                                    </div>
                                    <div className="achievement-item completed">
                                        <div className="achievement-icon">📚</div>
                                        <div className="achievement-content">
                                            <h5>Dedicated Student</h5>
                                            <p>You completed 4 consecutive lessons</p>
                                        </div>
                                    </div>
                                    <div className="achievement-item pending">
                                        <div className="achievement-icon">🔥</div>
                                        <div className="achievement-content">
                                            <h5>Study Streak</h5>
                                            <p>Complete 8 lessons to unlock</p>
                                        </div>
                                    </div>
                                    <div className="achievement-item pending">
                                        <div className="achievement-icon">🎓</div>
                                        <div className="achievement-content">
                                            <h5>Graduated</h5>
                                            <p>Complete all 12 lessons</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn-primary" onClick={() => alert('📚 Progress updated!\n\nYour progress in lessons has been recorded correctly.')}>
                                💾 Update Progress
                            </button>
                            <button className="btn-secondary" onClick={closeModal}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {activeModal === 'course-progress' && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content large" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>📈 Course Progress</h3>
                            <button className="close-btn" onClick={closeModal}>×</button>
                        </div>
                        <div className="modal-body">
                            <div className="progress-overview">
                                <div className="main-progress">
                                    <h4>Overall Course Progress</h4>
                                    <div className="progress-bar-large">
                                        <div className="progress-fill-large" style={{width: `${(statistics.completedLessons / statistics.totalLessons) * 100}%`}}></div>
                                    </div>
                                    <p className="progress-percentage">{Math.round((statistics.completedLessons / statistics.totalLessons) * 100)}% Completed</p>
                                </div>
                            </div>

                            <div className="progress-metrics">
                                <div className="metrics-grid">
                                    <div className="metric-item">
                                        <div className="metric-icon">📚</div>
                                        <div className="metric-content">
                                            <h5>Lessons</h5>
                                            <p className="metric-value">{statistics.completedLessons}/{statistics.totalLessons}</p>
                                            <p className="metric-label">Completed</p>
                                        </div>
                                    </div>
                                    <div className="metric-item">
                                        <div className="metric-icon">⏱️</div>
                                        <div className="metric-content">
                                            <h5>Time</h5>
                                            <p className="metric-value">{statistics.totalStudyTime}</p>
                                            <p className="metric-label">Studied</p>
                                        </div>
                                    </div>
                                    <div className="metric-item">
                                        <div className="metric-icon">🎯</div>
                                        <div className="metric-content">
                                            <h5>Objectives</h5>
                                            <p className="metric-value">{statistics.objectivesCompleted}/7</p>
                                            <p className="metric-label">Achieved</p>
                                        </div>
                                    </div>
                                    <div className="metric-item">
                                        <div className="metric-icon">📅</div>
                                        <div className="metric-content">
                                            <h5>Duration</h5>
                                            <p className="metric-value">5 weeks</p>
                                            <p className="metric-label">Total</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="progress-chart">
                                <h4>📊 Weekly Progress</h4>
                                <div className="chart-container">
                                    <div className="chart-bars">
                                        <div className="chart-bar">
                                            <div className="bar-fill" style={{height: '20%'}}></div>
                                            <span className="bar-label">Week 1</span>
                                        </div>
                                        <div className="chart-bar">
                                            <div className="bar-fill" style={{height: '40%'}}></div>
                                            <span className="bar-label">Week 2</span>
                                        </div>
                                        <div className="chart-bar">
                                            <div className="bar-fill" style={{height: '60%'}}></div>
                                            <span className="bar-label">Week 3</span>
                                        </div>
                                        <div className="chart-bar">
                                            <div className="bar-fill" style={{height: '33%'}}></div>
                                            <span className="bar-label">Week 4</span>
                                        </div>
                                        <div className="chart-bar">
                                            <div className="bar-fill" style={{height: '0%'}}></div>
                                            <span className="bar-label">Week 5</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="next-milestones">
                                <h4>🎯 Next Milestones</h4>
                                <div className="milestones-list">
                                    <div className="milestone-item">
                                        <div className="milestone-icon">📚</div>
                                        <div className="milestone-content">
                                            <h5>Lesson 6</h5>
                                            <p>Greetings and Introductions</p>
                                            <span className="milestone-status">Upcoming</span>
                                        </div>
                                    </div>
                                    <div className="milestone-item">
                                        <div className="milestone-icon">🎯</div>
                                        <div className="milestone-content">
                                            <h5>Objective 2</h5>
                                            <p>Professional Vocabulary</p>
                                            <span className="milestone-status">In Progress</span>
                                        </div>
                                    </div>
                                    <div className="milestone-item">
                                        <div className="milestone-icon">🏆</div>
                                        <div className="milestone-content">
                                            <h5>50% of Course</h5>
                                            <p>6 lessons completed</p>
                                            <span className="milestone-status">Pending</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn-primary" onClick={() => alert('📈 Progress updated!\n\nYour course progress has been recorded correctly.')}>
                                💾 Update Progress
                            </button>
                            <button className="btn-secondary" onClick={closeModal}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {activeModal === 'study-time' && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content large" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>⏱️ Study Time</h3>
                            <button className="close-btn" onClick={closeModal}>×</button>
                        </div>
                        <div className="modal-body">
                            <div className="study-time-overview">
                                <div className="time-summary">
                                    <div className="time-stats">
                                        <div className="time-item">
                                            <h4>Total Time</h4>
                                            <p className="big-time">{statistics.totalStudyTime}</p>
                                            <p>Hours studied</p>
                                        </div>
                                        <div className="time-item">
                                            <h4>Average Daily</h4>
                                            <p className="big-time">1.2h</p>
                                            <p>Hours per day</p>
                                        </div>
                                        <div className="time-item">
                                            <h4>Average Session</h4>
                                            <p className="big-time">45min</p>
                                            <p>Per session</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="study-sessions">
                                <h4>📚 Study Sessions</h4>
                                <div className="sessions-list">
                                    <div className="session-item completed">
                                        <div className="session-icon">📖</div>
                                        <div className="session-content">
                                            <h5>Lesson 1 - Introduction</h5>
                                            <p>August 21, 2025</p>
                                            <div className="session-details">
                                                <span className="session-duration">⏱️ 1h 15min</span>
                                                <span className="session-type">In-Person</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="session-item completed">
                                        <div className="session-icon">💻</div>
                                        <div className="session-content">
                                            <h5>Lesson 2 - Greetings I</h5>
                                            <p>August 28, 2025</p>
                                            <div className="session-details">
                                                <span className="session-duration">⏱️ 1h 30min</span>
                                                <span className="session-type">Virtual</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="session-item completed">
                                        <div className="session-icon">💻</div>
                                        <div className="session-content">
                                            <h5>Lesson 3 - Greetings II</h5>
                                            <p>August 29, 2025</p>
                                            <div className="session-details">
                                                <span className="session-duration">⏱️ 1h 45min</span>
                                                <span className="session-type">Virtual</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="session-item completed">
                                        <div className="session-icon">💻</div>
                                        <div className="session-content">
                                            <h5>Lesson 4 - Presentation</h5>
                                            <p>September 1, 2025</p>
                                            <div className="session-details">
                                                <span className="session-duration">⏱️ 1h 30min</span>
                                                <span className="session-type">Virtual</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="study-chart">
                                <h4>📊 Study Time by Week</h4>
                                <div className="chart-container">
                                    <div className="weekly-chart">
                                        <div className="week-bar">
                                            <div className="bar-fill" style={{height: '60%'}}></div>
                                            <span className="week-label">Week 1</span>
                                            <span className="week-time">1.5h</span>
                                        </div>
                                        <div className="week-bar">
                                            <div className="bar-fill" style={{height: '80%'}}></div>
                                            <span className="week-label">Week 2</span>
                                            <span className="week-time">2h</span>
                                        </div>
                                        <div className="week-bar">
                                            <div className="bar-fill" style={{height: '90%'}}></div>
                                            <span className="week-label">Week 3</span>
                                            <span className="week-time">2.5h</span>
                                        </div>
                                        <div className="week-bar">
                                            <div className="bar-fill" style={{height: '30%'}}></div>
                                            <span className="week-label">Week 4</span>
                                            <span className="week-time">1h</span>
                                        </div>
                                        <div className="week-bar">
                                            <div className="bar-fill" style={{height: '0%'}}></div>
                                            <span className="week-label">Week 5</span>
                                            <span className="week-time">0h</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="study-goals">
                                <h4>🎯 Study Goals</h4>
                                <div className="goals-list">
                                    <div className="goal-item completed">
                                        <div className="goal-icon">✅</div>
                                        <div className="goal-content">
                                            <h5>Daily Study</h5>
                                            <p>Study at least 1 hour per day</p>
                                            <span className="goal-status">Completed</span>
                                        </div>
                                    </div>
                                    <div className="goal-item in-progress">
                                        <div className="goal-icon">🔄</div>
                                        <div className="goal-content">
                                            <h5>Consistency</h5>
                                            <p>Maintain 5 consecutive days of study</p>
                                            <span className="goal-status">In Progress (3/5)</span>
                                        </div>
                                    </div>
                                    <div className="goal-item pending">
                                        <div className="goal-icon">⏳</div>
                                        <div className="goal-content">
                                            <h5>Study Marathon</h5>
                                            <p>Study 3 hours in one day</p>
                                            <span className="goal-status">Pending</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn-primary" onClick={() => alert('⏱️ Study time updated!\n\nYour study progress has been recorded correctly.')}>
                                💾 Update Progress
                            </button>
                            <button className="btn-secondary" onClick={closeModal}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {activeModal === 'objectives' && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content large" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>🎯 English Course Objectives</h3>
                            <button className="close-btn" onClick={closeModal}>×</button>
                        </div>
                        <div className="modal-body">
                            <div className="objectives-list">
                                <div className="objective-item completed">
                                    <div className="objective-icon">✅</div>
                                    <div className="objective-content">
                                        <h4>Basic Communication</h4>
                                        <p>Master greetings, introductions, and everyday conversations in English</p>
                                        <div className="objective-progress">
                                            <span className="progress-text">Completed (100%)</span>
                                            <div className="progress-bar">
                                                <div className="progress-fill" style={{width: '100%'}}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="objective-item in-progress">
                                    <div className="objective-icon">🔄</div>
                                    <div className="objective-content">
                                        <h4>Professional Vocabulary</h4>
                                        <p>Expand professional and technical vocabulary for the workplace</p>
                                        <div className="objective-progress">
                                            <span className="progress-text">In Progress (75%)</span>
                                            <div className="progress-bar">
                                                <div className="progress-fill" style={{width: '75%'}}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="objective-item in-progress">
                                    <div className="objective-icon">🔄</div>
                                    <div className="objective-content">
                                        <h4>Fluency</h4>
                                        <p>Develop confidence and naturalness in spontaneous conversations</p>
                                        <div className="objective-progress">
                                            <span className="progress-text">In Progress (60%)</span>
                                            <div className="progress-bar">
                                                <div className="progress-fill" style={{width: '60%'}}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="objective-item pending">
                                    <div className="objective-icon">⏳</div>
                                    <div className="objective-content">
                                        <h4>Job Interviews</h4>
                                        <p>Complete preparation for job interviews in English</p>
                                        <div className="objective-progress">
                                            <span className="progress-text">Pending (0%)</span>
                                            <div className="progress-bar">
                                                <div className="progress-fill" style={{width: '0%'}}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="objective-item pending">
                                    <div className="objective-icon">⏳</div>
                                    <div className="objective-content">
                                        <h4>Executive Presentations</h4>
                                        <p>Create and deliver impactful executive presentations</p>
                                        <div className="objective-progress">
                                            <span className="progress-text">Pending (0%)</span>
                                            <div className="progress-bar">
                                                <div className="progress-fill" style={{width: '0%'}}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="objective-item pending">
                                    <div className="objective-icon">⏳</div>
                                    <div className="objective-content">
                                        <h4>Advanced Comprehension</h4>
                                        <p>Understand different accents, speeds, and professional contexts</p>
                                        <div className="objective-progress">
                                            <span className="progress-text">Pending (0%)</span>
                                            <div className="progress-bar">
                                                <div className="progress-fill" style={{width: '0%'}}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="objective-item pending">
                                    <div className="objective-icon">⏳</div>
                                    <div className="objective-content">
                                        <h4>Business Writing</h4>
                                        <p>Develop formal and business writing skills</p>
                                        <div className="objective-progress">
                                            <span className="progress-text">Pending (0%)</span>
                                            <div className="progress-bar">
                                                <div className="progress-fill" style={{width: '0%'}}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="objectives-summary">
                                <h4>📊 Progress Summary</h4>
                                <div className="summary-stats">
                                    <div className="summary-item">
                                        <span className="summary-label">Completed Objectives:</span>
                                        <span className="summary-value">1 of 7</span>
                                    </div>
                                    <div className="summary-item">
                                        <span className="summary-label">In Progress:</span>
                                        <span className="summary-value">2 of 7</span>
                                    </div>
                                    <div className="summary-item">
                                        <span className="summary-label">Overall Progress:</span>
                                        <span className="summary-value">14%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn-primary" onClick={() => alert('🎯 Objectives updated!\n\nYour progress has been recorded correctly. Continue working on the pending objectives to complete your English course.')}>
                                💾 Update Progress
                            </button>
                            <button className="btn-secondary" onClick={closeModal}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {activeModal === 'edit-notes' && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>✏️ Edit Notes for Next Class</h3>
                            <button className="close-btn" onClick={closeModal}>×</button>
                        </div>
                        <div className="modal-body">
                            <div className="notes-editor">
                                <h4>📝 Personal Notes</h4>
                                <textarea 
                                    className="student-notes-textarea"
                                    placeholder="Add your notes, questions, or reminders for the next class..."
                                    rows="6"
                                />
                                <h4>❓ Questions for the Teacher</h4>
                                <textarea 
                                    className="student-notes-textarea"
                                    placeholder="Write down the questions you want to ask in the next class..."
                                    rows="4"
                                />
                                <h4>🎯 Personal Objectives</h4>
                                <textarea 
                                    className="student-notes-textarea"
                                    placeholder="Define your specific objectives for this class..."
                                    rows="3"
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn-primary" onClick={() => alert('💾 Notes saved successfully!\n\nYour personal notes have been saved and will be available during the class.')}>
                                💾 Save Notes
                            </button>
                            <button className="btn-secondary" onClick={closeModal}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isLoading && (
                <div className="loading-overlay">
                    <div className="loading-spinner">⏳</div>
                    <p>Processing...</p>
                </div>
            )}
        </div>
    );
};

export default StudentView;