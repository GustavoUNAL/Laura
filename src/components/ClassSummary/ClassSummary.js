import React, { useState, useEffect } from 'react';
import './ClassSummary.css';

const ClassSummary = ({ lesson, isOpen, onClose }) => {
    const [summary, setSummary] = useState({
        notes: '',
        homework: '',
        nextTopics: '',
        rating: 0,
        completed: false,
        duration: 0,
        attendance: false
    });

    const [showPDF, setShowPDF] = useState(false);
    const [showCanva, setShowCanva] = useState(false);

    useEffect(() => {
        if (isOpen && lesson) {
            loadClassSummary();
        }
    }, [isOpen, lesson]);

    const loadClassSummary = () => {
        try {
            // Load class review data
            const reviews = JSON.parse(localStorage.getItem('class-reviews') || '{}');
            const reports = JSON.parse(localStorage.getItem('session-reports') || '[]');
            
            const review = reviews[lesson.id] || {};
            const report = reports.find(r => r.lessonId === lesson.id);
            
            setSummary({
                notes: review.notes || '',
                homework: review.homework || '',
                nextTopics: review.nextTopics || '',
                rating: review.rating || 0,
                completed: review.completed || false,
                duration: report?.duration || 0,
                attendance: !!report
            });
        } catch (error) {
            console.error('Error loading class summary:', error);
        }
    };

    const formatDuration = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        
        if (hours > 0) {
            return `${hours}h ${minutes}m`;
        } else {
            return `${minutes}m`;
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const getStatusColor = () => {
        if (summary.completed) return '#00FF88';
        if (summary.attendance) return '#FFA500';
        return '#FF4500';
    };

    const getStatusText = () => {
        if (summary.completed) return 'Completada';
        if (summary.attendance) return 'En progreso';
        return 'Pendiente';
    };

    if (!isOpen || !lesson) return null;

    return (
        <div className="class-summary-modal">
            <div className="class-summary-content">
                <div className="summary-header">
                    <div className="lesson-info">
                        <h2 className="lesson-title">{lesson.title}</h2>
                        <p className="lesson-date">
                            {lesson.scheduledAt ? formatDate(lesson.scheduledAt) : 'Sin fecha programada'}
                        </p>
                        <div className="lesson-status">
                            <span 
                                className="status-badge"
                                style={{ backgroundColor: getStatusColor() }}
                            >
                                {getStatusText()}
                            </span>
                        </div>
                    </div>
                    <button onClick={onClose} className="close-btn">✕</button>
                </div>

                <div className="summary-body">
                    <div className="summary-stats">
                        <div className="stat-card">
                            <div className="stat-icon">⏱️</div>
                            <div className="stat-info">
                                <span className="stat-label">Duración</span>
                                <span className="stat-value">{formatDuration(summary.duration)}</span>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">⭐</div>
                            <div className="stat-info">
                                <span className="stat-label">Calificación</span>
                                <span className="stat-value">
                                    {summary.rating > 0 ? '★'.repeat(summary.rating) : 'Sin calificar'}
                                </span>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon">📝</div>
                            <div className="stat-info">
                                <span className="stat-label">Notas</span>
                                <span className="stat-value">{summary.notes.length} caracteres</span>
                            </div>
                        </div>
                    </div>

                    <div className="summary-content">
                        <div className="content-section">
                            <h3 className="section-title">📝 Notas de la Clase</h3>
                            <div className="content-box">
                                {summary.notes ? (
                                    <div 
                                        className="notes-content"
                                        dangerouslySetInnerHTML={{ __html: summary.notes }}
                                    />
                                ) : (
                                    <p className="no-content">No hay notas para esta clase</p>
                                )}
                            </div>
                        </div>

                        <div className="content-section">
                            <h3 className="section-title">📚 Tarea Asignada</h3>
                            <div className="content-box">
                                {summary.homework ? (
                                    <p className="homework-content">{summary.homework}</p>
                                ) : (
                                    <p className="no-content">No hay tarea asignada</p>
                                )}
                            </div>
                        </div>

                        <div className="content-section">
                            <h3 className="section-title">🎯 Próximos Temas</h3>
                            <div className="content-box">
                                {summary.nextTopics ? (
                                    <p className="topics-content">{summary.nextTopics}</p>
                                ) : (
                                    <p className="no-content">No hay temas programados</p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="summary-actions">
                        <div className="action-group">
                            <h4 className="action-title">Recursos de la Clase</h4>
                            <div className="action-buttons">
                                <button 
                                    className="action-btn pdf-btn"
                                    onClick={() => setShowPDF(!showPDF)}
                                >
                                    📄 {showPDF ? 'Ocultar PDF' : 'Ver PDF'}
                                </button>
                                <button 
                                    className="action-btn canva-btn"
                                    onClick={() => setShowCanva(!showCanva)}
                                >
                                    🎨 {showCanva ? 'Ocultar Canva' : 'Ver Canva'}
                                </button>
                            </div>
                        </div>

                        {showPDF && lesson.docUrl && (
                            <div className="resource-viewer">
                                <h4>Documento PDF</h4>
                                <iframe
                                    src={lesson.docUrl}
                                    title="Class PDF"
                                    className="pdf-viewer"
                                />
                            </div>
                        )}

                        {showCanva && lesson.canvaUrl && (
                            <div className="resource-viewer">
                                <h4>Presentación Canva</h4>
                                <iframe
                                    src={lesson.canvaUrl}
                                    title="Class Canva"
                                    className="canva-viewer"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassSummary;
