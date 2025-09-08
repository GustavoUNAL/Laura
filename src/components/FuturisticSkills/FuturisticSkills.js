import React, { useState, useEffect } from 'react';
import './FuturisticSkills.css';
import { useTheme } from '../../contexts/ThemeContext';

const FuturisticSkills = () => {
    const [currentSkill, setCurrentSkill] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const { isDarkMode } = useTheme();

    const skills = [
        { name: 'HISTORY', icon: '📚', color: '#00BFFF' },
        { name: 'TEACHING', icon: '👩‍🏫', color: '#0080FF' },
        { name: 'CREATIVITY', icon: '🎨', color: '#8A2BE2' },
        { name: 'RESEARCH', icon: '🔬', color: '#00BFFF' },
        { name: 'COMMUNICATION', icon: '💬', color: '#0080FF' },
        { name: 'LEADERSHIP', icon: '⭐', color: '#8A2BE2' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => {
                setCurrentSkill((prev) => (prev + 1) % skills.length);
                setIsVisible(true);
            }, 500);
        }, 3000);

        return () => clearInterval(interval);
    }, [skills.length]);

    return (
        <div className={`futuristic-skills-container ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
            <div className="skills-header">
                <h2>PROFESSIONAL SKILLS</h2>
                <div className="header-line"></div>
            </div>
            
            <div className="skill-display">
                <div className={`skill-card ${isVisible ? 'visible' : 'hidden'}`}>
                    <div className="skill-icon" style={{ color: skills[currentSkill].color }}>
                        {skills[currentSkill].icon}
                    </div>
                    <div className="skill-name" style={{ color: skills[currentSkill].color }}>
                        {skills[currentSkill].name}
                    </div>
                    <div className="skill-glow" style={{ 
                        background: `radial-gradient(circle, ${skills[currentSkill].color}20, transparent)` 
                    }}></div>
                </div>
                
                <div className="skill-particles">
                    {[...Array(20)].map((_, i) => (
                        <div 
                            key={i} 
                            className="particle" 
                            style={{
                                animationDelay: `${i * 0.1}s`,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`
                            }}
                        ></div>
                    ))}
                </div>
            </div>
            
            <div className="skills-indicators">
                {skills.map((_, index) => (
                    <div 
                        key={index}
                        className={`indicator ${index === currentSkill ? 'active' : ''}`}
                        style={{ 
                            background: index === currentSkill ? skills[currentSkill].color : 'rgba(255, 255, 255, 0.2)' 
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default FuturisticSkills;
