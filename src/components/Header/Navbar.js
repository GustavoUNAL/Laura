import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import linkedin from '../../img/linkedin.png';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();

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
    const body = 'Hola Laura,\n\nMe gustaría contactarme contigo para discutir posibles oportunidades de colaboración o proyectos.\n\nSaludos cordiales.';
    const mailtoUrl = `mailto:laurachavez@email.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
        ? 'linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(20, 20, 20, 0.95))' 
        : 'linear-gradient(135deg, #000000, #1a1a1a)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.4)',
      borderBottom: '1px solid rgba(0, 191, 255, 0.3)',
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
          fontFamily: "'Orbitron', monospace",
          textDecoration: 'none',
          textShadow: '0 0 20px rgba(0, 191, 255, 0.8)',
          transition: 'all 0.3s ease'
        }} onMouseEnter={(e) => {
          e.target.style.color = '#FF00FF';
          e.target.style.textShadow = '0 0 30px rgba(255, 0, 255, 0.8)';
        }} onMouseLeave={(e) => {
          e.target.style.color = '#00BFFF';
          e.target.style.textShadow = '0 0 20px rgba(0, 191, 255, 0.8)';
        }}>
          L.M. CHAVES
        </Link>

        {/* Desktop Menu - Hidden on mobile */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '30px'
        }} className="desktop-menu">
          <Link to="/about" style={{
            color: '#ffffff',
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: '500',
            fontFamily: "'Orbitron', monospace",
            padding: '10px 18px',
            borderRadius: '20px',
            transition: 'all 0.3s ease',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            background: 'rgba(255, 255, 255, 0.1)',
            textShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
          }} onMouseEnter={(e) => {
            e.target.style.color = '#FF00FF';
            e.target.style.backgroundColor = 'rgba(255, 0, 255, 0.2)';
            e.target.style.borderColor = 'rgba(255, 0, 255, 0.6)';
            e.target.style.transform = 'scale(1.05)';
            e.target.style.textShadow = '0 0 15px rgba(255, 0, 255, 0.8)';
          }} onMouseLeave={(e) => {
            e.target.style.color = '#ffffff';
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            e.target.style.transform = 'scale(1)';
            e.target.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
          }}>
            ⚡ About
          </Link>
          <Link to="/community" style={{
            color: '#ffffff',
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: '500',
            fontFamily: "'Orbitron', monospace",
            padding: '10px 18px',
            borderRadius: '20px',
            transition: 'all 0.3s ease',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            background: 'rgba(255, 255, 255, 0.1)',
            textShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
          }} onMouseEnter={(e) => {
            e.target.style.color = '#FF00FF';
            e.target.style.backgroundColor = 'rgba(255, 0, 255, 0.2)';
            e.target.style.borderColor = 'rgba(255, 0, 255, 0.6)';
            e.target.style.transform = 'scale(1.05)';
            e.target.style.textShadow = '0 0 15px rgba(255, 0, 255, 0.8)';
          }} onMouseLeave={(e) => {
            e.target.style.color = '#ffffff';
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            e.target.style.transform = 'scale(1)';
            e.target.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
          }}>
            🌐 Community
          </Link>
        </div>


        {/* Desktop Social Links - Hidden on mobile */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px'
        }} className="desktop-social">
          <div style={{
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0, 191, 255, 0.2)',
            borderRadius: '50%',
            boxShadow: '0 0 10px rgba(0, 191, 255, 0.3)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }} onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.2) rotate(10deg)';
            e.target.style.background = 'rgba(255, 0, 255, 0.4)';
            e.target.style.boxShadow = '0 0 20px rgba(255, 0, 255, 0.6)';
          }} onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1) rotate(0deg)';
            e.target.style.background = 'rgba(0, 191, 255, 0.2)';
            e.target.style.boxShadow = '0 0 10px rgba(0, 191, 255, 0.3)';
          }}>
            <span style={{
              fontSize: '20px',
              color: '#ffffff',
              transition: 'all 0.3s ease'
            }} onMouseEnter={(e) => {
              e.target.style.color = '#FF00FF';
            }} onMouseLeave={(e) => {
              e.target.style.color = '#ffffff';
            }}>
              📷
            </span>
          </div>
          <button onClick={handleEmailClick} style={{
            background: 'rgba(0, 191, 255, 0.2)',
            border: '2px solid rgba(0, 191, 255, 0.3)',
            borderRadius: '50%',
            cursor: 'pointer',
            padding: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            boxShadow: '0 0 10px rgba(0, 191, 255, 0.3)'
          }}>
            <svg style={{
              width: '24px',
              height: '24px',
              color: '#ffffff',
              transition: 'all 0.3s ease'
            }} viewBox="0 0 24 24" fill="currentColor" onMouseEnter={(e) => {
              e.target.style.color = '#FF00FF';
              e.target.style.transform = 'scale(1.2)';
            }} onMouseLeave={(e) => {
              e.target.style.color = '#ffffff';
              e.target.style.transform = 'scale(1)';
            }}>
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </button>
          <a href="https://www.linkedin.com/in/laura-chaves-timaran/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" style={{
              width: '28px',
              height: '28px',
              filter: 'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(200deg)',
              transition: 'all 0.3s ease',
              borderRadius: '50%',
              padding: '4px',
              background: 'rgba(0, 191, 255, 0.2)',
              boxShadow: '0 0 10px rgba(0, 191, 255, 0.3)'
            }} onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.2) rotate(10deg)';
              e.target.style.filter = 'brightness(0) invert(1) sepia(1) saturate(8) hue-rotate(280deg)';
              e.target.style.background = 'rgba(255, 0, 255, 0.4)';
              e.target.style.boxShadow = '0 0 20px rgba(255, 0, 255, 0.6)';
            }} onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1) rotate(0deg)';
              e.target.style.filter = 'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(200deg)';
              e.target.style.background = 'rgba(0, 191, 255, 0.2)';
              e.target.style.boxShadow = '0 0 10px rgba(0, 191, 255, 0.3)';
            }} />
          </a>
        </div>

      </div>

      {/* Mobile Hamburger Button - Enhanced */}
      <button 
        onClick={toggleMobileMenu}
        style={{
          display: 'flex',
          position: 'fixed',
          top: '15px',
          right: '15px',
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(20, 20, 20, 0.9))',
          border: '2px solid rgba(0, 191, 255, 0.7)',
          borderRadius: '18px',
          width: '70px',
          height: '55px',
          cursor: 'pointer',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          zIndex: 99999,
          WebkitTapHighlightColor: 'transparent',
          WebkitTouchCallout: 'none',
          WebkitUserSelect: 'none',
          userSelect: 'none',
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 191, 255, 0.4)',
          backdropFilter: 'blur(25px)',
          WebkitBackdropFilter: 'blur(25px)',
          position: 'relative',
          overflow: 'hidden'
        }} className="mobile-hamburger-global"
        onMouseEnter={(e) => {
          e.target.style.background = 'linear-gradient(135deg, rgba(0, 191, 255, 0.25), rgba(255, 0, 255, 0.25))';
          e.target.style.borderColor = 'rgba(255, 0, 255, 0.9)';
          e.target.style.transform = 'scale(1.1) translateY(-4px)';
          e.target.style.boxShadow = '0 15px 35px rgba(0, 191, 255, 0.5), 0 0 25px rgba(255, 0, 255, 0.7)';
        }} onMouseLeave={(e) => {
          e.target.style.background = 'linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(20, 20, 20, 0.9))';
          e.target.style.borderColor = 'rgba(0, 191, 255, 0.7)';
          e.target.style.transform = 'scale(1) translateY(0)';
          e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 191, 255, 0.4)';
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
            background: 'linear-gradient(90deg, #ffffff, #FF00FF)',
            borderRadius: '2px',
            transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            transform: isMobileMenuOpen ? 'rotate(45deg) translate(7px, 7px)' : 'none',
            transformOrigin: 'center',
            boxShadow: '0 0 12px rgba(0, 191, 255, 0.8)',
            filter: 'drop-shadow(0 0 5px rgba(255, 0, 255, 0.6))'
          }}></span>
          <span style={{
            width: '100%',
            height: '3px',
            background: isMobileMenuOpen ? 'transparent' : 'linear-gradient(90deg, #00BFFF, #FF00FF)',
            borderRadius: '2px',
            transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            opacity: isMobileMenuOpen ? 0 : 1,
            boxShadow: isMobileMenuOpen ? 'none' : '0 0 12px rgba(0, 191, 255, 0.8)',
            filter: isMobileMenuOpen ? 'none' : 'drop-shadow(0 0 5px rgba(255, 0, 255, 0.6))'
          }}></span>
          <span style={{
            width: '100%',
            height: '3px',
            background: 'linear-gradient(90deg, #ffffff, #FF00FF)',
            borderRadius: '2px',
            transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            transform: isMobileMenuOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none',
            transformOrigin: 'center',
            boxShadow: '0 0 12px rgba(0, 191, 255, 0.8)',
            filter: 'drop-shadow(0 0 5px rgba(255, 0, 255, 0.6))'
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
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.98), rgba(20, 20, 20, 0.95))',
          backdropFilter: 'blur(25px)',
          WebkitBackdropFilter: 'blur(25px)',
          padding: '40px 30px',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
          animation: 'fadeIn 0.4s ease-out'
        }}>
          {/* Close Button */}
          <button 
            onClick={closeMobileMenu}
            style={{
              position: 'absolute',
              top: '15px',
              right: '15px',
              background: 'rgba(0, 191, 255, 0.2)',
              border: '2px solid rgba(0, 191, 255, 0.4)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontSize: '20px',
              transition: 'all 0.3s ease',
              zIndex: 10001,
              boxShadow: '0 0 10px rgba(0, 191, 255, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 0, 255, 0.4)';
              e.target.style.color = '#FF00FF';
              e.target.style.transform = 'scale(1.1)';
              e.target.style.boxShadow = '0 0 15px rgba(255, 0, 255, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(0, 191, 255, 0.2)';
              e.target.style.color = '#ffffff';
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 0 10px rgba(0, 191, 255, 0.3)';
            }}>
            ✕
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
              fontFamily: "'Orbitron', monospace",
              textShadow: '0 0 10px rgba(0, 191, 255, 0.8)'
            }}>
              ⚡ Navigation
            </h2>
            <p style={{
              color: 'rgba(0, 191, 255, 0.8)',
              fontSize: '16px',
              margin: 0,
              fontFamily: "'Orbitron', monospace",
              fontStyle: 'italic',
              textShadow: '0 0 5px rgba(0, 191, 255, 0.5)'
            }}>
              Laura María Chaves Timarán
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
                padding: '20px 25px',
                background: 'rgba(0, 191, 255, 0.2)',
                border: '2px solid rgba(0, 191, 255, 0.3)',
                borderRadius: '20px',
                textDecoration: 'none',
                color: '#ffffff',
                fontSize: '18px',
                fontWeight: '500',
                fontFamily: "'Orbitron', monospace",
                transition: 'all 0.3s ease',
                textShadow: '0 0 10px rgba(0, 191, 255, 0.5)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 0, 255, 0.4)';
                e.target.style.borderColor = 'rgba(255, 0, 255, 0.6)';
                e.target.style.color = '#FF00FF';
                e.target.style.transform = 'translateX(5px) scale(1.02)';
                e.target.style.boxShadow = '0 8px 25px rgba(255, 0, 255, 0.3)';
                e.target.style.textShadow = '0 0 15px rgba(255, 0, 255, 0.8)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(0, 191, 255, 0.2)';
                e.target.style.borderColor = 'rgba(0, 191, 255, 0.3)';
                e.target.style.color = '#ffffff';
                e.target.style.transform = 'translateX(0) scale(1)';
                e.target.style.boxShadow = 'none';
                e.target.style.textShadow = '0 0 10px rgba(0, 191, 255, 0.5)';
              }}>
              <span>⚡ About</span>
              <span style={{color: 'rgba(0, 191, 255, 0.8)', fontSize: '20px'}}>🌐</span>
            </Link>
            <Link 
              to="/community" 
              onClick={closeMobileMenu}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px 25px',
                background: 'rgba(0, 191, 255, 0.2)',
                border: '2px solid rgba(0, 191, 255, 0.3)',
                borderRadius: '20px',
                textDecoration: 'none',
                color: '#ffffff',
                fontSize: '18px',
                fontWeight: '500',
                fontFamily: "'Orbitron', monospace",
                transition: 'all 0.3s ease',
                textShadow: '0 0 10px rgba(0, 191, 255, 0.5)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 0, 255, 0.4)';
                e.target.style.borderColor = 'rgba(255, 0, 255, 0.6)';
                e.target.style.color = '#FF00FF';
                e.target.style.transform = 'translateX(5px) scale(1.02)';
                e.target.style.boxShadow = '0 8px 25px rgba(255, 0, 255, 0.3)';
                e.target.style.textShadow = '0 0 15px rgba(255, 0, 255, 0.8)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(0, 191, 255, 0.2)';
                e.target.style.borderColor = 'rgba(0, 191, 255, 0.3)';
                e.target.style.color = '#ffffff';
                e.target.style.transform = 'translateX(0) scale(1)';
                e.target.style.boxShadow = 'none';
                e.target.style.textShadow = '0 0 10px rgba(0, 191, 255, 0.5)';
              }}>
              <span>🌐 Community</span>
              <span style={{color: 'rgba(0, 191, 255, 0.8)', fontSize: '20px'}}>⚡</span>
            </Link>
          </div>


          {/* Contact Section */}
          <div style={{
            borderTop: '2px solid rgba(0, 191, 255, 0.3)',
            paddingTop: '25px',
            marginTop: '20px'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '12px'
            }}>
              <div style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(0, 191, 255, 0.2)',
                border: '2px solid rgba(0, 191, 255, 0.3)',
                borderRadius: '15px',
                padding: '15px',
                transition: 'all 0.3s ease',
                boxShadow: '0 0 10px rgba(0, 191, 255, 0.3)',
                cursor: 'pointer'
              }} onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 0, 255, 0.4)';
                e.target.style.borderColor = 'rgba(255, 0, 255, 0.6)';
                e.target.style.transform = 'translateY(-3px) scale(1.05)';
                e.target.style.boxShadow = '0 8px 20px rgba(255, 0, 255, 0.3)';
              }} onMouseLeave={(e) => {
                e.target.style.background = 'rgba(0, 191, 255, 0.2)';
                e.target.style.borderColor = 'rgba(0, 191, 255, 0.3)';
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 0 10px rgba(0, 191, 255, 0.3)';
              }}>
                <span style={{
                  fontSize: '24px',
                  color: '#ffffff',
                  transition: 'all 0.3s ease'
                }} onMouseEnter={(e) => {
                  e.target.style.color = '#FF00FF';
                }} onMouseLeave={(e) => {
                  e.target.style.color = '#ffffff';
                }}>
                  📷
                </span>
              </div>
              
              <button onClick={handleEmailClick} style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(0, 191, 255, 0.2)',
                border: '2px solid rgba(0, 191, 255, 0.3)',
                borderRadius: '15px',
                padding: '15px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 0 10px rgba(0, 191, 255, 0.3)'
              }} onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 0, 255, 0.4)';
                e.target.style.borderColor = 'rgba(255, 0, 255, 0.6)';
                e.target.style.transform = 'translateY(-3px) scale(1.05)';
                e.target.style.boxShadow = '0 8px 20px rgba(255, 0, 255, 0.3)';
              }} onMouseLeave={(e) => {
                e.target.style.background = 'rgba(0, 191, 255, 0.2)';
                e.target.style.borderColor = 'rgba(0, 191, 255, 0.3)';
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 0 10px rgba(0, 191, 255, 0.3)';
              }}>
                <svg style={{
                  width: '26px',
                  height: '26px',
                  color: '#ffffff'
                }} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </button>
              
              <a href="https://www.linkedin.com/in/laura-chaves-timaran/" target="_blank" rel="noopener noreferrer" style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(0, 191, 255, 0.2)',
                border: '2px solid rgba(0, 191, 255, 0.3)',
                borderRadius: '15px',
                padding: '15px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 0 10px rgba(0, 191, 255, 0.3)'
              }} onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 0, 255, 0.4)';
                e.target.style.borderColor = 'rgba(255, 0, 255, 0.6)';
                e.target.style.transform = 'translateY(-3px) scale(1.05)';
                e.target.style.boxShadow = '0 8px 20px rgba(255, 0, 255, 0.3)';
              }} onMouseLeave={(e) => {
                e.target.style.background = 'rgba(0, 191, 255, 0.2)';
                e.target.style.borderColor = 'rgba(0, 191, 255, 0.3)';
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 0 10px rgba(0, 191, 255, 0.3)';
              }}>
                <img src={linkedin} alt="LinkedIn" style={{
                  width: '26px',
                  height: '26px',
                  filter: 'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(200deg)'
                }} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* CSS for animations and responsive behavior */}
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
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        /* Hide hamburger button on desktop */
        @media (min-width: 769px) {
          .mobile-hamburger-global {
            display: none !important;
          }
        }
        
        /* Show hamburger button only on mobile */
        @media (max-width: 768px) {
          .mobile-hamburger-global {
            display: flex !important;
          }
          .desktop-menu {
            display: none !important;
          }
          .desktop-social {
            display: none !important;
          }
        }
        
        /* Ensure proper z-index layering */
        .mobile-hamburger-global {
          z-index: 99999 !important;
        }
        
        /* Prevent body scroll when menu is open */
        body.menu-open {
          overflow: hidden !important;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
