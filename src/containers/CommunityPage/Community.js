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
                setError(result.message || 'Invalid credentials');
            }
        } catch (err) {
            setError('Error signing in. Please try again.');
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
                        <h1>🌟 Community Portal</h1>
                        <p>Sign in to access the portal</p>
                        
                        <form onSubmit={handleLogin} className="login-form">
                            <div className="form-group">
                                <label htmlFor="username">Username:</label>
                                <input
                                    type="text"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Enter your username"
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
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
                                {isLoading ? 'Signing in...' : '🔐 Sign In'}
                            </button>
                        </form>
                        
                        <div className="demo-credentials">
                            <h3>Demo Credentials:</h3>
                            <div className="credentials-grid">
                                <div className="credential-item">
                                    <strong>Student:</strong>
                                    <p>Username: <code>student</code></p>
                                    <p>Password: <code>student123</code></p>
                                </div>
                                <div className="credential-item">
                                    <strong>Professor:</strong>
                                    <p>Username: <code>professor</code></p>
                                    <p>Password: <code>professor123</code></p>
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