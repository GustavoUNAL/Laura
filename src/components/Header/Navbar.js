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
      zIndex: 10000,
      transition: 'all 0.3s ease',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      overflow: 'hidden',
      paddingTop: 'env(safe-area-inset-top)',
      minHeight: 'calc(70px + env(safe-area-inset-top))'
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

      {/* Mobile Menu - Professional Popup */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay Background */}
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.7)',
            zIndex: 9998,
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)'
          }} onClick={closeMobileMenu}></div>
          
          {/* Popup Menu */}
          <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          maxWidth: '400px',
          maxHeight: '80vh',
          background: 'rgba(20, 20, 20, 0.98)',
          backdropFilter: 'blur(25px)',
          WebkitBackdropFilter: 'blur(25px)',
          border: '2px solid rgba(78, 205, 196, 0.3)',
          borderRadius: '20px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(78, 205, 196, 0.2)',
          zIndex: 9999,
          padding: '30px 25px',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
          pointerEvents: 'auto',
          touchAction: 'manipulation',
          animation: 'popupFadeIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}>
          
          {/* Close Button */}
          <button
            onClick={closeMobileMenu}
            style={{
              position: 'absolute',
              top: '15px',
              right: '15px',
              width: '35px',
              height: '35px',
              background: 'rgba(78, 205, 196, 0.1)',
              border: '1px solid rgba(78, 205, 196, 0.3)',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontSize: '18px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(78, 205, 196, 0.2)';
              e.target.style.borderColor = 'rgba(78, 205, 196, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(78, 205, 196, 0.1)';
              e.target.style.borderColor = 'rgba(78, 205, 196, 0.3)';
            }}
          >
            ×
          </button>

          {/* Menu Title */}
          <div style={{
            textAlign: 'center',
            marginBottom: '30px',
            paddingTop: '10px'
          }}>
            <h3 style={{
              color: '#ffffff',
              fontSize: '24px',
              fontWeight: '600',
              fontFamily: "'Helvetica Neue', sans-serif",
              margin: '0 0 8px 0',
              background: 'linear-gradient(45deg, #4ecdc4, #45b7d1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Navegación
            </h3>
            <p style={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '14px',
              margin: '0',
              fontFamily: "'Helvetica Neue', sans-serif"
            }}>
              Gustavo Arteaga - Ingeniero Eléctrico
            </p>
          </div>

          <div className="mobile-menu" style={{
            width: '100%',
            maxWidth: '100%',
            margin: '0',
            padding: '0',
            boxSizing: 'border-box'
          }}>
            {/* Navigation Links - Professional Layout */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              marginBottom: '30px'
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
                padding: '16px 20px',
                background: 'rgba(78, 205, 196, 0.1)',
                border: '1px solid rgba(78, 205, 196, 0.2)',
                borderRadius: '12px',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => {
                e.target.style.background = 'rgba(78, 205, 196, 0.2)';
                e.target.style.borderColor = 'rgba(78, 205, 196, 0.4)';
                e.target.style.transform = 'translateX(5px)';
                e.target.style.boxShadow = '0 4px 15px rgba(78, 205, 196, 0.2)';
              }} onMouseLeave={(e) => {
                e.target.style.background = 'rgba(78, 205, 196, 0.1)';
                e.target.style.borderColor = 'rgba(78, 205, 196, 0.2)';
                e.target.style.transform = 'translateX(0)';
                e.target.style.boxShadow = 'none';
              }}>
                <span>👤 Acerca de</span>
                <span style={{color: 'rgba(78, 205, 196, 0.8)', fontSize: '18px'}}>→</span>
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
                padding: '16px 20px',
                background: 'rgba(78, 205, 196, 0.1)',
                border: '1px solid rgba(78, 205, 196, 0.2)',
                borderRadius: '12px',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => {
                e.target.style.background = 'rgba(78, 205, 196, 0.2)';
                e.target.style.borderColor = 'rgba(78, 205, 196, 0.4)';
                e.target.style.transform = 'translateX(5px)';
                e.target.style.boxShadow = '0 4px 15px rgba(78, 205, 196, 0.2)';
              }} onMouseLeave={(e) => {
                e.target.style.background = 'rgba(78, 205, 196, 0.1)';
                e.target.style.borderColor = 'rgba(78, 205, 196, 0.2)';
                e.target.style.transform = 'translateX(0)';
                e.target.style.boxShadow = 'none';
              }}>
                <span>💼 Proyectos</span>
                <span style={{color: 'rgba(78, 205, 196, 0.8)', fontSize: '18px'}}>→</span>
              </Link>
              
              <Link to="/community" onClick={closeMobileMenu} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: '500',
                fontFamily: "'Helvetica Neue', sans-serif",
                padding: '16px 20px',
                background: 'rgba(78, 205, 196, 0.1)',
                border: '1px solid rgba(78, 205, 196, 0.2)',
                borderRadius: '12px',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => {
                e.target.style.background = 'rgba(78, 205, 196, 0.2)';
                e.target.style.borderColor = 'rgba(78, 205, 196, 0.4)';
                e.target.style.transform = 'translateX(5px)';
                e.target.style.boxShadow = '0 4px 15px rgba(78, 205, 196, 0.2)';
              }} onMouseLeave={(e) => {
                e.target.style.background = 'rgba(78, 205, 196, 0.1)';
                e.target.style.borderColor = 'rgba(78, 205, 196, 0.2)';
                e.target.style.transform = 'translateX(0)';
                e.target.style.boxShadow = 'none';
              }}>
                <span>🌐 Comunidad</span>
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
                <a href="https://github.com/GustavoUNAL" target="_blank" rel="noopener noreferrer" style={{
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
                  <span style={{color: '#ffffff', fontSize: '20px'}}>🐙</span>
                </a>
                
                <a href="https://www.linkedin.com/in/gustavo-arteaga-rodriguez-4b1b1b1b1/" target="_blank" rel="noopener noreferrer" style={{
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
                  <span style={{color: '#ffffff', fontSize: '20px'}}>💼</span>
                </a>
              </div>
            </div>

            {/* Mobile Social Links - Compact 3 in a row */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '12px',
              padding: '15px 10px',
              borderTop: '1px solid rgba(78, 205, 196, 0.2)',
              background: 'rgba(78, 205, 196, 0.05)',
              borderRadius: '12px',
              margin: '0 5px'
            }}>
              <a href="https://github.com/GustavoUNAL" target="_blank" rel="noopener noreferrer" style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                textDecoration: 'none'
              }} onMouseEnter={(e) => {
                e.target.style.background = 'rgba(78, 205, 196, 0.1)';
                e.target.style.borderColor = 'rgba(78, 205, 196, 0.3)';
                e.target.style.transform = 'scale(1.05)';
              }} onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.target.style.transform = 'scale(1)';
              }}>
                <img src={github} alt="GitHub" style={{
                  width: '24px',
                  height: '24px',
                  filter: 'brightness(0.9)'
                }} />
              </a>
              
              <button onClick={handleEmailClick} style={{
                flex: 1,
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                padding: '10px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => {
                e.target.style.background = 'rgba(78, 205, 196, 0.1)';
                e.target.style.borderColor = 'rgba(78, 205, 196, 0.3)';
                e.target.style.transform = 'scale(1.05)';
              }} onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.target.style.transform = 'scale(1)';
              }}>
                <svg style={{
                  width: '24px',
                  height: '24px',
                  color: '#ffffff'
                }} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </button>
              
              <a href="https://www.linkedin.com/in/gustavo-arteaga/" target="_blank" rel="noopener noreferrer" style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                textDecoration: 'none'
              }} onMouseEnter={(e) => {
                e.target.style.background = 'rgba(78, 205, 196, 0.1)';
                e.target.style.borderColor = 'rgba(78, 205, 196, 0.3)';
                e.target.style.transform = 'scale(1.05)';
              }} onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.target.style.transform = 'scale(1)';
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
        </>
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes popupFadeIn {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
      `}</style>

      {/* Simple Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          onClick={closeMobileMenu}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.3)',
            zIndex: 1001,
            pointerEvents: 'auto'
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
          z-index: 9999 !important;
          position: relative !important;
        }
        
        /* iPhone 12 Pro and devices with notch */
        @supports (padding: max(0px)) {
          nav {
            padding-top: max(env(safe-area-inset-top), 0px) !important;
            min-height: calc(70px + max(env(safe-area-inset-top), 0px)) !important;
          }
          
          .mobile-menu {
            top: calc(70px + max(env(safe-area-inset-top), 0px)) !important;
            padding-bottom: max(env(safe-area-inset-bottom), 15px) !important;
            z-index: 9999 !important;
          }
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
            padding-top: env(safe-area-inset-top) !important;
          }
          
          .mobile-menu {
            width: 100vw !important;
            max-width: 100vw !important;
            left: 0 !important;
            right: 0 !important;
            margin: 0 !important;
            position: fixed !important;
            top: calc(70px + env(safe-area-inset-top)) !important;
            padding-bottom: env(safe-area-inset-bottom) !important;
          }
        }
        
        /* iPhone 12 Pro specific (390x844) */
        @media screen and (max-width: 390px) and (max-height: 844px) {
          nav {
            padding-top: env(safe-area-inset-top) !important;
            min-height: calc(70px + env(safe-area-inset-top)) !important;
          }
          
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
            padding-top: env(safe-area-inset-top) !important;
          }
          
          .mobile-menu {
            width: 100vw !important;
            max-width: 100vw !important;
            left: 0 !important;
            right: 0 !important;
            margin: 0 !important;
            position: fixed !important;
            top: calc(70px + env(safe-area-inset-top)) !important;
            padding-bottom: env(safe-area-inset-bottom) !important;
            z-index: 9999 !important;
          }
          
          .mobile-hamburger {
            z-index: 10001 !important;
            position: relative !important;
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
            padding-top: env(safe-area-inset-top) !important;
          }
          
          .mobile-menu {
            width: 100vw !important;
            max-width: 100vw !important;
            left: 0 !important;
            right: 0 !important;
            margin: 0 !important;
            position: fixed !important;
            top: calc(70px + env(safe-area-inset-top)) !important;
            padding-bottom: env(safe-area-inset-bottom) !important;
          }
        }
        
        @media (max-width: 768px) {
          .desktop-menu, .desktop-social {
            display: none !important;
          }
          .mobile-hamburger {
            display: flex !important;
            position: relative !important;
            z-index: 10000 !important;
          }
          
          .main-navigation {
            width: 100vw !important;
            max-width: 100vw !important;
            min-width: 100vw !important;
            padding: 0 15px !important;
            position: relative !important;
          }
          
          .mobile-menu {
            padding: 0 15px !important;
            position: relative !important;
            z-index: 9999 !important;
            width: 100% !important;
            max-width: 100% !important;
          }
          
          /* Ensure hamburger button is clickable */
          .mobile-hamburger {
            display: flex !important;
            position: relative !important;
            z-index: 10000 !important;
            pointer-events: auto !important;
            touch-action: manipulation !important;
          }
          
          /* Fix touch targets for mobile */
          .mobile-hamburger,
          .mobile-menu a,
          .mobile-menu button {
            min-height: 44px !important;
            min-width: 44px !important;
          }
        }
        
        @media (min-width: 769px) {
          .mobile-hamburger {
            display: none !important;
          }
          .mobile-hamburger-global {
            display: none !important;
          }
        }
        
        @media (max-width: 768px) {
          .mobile-hamburger-global {
            display: flex !important;
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
        
        /* Additional mobile optimizations */
        @media (max-width: 768px) {
          /* Improve touch responsiveness */
          .mobile-hamburger:active {
            transform: scale(0.95) !important;
            background: linear-gradient(135deg, rgba(78, 205, 196, 0.3), rgba(78, 205, 196, 0.2)) !important;
          }
          
          /* Better mobile menu animations and visibility */
          .mobile-menu {
            animation: slideDown 0.3s ease-out !important;
            position: fixed !important;
            top: calc(70px + env(safe-area-inset-top)) !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            z-index: 9999 !important;
            background: linear-gradient(180deg, rgba(18, 18, 18, 0.98), rgba(26, 26, 26, 0.95)) !important;
            backdrop-filter: blur(25px) !important;
            -webkit-backdrop-filter: blur(25px) !important;
            overflow-y: auto !important;
            -webkit-overflow-scrolling: touch !important;
            padding-bottom: env(safe-area-inset-bottom) !important;
          }
          
          /* iOS Safari specific fixes */
          @supports (-webkit-touch-callout: none) {
            .mobile-menu {
              -webkit-transform: translateZ(0) !important;
              transform: translateZ(0) !important;
              will-change: transform !important;
            }
            
            .mobile-hamburger {
              -webkit-tap-highlight-color: transparent !important;
              -webkit-touch-callout: none !important;
            }
          }
          
          /* Improve social links layout for small screens */
          .mobile-menu .social-links-container {
            display: flex !important;
            justify-content: space-between !important;
            gap: 8px !important;
            padding: 12px 8px !important;
          }
          
          .mobile-menu .social-links-container a,
          .mobile-menu .social-links-container button {
            flex: 1 !important;
            min-height: 44px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
        }
        
        /* Very small screens optimization */
        @media (max-width: 375px) {
          .mobile-menu {
            padding: 10px 0 !important;
          }
          
          .mobile-menu .navigation-links {
            gap: 6px !important;
            margin-bottom: 15px !important;
          }
          
          .mobile-menu .navigation-links a {
            padding: 10px 12px !important;
            font-size: 15px !important;
          }
          
          .mobile-menu .social-links-container {
            padding: 10px 6px !important;
            gap: 6px !important;
          }
          
          .mobile-menu .social-links-container img,
          .mobile-menu .social-links-container svg {
            width: 20px !important;
            height: 20px !important;
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar; 