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
        <p className="footer-text">Created by GRAP</p>
      </div>
    </footer>
  );
}

export default Footer;