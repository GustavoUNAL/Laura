import React, { useState, useEffect } from 'react';
import './AnalyticsDashboard.css';
import backupService from '../../services/backupService';

const AnalyticsDashboard = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState('overview');
    const [analytics, setAnalytics] = useState(null);
    const [logs, setLogs] = useState([]);
    const [healthStatus, setHealthStatus] = useState(null);

    useEffect(() => {
        if (isOpen) {
            loadAnalytics();
            loadLogs();
            loadHealthStatus();
        }
    }, [isOpen]);

    const loadAnalytics = () => {
        backupService.loadAnalytics();
        const retention = backupService.getRetentionRate();
        const progress = backupService.getProgressAnalytics();
        const timeOnTask = backupService.getTimeOnTaskAnalytics();
        
        setAnalytics({
            retention,
            progress,
            timeOnTask
        });
    };

    const loadLogs = () => {
        const recentLogs = backupService.getLogs(null, 50);
        setLogs(recentLogs);
    };

    const loadHealthStatus = () => {
        const health = backupService.getHealthStatus();
        setHealthStatus(health);
    };

    const formatDuration = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        
        if (hours > 0) {
            return `${hours}h ${minutes}m ${secs}s`;
        } else if (minutes > 0) {
            return `${minutes}m ${secs}s`;
        } else {
            return `${secs}s`;
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleString();
    };

    const getLogLevelColor = (level) => {
        switch (level) {
            case 'error': return '#FF4500';
            case 'warning': return '#FFA500';
            case 'success': return '#00FF88';
            case 'info': return '#00BFFF';
            default: return '#ffffff';
        }
    };

    if (!isOpen) return null;

    return (
        <div className="analytics-modal">
            <div className="analytics-content">
                <div className="analytics-header">
                    <h2>📊 Analytics Dashboard</h2>
                    <button onClick={onClose} className="close-btn">✕</button>
                </div>

                <div className="analytics-tabs">
                    <button 
                        className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                        onClick={() => setActiveTab('overview')}
                    >
                        📈 Overview
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === 'retention' ? 'active' : ''}`}
                        onClick={() => setActiveTab('retention')}
                    >
                        👥 Retention
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === 'progress' ? 'active' : ''}`}
                        onClick={() => setActiveTab('progress')}
                    >
                        🎯 Progress
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === 'time' ? 'active' : ''}`}
                        onClick={() => setActiveTab('time')}
                    >
                        ⏱️ Time Analysis
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === 'logs' ? 'active' : ''}`}
                        onClick={() => setActiveTab('logs')}
                    >
                        📋 Logs
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === 'health' ? 'active' : ''}`}
                        onClick={() => setActiveTab('health')}
                    >
                        🏥 Health
                    </button>
                </div>

                <div className="analytics-body">
                    {activeTab === 'overview' && analytics && (
                        <div className="overview-tab">
                            <div className="stats-grid">
                                <div className="stat-card">
                                    <h3>Total Sessions</h3>
                                    <div className="stat-value">{analytics.progress.totalSessions}</div>
                                </div>
                                <div className="stat-card">
                                    <h3>Completion Rate</h3>
                                    <div className="stat-value">{analytics.progress.completionRate.toFixed(1)}%</div>
                                </div>
                                <div className="stat-card">
                                    <h3>Total Duration</h3>
                                    <div className="stat-value">{formatDuration(analytics.progress.totalDuration)}</div>
                                </div>
                                <div className="stat-card">
                                    <h3>Unique Users</h3>
                                    <div className="stat-value">{analytics.retention.uniqueUsers}</div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'retention' && analytics && (
                        <div className="retention-tab">
                            <h3>User Retention (Last 30 Days)</h3>
                            <div className="retention-stats">
                                <div className="retention-item">
                                    <span className="label">Unique Users:</span>
                                    <span className="value">{analytics.retention.uniqueUsers}</span>
                                </div>
                                <div className="retention-item">
                                    <span className="label">Total Sessions:</span>
                                    <span className="value">{analytics.retention.totalSessions}</span>
                                </div>
                                <div className="retention-item">
                                    <span className="label">Avg Sessions/User:</span>
                                    <span className="value">{analytics.retention.averageSessionsPerUser.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'progress' && analytics && (
                        <div className="progress-tab">
                            <h3>Progress Analytics</h3>
                            <div className="progress-stats">
                                <div className="progress-item">
                                    <span className="label">Total Sessions:</span>
                                    <span className="value">{analytics.progress.totalSessions}</span>
                                </div>
                                <div className="progress-item">
                                    <span className="label">Completed Sessions:</span>
                                    <span className="value">{analytics.progress.completedSessions}</span>
                                </div>
                                <div className="progress-item">
                                    <span className="label">Completion Rate:</span>
                                    <span className="value">{analytics.progress.completionRate.toFixed(1)}%</span>
                                </div>
                                <div className="progress-item">
                                    <span className="label">Total Duration:</span>
                                    <span className="value">{formatDuration(analytics.progress.totalDuration)}</span>
                                </div>
                                <div className="progress-item">
                                    <span className="label">Average Duration:</span>
                                    <span className="value">{formatDuration(analytics.progress.averageDuration)}</span>
                                </div>
                                <div className="progress-item">
                                    <span className="label">Total Notes Length:</span>
                                    <span className="value">{analytics.progress.totalNotesLength} characters</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'time' && analytics && (
                        <div className="time-tab">
                            <h3>Time on Task Analysis</h3>
                            <div className="time-stats">
                                <div className="time-item">
                                    <span className="label">Weekly Average Duration:</span>
                                    <span className="value">{formatDuration(analytics.timeOnTask.weeklyAverage)}</span>
                                </div>
                                <div className="peak-hours">
                                    <h4>Peak Activity Hours</h4>
                                    {analytics.timeOnTask.peakHours.map((peak, index) => (
                                        <div key={index} className="peak-hour">
                                            <span className="hour">{peak.hour}:00</span>
                                            <span className="count">{peak.count} sessions</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'logs' && (
                        <div className="logs-tab">
                            <div className="logs-header">
                                <h3>System Logs</h3>
                                <button 
                                    onClick={loadLogs} 
                                    className="refresh-btn"
                                >
                                    🔄 Refresh
                                </button>
                            </div>
                            <div className="logs-list">
                                {logs.map((log, index) => (
                                    <div key={log.id || index} className="log-entry">
                                        <span 
                                            className="log-level"
                                            style={{ color: getLogLevelColor(log.level) }}
                                        >
                                            {log.level.toUpperCase()}
                                        </span>
                                        <span className="log-time">{formatDate(log.timestamp)}</span>
                                        <span className="log-message">{log.message}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'health' && healthStatus && (
                        <div className="health-tab">
                            <h3>System Health</h3>
                            <div className="health-stats">
                                <div className="health-item">
                                    <span className="label">Status:</span>
                                    <span className={`value ${healthStatus.isHealthy ? 'healthy' : 'unhealthy'}`}>
                                        {healthStatus.isHealthy ? '✅ Healthy' : '❌ Unhealthy'}
                                    </span>
                                </div>
                                <div className="health-item">
                                    <span className="label">Last Backup:</span>
                                    <span className="value">
                                        {healthStatus.lastBackup ? formatDate(healthStatus.lastBackup) : 'Never'}
                                    </span>
                                </div>
                                <div className="health-item">
                                    <span className="label">Total Backups:</span>
                                    <span className="value">{healthStatus.totalBackups}</span>
                                </div>
                                <div className="health-item">
                                    <span className="label">Total Logs:</span>
                                    <span className="value">{healthStatus.totalLogs}</span>
                                </div>
                                <div className="health-item">
                                    <span className="label">Service Running:</span>
                                    <span className="value">{healthStatus.isRunning ? '✅ Yes' : '❌ No'}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="analytics-footer">
                    <button 
                        onClick={() => backupService.exportAnalytics()}
                        className="export-btn"
                    >
                        📥 Export Analytics
                    </button>
                    <button 
                        onClick={() => backupService.createBackup()}
                        className="backup-btn"
                    >
                        💾 Create Backup
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsDashboard;
