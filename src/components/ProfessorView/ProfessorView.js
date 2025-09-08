import React, { useState, useEffect } from 'react';
import './ProfessorView.css';
import { professorData } from '../../data/professorData';
import { useEnglishCourse } from '../../hooks/useEnglishCourse';

const ProfessorView = () => {
    const [activeModal, setActiveModal] = useState(null);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [progressExpanded, setProgressExpanded] = useState({
        lessons: false,
        course: false,
        objectives: false,
        time: false,
    });
    
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

    const [pastOverrides, setPastOverrides] = useState({});
    const [editClass, setEditClass] = useState(null);
    const [editForm, setEditForm] = useState({ id:'', title:'', date:'', time:'', mode:'', duration:'', notes:'', topics:'' });
    const [selectedPast, setSelectedPast] = useState(null);

    // Courses CRUD state
    const [courses, setCourses] = useState([]);
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [courseForm, setCourseForm] = useState({
      title: '',
      student: '',
      durationWeeks: '5',
      totalLessons: '12',
      level: 'Intermediate',
      status: 'Active'
    });

    // Seed local non-relational DB with Gustavo if empty
    useEffect(() => {
      try {
        const saved = JSON.parse(localStorage.getItem('professor.courses') || '[]');
        const list = Array.isArray(saved) ? saved : [];
        const hasGustavo = list.some(c => c.id === 'gustavo-course');
        const gustavoSeed = {
          id: 'gustavo-course',
          title: 'English Course - Gustavo Arteaga',
          student: 'Gustavo Arteaga',
          durationWeeks: 5,
          totalLessons: 12,
          level: 'Intermediate',
          status: 'Active'
        };
        const next = hasGustavo ? list : [...list, gustavoSeed];
        localStorage.setItem('professor.courses', JSON.stringify(next));
        setCourses(next);
      } catch {
        const seed = [{
          id: 'gustavo-course',
          title: 'English Course - Gustavo Arteaga',
          student: 'Gustavo Arteaga',
          durationWeeks: 5,
          totalLessons: 12,
          level: 'Intermediate',
          status: 'Active'
        }];
        localStorage.setItem('professor.courses', JSON.stringify(seed));
        setCourses(seed);
      }
    }, []);

    const persistCourses = (next) => {
      setCourses(next);
      localStorage.setItem('professor.courses', JSON.stringify(next));
    };

    const openCreateCourse = () => setIsCreateOpen(true);
    const closeCreateCourse = () => setIsCreateOpen(false);

    const handleCourseChange = (e) => {
      const { name, value } = e.target;
      setCourseForm(prev => ({ ...prev, [name]: value }));
    };

    const saveCourse = () => {
      const newCourse = {
        id: `c_${Date.now()}`,
        title: courseForm.title.trim() || 'English Course',
        student: courseForm.student.trim(),
        durationWeeks: parseInt(courseForm.durationWeeks, 10) || 4,
        totalLessons: parseInt(courseForm.totalLessons, 10) || 8,
        level: courseForm.level,
        status: courseForm.status
      };
      const next = [...courses, newCourse];
      persistCourses(next);
      setCourseForm({ title:'', student:'', durationWeeks:'5', totalLessons:'12', level:'Intermediate', status:'Active' });
      closeCreateCourse();
    };

    const deleteCourse = (id) => {
      if (id === 'gustavo-course') return; // protected course
      const next = courses.filter(c => c.id !== id);
      persistCourses(next);
    };

    const openCourse = (course) => {
      if (course.id === 'gustavo-course') {
        openModal('gustavo-course');
      } else {
        // Placeholder: could open a simplified modal later
        // openModal('generic-course')
      }
    };

    useEffect(() => {
        try {
            const saved = JSON.parse(localStorage.getItem('pastClassOverrides') || '{}');
            setPastOverrides(saved);
        } catch {}
    }, []);

    const saveOverrides = (updated) => {
        const next = { ...pastOverrides, [updated.id]: updated };
        setPastOverrides(next);
        localStorage.setItem('pastClassOverrides', JSON.stringify(next));
    };

    const resetOverride = (id) => {
        const next = { ...pastOverrides };
        delete next[id];
        setPastOverrides(next);
        localStorage.setItem('pastClassOverrides', JSON.stringify(next));
    };

    // Base past classes (Gustavo)
    const basePast = [
        { id:'c4', title:'Class 4: Personal Introduction', date:'September 1, 2025', time:'7:00 AM', mode:'Virtual', duration:'60 min', notes:'', teacherNotes:'', topics:['Personal introduction','Basic information','Initial conversation'] },
        { id:'c3', title:'Class 3: Greetings and Farewells II', date:'August 29, 2025', time:'7:00 AM', mode:'Virtual', duration:'60 min', notes:'', teacherNotes:'', topics:['Formal/Informal greetings','Common farewells','Polite expressions'] },
        { id:'c2', title:'Class 2: Greetings and Farewells I', date:'August 28, 2025', time:'7:00 AM', mode:'Virtual', duration:'60 min', notes:'', teacherNotes:'', topics:['Basic greetings','Simple farewells','Common questions'] },
        { id:'c1', title:'Class 1: Introduction', date:'August 21, 2025', time:'4:00 PM', mode:'In-person', duration:'60 min', notes:'', teacherNotes:'', topics:['Course overview','Learning objectives','Methodology','Initial evaluation'] },
    ];

    const pastClassesMerged = basePast.map(b => ({ ...b, ...(pastOverrides[b.id] || {}) }));

    const openEdit = (cls) => {
        setEditClass(cls.id);
        setEditForm({
            id: cls.id,
            title: cls.title,
            date: cls.date,
            time: cls.time,
            mode: cls.mode,
            duration: cls.duration,
            notes: cls.notes || '',
            topics: (cls.topics || []).join(', '),
        });
    };

    const closeEdit = () => { setEditClass(null); };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditForm(prev => ({ ...prev, [name]: value }));
    };

    const saveEdit = () => {
        const updated = {
            id: editForm.id,
            title: editForm.title.trim(),
            date: editForm.date.trim(),
            time: editForm.time.trim(),
            mode: editForm.mode.trim(),
            duration: editForm.duration.trim(),
            notes: editForm.notes.trim(),
            topics: editForm.topics.split(',').map(t => t.trim()).filter(Boolean),
        };
        saveOverrides(updated);
        setEditClass(null);
    };

    const resetEdit = () => {
        if (!editClass) return;
        resetOverride(editClass);
        setEditClass(null);
    };

    const openModal = (modalType, data = null) => {
        setActiveModal(modalType);
        if (modalType === 'student') setSelectedStudent(data);
    };

    const closeModal = () => {
        setActiveModal(null);
        setSelectedStudent(null);
    };

    const toggleProgress = (key) => {
        setProgressExpanded(prev => ({ ...prev, [key]: !prev[key] }));
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

    const openPastDetail = (cls) => setSelectedPast(cls);
    const closePastDetail = () => setSelectedPast(null);

    return (
        <div className="professor-view">
            {/* Courses Overview */}
            <div className="courses-overview">
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', margin:'0 0 16px 0'}}>
                    <h2 style={{margin:0}}>📚 My Courses</h2>
                    <button className="btn-primary" onClick={openCreateCourse}>+ Create Course</button>
                </div>
                <div className="courses-grid">
                    {courses.map(course => (
                        <div key={course.id} className="course-card" onClick={() => openCourse(course)}>
                            <div className="course-header">
                                <div className="course-icon">🎓</div>
                                <div className="course-info">
                                    <h3>{course.title}</h3>
                                    <p className="course-subtitle">{course.level} · {course.durationWeeks} weeks</p>
                                </div>
                                <div style={{marginLeft:'auto'}} className="course-card__actions" onClick={(e)=>e.stopPropagation()}>
                                    {course.id !== 'gustavo-course' && (
                                        <button className="btn-ghost" onClick={() => deleteCourse(course.id)}>Delete</button>
                                    )}
                                </div>
                            </div>
                            <div className="course-content-info">
                                <div className="course-details">
                                    <p><strong>Student:</strong> {course.student || '—'}</p>
                                    <p><strong>Lessons:</strong> {course.totalLessons}</p>
                                    <p><strong>Status:</strong> {course.status}</p>
                                </div>
                            </div>
                        </div>
                    ))}
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
                                    <div className="progress-card clickable" onClick={() => toggleProgress('lessons')}>
                                        <div className="progress-icon">📚</div>
                                        <div className="progress-info">
                                            <h3>4/12</h3>
                                            <p>Lessons Completed</p>
                                        </div>
                                    </div>
                                    {/* Details: Lessons Completed */}
                                    {progressExpanded.lessons && (
                                    <div style={{gridColumn: '1 / -1', background:'rgba(0,0,0,0.35)', border:'1px solid rgba(0,0,0,0.5)', borderRadius:12, padding:'12px 14px', color:'#ecf0f1'}}>
                                        <strong>Recent Lessons:</strong>
                                        <ul style={{margin:'8px 0 0 18px'}}>
                                            <li>Lesson 4: Personal Introduction (Sep 1, 2025)</li>
                                            <li>Lesson 3: Greetings and Farewells II (Aug 29, 2025)</li>
                                            <li>Lesson 2: Greetings and Farewells I (Aug 28, 2025)</li>
                                        </ul>
                                    </div>
                                    )}

                                    <div className="progress-card clickable" onClick={() => toggleProgress('course')}>
                                        <div className="progress-icon">📈</div>
                                        <div className="progress-info">
                                            <h3>33%</h3>
                                            <p>Course Progress</p>
                                        </div>
                                    </div>
                                    {/* Details: Course Progress */}
                                    {progressExpanded.course && (
                                    <div style={{gridColumn: '1 / -1', background:'rgba(0,0,0,0.35)', border:'1px solid rgba(0,0,0,0.5)', borderRadius:12, padding:'12px 14px', color:'#ecf0f1'}}>
                                        <div style={{display:'flex', gap:16, flexWrap:'wrap'}}>
                                            <div><strong>Total Lessons:</strong> 12</div>
                                            <div><strong>Completed:</strong> 4</div>
                                            <div><strong>Remaining:</strong> 8</div>
                                            <div><strong>Average:</strong> 87.5%</div>
                                        </div>
                                    </div>
                                    )}

                                    <div className="progress-card clickable" onClick={() => toggleProgress('objectives')}>
                                        <div className="progress-icon">🎯</div>
                                        <div className="progress-info">
                                            <h3>1</h3>
                                            <p>Objectives Achieved</p>
                                        </div>
                                    </div>
                                    {/* Details: Objectives */}
                                    {progressExpanded.objectives && (
                                    <div style={{gridColumn: '1 / -1', background:'rgba(0,0,0,0.35)', border:'1px solid rgba(0,0,0,0.5)', borderRadius:12, padding:'12px 14px', color:'#ecf0f1'}}>
                                        <strong>Objectives:</strong>
                                        <ul style={{margin:'8px 0 0 18px'}}>
                                            <li>Professional Interview – In progress</li>
                                            <li>Fluency in Greetings – Completed</li>
                                            <li>Numbers and Dates – Upcoming</li>
                                            <li>Daily Conversations – Upcoming</li>
                                            <li>Presentation Skills – Upcoming</li>
                                        </ul>
                                    </div>
                                    )}

                                    <div className="progress-card clickable" onClick={() => toggleProgress('time')}>
                                        <div className="progress-icon">⏱️</div>
                                        <div className="progress-info">
                                            <h3>6h</h3>
                                            <p>Study Time</p>
                                        </div>
                                    </div>
                                    {/* Details: Study Time */}
                                    {progressExpanded.time && (
                                    <div style={{gridColumn: '1 / -1', background:'rgba(0,0,0,0.35)', border:'1px solid rgba(0,0,0,0.5)', borderRadius:12, padding:'12px 14px', color:'#ecf0f1'}}>
                                        <div style={{display:'flex', gap:16, flexWrap:'wrap'}}>
                                            <div><strong>Total Time:</strong> 6h</div>
                                            <div><strong>Avg/Week:</strong> 1.5h</div>
                                            <div><strong>Sessions:</strong> 8</div>
                                        </div>
                                    </div>
                                    )}
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
                                <div className="past-classes-grid classes-grid">
                                    {pastClassesMerged.map(cls => (
                                        <div key={cls.id} className="class-card" onClick={() => openPastDetail(cls)}>
                                            <div className="class-header">
                                                <h3>{cls.title.replace('Class', 'Lesson')}</h3>
                                                <span className="class-date">{cls.date}</span>
                                                <div style={{marginLeft:'auto'}} className="course-actions" onClick={(e)=>e.stopPropagation()}>
                                                    <button className="btn-ghost" onClick={() => openEdit(cls)}>Edit</button>
                                                </div>
                                            </div>
                                            <div className="class-content">
                                                <h4>{cls.mode === 'Virtual' ? 'Virtual Class' : cls.mode === 'In-person' ? 'In-person Class' : cls.mode}</h4>
                                                <div className="class-duration">⏱️ {cls.duration}</div>
                                                <div className="class-topics">
                                                    {(cls.topics || []).slice(0,2).map((t, idx)=> (
                                                        <span key={idx} className="topic-tag">{t}</span>
                                                    ))}
                                                    {(cls.topics || []).length > 2 && (
                                                        <span className="topic-tag">+{(cls.topics.length - 2)} more</span>
                                                    )}
                                                </div>
                                                <p className="class-teacher">👨‍🏫 Prof. Laura Chaves</p>
                                                <div className="class-progress">
                                                    <span className="progress-indicator">✅ Completed</span>
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

            {selectedPast && (
                <div className="modal-overlay" onClick={closePastDetail}>
                    <div className="modal-content large" onClick={e=>e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>📚 Virtual Class</h3>
                            <button className="close-btn" onClick={closePastDetail}>×</button>
                        </div>
                        <div className="modal-body">
                            <div className="class-details">
                                <div className="class-info">
                                    <div className="info-row">
                                        <span className="label">📅 Date:</span>
                                        <span>{selectedPast.date} at {selectedPast.time}</span>
                                    </div>
                                    <div className="info-row">
                                        <span className="label">⏱️ Duration:</span>
                                        <span>{selectedPast.duration}</span>
                                    </div>
                                    <div className="info-row">
                                        <span className="label">📖 Lesson:</span>
                                        <span>{selectedPast.title.replace('Class ','Lesson ')}</span>
                                    </div>
                                    <div className="info-row">
                                        <span className="label">👨‍🏫 Teacher:</span>
                                        <span>Prof. Laura Chaves</span>
                                    </div>
                                </div>
                                <div className="topics-section">
                                    <h4>🎯 Topics Covered</h4>
                                    <div className="topics-list">
                                        {(selectedPast.topics || []).map((t, idx)=> (
                                            <span key={idx} className="topic-tag">{t}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="notes-section">
                                    <h4>📝 Student Notes</h4>
                                    <p style={{color:'rgba(255,255,255,0.85)'}}>{selectedPast.notes || '—'}</p>
                                </div>
                                <div className="homework-section">
                                    <h4>📝 Teacher Notes</h4>
                                    <div className="editable-content">
                                        <textarea
                                            className="student-notes-textarea"
                                            placeholder="Add teacher notes here"
                                            defaultValue={selectedPast.teacherNotes || 'Arrived late to class. Requested the presentation afterwards. Work on punctuality.'}
                                            onBlur={(e)=>{
                                                const updated = { ...selectedPast, teacherNotes: e.target.value };
                                                saveOverrides(updated);
                                                setSelectedPast(updated);
                                            }}
                                        />
                                        <button className="btn-primary" onClick={closePastDetail}>💾 Save Notes</button>
                                    </div>
                                </div>
                                <div className="materials-section">
                                    <h4>📁 Materials</h4>
                                    <div className="materials-list">
                                        <div className="material-item">
                                            <span>📁</span>
                                            <span>Google Drive - Class Folder</span>
                                            <button className="btn-small" onClick={()=>window.open('https://drive.google.com', '_blank')}>📂 Open Folder</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Past Class Modal */}
            {editClass && (
                <div className="modal-overlay" onClick={closeEdit}>
                    <div className="modal-content" onClick={e=>e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>Edit Past Class</h3>
                            <button className="close-btn" onClick={closeEdit}>×</button>
                        </div>
                        <div className="modal-body">
                            <div className="info-item" style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px', background:'transparent', border:'none', padding:0}}>
                                <label>Title
                                    <input name="title" value={editForm.title} onChange={handleEditChange} style={{width:'100%'}} />
                                </label>
                                <label>Date
                                    <input name="date" value={editForm.date} onChange={handleEditChange} style={{width:'100%'}} />
                                </label>
                                <label>Time
                                    <input name="time" value={editForm.time} onChange={handleEditChange} style={{width:'100%'}} />
                                </label>
                                <label>Mode
                                    <input name="mode" value={editForm.mode} onChange={handleEditChange} style={{width:'100%'}} />
                                </label>
                                <label>Duration
                                    <input name="duration" value={editForm.duration} onChange={handleEditChange} style={{width:'100%'}} />
                                </label>
                                <label>Topics (comma separated)
                                    <input name="topics" value={editForm.topics} onChange={handleEditChange} style={{width:'100%'}} />
                                </label>
                                <label style={{gridColumn:'1 / -1'}}>Notes
                                    <textarea name="notes" value={editForm.notes} onChange={handleEditChange} style={{width:'100%'}} />
                                </label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn-secondary" onClick={resetEdit}>Reset</button>
                            <button className="btn-primary" onClick={saveEdit}>Save</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Create Course Modal */}
            {isCreateOpen && (
                <div className="modal-overlay" onClick={closeCreateCourse}>
                    <div className="modal-content" onClick={e=>e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>Create Course</h3>
                            <button className="close-btn" onClick={closeCreateCourse}>×</button>
                        </div>
                        <div className="modal-body">
                            <div className="info-item" style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px', background:'transparent', border:'none', padding:0}}>
                                <label>Title
                                    <input name="title" value={courseForm.title} onChange={handleCourseChange} style={{width:'100%'}} />
                                </label>
                                <label>Student
                                    <input name="student" value={courseForm.student} onChange={handleCourseChange} style={{width:'100%'}} />
                                </label>
                                <label>Duration (weeks)
                                    <input name="durationWeeks" value={courseForm.durationWeeks} onChange={handleCourseChange} style={{width:'100%'}} />
                                </label>
                                <label>Total Lessons
                                    <input name="totalLessons" value={courseForm.totalLessons} onChange={handleCourseChange} style={{width:'100%'}} />
                                </label>
                                <label>Level
                                    <select name="level" value={courseForm.level} onChange={handleCourseChange} style={{width:'100%'}}>
                                        <option>Beginner</option>
                                        <option>Intermediate</option>
                                        <option>Advanced</option>
                                    </select>
                                </label>
                                <label>Status
                                    <select name="status" value={courseForm.status} onChange={handleCourseChange} style={{width:'100%'}}>
                                        <option>Active</option>
                                        <option>Planned</option>
                                        <option>Completed</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn-secondary" onClick={closeCreateCourse}>Cancel</button>
                            <button className="btn-primary" onClick={saveCourse}>Save</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfessorView;

