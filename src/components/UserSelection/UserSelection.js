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

  // Credenciales válidas (en producción esto vendría de una API)
  const validCredentials = {
    student: { username: 'gustavo', password: '123456' },
    professor: { username: 'laura', password: 'prof123' }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
    setError(''); // Limpiar error al escribir
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Verificar credenciales de estudiante
    if (credentials.username === validCredentials.student.username && 
        credentials.password === validCredentials.student.password) {
      login({
        role: 'student',
        name: 'Gustavo Arteaga',
        id: 'student_gustavo'
      });
      navigate('/student');
      return;
    }
    
    // Verificar credenciales de profesor
    if (credentials.username === validCredentials.professor.username && 
        credentials.password === validCredentials.professor.password) {
      login({
        role: 'professor',
        name: 'Laura Chaves',
        id: 'professor_laura'
      });
      navigate('/professor');
      return;
    }
    
    // Credenciales inválidas
    setError('Usuario o contraseña incorrectos');
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
          
          <button type="submit" className="login-button">
            Iniciar Sesión
          </button>
        </form>
        
        <div className="demo-credentials">
          <h4>Credenciales de Demo:</h4>
          <div className="credential-item">
            <strong>Estudiante:</strong> gustavo / 123456
          </div>
          <div className="credential-item">
            <strong>Profesor:</strong> laura / prof123
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSelection;
