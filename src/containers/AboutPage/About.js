// AboutPage/About.js
import React from 'react';
import './About.css';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import { useTheme } from '../../contexts/ThemeContext';
// import profile3 from '../../img/profile3.jpeg'; // Unused

function About() {
    const { isDarkMode } = useTheme();
    
    return (
        <>
            <Navbar />
            <div className={`about-page ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
                <div className="about-header">
                    <div className="header-decoration">
                        <div className="floating-element element-1">🎨</div>
                        <div className="floating-element element-2">📚</div>
                        <div className="floating-element element-3">🍳</div>
                        <div className="floating-element element-4">🎵</div>
                    </div>
                    <h1>Meet Laura</h1>
                    <p className="header-subtitle">A creative teacher with passion for education</p>
                </div>
                
                <div className="about-content">
                    <div className="profile-section">
                        <div className="profile-container">
                            <div className="avatar-container">
                                <div className="avatar-face">
                                    <div className="avatar-eyes">
                                        <div className="eye left-eye"></div>
                                        <div className="eye right-eye"></div>
                                    </div>
                                    <div className="avatar-smile"></div>
                                </div>
                                <div className="avatar-hair"></div>
                                <div className="avatar-accessories">
                                    <div className="avatar-earring left-earring"></div>
                                    <div className="avatar-earring right-earring"></div>
                                </div>
                            </div>
                            <div className="profile-glow"></div>
                        </div>
                        <div className="profile-info">
                            <h3>Laura María Chaves Timarán</h3>
                            <p>22 years old • Pasto, Colombia</p>
                        </div>
                    </div>
                    
                    <div className="about-text">
                        <div className="intro-section">
                            <h2>Hello! I'm Laura</h2>
                            <p className="main-description">
                                A creative teacher and historian passionate about personalized education. I'm 22 years old and live in Pasto, 
                                where every day I discover new ways to connect with my students and make learning 
                                a unique and meaningful experience.
                            </p>
                        </div>
                        
                        <div className="passions-section">
                            <h3 className="professional-title">My Passions</h3>
                            <div className="passions-grid">
                                <div className="passion-card professional-card">
                                    <div className="passion-icon">🎨</div>
                                    <h4>Painting</h4>
                                    <p className="professional-text">I express my creativity through art, finding inspiration in every brushstroke</p>
                                </div>
                                <div className="passion-card professional-card">
                                    <div className="passion-icon">📖</div>
                                    <h4>Reading</h4>
                                    <p className="professional-text">I love mystery books that awaken my curiosity and feed my imagination</p>
                                </div>
                                <div className="passion-card professional-card">
                                    <div className="passion-icon">👩‍🍳</div>
                                    <h4>Cooking</h4>
                                    <p className="professional-text">In my free time I create delicious dishes, combining tradition and innovation</p>
                                </div>
                            </div>
                        </div>

                        <div className="personality-section">
                            <h3 className="professional-title">My Personality</h3>
                            <div className="personality-traits">
                                <div className="trait-item professional-card">
                                    <span className="trait-icon">💝</span>
                                    <div className="trait-content">
                                        <h4>Kind</h4>
                                        <p className="professional-text">I create a warm and welcoming environment where everyone feels welcome</p>
                                    </div>
                                </div>
                                <div className="trait-item professional-card">
                                    <span className="trait-icon">⏰</span>
                                    <div className="trait-content">
                                        <h4>Patient</h4>
                                        <p className="professional-text">I understand that each student learns at their own pace and I accompany every process</p>
                                    </div>
                                </div>
                                <div className="trait-item professional-card">
                                    <span className="trait-icon">✨</span>
                                    <div className="trait-content">
                                        <h4>Creative</h4>
                                        <p className="professional-text">I transform every class into a dynamic and memorable experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="interests-section">
                            <h3 className="professional-title">My Interests</h3>
                            <div className="interests-list">
                                <div className="interest-item professional-card">
                                    <span className="interest-icon">🎵</span>
                                    <span className="interest-text professional-text">Michael Jackson Fan</span>
                                </div>
                                <div className="interest-item professional-card">
                                    <span className="interest-icon">🎬</span>
                                    <span className="interest-text professional-text">Marvel Movies</span>
                                </div>
                                <div className="interest-item professional-card">
                                    <span className="interest-icon">🍫</span>
                                    <span className="interest-text professional-text">Chocolate Ice Cream</span>
                                </div>
                            </div>
                        </div>

                        <div className="teaching-philosophy professional-card">
                            <h3 className="professional-title">My Teaching Philosophy</h3>
                            <p className="professional-text">
                                As a teacher and historian, I am characterized by being kind, patient and creative. These qualities help me 
                                genuinely connect with my students and make every class dynamic and meaningful. 
                                I firmly believe that personalized education is the key to awakening each 
                                student's potential and fostering their love for learning.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;