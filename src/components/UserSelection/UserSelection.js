import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import './UserSelection.css';

const UserSelection = () => {
  const { login } = useUser();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
    setError(''); // Limpiar error al escribir
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const result = await login(credentials.username, credentials.password);
      
      console.log('Login result:', result); // Debug log
      
      if (result.success) {
        console.log('User role:', result.user.role); // Debug log
        
        // Redirigir según el rol del usuario
        if (result.user.role === 'student') {
          console.log('Redirecting to student page'); // Debug log
          // Usar window.location para forzar la redirección
          window.location.href = '/student';
        } else if (result.user.role === 'professor') {
          console.log('Redirecting to professor page'); // Debug log
          // Usar window.location para forzar la redirección
          window.location.href = '/professor';
        } else {
          console.log('Unknown role:', result.user.role); // Debug log
          setError('Rol de usuario no válido');
        }
      } else {
        setError(result.error || 'Error de autenticación');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Error interno del servidor');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="user-selection-container">
      <div className="user-selection-card">
        <h2 className="selection-title">Iniciar Sesión</h2>
        <p className="selection-subtitle">Ingresa tus credenciales para acceder</p>
        
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Usuario</label>
            <input
              type="text"
              id="username"
              name="username"
              value={credentials.username}
              onChange={handleInputChange}
              placeholder="Ingresa tu usuario"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>
          
          {error && <div className="error-message">{error}</div>}
          
          <button 
            type="submit" 
            className={`login-button ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Iniciando Sesión...' : 'Iniciar Sesión'}
          </button>
        </form>
        
        <div className="demo-credentials">
          <h4>Credenciales de Demo:</h4>
          <div className="credential-item">
            <strong>Estudiantes:</strong>
          </div>
          <div className="credential-item">
            • gustavo / 123456
          </div>
          <div className="credential-item">
            • maria / student123
          </div>
          <div className="credential-item">
            <strong>Profesores:</strong>
          </div>
          <div className="credential-item">
            • laura / prof123
          </div>
          <div className="credential-item">
            • carlos / teacher456
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSelection;
