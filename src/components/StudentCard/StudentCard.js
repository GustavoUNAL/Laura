import React, { useState, useEffect } from 'react';
import './StudentCard.css';

const StudentCard = ({ student, course, onViewDetails, onViewProgress }) => {
    const [studentStats, setStudentStats] = useState({
        totalSessions: 0,
        completedSessions: 0,
        totalDuration: 0,
        lastActivity: null,
        monthlySessions: 0,
        averageRating: 0
    });

    useEffect(() => {
        loadStudentStats();
    }, [student.id, course.id]);

    const loadStudentStats = () => {
        try {
            // Load student's session data
            const sessions = JSON.parse(localStorage.getItem('sessions') || '[]');
            const reports = JSON.parse(localStorage.getItem('session-reports') || '[]');
            const reviews = JSON.parse(localStorage.getItem('class-reviews') || '{}');

            // Filter data for this student and course
            const studentSessions = sessions.filter(session => 
                session.studentId === student.id && session.courseId === course.id
            );
            
            const studentReports = reports.filter(report => 
                report.studentId === student.id && report.courseId === course.id
            );

            // Calculate monthly sessions
            const currentMonth = new Date().toISOString().slice(0, 7);
            const monthlySessions = studentReports.filter(report => 
                report.startTime && report.startTime.startsWith(currentMonth)
            ).length;

            // Calculate total duration
            const totalDuration = studentReports.reduce((sum, report) => 
                sum + (report.duration || 0), 0
            );

            // Calculate average rating
            const courseReviews = Object.values(reviews).filter(review => 
                review.courseId === course.id && review.studentId === student.id
            );
            const averageRating = courseReviews.length > 0 
                ? courseReviews.reduce((sum, review) => sum + (review.rating || 0), 0) / courseReviews.length
                : 0;

            // Get last activity
            const lastActivity = studentReports.length > 0 
                ? studentReports.sort((a, b) => new Date(b.startTime) - new Date(a.startTime))[0].startTime
                : null;

            setStudentStats({
                totalSessions: studentSessions.length,
                completedSessions: studentReports.length,
                totalDuration,
                lastActivity,
                monthlySessions,
                averageRating
            });

        } catch (error) {
            console.error('Error loading student stats:', error);
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
        if (!dateString) return 'Never';
        return new Date(dateString).toLocaleDateString();
    };

    const getProgressPercentage = () => {
        if (studentStats.totalSessions === 0) return 0;
        return Math.round((studentStats.completedSessions / studentStats.totalSessions) * 100);
    };

    const getPerformanceColor = () => {
        const percentage = getProgressPercentage();
        if (percentage >= 80) return '#00FF88';
        if (percentage >= 60) return '#FFA500';
        return '#FF4500';
    };

    return (
        <div className="student-card">
            <div className="student-header">
                <div className="student-avatar">
                    <span>{student.name.charAt(0).toUpperCase()}</span>
                </div>
                <div className="student-info">
                    <h3 className="student-name">{student.name}</h3>
                    <p className="student-email">{student.email}</p>
                    <div className="course-badge">{course.name}</div>
                </div>
                <div className="student-status">
                    <div className="status-indicator" style={{ backgroundColor: getPerformanceColor() }}></div>
                </div>
            </div>

            <div className="student-stats">
                <div className="stat-row">
                    <div className="stat-item">
                        <span className="stat-label">Sessions</span>
                        <span className="stat-value">{studentStats.completedSessions}/{studentStats.totalSessions}</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">This Month</span>
                        <span className="stat-value">{studentStats.monthlySessions}</span>
                    </div>
                </div>
                
                <div className="stat-row">
                    <div className="stat-item">
                        <span className="stat-label">Duration</span>
                        <span className="stat-value">{formatDuration(studentStats.totalDuration)}</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">Rating</span>
                        <span className="stat-value">
                            {studentStats.averageRating > 0 ? '★'.repeat(Math.round(studentStats.averageRating)) : 'No rating'}
                        </span>
                    </div>
                </div>

                <div className="progress-bar">
                    <div 
                        className="progress-fill" 
                        style={{ 
                            width: `${getProgressPercentage()}%`,
                            backgroundColor: getPerformanceColor()
                        }}
                    ></div>
                </div>
                <div className="progress-text">{getProgressPercentage()}% Complete</div>
            </div>

            <div className="student-actions">
                <button 
                    className="action-btn view-details"
                    onClick={() => onViewDetails(student, course)}
                >
                    📊 Details
                </button>
                <button 
                    className="action-btn view-progress"
                    onClick={() => onViewProgress(student, course)}
                >
                    📈 Progress
                </button>
            </div>

            <div className="last-activity">
                <span className="activity-label">Last Activity:</span>
                <span className="activity-date">{formatDate(studentStats.lastActivity)}</span>
            </div>
        </div>
    );
};

export default StudentCard;
