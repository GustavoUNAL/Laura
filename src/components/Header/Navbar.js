import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import github from '../../img/github.png';
import linkedin from '../../img/linkedin.png';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleEmailClick = () => {
    window.location.href = 'mailto:gustavoarteaga0508@gmail.com';
  };

  return (
    <nav className="main-navigation">
      {/* Logo/Nombre */}
      <Link to="/" className="name-header">
        G. ARTEAGA
      </Link>

      {/* Navegación Desktop */}
      <div className="nav-links-desktop">
        <Link to="/about" className="nav-link">Acerca de</Link>
        <Link to="/projects" className="nav-link">Proyectos</Link>
        <Link to="/#recent-blog" className="nav-link">Blog</Link>
      </div>

      {/* Redes Sociales Desktop */}
      <div className="social-links-desktop">
        <a href="https://github.com/GustavoUNAL">
          <img src={github} alt="GitHub" className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/gustavo-arteaga/">
          <img src={linkedin} alt="LinkedIn" className="social-icon" />
        </a>
        <button onClick={handleEmailClick} className="email-button">
          <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </button>
      </div>

      {/* Botón Menú Móvil */}
      <button 
        className="mobile-menu-button"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
      </button>

      {/* Menú Móvil */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <Link to="/about" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Acerca de
          </Link>
          <Link to="/projects" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Proyectos
          </Link>
          <Link to="/#recent-blog" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
            Blog
          </Link>
          
          <div className="mobile-social-links">
            <a href="https://github.com/GustavoUNAL">
              <img src={github} alt="GitHub" className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/gustavo-arteaga/">
              <img src={linkedin} alt="LinkedIn" className="social-icon" />
            </a>
            <button onClick={handleEmailClick} className="email-button">
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;