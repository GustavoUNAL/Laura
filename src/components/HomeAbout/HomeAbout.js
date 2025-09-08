import React from 'react';
import './HomeAbout.css';
import MainTitle from '../MainTitle/MainTitle';

function HomeAbout() {
    return (
        <div id="about" className="home-about">
            <MainTitle />
            
            {/* Professional Skills Icons */}
            <div className="skills-icons-container">
                <div className="skills-grid">
                    <div className="skill-icon">
                        <div className="icon-bg">
                            <span className="icon">📚</span>
                        </div>
                        <span className="skill-name">Education</span>
                    </div>
                    
                    <div className="skill-icon">
                        <div className="icon-bg">
                            <span className="icon">🎨</span>
                        </div>
                        <span className="skill-name">Creativity</span>
                    </div>
                    
                    <div className="skill-icon">
                        <div className="icon-bg">
                            <span className="icon">👥</span>
                        </div>
                        <span className="skill-name">Teaching</span>
                    </div>
                    
                    <div className="skill-icon">
                        <div className="icon-bg">
                            <span className="icon">🔬</span>
                        </div>
                        <span className="skill-name">Research</span>
                    </div>
                    
                    <div className="skill-icon">
                        <div className="icon-bg">
                            <span className="icon">💡</span>
                        </div>
                        <span className="skill-name">Innovation</span>
                    </div>
                    
                    <div className="skill-icon">
                        <div className="icon-bg">
                            <span className="icon">🌟</span>
                        </div>
                        <span className="skill-name">Passion</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeAbout; 