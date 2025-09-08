import React, { useState } from 'react';
import './StudentPage.css';
import StudentLogin from '../../components/StudentLogin/StudentLogin';
import StudentDashboard from '../../components/StudentDashboard/StudentDashboard';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';

function StudentPage() {
    const [student, setStudent] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (studentData) => {
        setIsLoading(true);
        // Simular carga
        setTimeout(() => {
            setStudent(studentData);
            setIsLoading(false);
        }, 1000);
    };

    const handleLogout = () => {
        setStudent(null);
    };

    return (
        <>
            <Navbar />
            <div className="student-page">
                {isLoading ? (
                    <div className="loading-container">
                        <div className="loading-spinner"></div>
                        <p>Iniciando sesión...</p>
                    </div>
                ) : student ? (
                    <StudentDashboard student={student} onLogout={handleLogout} />
                ) : (
                    <StudentLogin onLogin={handleLogin} />
                )}
            </div>
            <Footer />
        </>
    );
}

export default StudentPage;
