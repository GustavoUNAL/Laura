import React, { createContext, useContext, useState, useEffect } from 'react';
import AuthService from '../services/authService';

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for existing session on app load
    const session = AuthService.getCurrentSession();
    if (session) {
      setUser(session);
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const login = async (username, password) => {
    try {
      const result = AuthService.login(username, password);
      
      if (result.success) {
        setUser(result.user);
        setIsAuthenticated(true);
        return { success: true, user: result.user };
      } else {
        return { success: false, error: result.error };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'Error interno del servidor' };
    }
  };

  const logout = () => {
    AuthService.logout();
    setUser(null);
    setIsAuthenticated(false);
  };

  const refreshSession = () => {
    const session = AuthService.refreshSession();
    if (session) {
      setUser(session);
      setIsAuthenticated(true);
      return session;
    } else {
      logout();
      return null;
    }
  };

  const updateProfile = (updates) => {
    if (user) {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      // Update in localStorage
      localStorage.setItem('user_session', JSON.stringify(updatedUser));
      return { success: true, user: updatedUser };
    }
    return { success: false, error: 'No hay usuario autenticado' };
  };

  const checkAuth = () => {
    const session = AuthService.getCurrentSession();
    if (session) {
      setUser(session);
      setIsAuthenticated(true);
      return true;
    } else {
      setUser(null);
      setIsAuthenticated(false);
      return false;
    }
  };

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
    refreshSession,
    updateProfile,
    checkAuth
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
