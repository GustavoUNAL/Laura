import React, { useState } from 'react';
import './ProfessorPage.css';
import ProfessorDashboard from '../../components/ProfessorDashboard/ProfessorDashboard';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';

function ProfessorPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = () => {
        setIsLoading(true);
        // Simular proceso de login del profesor
        setTimeout(() => {
            setIsLoggedIn(true);
            setIsLoading(false);
        }, 1500);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <>
            <Navbar />
            <div className="professor-page">
                {isLoading ? (
                    <div className="loading-container">
                        <div className="loading-spinner"></div>
                        <p>Iniciando sesión como profesor...</p>
                    </div>
                ) : isLoggedIn ? (
                    <ProfessorDashboard onLogout={handleLogout} />
                ) : (
                    <div className="professor-login">
                        <div className="login-container">
                            <div className="login-header">
                                <h1>Acceso Profesor</h1>
                                <p>Ingresa al panel de gestión de estudiantes</p>
                            </div>
                            
                            <div className="login-form">
                                <div className="form-group">
                                    <label htmlFor="professor-email">Email del Profesor</label>
                                    <input 
                                        type="email" 
                                        id="professor-email"
                                        placeholder="profesor@universidad.edu"
                                        className="form-input"
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="professor-password">Contraseña</label>
                                    <input 
                                        type="password" 
                                        id="professor-password"
                                        placeholder="••••••••"
                                        className="form-input"
                                    />
                                </div>
                                
                                <button 
                                    onClick={handleLogin}
                                    className="login-button"
                                >
                                    Iniciar Sesión
                                </button>
                            </div>
                            
                            <div className="login-info">
                                <p>Para propósitos de demostración, puedes usar cualquier email y contraseña.</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}

export default ProfessorPage;


