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
            <h3>L.M. CHAVES</h3>
            <p>Desarrolladora Full Stack & Profesora de Inglés</p>
          </div>
          
          <div className="footer-contact">
            <button onClick={handleEmailClick} className="contact-button">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>Contactar</span>
            </button>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">© 2025 Laura María Chaves Timarán. Todos los derechos reservados.</p>
          <p className="tech-stack">Desarrollado con React.js & CSS3</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;