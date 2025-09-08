import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import './UserSelection.css';

const UserSelection = () => {
  const { login } = useUser();
  const navigate = useNavigate();

  const handleStudentLogin = () => {
    login({
      role: 'student',
      name: 'Estudiante',
      id: 'student_' + Date.now()
    });
    navigate('/student');
  };

  const handleProfessorLogin = () => {
    login({
      role: 'professor',
      name: 'Profesor',
      id: 'professor_' + Date.now()
    });
    navigate('/professor');
  };

  return (
    <div className="user-selection-container">
      <div className="user-selection-card">
        <h2 className="selection-title">Selecciona tu rol</h2>
        <p className="selection-subtitle">Elige cómo quieres acceder al sistema</p>
        
        <div className="role-buttons">
          <button 
            className="role-button student-button"
            onClick={handleStudentLogin}
          >
            <div className="button-icon">🎓</div>
            <div className="button-content">
              <h3>Estudiante</h3>
              <p>Accede a tu dashboard de estudiante</p>
            </div>
          </button>
          
          <button 
            className="role-button professor-button"
            onClick={handleProfessorLogin}
          >
            <div className="button-icon">👨‍🏫</div>
            <div className="button-content">
              <h3>Profesor</h3>
              <p>Accede a tu dashboard de profesor</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserSelection;
