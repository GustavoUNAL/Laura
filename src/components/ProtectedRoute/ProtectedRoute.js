import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';

const ProtectedRoute = ({ children, requiredRole }) => {
  const { user, isAuthenticated, isLoading, checkAuth } = useUser();

  useEffect(() => {
    // Verificar autenticación al montar el componente
    checkAuth();
  }, [checkAuth]);

  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)',
        color: '#ffffff',
        fontFamily: "'Orbitron', monospace"
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: '20px' }}>⚡</div>
          <div>Verificando autenticación...</div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && user.role !== requiredRole) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)',
        color: '#ffffff',
        fontFamily: "'Orbitron', monospace"
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: '20px' }}>🚫</div>
          <div>No tienes permisos para acceder a esta página</div>
          <div style={{ marginTop: '10px', fontSize: '0.9rem', opacity: 0.7 }}>
            Rol requerido: {requiredRole} | Tu rol: {user.role}
          </div>
        </div>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
