import React, { useEffect, useMemo, useRef, useState } from 'react';
import './Community.css';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import { useTheme } from '../../contexts/ThemeContext';

function Community() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [role, setRole] = useState(null); // 'admin' | 'student'
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { isDarkMode } = useTheme();

    // Utility: today at specific time (local)
    const getTodayAt = (hour, minute) => {
        const d = new Date();
        d.setHours(hour, minute, 0, 0);
        return d.toISOString();
    };

    // Seed courses with simple sample structure
    const [courses, setCourses] = useState([
        {
            id: 'eng-gustavo',
            name: 'English Gustavo',
            owner: 'admin',
            units: [
                {
                    id: 'u1',
                    title: 'Unit 1: Introductions',
                    lessons: [
                        {
                            id: 'l1',
                            title: 'Class Test',
                            // Provided document link
                            docUrl: 'https://docs.google.com/document/d/1vQnjfqr56yD5Kfc1lRAMj_VROvqVqPGayIdoczUARkg/edit?usp=sharing',
                            meetUrl: 'https://meet.google.com/xcz-zyss-xxu',
                            canvaUrl: 'https://www.canva.com/design/DAGvyfOKOd8/VZ8jMmw3JN8x3R-vGZW4tg/edit',
                            // Friday, September 5 · 3:15am – 3:00pm America/Bogota (UTC-05:00)
                            // Using 2025 as example year; adjust as needed
                            scheduledAt: '2025-09-05T03:15:00-05:00',
                            durationMin: ((15 * 60) + 45) // 3:15am to 3:00pm -> 11h45m = 705 min
                        },
                        {
                            id: 'l2',
                            title: 'Class 2 - Personal Info',
                            docUrl: 'https://docs.google.com',
                            meetUrl: 'https://meet.google.com',
                            canvaUrl: 'https://www.canva.com',
                            scheduledAt: null,
                            durationMin: 60
                        }
                    ]
                }
            ]
        },
        { id: 'eng-alfoncina', name: 'English Alfoncina', owner: 'admin', units: [] },
        { id: 'eng-arturo', name: 'English Arturo', owner: 'admin', units: [] },
        { id: 'eng-milo', name: 'English Milo', owner: 'admin', units: [] }
    ]);

    const [selectedCourseId, setSelectedCourseId] = useState('eng-gustavo');
    const [selectedLesson, setSelectedLesson] = useState(null);
    const [activeResource, setActiveResource] = useState('doc'); // 'doc' | 'meet' | 'canva'
    const [liveMode, setLiveMode] = useState(false);
    const [liveLesson, setLiveLesson] = useState(null);
    // In-app editor state
    const [editorHtml, setEditorHtml] = useState('<h3>Class Notes</h3><p>Write here...</p>');
    const editorRef = useRef(null);
    const [sessions, setSessions] = useState([]);
    const [currentSessionId, setCurrentSessionId] = useState(null);
    const [isResizing, setIsResizing] = useState(false);
    const [panelWidths, setPanelWidths] = useState({ editor: 40, meet: 60 }); // percentages
    const [sessionStartTime, setSessionStartTime] = useState(null);
    const [sessionReports, setSessionReports] = useState([]);
    const [sessionTimer, setSessionTimer] = useState(0);
    const [monthlyClassCount, setMonthlyClassCount] = useState(0);
    const [classReviews, setClassReviews] = useState({});
    const [showReports, setShowReports] = useState(false);
    const [reports, setReports] = useState([]);
    // In-app call state
    const videoRef = useRef(null);
    const mediaStreamRef = useRef(null);
    const [callActive, setCallActive] = useState(false);
    const [callSeconds, setCallSeconds] = useState(0);
    const timerRef = useRef(null);

    // Calculate current course and lesson early
    const visibleCourses = role === 'student'
        ? courses.filter(c => c.id === 'eng-gustavo')
        : courses;
    const currentCourse = visibleCourses.find(c => c.id === selectedCourseId) || visibleCourses[0] || null;
    const currentLesson = selectedLesson || (currentCourse && currentCourse.units[0] && currentCourse.units[0].lessons[0]) || null;

    // Simple live clock component inline
    const LiveClock = ({ tz }) => {
        const [, force] = useState(0);
        const [now, setNow] = useState(new Date());
        useEffect(() => {
            const t = setInterval(() => { setNow(new Date()); force(x => x + 1); }, 1000);
            return () => clearInterval(t);
        }, []);
        const fmt = new Intl.DateTimeFormat('en-US', {
            hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true,
            timeZone: tz || 'UTC'
        });
        const dateFmt = new Intl.DateTimeFormat('en-US', {
            weekday: 'long', year: 'numeric', month: 'long', day: '2-digit',
            timeZone: tz || 'UTC'
        });
        return (
            <div className="live-clock">
                <span className="live-date">{dateFmt.format(now)}</span>
                <span className="live-time">{fmt.format(now)}</span>
                <span className="live-tz">{tz}</span>
            </div>
        );
    };

    // Notes database functions
    const saveSession = (sessionData) => {
        const sessions = JSON.parse(localStorage.getItem('classNotes') || '[]');
        const existingIndex = sessions.findIndex(s => s.id === sessionData.id);
        if (existingIndex >= 0) {
            sessions[existingIndex] = sessionData;
        } else {
            sessions.push(sessionData);
        }
        localStorage.setItem('classNotes', JSON.stringify(sessions));
        setSessions(sessions);
    };

    const loadSessions = () => {
        const sessions = JSON.parse(localStorage.getItem('classNotes') || '[]');
        setSessions(sessions);
        return sessions;
    };

    const createNewSession = () => {
        const sessionId = `session_${Date.now()}`;
        const sessionData = {
            id: sessionId,
            courseId: currentCourse?.id,
            lessonId: currentLesson?.id,
            title: `${currentCourse?.name} - ${currentLesson?.title}`,
            content: editorHtml,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        saveSession(sessionData);
        setCurrentSessionId(sessionId);
        return sessionId;
    };

    const loadSession = (sessionId) => {
        const session = sessions.find(s => s.id === sessionId);
        if (session) {
            setEditorHtml(session.content);
            setCurrentSessionId(sessionId);
        }
    };

    // Session management functions
    const startSession = () => {
        setSessionStartTime(Date.now());
        const sessionId = createNewSession();
        setCurrentSessionId(sessionId);
    };

    const endSession = () => {
        if (sessionStartTime && currentSessionId) {
            const duration = Math.floor((Date.now() - sessionStartTime) / 1000);
            const report = {
                id: `report_${Date.now()}`,
                sessionId: currentSessionId,
                courseId: currentCourse?.id,
                lessonId: currentLesson?.id,
                title: `${currentCourse?.name} - ${currentLesson?.title}`,
                duration: duration,
                notes: editorHtml,
                startTime: new Date(sessionStartTime).toISOString(),
                endTime: new Date().toISOString(),
                createdAt: new Date().toISOString(),
                type: 'live_session'
            };
            
            // Auto-save report
            const existingReports = JSON.parse(localStorage.getItem('session-reports') || '[]');
            const updatedReports = [...existingReports, report];
            localStorage.setItem('session-reports', JSON.stringify(updatedReports));
            
            // Auto-generate and download report
            const reportData = {
                generatedAt: new Date().toISOString(),
                totalSessions: updatedReports.length,
                totalDuration: updatedReports.reduce((sum, r) => sum + r.duration, 0),
                sessions: updatedReports,
                lastSession: report
            };
            
            const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `live-session-report-${new Date().toISOString().split('T')[0]}.json`;
            a.click();
            URL.revokeObjectURL(url);
            
            setSessionReports(updatedReports);
            setSessionStartTime(null);
            setCurrentSessionId(null);
            setEditorHtml('<h3>Class Notes</h3><p>Write here...</p>');
        }
    };

    const generateReport = () => {
        setShowReports(true);
        loadReports();
    };

    const closeReports = () => {
        setShowReports(false);
    };

    // Auto-save notes
    useEffect(() => {
        if (currentSessionId && editorHtml) {
            const sessionData = {
                id: currentSessionId,
                courseId: currentCourse?.id,
                lessonId: currentLesson?.id,
                title: `${currentCourse?.name} - ${currentLesson?.title}`,
                content: editorHtml,
                createdAt: sessions.find(s => s.id === currentSessionId)?.createdAt || new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                duration: sessionStartTime ? Math.floor((Date.now() - sessionStartTime) / 1000) : 0
            };
            saveSession(sessionData);
        }
    }, [editorHtml, currentSessionId, currentCourse, currentLesson, sessions, sessionStartTime]);

    // Load sessions on mount
    useEffect(() => {
        loadSessions();
        loadMonthlyStats();
        loadClassReviews();
        loadReports();
    }, []);

    // Load reports
    const loadReports = () => {
        const reports = JSON.parse(localStorage.getItem('session-reports') || '[]');
        setReports(reports);
    };

    // Load monthly statistics
    const loadMonthlyStats = () => {
        const currentMonth = new Date().toISOString().slice(0, 7); // YYYY-MM
        const reports = JSON.parse(localStorage.getItem('session-reports') || '[]');
        const monthlySessions = reports.filter(report => 
            report.startTime && report.startTime.startsWith(currentMonth)
        );
        setMonthlyClassCount(monthlySessions.length);
    };

    // Load class reviews
    const loadClassReviews = () => {
        const reviews = JSON.parse(localStorage.getItem('class-reviews') || '{}');
        setClassReviews(reviews);
    };

    // Save class review
    const saveClassReview = (lessonId, review) => {
        const updatedReviews = {
            ...classReviews,
            [lessonId]: {
                ...review,
                lessonId,
                updatedAt: new Date().toISOString()
            }
        };
        setClassReviews(updatedReviews);
        localStorage.setItem('class-reviews', JSON.stringify(updatedReviews));
    };

    // Get class review
    const getClassReview = (lessonId) => {
        return classReviews[lessonId] || {
            rating: 0,
            notes: '',
            completed: false,
            homework: '',
            nextTopics: ''
        };
    };

    // Check if lesson is in the past
    const isLessonPast = (lesson) => {
        if (!lesson || !lesson.scheduledAt) return false;
        const now = new Date();
        const lessonDate = new Date(lesson.scheduledAt);
        return lessonDate < now;
    };

    // Check if lesson is live (within 30 minutes of scheduled time)
    const isLessonLive = (lesson) => {
        if (!lesson || !lesson.scheduledAt) return false;
        const now = new Date();
        const lessonDate = new Date(lesson.scheduledAt);
        const timeDiff = Math.abs(now - lessonDate);
        const thirtyMinutes = 30 * 60 * 1000;
        return timeDiff <= thirtyMinutes;
    };

    // Session timer
    useEffect(() => {
        let interval;
        if (sessionStartTime) {
            interval = setInterval(() => {
                setSessionTimer(Math.floor((Date.now() - sessionStartTime) / 1000));
            }, 1000);
        } else {
            setSessionTimer(0);
        }
        return () => clearInterval(interval);
    }, [sessionStartTime]);

    // Create new session when lesson changes
    useEffect(() => {
        if (currentLesson && currentCourse) {
            const existingSession = sessions.find(s => 
                s.courseId === currentCourse.id && s.lessonId === currentLesson.id
            );
            if (existingSession) {
                loadSession(existingSession.id);
            } else {
                createNewSession();
            }
        }
    }, [currentLesson, currentCourse]);

    // Modern editor commands
    const execCommand = (command, value = null) => {
        if (editorRef.current) {
            editorRef.current.focus();
            document.execCommand(command, false, value);
            setEditorHtml(editorRef.current.innerHTML);
        }
    };

    const makeBold = () => execCommand('bold');
    const makeItalic = () => execCommand('italic');
    const makeUnderline = () => execCommand('underline');
    const addBullet = () => execCommand('insertUnorderedList');
    const addNumberedList = () => execCommand('insertOrderedList');
    const addHeading = () => execCommand('formatBlock', 'h3');
    const addParagraph = () => execCommand('formatBlock', 'p');
    const addLink = () => {
        const url = prompt('Enter URL:');
        if (url) execCommand('createLink', url);
    };

    // Call controls
    const startCall = async () => {
        if (callActive) return;
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            mediaStreamRef.current = stream;
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                await videoRef.current.play();
            }
            setCallActive(true);
            setCallSeconds(0);
            timerRef.current = setInterval(() => setCallSeconds(s => s + 1), 1000);
        } catch (e) {
            // eslint-disable-next-line no-console
            console.error('Could not start call', e);
            alert('Camera/Microphone permission denied or unavailable.');
        }
    };

    const stopCall = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
        if (mediaStreamRef.current) {
            mediaStreamRef.current.getTracks().forEach(t => t.stop());
            mediaStreamRef.current = null;
        }
        setCallActive(false);
    };

    useEffect(() => () => stopCall(), []);

    // Resize handlers
    const handleMouseDown = (e) => {
        setIsResizing(true);
        const startX = e.clientX;
        const startWidths = { ...panelWidths };

        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const containerWidth = window.innerWidth;
            const deltaPercent = (deltaX / containerWidth) * 100;
            
            const newEditorWidth = Math.max(20, Math.min(80, startWidths.editor + deltaPercent));
            const newMeetWidth = 100 - newEditorWidth;
            
            setPanelWidths({ editor: newEditorWidth, meet: newMeetWidth });
        };

        const handleMouseUp = () => {
            setIsResizing(false);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };


    // URL helpers
    const toDocsPreview = (url) => {
        if (!url) return url;
        try {
            const u = new URL(url);
            // Replace /edit or /view to /preview
            u.pathname = u.pathname.replace(/\/edit$/, '/preview').replace(/\/view$/, '/preview');
            // Ensure preview param
            u.search = '';
            return u.toString();
        } catch {
            return url;
        }
    };

    // Build a persistent Jitsi room name per course/lesson
    const jitsiRoomName = useMemo(() => {
        const base = 'LauraClass';
        const course = currentCourse?.id || 'course';
        const lesson = (liveLesson?.id || currentLesson?.id || 'lesson');
        return `${base}-${course}-${lesson}`;
    }, [currentCourse, currentLesson, liveLesson]);
    const jitsiUrl = useMemo(() => `https://meet.jit.si/${encodeURIComponent(jitsiRoomName)}`, [jitsiRoomName]);

    // Determine if any lesson is currently live (within scheduled window)
    const liveCandidate = useMemo(() => {
        const now = Date.now();
        const allLessons = (currentCourse?.units || []).flatMap(u => u.lessons || []);
        for (const lesson of allLessons) {
            if (!lesson?.scheduledAt || !lesson?.durationMin) continue;
            const start = new Date(lesson.scheduledAt).getTime();
            const end = start + lesson.durationMin * 60 * 1000;
            if (now >= start && now <= end) return lesson;
        }
        return null;
    }, [currentCourse]);

    // Auto-enter live mode when a scheduled lesson is in progress
    useEffect(() => {
        if (liveCandidate) {
            setLiveLesson(liveCandidate);
            setLiveMode(true);
        }
    }, [liveCandidate]);

    // Poll every 30s to re-evaluate schedule
    useEffect(() => {
        const t = setInterval(() => {
            // Trigger re-compute by toggling selectedCourseId noop
            setSelectedCourseId(prev => prev);
        }, 30000);
        return () => clearInterval(t);
    }, []);

    const handleLogin = (e) => {
    e.preventDefault();
        // Demo credentials
        if (username === 'admin' && password === 'admin123') {
            setIsLoggedIn(true);
            setRole('admin');
            setError('');
            return;
        }
        if (username === 'student' && password === 'student123') {
            setIsLoggedIn(true);
            setRole('student');
            setError('');
            return;
        }
        setError('Invalid credentials. Try: admin/admin123 or student/student123');
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setRole(null);
        setUsername('');
        setPassword('');
        setError('');
        setSelectedCourseId('eng-gustavo');
        setSelectedLesson(null);
        setActiveResource('doc');
    };

    const addCourse = () => {
        const name = window.prompt('Course name');
        if (!name) return;
        const id = name.toLowerCase().replace(/\s+/g, '-').slice(0, 30);
        setCourses(prev => [...prev, { id, name, owner: 'admin', units: [] }]);
    };

    if (isLoggedIn) {
  return (
    <>
      <Navbar />
                <div className={`community-page ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
                    <div className="community-header">
                        <h1>🌟 Community Portal</h1>
                        <p>{role === 'admin' ? 'Admin Dashboard' : 'Student Dashboard'}</p>
                        <button onClick={handleLogout} className="logout-btn">Logout</button>
                    </div>

                    <div className="course-split">
                        {/* Left: Tree and course list */}
                        <div className="course-left">
                            <div className="course-list-header">
                                <h3>Courses</h3>
                                {role === 'admin' && (
                                    <button className="add-course-btn" onClick={addCourse}>+ New</button>
                                )}
                            </div>
                            <ul className="course-list">
                                {visibleCourses.map(c => (
                                    <li key={c.id} className={`course-item ${currentCourse && c.id === currentCourse.id ? 'active' : ''}`}
                                        onClick={() => { setSelectedCourseId(c.id); setSelectedLesson(null); }}>
                                        <span>📘</span>
                                        <span className="course-name">{c.name}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="course-tree">
                                <h4>Content</h4>
                                {!currentCourse || currentCourse.units.length === 0 ? (
                                    <div className="empty-tree">No content yet.</div>
                                ) : (
                                    <ul className="unit-list">
                                        {currentCourse.units.map(unit => (
                                            <li key={unit.id} className="unit-item">
                                                <div className="unit-title">📂 {unit.title}</div>
                                                <ul className="lesson-list">
                                                    {unit.lessons.map(lesson => (
                                                        <li key={lesson.id}
                                                            className={`lesson-item ${currentLesson && lesson.id === currentLesson.id ? 'selected' : ''}`}
                                                            onClick={() => setSelectedLesson(lesson)}>
                                                            <span>📄</span>
                                                            <span className="lesson-name">{lesson.title}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>

                        {/* Right: Embedded resources */}
                        <div className="course-right">
                            <div className="viewer-header">
                                <div className="viewer-title">
                                    <span>🧭</span>
                                    <div>
                                        <div className="crumb-course">{currentCourse ? currentCourse.name : 'No course selected'}</div>
                                        <div className="crumb-lesson">{currentLesson ? currentLesson.title : 'Select a lesson'}</div>
                                        {currentLesson && isLessonPast(currentLesson) && (
                                            <div className="lesson-status past">📅 Past Class</div>
                                        )}
                                        {currentLesson && isLessonLive(currentLesson) && (
                                            <div className="lesson-status live">🔴 Live Now</div>
                                        )}
                                    </div>
                                </div>
                                <div className="viewer-tabs">
                                    {currentLesson && !isLessonPast(currentLesson) && (
                                        <button className={`tab-btn ${liveMode ? 'active' : ''}`} onClick={() => { if (currentLesson) { setLiveLesson(currentLesson); setLiveMode(true); } }}>Live Mode</button>
                                    )}
                                    <button className={`tab-btn ${activeResource === 'doc' ? 'active' : ''}`} onClick={() => setActiveResource('doc')}>Google Docs</button>
                                    <button className={`tab-btn ${activeResource === 'meet' ? 'active' : ''}`} onClick={() => setActiveResource('meet')}>Google Meet</button>
                                    <button className={`tab-btn ${activeResource === 'canva' ? 'active' : ''}`} onClick={() => setActiveResource('canva')}>Canva</button>
                                    <button className="tab-btn fullscreen-btn" onClick={() => {
                                        if (document.documentElement.requestFullscreen) {
                                            document.documentElement.requestFullscreen();
                                        }
                                    }}>⛶ Fullscreen</button>
                                </div>
                            </div>

                            <div className="viewer-frame">
                                {!currentLesson && (
                                    <div className="viewer-placeholder">Select a class from the left to view resources.</div>
                                )}
                                {currentLesson && activeResource === 'doc' && (
                                    <iframe title="Google Doc" src={currentLesson.docUrl} frameBorder="0" allowFullScreen></iframe>
                                )}
                                {currentLesson && activeResource === 'meet' && (
                                    <iframe title="Google Meet" src={currentLesson.meetUrl} frameBorder="0" allow="camera; microphone; fullscreen" />
                                )}
                                {currentLesson && activeResource === 'canva' && (
                                    <iframe title="Canva" src={currentLesson.canvaUrl} frameBorder="0" allowFullScreen></iframe>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />

                {/* Live full-screen overlay */}
                {liveMode && (
                    <div className="live-overlay">
                        {/* Compact bar with clock (no tall header) */}
                        <div className="live-topbar">
                            <div className="live-top-left">
                                <span className="live-dot">●</span>
                                <span className="live-label">Live</span>
                                <span className="live-crumb">{currentCourse?.name} • {liveLesson?.title}</span>
                            </div>
                            <div className="live-top-right">
                                <LiveClock tz="America/Bogota" />
                                <button className="exit-live-btn" onClick={() => setLiveMode(false)}>Exit Live</button>
                            </div>
                        </div>
                        <div className="live-grid-horizontal">
                            <div 
                                className="live-panel editor-panel" 
                                style={{ width: `${panelWidths.editor}%` }}
                            >
                                <div className="panel-title">Notes Editor</div>
                                <div className="editor-toolbar">
                                    <div className="editor-buttons">
                                        <button onClick={makeBold} title="Bold">B</button>
                                        <button onClick={makeItalic} title="Italic">I</button>
                                        <button onClick={makeUnderline} title="Underline">U</button>
                                        <button onClick={addHeading} title="Heading">H</button>
                                        <button onClick={addBullet} title="Bullet List">•</button>
                                        <button onClick={addNumberedList} title="Numbered List">1.</button>
                                        <button onClick={addLink} title="Add Link">🔗</button>
                                    </div>
                                    <div className="session-controls">
                                        {!sessionStartTime ? (
                                            <button onClick={startSession} className="start-session-btn">Start Session</button>
                                        ) : (
                                            <button onClick={endSession} className="end-session-btn">End Session</button>
                                        )}
                                        <button onClick={generateReport} className="report-btn">Generate Report</button>
                                    </div>
                                    <div className="session-info">
                                        <div className="session-stats">
                                            <span>{sessions.length} sessions saved</span>
                                            <span className="monthly-count">📅 {monthlyClassCount} this month</span>
                                        </div>
                                        {sessionStartTime && (
                                            <span className="session-timer">
                                                ⏱️ {sessionTimer}s
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div
                                    className="editor-surface"
                                    ref={editorRef}
                                    contentEditable
                                    suppressContentEditableWarning
                                    onInput={(e) => setEditorHtml(e.currentTarget.innerHTML)}
                                    dangerouslySetInnerHTML={{ __html: editorHtml }}
                                />
                                
                                {/* Class Review Section */}
                                {currentLesson && (
                                    <div className="class-review-section">
                                        <div className="review-header">
                                            <h4>📝 Class Review - {currentLesson.title}</h4>
                                        </div>
                                        <div className="review-content">
                                            <div className="review-rating">
                                                <label>Rating:</label>
                                                <div className="star-rating">
                                                    {[1, 2, 3, 4, 5].map(star => (
                                                        <button
                                                            key={star}
                                                            className={`star ${star <= getClassReview(currentLesson.id).rating ? 'active' : ''}`}
                                                            onClick={() => {
                                                                const currentReview = getClassReview(currentLesson.id);
                                                                saveClassReview(currentLesson.id, {
                                                                    ...currentReview,
                                                                    rating: star
                                                                });
                                                            }}
                                                        >
                                                            ⭐
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="review-fields">
                                                <div className="review-field">
                                                    <label>Notes:</label>
                                                    <textarea
                                                        placeholder="Class notes and observations..."
                                                        value={getClassReview(currentLesson.id).notes}
                                                        onChange={(e) => {
                                                            const currentReview = getClassReview(currentLesson.id);
                                                            saveClassReview(currentLesson.id, {
                                                                ...currentReview,
                                                                notes: e.target.value
                                                            });
                                                        }}
                                                    />
                                                </div>
                                                <div className="review-field">
                                                    <label>Homework:</label>
                                                    <textarea
                                                        placeholder="Assignments and homework..."
                                                        value={getClassReview(currentLesson.id).homework}
                                                        onChange={(e) => {
                                                            const currentReview = getClassReview(currentLesson.id);
                                                            saveClassReview(currentLesson.id, {
                                                                ...currentReview,
                                                                homework: e.target.value
                                                            });
                                                        }}
                                                    />
                                                </div>
                                                <div className="review-field">
                                                    <label>Next Topics:</label>
                                                    <textarea
                                                        placeholder="Topics for next class..."
                                                        value={getClassReview(currentLesson.id).nextTopics}
                                                        onChange={(e) => {
                                                            const currentReview = getClassReview(currentLesson.id);
                                                            saveClassReview(currentLesson.id, {
                                                                ...currentReview,
                                                                nextTopics: e.target.value
                                                            });
                                                        }}
                                                    />
                                                </div>
                                                <div className="review-checkbox">
                                                    <label>
                                                        <input
                                                            type="checkbox"
                                                            checked={getClassReview(currentLesson.id).completed}
                                                            onChange={(e) => {
                                                                const currentReview = getClassReview(currentLesson.id);
                                                                saveClassReview(currentLesson.id, {
                                                                    ...currentReview,
                                                                    completed: e.target.checked
                                                                });
                                                            }}
                                                        />
                                                        Class Completed
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            
                            <div 
                                className="resize-handle" 
                                onMouseDown={handleMouseDown}
                            />
                            
                            <div 
                                className="live-panel meet-panel" 
                                style={{ width: `${panelWidths.meet}%` }}
                            >
                                <div className="panel-title">Jitsi Meeting</div>
                                <div className="panel-body">
                                    <iframe
                                        title="Live Jitsi"
                                        src={jitsiUrl}
                                        frameBorder="0"
                                        allow="camera; microphone; fullscreen; display-capture; autoplay; clipboard-write"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                    <a className="open-btn" href={jitsiUrl} target="_blank" rel="noopener noreferrer">Open Jitsi</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Reports Modal */}
                {showReports && (
                    <div className="reports-modal">
                        <div className="reports-content">
                            <div className="reports-header">
                                <h3>📊 Session Reports</h3>
                                <button onClick={closeReports} className="close-reports-btn">✕</button>
                            </div>
                            <div className="reports-stats">
                                <div className="stat-item">
                                    <span className="stat-label">Total Sessions:</span>
                                    <span className="stat-value">{reports.length}</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-label">Total Duration:</span>
                                    <span className="stat-value">{Math.floor(reports.reduce((sum, r) => sum + r.duration, 0) / 60)} min</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-label">This Month:</span>
                                    <span className="stat-value">{monthlyClassCount}</span>
                                </div>
                            </div>
                            <div className="reports-list">
                                {reports.map((report, index) => (
                                    <div key={report.id || index} className="report-item">
                                        <div className="report-header">
                                            <h4>{report.title}</h4>
                                            <span className="report-date">
                                                {new Date(report.startTime).toLocaleDateString()}
                                            </span>
                                        </div>
                                        <div className="report-details">
                                            <div className="report-duration">
                                                ⏱️ {Math.floor(report.duration / 60)}m {report.duration % 60}s
                                            </div>
                                            <div className="report-notes">
                                                <strong>Notes:</strong> {report.notes ? report.notes.substring(0, 100) + '...' : 'No notes'}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className={`community-page ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
                <div className="login-container">
                    <div className="login-header">
                        <h1>🌟 Community Access</h1>
                        <p>Enter your credentials to access the educational community</p>
                    </div>
                    
                    <form onSubmit={handleLogin} className="login-form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
              <input
                                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter username"
                required
              />
            </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                <input
                                type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter password"
                  required
                />
            </div>

                        {error && <div className="error-message">{error}</div>}
                        
                        <button type="submit" className="login-btn">
                            ⚡ Access Community
                        </button>
                    </form>
                    
                    <div className="login-hint">
                        <p>Demo credentials:</p>
                        <p><strong>admin</strong> / <strong>admin123</strong> (admin)</p>
                        <p><strong>student</strong> / <strong>student123</strong> (student)</p>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Community;