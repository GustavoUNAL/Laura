import React, { useState } from 'react';

const FloatingMenuButton = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleEmailClick = () => {
    const subject = 'Contacto desde tu portafolio';
    const body = 'Hola Gustavo,\n\nMe gustaría contactarme contigo para discutir posibles oportunidades de colaboración o proyectos.\n\nSaludos cordiales.';
    const mailtoUrl = `mailto:gustavoarteaga0508@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <>
      {/* Floating Menu Button - Discrete Dark Style */}
      <button 
        onClick={toggleMobileMenu}
        style={{
          display: isMobileMenuOpen ? 'none' : 'flex',
          position: 'fixed',
          top: '50%',
          right: '15px',
          transform: 'translateY(-50%)',
          width: '55px',
          height: '55px',
          background: 'linear-gradient(135deg, rgba(30, 30, 30, 0.9), rgba(45, 45, 45, 0.8))',
          border: '1px solid rgba(78, 205, 196, 0.3)',
          borderRadius: '50%',
          cursor: 'pointer',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          zIndex: 99999,
          WebkitTapHighlightColor: 'transparent',
          WebkitTouchCallout: 'none',
          WebkitUserSelect: 'none',
          userSelect: 'none',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4), 0 0 10px rgba(78, 205, 196, 0.1)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)'
        }} className="floating-menu-button"
        onMouseEnter={(e) => {
          e.target.style.background = 'linear-gradient(135deg, rgba(50, 50, 50, 0.95), rgba(65, 65, 65, 0.9))';
          e.target.style.borderColor = 'rgba(78, 205, 196, 0.6)';
          e.target.style.transform = 'translateY(-50%) scale(1.05)';
          e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.5), 0 0 15px rgba(78, 205, 196, 0.2)';
        }} onMouseLeave={(e) => {
          e.target.style.background = 'linear-gradient(135deg, rgba(30, 30, 30, 0.9), rgba(45, 45, 45, 0.8))';
          e.target.style.borderColor = 'rgba(78, 205, 196, 0.3)';
          e.target.style.transform = 'translateY(-50%) scale(1)';
          e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.4), 0 0 10px rgba(78, 205, 196, 0.1)';
        }}>
        
        {/* Menu Icon */}
        <div style={{
          width: '24px',
          height: '18px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <span style={{
            width: '100%',
            height: '2px',
            background: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '2px',
            transition: 'all 0.3s ease',
            transform: isMobileMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none',
            transformOrigin: 'center'
          }}></span>
          <span style={{
            width: '100%',
            height: '2px',
            background: isMobileMenuOpen ? 'transparent' : 'rgba(255, 255, 255, 0.8)',
            borderRadius: '2px',
            transition: 'all 0.3s ease',
            opacity: isMobileMenuOpen ? 0 : 1
          }}></span>
          <span style={{
            width: '100%',
            height: '2px',
            background: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '2px',
            transition: 'all 0.3s ease',
            transform: isMobileMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none',
            transformOrigin: 'center'
          }}></span>
        </div>
      </button>

      {/* Floating Mobile Menu */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '50%',
          right: '15px',
          transform: 'translateY(-50%)',
          width: '280px',
          maxHeight: '80vh',
          background: 'rgba(18, 18, 18, 0.98)',
          backdropFilter: 'blur(25px)',
          WebkitBackdropFilter: 'blur(25px)',
          border: '2px solid rgba(78, 205, 196, 0.3)',
          borderRadius: '20px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.7), 0 0 30px rgba(78, 205, 196, 0.2)',
          zIndex: 99998,
          padding: '25px 20px',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
          animation: 'slideInRight 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}>
          
          {/* Close Button */}
          <button
            onClick={closeMobileMenu}
            style={{
              position: 'absolute',
              top: '15px',
              right: '15px',
              width: '30px',
              height: '30px',
              background: 'rgba(78, 205, 196, 0.2)',
              border: '1px solid rgba(78, 205, 196, 0.3)',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontSize: '16px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(78, 205, 196, 0.3)';
              e.target.style.borderColor = 'rgba(78, 205, 196, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(78, 205, 196, 0.2)';
              e.target.style.borderColor = 'rgba(78, 205, 196, 0.3)';
            }}
          >
            ×
          </button>

          {/* Navigation Links */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            marginBottom: '25px'
          }}>
            <a href="/about" onClick={closeMobileMenu} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500',
              fontFamily: "'Helvetica Neue', sans-serif",
              padding: '15px 18px',
              background: 'rgba(78, 205, 196, 0.1)',
              border: '1px solid rgba(78, 205, 196, 0.2)',
              borderRadius: '12px',
              transition: 'all 0.3s ease'
            }} onMouseEnter={(e) => {
              e.target.style.background = 'rgba(78, 205, 196, 0.2)';
              e.target.style.borderColor = 'rgba(78, 205, 196, 0.4)';
              e.target.style.transform = 'translateX(5px)';
            }} onMouseLeave={(e) => {
              e.target.style.background = 'rgba(78, 205, 196, 0.1)';
              e.target.style.borderColor = 'rgba(78, 205, 196, 0.2)';
              e.target.style.transform = 'translateX(0)';
            }}>
              <span>Acerca de</span>
              <span style={{color: 'rgba(78, 205, 196, 0.8)', fontSize: '18px'}}>→</span>
            </a>
            
            <a href="/projects" onClick={closeMobileMenu} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500',
              fontFamily: "'Helvetica Neue', sans-serif",
              padding: '15px 18px',
              background: 'rgba(78, 205, 196, 0.1)',
              border: '1px solid rgba(78, 205, 196, 0.2)',
              borderRadius: '12px',
              transition: 'all 0.3s ease'
            }} onMouseEnter={(e) => {
              e.target.style.background = 'rgba(78, 205, 196, 0.2)';
              e.target.style.borderColor = 'rgba(78, 205, 196, 0.4)';
              e.target.style.transform = 'translateX(5px)';
            }} onMouseLeave={(e) => {
              e.target.style.background = 'rgba(78, 205, 196, 0.1)';
              e.target.style.borderColor = 'rgba(78, 205, 196, 0.2)';
              e.target.style.transform = 'translateX(0)';
            }}>
              <span>Proyectos</span>
              <span style={{color: 'rgba(78, 205, 196, 0.8)', fontSize: '18px'}}>→</span>
            </a>
            
            <a href="/community" onClick={closeMobileMenu} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500',
              fontFamily: "'Helvetica Neue', sans-serif",
              padding: '15px 18px',
              background: 'rgba(78, 205, 196, 0.1)',
              border: '1px solid rgba(78, 205, 196, 0.2)',
              borderRadius: '12px',
              transition: 'all 0.3s ease'
            }} onMouseEnter={(e) => {
              e.target.style.background = 'rgba(78, 205, 196, 0.2)';
              e.target.style.borderColor = 'rgba(78, 205, 196, 0.4)';
              e.target.style.transform = 'translateX(5px)';
            }} onMouseLeave={(e) => {
              e.target.style.background = 'rgba(78, 205, 196, 0.1)';
              e.target.style.borderColor = 'rgba(78, 205, 196, 0.2)';
              e.target.style.transform = 'translateX(0)';
            }}>
              <span>Comunidad</span>
              <span style={{color: 'rgba(78, 205, 196, 0.8)', fontSize: '18px'}}>→</span>
            </a>
          </div>

          {/* Contact Button */}
          <button
            onClick={handleEmailClick}
            style={{
              width: '100%',
              background: 'linear-gradient(135deg, rgba(78, 205, 196, 0.8), rgba(69, 183, 209, 0.7))',
              border: '2px solid rgba(78, 205, 196, 0.6)',
              borderRadius: '12px',
              color: '#ffffff',
              fontSize: '16px',
              fontWeight: '600',
              fontFamily: "'Helvetica Neue', sans-serif",
              padding: '15px 20px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              marginBottom: '20px'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'linear-gradient(135deg, rgba(78, 205, 196, 1), rgba(69, 183, 209, 0.9))';
              e.target.style.borderColor = 'rgba(78, 205, 196, 0.8)';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px rgba(78, 205, 196, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'linear-gradient(135deg, rgba(78, 205, 196, 0.8), rgba(69, 183, 209, 0.7))';
              e.target.style.borderColor = 'rgba(78, 205, 196, 0.6)';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            📧 Contactar
          </button>

          {/* Social Links */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '10px'
          }}>
            <a href="https://github.com/gustavoarteaga0508" target="_blank" rel="noopener noreferrer" style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(78, 205, 196, 0.1)',
              border: '1px solid rgba(78, 205, 196, 0.2)',
              borderRadius: '10px',
              padding: '12px',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }} onMouseEnter={(e) => {
              e.target.style.background = 'rgba(78, 205, 196, 0.2)';
              e.target.style.borderColor = 'rgba(78, 205, 196, 0.4)';
            }} onMouseLeave={(e) => {
              e.target.style.background = 'rgba(78, 205, 196, 0.1)';
              e.target.style.borderColor = 'rgba(78, 205, 196, 0.2)';
            }}>
              <span style={{color: '#ffffff', fontSize: '18px'}}>🐙</span>
            </a>
            
            <a href="https://www.linkedin.com/in/gustavo-arteaga-rodriguez-4b1b1b1b1/" target="_blank" rel="noopener noreferrer" style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(78, 205, 196, 0.1)',
              border: '1px solid rgba(78, 205, 196, 0.2)',
              borderRadius: '10px',
              padding: '12px',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }} onMouseEnter={(e) => {
              e.target.style.background = 'rgba(78, 205, 196, 0.2)';
              e.target.style.borderColor = 'rgba(78, 205, 196, 0.4)';
            }} onMouseLeave={(e) => {
              e.target.style.background = 'rgba(78, 205, 196, 0.1)';
              e.target.style.borderColor = 'rgba(78, 205, 196, 0.2)';
            }}>
              <span style={{color: '#ffffff', fontSize: '18px'}}>💼</span>
            </a>
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateY(-50%) translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateY(-50%) translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default FloatingMenuButton;
