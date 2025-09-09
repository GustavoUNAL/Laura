import React, { useState, useEffect } from 'react';
import './ProfessorPage.css';
import ProfessorView from '../../components/ProfessorView/ProfessorView';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import AuthService from '../../services/authService';

function ProfessorPage() {
    const [professor, setProfessor] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check if user is authenticated and has professor role
        const session = AuthService.getCurrentSession();
        
        if (session && session.role === 'professor') {
            setProfessor(session);
        } else {
            // Redirect to Community for login
            window.location.href = '/community';
            return;
        }
        
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return (
            <>
                <Navbar />
                <div className="professor-page">
                    <div className="loading-container">
                        <div className="loading-spinner"></div>
                        <p>Loading professor view...</p>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className="professor-page">
                <ProfessorView />
            </div>
            <Footer />
        </>
    );
}

export default ProfessorPage;


