
import React from 'react';
import './App.css';
import './styles/theme.css';
import ContentApp from './containers/HomePage/ContentApp';
import ErrorPage from './components/ErrorPage/ErrorPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './containers/AboutPage/About';
import Community from './containers/CommunityPage/Community';
import StudentPage from './containers/StudentPage/StudentPage';
import ProfessorPage from './containers/ProfessorPage/ProfessorPage';
import UserSelection from './components/UserSelection/UserSelection';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { ThemeProvider } from './contexts/ThemeContext';
import { UserProvider } from './contexts/UserContext';
import { DarkModeProvider } from './contexts/DarkModeContext';

function App() {
  
  return (
    <DarkModeProvider>
      <UserProvider>
        <ThemeProvider>
          <Router>
          <Routes>
            <Route path="/" exact element={<ContentApp />} />
            <Route path="/about" element={<About />} /> 
            <Route path="/community" element={<Community />} />
            <Route path="/login" element={<UserSelection />} />
            <Route path="/student" element={
              <ProtectedRoute requiredRole="student">
                <StudentPage />
              </ProtectedRoute>
            } />
            <Route path="/professor" element={
              <ProtectedRoute requiredRole="professor">
                <ProfessorPage />
              </ProtectedRoute>
            } />
            <Route path="*" exact element={<ErrorPage></ErrorPage>} />
          </Routes>
        </Router>
        </ThemeProvider>
      </UserProvider>
    </DarkModeProvider>
  );
}

export default App;
