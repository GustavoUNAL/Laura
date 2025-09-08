import React, { useState } from 'react';
import './Community.css';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import StudentView from '../../components/StudentView/StudentView';
import ProfessorView from '../../components/ProfessorView/ProfessorView';
import { useTheme } from '../../contexts/ThemeContext';

function Community() {
    const [selectedView, setSelectedView] = useState('student'); // 'student' | 'professor'
    const { isDarkMode } = useTheme();

    return (
        <>
            <Navbar />
            <div className={`community-page ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
                {/* View Selector */}
                <div className="view-selector">
                    <div className="selector-container">
                        <h1>🌟 Portal de la Comunidad</h1>
                        <p>Selecciona tu vista para acceder al portal</p>
                        <div className="view-buttons">
                            <button 
                                className={`view-btn ${selectedView === 'student' ? 'active' : ''}`}
                                onClick={() => setSelectedView('student')}
                            >
                                🎓 Vista de Estudiante
                            </button>
                            <button 
                                className={`view-btn ${selectedView === 'professor' ? 'active' : ''}`}
                                onClick={() => setSelectedView('professor')}
                            >
                                👨‍🏫 Vista de Profesor
                            </button>
                        </div>
                    </div>
                </div>

                {/* Dynamic Content */}
                {selectedView === 'student' ? <StudentView /> : <ProfessorView />}
            </div>
            <Footer />
        </>
    );
}

export default Community;