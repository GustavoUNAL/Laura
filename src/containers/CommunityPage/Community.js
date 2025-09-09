import React, { useState } from 'react';
import './Community.css';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import { useTheme } from '../../contexts/ThemeContext';
import AuthService from '../../services/authService';

function Community() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { isDarkMode } = useTheme();

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const result = AuthService.login(username, password);
            
            if (result.success) {
                // Redirect based on user role
                if (result.user.role === 'student') {
                    window.location.href = '/student';
                } else if (result.user.role === 'professor') {
                    window.location.href = '/professor';
                }
            } else {
                setError(result.message || 'Credenciales inválidas');
            }
        } catch (err) {
            setError('Error al iniciar sesión. Inténtalo de nuevo.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <div className={`community-page ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
                {/* Login Form */}
                <div className="view-selector">
                    <div className="selector-container">
                        <h1>🌟 Portal de la Comunidad</h1>
                        <p>Inicia sesión para acceder al portal</p>
                        
                        <form onSubmit={handleLogin} className="login-form">
                            <div className="form-group">
                                <label htmlFor="username">Usuario:</label>
                                <input
                                    type="text"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Ingresa tu usuario"
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="password">Contraseña:</label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Ingresa tu contraseña"
                                    required
                                />
                            </div>
                            
                            {error && (
                                <div className="error-message">
                                    {error}
                                </div>
                            )}
                            
                            <button 
                                type="submit" 
                                className="login-btn"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Iniciando sesión...' : '🔐 Iniciar Sesión'}
                            </button>
                        </form>
                        
                        <div className="demo-credentials">
                            <h3>Credenciales de Prueba:</h3>
                            <div className="credentials-grid">
                                <div className="credential-item">
                                    <strong>Estudiante:</strong>
                                    <p>Usuario: <code>estudiante</code></p>
                                    <p>Contraseña: <code>123456</code></p>
                                </div>
                                <div className="credential-item">
                                    <strong>Profesor:</strong>
                                    <p>Usuario: <code>profesor</code></p>
                                    <p>Contraseña: <code>123456</code></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Community;