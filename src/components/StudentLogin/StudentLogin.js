import React, { useState } from 'react';
import './StudentLogin.css';

function StudentLogin({ onLogin }) {
    const [formData, setFormData] = useState({
        studentId: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validación básica
        if (!formData.studentId || !formData.password) {
            setError('Por favor completa todos los campos');
            return;
        }

        // Simulación de autenticación
        // En una aplicación real, esto sería una llamada a la API
        if (formData.studentId && formData.password) {
            // Simular autenticación exitosa para cualquier credencial válida
            onLogin({
                id: formData.studentId,
                name: 'Estudiante',
                email: `${formData.studentId}@estudiante.com`,
                course: 'Historia del Arte',
                semester: '2024-1'
            });
        } else {
            setError('Credenciales incorrectas');
        }
    };

    return (
        <div className="student-login">
            <div className="login-container">
                <div className="login-header">
                    <h2>Acceso Estudiante</h2>
                    <p>Ingresa tus credenciales para acceder al portal</p>
                </div>
                
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="studentId">ID de Estudiante</label>
                        <input
                            type="text"
                            id="studentId"
                            name="studentId"
                            value={formData.studentId}
                            onChange={handleChange}
                            placeholder="Ingresa tu ID de estudiante"
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Ingresa tu contraseña"
                            required
                        />
                    </div>
                    
                    {error && <div className="error-message">{error}</div>}
                    
                    <button type="submit" className="login-button">
                        Iniciar Sesión
                    </button>
                </form>
                
            </div>
        </div>
    );
}

export default StudentLogin;
