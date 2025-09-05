// Backup and Monitoring Service
class BackupService {
    constructor() {
        this.backupInterval = 5 * 60 * 1000; // 5 minutes
        this.maxBackups = 10; // Keep last 10 backups
        this.isRunning = false;
        this.logs = [];
        this.analytics = {
            sessions: [],
            userActivity: [],
            performance: [],
            errors: []
        };
    }

    // Start automatic backups
    start() {
        if (this.isRunning) return;
        
        this.isRunning = true;
        this.log('Backup service started', 'info');
        
        // Initial backup
        this.createBackup();
        
        // Schedule regular backups
        this.backupTimer = setInterval(() => {
            this.createBackup();
        }, this.backupInterval);
    }

    // Stop automatic backups
    stop() {
        if (!this.isRunning) return;
        
        this.isRunning = false;
        this.log('Backup service stopped', 'info');
        
        if (this.backupTimer) {
            clearInterval(this.backupTimer);
            this.backupTimer = null;
        }
    }

    // Create a backup
    createBackup() {
        try {
            const timestamp = new Date().toISOString();
            const backupData = {
                timestamp,
                sessions: this.getSessionsData(),
                classReviews: this.getClassReviewsData(),
                reports: this.getReportsData(),
                analytics: this.analytics,
                version: '1.0.0'
            };

            // Store backup
            const backups = this.getBackups();
            backups.push(backupData);
            
            // Keep only last N backups
            if (backups.length > this.maxBackups) {
                backups.splice(0, backups.length - this.maxBackups);
            }
            
            localStorage.setItem('app-backups', JSON.stringify(backups));
            this.log(`Backup created: ${timestamp}`, 'success');
            
            // Track backup analytics
            this.trackEvent('backup_created', { timestamp, size: JSON.stringify(backupData).length });
            
        } catch (error) {
            this.log(`Backup failed: ${error.message}`, 'error');
            this.trackError('backup_failed', error);
        }
    }

    // Restore from backup
    restore(backupIndex = -1) {
        try {
            const backups = this.getBackups();
            if (backups.length === 0) {
                throw new Error('No backups available');
            }

            const backup = backups[backupIndex === -1 ? backups.length - 1 : backupIndex];
            
            // Restore data
            if (backup.sessions) {
                localStorage.setItem('sessions', JSON.stringify(backup.sessions));
            }
            if (backup.classReviews) {
                localStorage.setItem('class-reviews', JSON.stringify(backup.classReviews));
            }
            if (backup.reports) {
                localStorage.setItem('session-reports', JSON.stringify(backup.reports));
            }

            this.log(`Restored from backup: ${backup.timestamp}`, 'success');
            this.trackEvent('backup_restored', { timestamp: backup.timestamp });
            
            return true;
        } catch (error) {
            this.log(`Restore failed: ${error.message}`, 'error');
            this.trackError('restore_failed', error);
            return false;
        }
    }

    // Get all backups
    getBackups() {
        return JSON.parse(localStorage.getItem('app-backups') || '[]');
    }

    // Get sessions data
    getSessionsData() {
        return JSON.parse(localStorage.getItem('sessions') || '[]');
    }

    // Get class reviews data
    getClassReviewsData() {
        return JSON.parse(localStorage.getItem('class-reviews') || '{}');
    }

    // Get reports data
    getReportsData() {
        return JSON.parse(localStorage.getItem('session-reports') || '[]');
    }

    // Logging system
    log(message, level = 'info') {
        const logEntry = {
            timestamp: new Date().toISOString(),
            level,
            message,
            id: Math.random().toString(36).substr(2, 9)
        };
        
        this.logs.push(logEntry);
        
        // Keep only last 1000 logs
        if (this.logs.length > 1000) {
            this.logs.splice(0, this.logs.length - 1000);
        }
        
        // Store logs
        localStorage.setItem('app-logs', JSON.stringify(this.logs));
        
        // Console output for development
        console[level === 'error' ? 'error' : 'log'](`[${level.toUpperCase()}] ${message}`);
    }

    // Get logs
    getLogs(level = null, limit = 100) {
        let filteredLogs = this.logs;
        
        if (level) {
            filteredLogs = this.logs.filter(log => log.level === level);
        }
        
        return filteredLogs.slice(-limit);
    }

    // Analytics tracking
    trackEvent(eventName, data = {}) {
        const event = {
            timestamp: new Date().toISOString(),
            event: eventName,
            data,
            sessionId: this.getCurrentSessionId(),
            userId: this.getCurrentUserId()
        };
        
        this.analytics.userActivity.push(event);
        this.saveAnalytics();
    }

    // Track session analytics
    trackSession(sessionData) {
        const session = {
            ...sessionData,
            timestamp: new Date().toISOString(),
            duration: sessionData.duration || 0,
            notesLength: sessionData.notes ? sessionData.notes.length : 0,
            completed: sessionData.completed || false
        };
        
        this.analytics.sessions.push(session);
        this.saveAnalytics();
    }

    // Track performance metrics
    trackPerformance(metric, value) {
        const performance = {
            timestamp: new Date().toISOString(),
            metric,
            value,
            sessionId: this.getCurrentSessionId()
        };
        
        this.analytics.performance.push(performance);
        this.saveAnalytics();
    }

    // Track errors
    trackError(errorType, error) {
        const errorData = {
            timestamp: new Date().toISOString(),
            type: errorType,
            message: error.message,
            stack: error.stack,
            sessionId: this.getCurrentSessionId(),
            userId: this.getCurrentUserId()
        };
        
        this.analytics.errors.push(errorData);
        this.saveAnalytics();
    }

    // Save analytics
    saveAnalytics() {
        localStorage.setItem('app-analytics', JSON.stringify(this.analytics));
    }

    // Load analytics
    loadAnalytics() {
        const saved = localStorage.getItem('app-analytics');
        if (saved) {
            this.analytics = JSON.parse(saved);
        }
    }

    // Get current session ID
    getCurrentSessionId() {
        return localStorage.getItem('current-session-id') || 'unknown';
    }

    // Get current user ID
    getCurrentUserId() {
        return localStorage.getItem('user-id') || 'anonymous';
    }

    // Analytics calculations
    getRetentionRate(days = 30) {
        const cutoffDate = new Date();
        cutoffDate.setDate(cutoffDate.getDate() - days);
        
        const recentSessions = this.analytics.sessions.filter(session => 
            new Date(session.timestamp) >= cutoffDate
        );
        
        const uniqueUsers = new Set(recentSessions.map(s => s.userId));
        const totalSessions = recentSessions.length;
        
        return {
            uniqueUsers: uniqueUsers.size,
            totalSessions,
            averageSessionsPerUser: uniqueUsers.size > 0 ? totalSessions / uniqueUsers.size : 0
        };
    }

    // Get progress analytics
    getProgressAnalytics() {
        const sessions = this.analytics.sessions;
        const totalDuration = sessions.reduce((sum, s) => sum + (s.duration || 0), 0);
        const completedSessions = sessions.filter(s => s.completed).length;
        
        return {
            totalSessions: sessions.length,
            completedSessions,
            completionRate: sessions.length > 0 ? (completedSessions / sessions.length) * 100 : 0,
            totalDuration,
            averageDuration: sessions.length > 0 ? totalDuration / sessions.length : 0,
            totalNotesLength: sessions.reduce((sum, s) => sum + (s.notesLength || 0), 0)
        };
    }

    // Get time on task analytics
    getTimeOnTaskAnalytics() {
        const sessions = this.analytics.sessions;
        const now = new Date();
        
        // Group by day
        const dailyStats = {};
        sessions.forEach(session => {
            const date = new Date(session.timestamp).toDateString();
            if (!dailyStats[date]) {
                dailyStats[date] = { duration: 0, sessions: 0 };
            }
            dailyStats[date].duration += session.duration || 0;
            dailyStats[date].sessions += 1;
        });
        
        return {
            dailyStats,
            weeklyAverage: this.calculateWeeklyAverage(dailyStats),
            peakHours: this.calculatePeakHours(sessions)
        };
    }

    // Calculate weekly average
    calculateWeeklyAverage(dailyStats) {
        const days = Object.keys(dailyStats);
        if (days.length === 0) return 0;
        
        const totalDuration = Object.values(dailyStats).reduce((sum, day) => sum + day.duration, 0);
        return totalDuration / days.length;
    }

    // Calculate peak hours
    calculatePeakHours(sessions) {
        const hourCounts = {};
        sessions.forEach(session => {
            const hour = new Date(session.timestamp).getHours();
            hourCounts[hour] = (hourCounts[hour] || 0) + 1;
        });
        
        return Object.entries(hourCounts)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 5)
            .map(([hour, count]) => ({ hour: parseInt(hour), count }));
    }

    // Export analytics
    exportAnalytics() {
        const exportData = {
            timestamp: new Date().toISOString(),
            analytics: this.analytics,
            retention: this.getRetentionRate(),
            progress: this.getProgressAnalytics(),
            timeOnTask: this.getTimeOnTaskAnalytics(),
            logs: this.getLogs()
        };
        
        const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `analytics-export-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }

    // Health check
    getHealthStatus() {
        const now = new Date();
        const lastBackup = this.getBackups().slice(-1)[0];
        const lastBackupTime = lastBackup ? new Date(lastBackup.timestamp) : null;
        
        const isHealthy = lastBackupTime && (now - lastBackupTime) < (this.backupInterval * 2);
        
        return {
            isHealthy,
            lastBackup: lastBackupTime,
            totalBackups: this.getBackups().length,
            totalLogs: this.logs.length,
            isRunning: this.isRunning,
            uptime: this.isRunning ? now - this.startTime : 0
        };
    }
}

// Create singleton instance
const backupService = new BackupService();

// Initialize
backupService.loadAnalytics();

export default backupService;
