import React, { useState, useEffect } from 'react';
import './StudentPage.css';
import StudentDashboard from '../../components/StudentDashboard/StudentDashboard';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import AuthService from '../../services/authService';

function StudentPage() {
    const [student, setStudent] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check if user is authenticated and has student role
        const session = AuthService.getCurrentSession();
        
        if (session && session.role === 'student') {
            setStudent(session);
        } else {
            // Redirect to Community for login
            window.location.href = '/community';
            return;
        }
        
        setIsLoading(false);
    }, []);

    const handleLogout = () => {
        AuthService.logout();
        window.location.href = '/community';
    };

    if (isLoading) {
        return (
            <>
                <Navbar />
                <div className="student-page">
                    <div className="loading-container">
                        <div className="loading-spinner"></div>
                        <p>Loading student dashboard...</p>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className="student-page">
                <StudentDashboard student={student} onLogout={handleLogout} />
            </div>
            <Footer />
        </>
    );
}

export default StudentPage;
