import React from 'react';
import './Footer.css';
import github from '../../img/github.png';
import linkedin from '../../img/linkedin.png';

function Footer() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:gustavoarteaga0508@gmail.com';
  };

  return (
    <footer className="footer">
      <div className="flex-container-footer">
        <div className="social-footer">
          <a href="https://github.com/GustavoUNAL">
            <img src={github} alt="GitHub" className="icons-footer" />
          </a>
          <a href="https://www.linkedin.com/in/gustavo-arteaga/">
            <img src={linkedin} alt="LinkedIn" className="icons-footer" />
          </a>
          <button onClick={handleEmailClick} className="email-footer-button">
            <svg className="icons-footer" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </button>
        </div>
        <p className="copyright">© Gustavo Arteaga, Colombia.</p>
      </div>
    </footer>
  );
}

export default Footer;