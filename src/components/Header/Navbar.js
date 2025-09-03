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
      height: isMobileMenuOpen ? '100vh' : '70px',
      width: '100vw',
      maxWidth: '100vw',
      background: isScrolled 
        ? 'linear-gradient(135deg, rgba(18, 18, 18, 0.95), rgba(26, 26, 26, 0.95))' 
        : 'linear-gradient(135deg, #121212, #1a1a1a)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.4)',
      borderBottom: '1px solid rgba(78, 205, 196, 0.1)',
      zIndex: 10000,
      transition: 'all 0.4s ease',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      overflow: isMobileMenuOpen ? 'auto' : 'hidden',
      paddingTop: 'env(safe-area-inset-top)',
      minHeight: isMobileMenuOpen ? '100vh' : 'calc(70px + env(safe-area-inset-top))'
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
          <Link to="/community" style={{
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

      </div>

      {/* Mobile Hamburger Button - Global Mobile */}
      <button 
        onClick={toggleMobileMenu}
        style={{
          display: 'flex',
          position: 'fixed',
          top: '20px',
          right: '20px',
          background: 'rgba(0, 0, 0, 0.95)',
          border: '2px solid #4ECDC4',
          borderRadius: '12px',
          width: '60px',
          height: '60px',
          cursor: 'pointer',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          zIndex: 99999,
          WebkitTapHighlightColor: 'transparent',
          WebkitTouchCallout: 'none',
          WebkitUserSelect: 'none',
          userSelect: 'none',
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.6), 0 0 20px rgba(78, 205, 196, 0.4)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)'
        }} className="mobile-hamburger-global"
        onMouseEnter={(e) => {
          e.target.style.background = 'rgba(20, 20, 20, 0.98)';
          e.target.style.borderColor = '#4ECDC4';
          e.target.style.transform = 'scale(1.1)';
          e.target.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.7), 0 0 30px rgba(78, 205, 196, 0.6)';
        }} onMouseLeave={(e) => {
          e.target.style.background = 'rgba(0, 0, 0, 0.95)';
          e.target.style.borderColor = '#4ECDC4';
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.6), 0 0 20px rgba(78, 205, 196, 0.4)';
        }}>
        
        {/* Menu Icon */}
        <div style={{
          width: '26px',
          height: '20px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <span style={{
            width: '100%',
            height: '3px',
            background: '#4ECDC4',
            borderRadius: '3px',
            transition: 'all 0.3s ease',
            transform: isMobileMenuOpen ? 'rotate(45deg) translate(7px, 7px)' : 'none',
            transformOrigin: 'center',
            boxShadow: '0 0 8px rgba(78, 205, 196, 0.5)'
          }}></span>
          <span style={{
            width: '100%',
            height: '3px',
            background: isMobileMenuOpen ? 'transparent' : '#4ECDC4',
            borderRadius: '3px',
            transition: 'all 0.3s ease',
            opacity: isMobileMenuOpen ? 0 : 1,
            boxShadow: '0 0 8px rgba(78, 205, 196, 0.5)'
          }}></span>
          <span style={{
            width: '100%',
            height: '3px',
            background: '#4ECDC4',
            borderRadius: '3px',
            transition: 'all 0.3s ease',
            transform: isMobileMenuOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none',
            transformOrigin: 'center',
            boxShadow: '0 0 8px rgba(78, 205, 196, 0.5)'
          }}></span>
        </div>
      </button>

      {/* Mobile Menu - Expanded Navbar */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '70px',
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(180deg, rgba(18, 18, 18, 0.98), rgba(26, 26, 26, 0.95))',
          backdropFilter: 'blur(25px)',
          WebkitBackdropFilter: 'blur(25px)',
          padding: '40px 30px',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
          animation: 'slideDown 0.4s ease-out'
        }}>
          {/* Close Button */}
          <button 
            onClick={closeMobileMenu}
            style={{
              position: 'absolute',
              top: '15px',
              right: '15px',
              background: 'rgba(78, 205, 196, 0.1)',
              border: '1px solid rgba(78, 205, 196, 0.3)',
              borderRadius: '50%',
              width: '35px',
              height: '35px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#4ECDC4',
              fontSize: '18px',
              transition: 'all 0.3s ease',
              zIndex: 10001
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(78, 205, 196, 0.2)';
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(78, 205, 196, 0.1)';
              e.target.style.transform = 'scale(1)';
            }}>
            ×
          </button>

          {/* Menu Title */}
          <div style={{
            textAlign: 'center',
            marginBottom: '40px',
            marginTop: '20px'
          }}>
            <h2 style={{
              color: '#ffffff',
              fontSize: '28px',
              fontWeight: '600',
              margin: '0 0 10px 0',
              fontFamily: "'Helvetica Neue', sans-serif"
            }}>
              Navegación
            </h2>
            <p style={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '16px',
              margin: 0,
              fontFamily: "'Helvetica Neue', sans-serif"
            }}>
              Gustavo Arteaga - Ingeniero Eléctrico
            </p>
          </div>

          {/* Navigation Links */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            marginBottom: '40px'
          }}>
            <Link 
              to="/about" 
              onClick={closeMobileMenu}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 20px',
                background: 'rgba(78, 205, 196, 0.1)',
                border: '1px solid rgba(78, 205, 196, 0.2)',
                borderRadius: '12px',
                textDecoration: 'none',
                color: '#ffffff',
                fontSize: '18px',
                fontWeight: '500',
                fontFamily: "'Helvetica Neue', sans-serif",
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(78, 205, 196, 0.2)';
                e.target.style.borderColor = 'rgba(78, 205, 196, 0.4)';
                e.target.style.transform = 'translateX(5px)';
                e.target.style.boxShadow = '0 4px 15px rgba(78, 205, 196, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(78, 205, 196, 0.1)';
                e.target.style.borderColor = 'rgba(78, 205, 196, 0.2)';
                e.target.style.transform = 'translateX(0)';
                e.target.style.boxShadow = 'none';
              }}>
              <span>Acerca de</span>
              <span style={{color: 'rgba(78, 205, 196, 0.8)', fontSize: '18px'}}>→</span>
            </Link>

            <Link 
              to="/projects" 
              onClick={closeMobileMenu}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 20px',
                background: 'rgba(78, 205, 196, 0.1)',
                border: '1px solid rgba(78, 205, 196, 0.2)',
                borderRadius: '12px',
                textDecoration: 'none',
                color: '#ffffff',
                fontSize: '18px',
                fontWeight: '500',
                fontFamily: "'Helvetica Neue', sans-serif",
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(78, 205, 196, 0.2)';
                e.target.style.borderColor = 'rgba(78, 205, 196, 0.4)';
                e.target.style.transform = 'translateX(5px)';
                e.target.style.boxShadow = '0 4px 15px rgba(78, 205, 196, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(78, 205, 196, 0.1)';
                e.target.style.borderColor = 'rgba(78, 205, 196, 0.2)';
                e.target.style.transform = 'translateX(0)';
                e.target.style.boxShadow = 'none';
              }}>
              <span>Proyectos</span>
              <span style={{color: 'rgba(78, 205, 196, 0.8)', fontSize: '18px'}}>→</span>
            </Link>

            <Link 
              to="/community" 
              onClick={closeMobileMenu}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 20px',
                background: 'rgba(78, 205, 196, 0.1)',
                border: '1px solid rgba(78, 205, 196, 0.2)',
                borderRadius: '12px',
                textDecoration: 'none',
                color: '#ffffff',
                fontSize: '18px',
                fontWeight: '500',
                fontFamily: "'Helvetica Neue', sans-serif",
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(78, 205, 196, 0.2)';
                e.target.style.borderColor = 'rgba(78, 205, 196, 0.4)';
                e.target.style.transform = 'translateX(5px)';
                e.target.style.boxShadow = '0 4px 15px rgba(78, 205, 196, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(78, 205, 196, 0.1)';
                e.target.style.borderColor = 'rgba(78, 205, 196, 0.2)';
                e.target.style.transform = 'translateX(0)';
                e.target.style.boxShadow = 'none';
              }}>
              <span>Comunidad</span>
              <span style={{color: 'rgba(78, 205, 196, 0.8)', fontSize: '18px'}}>→</span>
            </Link>
          </div>

          {/* Social Networks Section */}
          <div style={{
            borderTop: '1px solid rgba(78, 205, 196, 0.2)',
            paddingTop: '25px',
            marginTop: '20px'
          }}>
            <h4 style={{
              color: '#ffffff',
              fontSize: '18px',
              fontWeight: '600',
              fontFamily: "'Helvetica Neue', sans-serif",
              margin: '0 0 20px 0',
              textAlign: 'center'
            }}>
              Redes Sociales
            </h4>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '12px'
            }}>
              <a href="https://github.com/gustavoarteaga0508" target="_blank" rel="noopener noreferrer" style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(78, 205, 196, 0.1)',
                border: '1px solid rgba(78, 205, 196, 0.2)',
                borderRadius: '12px',
                padding: '15px',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => {
                e.target.style.background = 'rgba(78, 205, 196, 0.2)';
                e.target.style.borderColor = 'rgba(78, 205, 196, 0.4)';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 15px rgba(78, 205, 196, 0.2)';
              }} onMouseLeave={(e) => {
                e.target.style.background = 'rgba(78, 205, 196, 0.1)';
                e.target.style.borderColor = 'rgba(78, 205, 196, 0.2)';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}>
                <img src={github} alt="GitHub" style={{
                  width: '24px',
                  height: '24px',
                  filter: 'brightness(0.9)'
                }} />
              </a>
              
              <a href="https://www.linkedin.com/in/gustavo-arteaga-0508/" target="_blank" rel="noopener noreferrer" style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(78, 205, 196, 0.1)',
                border: '1px solid rgba(78, 205, 196, 0.2)',
                borderRadius: '12px',
                padding: '15px',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => {
                e.target.style.background = 'rgba(78, 205, 196, 0.2)';
                e.target.style.borderColor = 'rgba(78, 205, 196, 0.4)';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 15px rgba(78, 205, 196, 0.2)';
              }} onMouseLeave={(e) => {
                e.target.style.background = 'rgba(78, 205, 196, 0.1)';
                e.target.style.borderColor = 'rgba(78, 205, 196, 0.2)';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}>
                <img src={linkedin} alt="LinkedIn" style={{
                  width: '24px',
                  height: '24px',
                  filter: 'brightness(0.9)'
                }} />
              </a>
            </div>
          </div>
        </div>
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
      `}</style>
    </nav>
  );
}

export default Navbar;
