import React from 'react';
import './Footer.css';

function Footer() {
  const handleEmailClick = () => {
    const subject = 'Contacto desde tu portafolio';
    const body = 'Hola Laura,\n\nMe gustaría contactarme contigo para discutir posibles oportunidades de colaboración o proyectos.\n\nSaludos cordiales.';
    const mailtoUrl = `mailto:laurachavez@email.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <h3>GRAP</h3>
            <p>Engineering Solutions</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li><a href="#web-development">Web Development</a></li>
                <li><a href="#mobile-apps">Mobile Apps</a></li>
                <li><a href="#consulting">Consulting</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#careers">Careers</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:info@grap-ingenieria.tech">info@grap-ingenieria.tech</a></li>
                <li><a href="https://grap-ingenieria.tech" target="_blank" rel="noopener noreferrer">grap-ingenieria.tech</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">© 2025 GRAP. All rights reserved.</p>
            <div className="footer-social">
              <a href="https://grap-ingenieria.tech" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;