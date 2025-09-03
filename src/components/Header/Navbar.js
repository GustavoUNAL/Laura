import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import github from '../../img/github.png';
import linkedin from '../../img/linkedin.png';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleEmailClick = () => {
    const subject = 'Contacto desde tu portafolio';
    const body = 'Hola Gustavo,\n\nMe gustaría contactarme contigo para discutir posibles oportunidades de colaboración o proyectos.\n\nSaludos cordiales.';
    const mailtoUrl = `mailto:gustavoarteaga0508@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '70px',
      width: '100vw',
      maxWidth: '100vw',
      background: isScrolled 
        ? 'linear-gradient(135deg, rgba(18, 18, 18, 0.95), rgba(26, 26, 26, 0.95))' 
        : 'linear-gradient(135deg, #121212, #1a1a1a)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.4)',
      borderBottom: '1px solid rgba(78, 205, 196, 0.1)',
      zIndex: 1000,
      transition: 'all 0.3s ease',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      overflow: 'hidden'
    }}>
      {/* Desktop Navigation */}
      <div className="main-navigation" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '1400px',
        minWidth: '320px',
        margin: '0 auto',
        padding: '0 40px',
        height: '100%',
        boxSizing: 'border-box'
      }}>
        {/* Logo */}
        <Link to="/" style={{
          color: '#ffffff',
          fontSize: '24px',
          fontWeight: '700',
          fontFamily: "'Helvetica Neue', sans-serif",
          textDecoration: 'none',
          textShadow: '0 0 20px rgba(78, 205, 196, 0.3)',
          transition: 'all 0.3s ease'
        }} onMouseEnter={(e) => {
          e.target.style.color = '#4ecdc4';
          e.target.style.textShadow = '0 0 30px rgba(78, 205, 196, 0.6)';
        }} onMouseLeave={(e) => {
          e.target.style.color = '#ffffff';
          e.target.style.textShadow = '0 0 20px rgba(78, 205, 196, 0.3)';
        }}>
          G. ARTEAGA
        </Link>

        {/* Desktop Menu - Hidden on mobile */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '40px'
        }} className="desktop-menu">
          <Link to="/about" style={{
            color: '#ffffff',
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: '500',
            fontFamily: "'Helvetica Neue', sans-serif",
            padding: '10px 15px',
            borderRadius: '8px',
            transition: 'all 0.3s ease'
          }} onMouseEnter={(e) => {
            e.target.style.color = '#4ecdc4';
            e.target.style.backgroundColor = 'rgba(78, 205, 196, 0.1)';
          }} onMouseLeave={(e) => {
            e.target.style.color = '#ffffff';
            e.target.style.backgroundColor = 'transparent';
          }}>
            Acerca de
          </Link>
          <Link to="/projects" style={{
            color: '#ffffff',
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: '500',
            fontFamily: "'Helvetica Neue', sans-serif",
            padding: '10px 15px',
            borderRadius: '8px',
            transition: 'all 0.3s ease'
          }} onMouseEnter={(e) => {
            e.target.style.color = '#4ecdc4';
            e.target.style.backgroundColor = 'rgba(78, 205, 196, 0.1)';
          }} onMouseLeave={(e) => {
            e.target.style.color = '#ffffff';
            e.target.style.backgroundColor = 'transparent';
          }}>
            Proyectos
          </Link>
          <Link to="/#recent-community" style={{
            color: '#ffffff',
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: '500',
            fontFamily: "'Helvetica Neue', sans-serif",
            padding: '10px 15px',
            borderRadius: '8px',
            transition: 'all 0.3s ease'
          }} onMouseEnter={(e) => {
            e.target.style.color = '#4ecdc4';
            e.target.style.backgroundColor = 'rgba(78, 205, 196, 0.1)';
          }} onMouseLeave={(e) => {
            e.target.style.color = '#ffffff';
            e.target.style.backgroundColor = 'transparent';
          }}>
            Comunidad
          </Link>
        </div>

        {/* Desktop Social Links - Hidden on mobile */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px'
        }} className="desktop-social">
          <a href="https://github.com/GustavoUNAL" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" style={{
              width: '24px',
              height: '24px',
              filter: 'brightness(0) invert(1)',
              transition: 'all 0.3s ease'
            }} onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.15) rotate(5deg)';
              e.target.style.filter = 'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(140deg)';
            }} onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1) rotate(0deg)';
              e.target.style.filter = 'brightness(0) invert(1)';
            }} />
          </a>
          <button onClick={handleEmailClick} style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg style={{
              width: '24px',
              height: '24px',
              color: '#ffffff',
              transition: 'all 0.3s ease'
            }} viewBox="0 0 24 24" fill="currentColor" onMouseEnter={(e) => {
              e.target.style.color = '#4ecdc4';
              e.target.style.transform = 'scale(1.15)';
            }} onMouseLeave={(e) => {
              e.target.style.color = '#ffffff';
              e.target.style.transform = 'scale(1)';
            }}>
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </button>
          <a href="https://www.linkedin.com/in/gustavo-arteaga/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" style={{
              width: '24px',
              height: '24px',
              filter: 'brightness(0) invert(1)',
              transition: 'all 0.3s ease'
            }} onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.15) rotate(5deg)';
              e.target.style.filter = 'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(140deg)';
            }} onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1) rotate(0deg)';
              e.target.style.filter = 'brightness(0) invert(1)';
            }} />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={toggleMobileMenu}
          style={{
            display: 'none',
            background: 'linear-gradient(135deg, rgba(78, 205, 196, 0.1), rgba(78, 205, 196, 0.05))',
            border: '1px solid rgba(78, 205, 196, 0.2)',
            borderRadius: '12px',
            padding: '8px',
            width: '50px',
            height: '50px',
            cursor: 'pointer',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease'
          }} className="mobile-hamburger"
          onMouseEnter={(e) => {
            e.target.style.background = 'linear-gradient(135deg, rgba(78, 205, 196, 0.2), rgba(78, 205, 196, 0.1))';
            e.target.style.borderColor = 'rgba(78, 205, 196, 0.4)';
            e.target.style.transform = 'translateY(-2px)';
          }} onMouseLeave={(e) => {
            e.target.style.background = 'linear-gradient(135deg, rgba(78, 205, 196, 0.1), rgba(78, 205, 196, 0.05))';
            e.target.style.borderColor = 'rgba(78, 205, 196, 0.2)';
            e.target.style.transform = 'translateY(0)';
          }}>
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
              background: isMobileMenuOpen ? '#4ecdc4' : '#ffffff',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              transform: isMobileMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'
            }}></span>
            <span style={{
              width: '100%',
              height: '2px',
              background: '#ffffff',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              opacity: isMobileMenuOpen ? 0 : 1,
              transform: isMobileMenuOpen ? 'scale(0)' : 'none'
            }}></span>
            <span style={{
              width: '100%',
              height: '2px',
              background: isMobileMenuOpen ? '#4ecdc4' : '#ffffff',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
              transform: isMobileMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'
            }}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '70px',
          left: 0,
          right: 0,
          background: 'linear-gradient(180deg, rgba(18, 18, 18, 0.98), rgba(26, 26, 26, 0.95))',
          backdropFilter: 'blur(25px)',
          WebkitBackdropFilter: 'blur(25px)',
          borderTop: '1px solid rgba(78, 205, 196, 0.2)',
          boxShadow: '0 8px 40px rgba(0, 0, 0, 0.4)',
          zIndex: 999,
          padding: '20px 0',
          animation: 'slideDown 0.3s ease-out'
        }}>
          <div className="mobile-menu" style={{
            width: '100%',
            maxWidth: '100%',
            margin: '0',
            padding: '0 15px',
            boxSizing: 'border-box'
          }}>
            <Link to="/about" onClick={closeMobileMenu} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: '500',
              fontFamily: "'Helvetica Neue', sans-serif",
              padding: '18px 20px',
              margin: '6px 0',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              transition: 'all 0.3s ease'
            }} onMouseEnter={(e) => {
              e.target.style.background = 'rgba(78, 205, 196, 0.15)';
              e.target.style.borderColor = 'rgba(78, 205, 196, 0.3)';
              e.target.style.transform = 'translateX(8px)';
            }} onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.03)';
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.05)';
              e.target.style.transform = 'translateX(0)';
            }}>
              <span>Acerca de</span>
              <span style={{color: 'rgba(255, 255, 255, 0.4)', fontSize: '20px'}}>→</span>
            </Link>
            
            <Link to="/projects" onClick={closeMobileMenu} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: '500',
              fontFamily: "'Helvetica Neue', sans-serif",
              padding: '18px 20px',
              margin: '6px 0',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              transition: 'all 0.3s ease'
            }} onMouseEnter={(e) => {
              e.target.style.background = 'rgba(78, 205, 196, 0.15)';
              e.target.style.borderColor = 'rgba(78, 205, 196, 0.3)';
              e.target.style.transform = 'translateX(8px)';
            }} onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.03)';
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.05)';
              e.target.style.transform = 'translateX(0)';
            }}>
              <span>Proyectos</span>
              <span style={{color: 'rgba(255, 255, 255, 0.4)', fontSize: '20px'}}>→</span>
            </Link>
            
            <Link to="/#recent-community" onClick={closeMobileMenu} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: '500',
              fontFamily: "'Helvetica Neue', sans-serif",
              padding: '18px 20px',
              margin: '6px 0',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              transition: 'all 0.3s ease'
            }} onMouseEnter={(e) => {
              e.target.style.background = 'rgba(78, 205, 196, 0.15)';
              e.target.style.borderColor = 'rgba(78, 205, 196, 0.3)';
              e.target.style.transform = 'translateX(8px)';
            }} onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.03)';
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.05)';
              e.target.style.transform = 'translateX(0)';
            }}>
              <span>Comunidad</span>
              <span style={{color: 'rgba(255, 255, 255, 0.4)', fontSize: '20px'}}>→</span>
            </Link>

            {/* Mobile Social Links */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '25px',
              marginTop: '25px',
              padding: '25px 0',
              borderTop: '1px solid rgba(78, 205, 196, 0.2)',
              background: 'rgba(78, 205, 196, 0.05)',
              borderRadius: '16px',
              marginLeft: '10px',
              marginRight: '10px'
            }}>
              <a href="https://github.com/GustavoUNAL" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" style={{
                  width: '32px',
                  height: '32px',
                  filter: 'brightness(0.9)',
                  padding: '8px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease'
                }} onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.25) rotate(8deg)';
                  e.target.style.background = 'rgba(78, 205, 196, 0.1)';
                  e.target.style.borderColor = 'rgba(78, 205, 196, 0.3)';
                }} onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1) rotate(0deg)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }} />
              </a>
              <button onClick={handleEmailClick} style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                padding: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => {
                e.target.style.background = 'rgba(78, 205, 196, 0.1)';
                e.target.style.borderColor = 'rgba(78, 205, 196, 0.3)';
                e.target.style.transform = 'scale(1.25) rotate(8deg)';
              }} onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.target.style.transform = 'scale(1) rotate(0deg)';
              }}>
                <svg style={{
                  width: '32px',
                  height: '32px',
                  color: '#ffffff'
                }} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </button>
              <a href="https://www.linkedin.com/in/gustavo-arteaga/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" style={{
                  width: '32px',
                  height: '32px',
                  filter: 'brightness(0.9)',
                  padding: '8px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease'
                }} onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.25) rotate(8deg)';
                  e.target.style.background = 'rgba(78, 205, 196, 0.1)';
                  e.target.style.borderColor = 'rgba(78, 205, 196, 0.3)';
                }} onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1) rotate(0deg)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          onClick={closeMobileMenu}
          style={{
            position: 'fixed',
            top: '70px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)',
            zIndex: 998
          }}
        />
      )}

      {/* CSS for animations */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Ensure full screen width on all devices */
        .main-navigation {
          width: 100vw !important;
          max-width: 100vw !important;
          min-width: 100vw !important;
          left: 0 !important;
          right: 0 !important;
          margin: 0 !important;
          padding: 0 40px !important;
        }
        
        .mobile-menu {
          width: 100vw !important;
          max-width: 100vw !important;
          left: 0 !important;
          right: 0 !important;
          margin: 0 !important;
        }
        
        /* Specific iPhone and mobile device rules */
        @media screen and (max-device-width: 768px) {
          .main-navigation {
            width: 100vw !important;
            max-width: 100vw !important;
            min-width: 100vw !important;
            left: 0 !important;
            right: 0 !important;
            margin: 0 !important;
            padding: 0 15px !important;
            position: fixed !important;
            top: 0 !important;
          }
          
          .mobile-menu {
            width: 100vw !important;
            max-width: 100vw !important;
            left: 0 !important;
            right: 0 !important;
            margin: 0 !important;
            position: fixed !important;
            top: 70px !important;
          }
        }
        
        /* Specific iPhone rules */
        @media screen and (max-device-width: 428px) {
          .main-navigation {
            width: 100vw !important;
            max-width: 100vw !important;
            min-width: 100vw !important;
            left: 0 !important;
            right: 0 !important;
            margin: 0 !important;
            padding: 0 15px !important;
            position: fixed !important;
            top: 0 !important;
          }
          
          .mobile-menu {
            width: 100vw !important;
            max-width: 100vw !important;
            left: 0 !important;
            right: 0 !important;
            margin: 0 !important;
            position: fixed !important;
            top: 70px !important;
          }
        }
        
        @media (max-width: 768px) {
          .desktop-menu, .desktop-social {
            display: none !important;
          }
          .mobile-hamburger {
            display: flex !important;
          }
          
          .main-navigation {
            width: 100vw !important;
            max-width: 100vw !important;
            min-width: 100vw !important;
          }
          
          /* Adjust padding for mobile */
          .main-navigation {
            width: 100vw !important;
            max-width: 100vw !important;
            min-width: 100vw !important;
            padding: 0 15px !important;
          }
          
          .mobile-menu {
            padding: 0 15px !important;
          }
        }
        
        @media (min-width: 769px) {
          .mobile-hamburger {
            display: none !important;
          }
        }
        
        /* Ensure no horizontal scroll */
        body, html {
          overflow-x: hidden !important;
          width: 100% !important;
          max-width: 100% !important;
        }
        
        /* Force full width on mobile */
        @media screen and (max-width: 768px) {
          body, html, #root, .App {
            width: 100% !important;
            max-width: 100% !important;
            left: 0 !important;
            right: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow-x: hidden !important;
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar; 