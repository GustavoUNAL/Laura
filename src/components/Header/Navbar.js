import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { useTheme } from '../../contexts/ThemeContext'; // Comentado - no se usa
import { useUser } from '../../contexts/UserContext';
import { useDarkMode } from '../../contexts/DarkModeContext';
import linkedin from '../../img/linkedin.png';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  // const { isDarkMode, toggleTheme } = useTheme(); // Comentado - no se usa
  const { user, logout } = useUser();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  // Get dynamic title based on current route
  const getPageTitle = () => {
    const path = location.pathname;
    switch (path) {
      case '/':
        return 'Home';
      case '/about':
        return 'About';
      case '/projects':
        return 'Projects';
      case '/community':
        return 'Community';
      case '/student':
        return 'Student';
      case '/professor':
        return 'Professor';
      default:
        return 'Portfolio';
    }
  };

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

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleRoleNavigation = () => {
    if (user?.role === 'student') {
      navigate('/student');
    } else if (user?.role === 'professor') {
      navigate('/professor');
    }
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
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
          textDecoration: 'none',
          textShadow: 'none',
          transition: 'all 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }} onMouseEnter={(e) => {
          e.target.style.color = '#ffffff';
        }} onMouseLeave={(e) => {
          e.target.style.color = '#ffffff';
        }}>
          {getPageTitle()}
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
            border: '2px solid rgba(255, 255, 255, 0.2)',
            background: 'rgba(255, 255, 255, 0.06)',
            textShadow: 'none'
          }} onMouseEnter={(e) => {
            e.target.style.color = '#0a0a0a';
            e.target.style.backgroundColor = '#3498db';
            e.target.style.borderColor = '#2980b9';
            e.target.style.transform = 'scale(1.02)';
            e.target.style.boxShadow = '0 6px 16px rgba(52, 152, 219, 0.35)';
          }} onMouseLeave={(e) => {
            e.target.style.color = '#ffffff';
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
            e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = 'none';
          }}>
            About
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
            border: '2px solid rgba(255, 255, 255, 0.2)',
            background: 'rgba(255, 255, 255, 0.06)',
            textShadow: 'none'
          }} onMouseEnter={(e) => {
            e.target.style.color = '#0a0a0a';
            e.target.style.backgroundColor = '#3498db';
            e.target.style.borderColor = '#2980b9';
            e.target.style.transform = 'scale(1.02)';
            e.target.style.boxShadow = '0 6px 16px rgba(52, 152, 219, 0.35)';
          }} onMouseLeave={(e) => {
            e.target.style.color = '#ffffff';
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
            e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = 'none';
          }}>
            Community
          </Link>
          
          {/* User-specific buttons - Comentado para acceso directo */}
          {/* {user ? (
            <>
              <button onClick={handleRoleNavigation} style={{
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '500',
                fontFamily: "'Orbitron', monospace",
                padding: '10px 18px',
                borderRadius: '20px',
                transition: 'all 0.3s ease',
                border: user.role === 'student' ? '2px solid rgba(0, 255, 136, 0.3)' : '2px solid rgba(255, 165, 0, 0.3)',
                background: user.role === 'student' ? 'rgba(0, 255, 136, 0.1)' : 'rgba(255, 165, 0, 0.1)',
                textShadow: user.role === 'student' ? '0 0 10px rgba(0, 255, 136, 0.5)' : '0 0 10px rgba(255, 165, 0, 0.5)',
                cursor: 'pointer'
              }} onMouseEnter={(e) => {
                e.target.style.backgroundColor = user.role === 'student' ? 'rgba(0, 255, 136, 0.2)' : 'rgba(255, 165, 0, 0.2)';
                e.target.style.borderColor = user.role === 'student' ? 'rgba(0, 255, 136, 0.6)' : 'rgba(255, 165, 0, 0.6)';
                e.target.style.transform = 'scale(1.05)';
                e.target.style.textShadow = user.role === 'student' ? '0 0 15px rgba(0, 255, 136, 0.8)' : '0 0 15px rgba(255, 165, 0, 0.8)';
              }} onMouseLeave={(e) => {
                e.target.style.backgroundColor = user.role === 'student' ? 'rgba(0, 255, 136, 0.1)' : 'rgba(255, 165, 0, 0.1)';
                e.target.style.borderColor = user.role === 'student' ? 'rgba(0, 255, 136, 0.3)' : 'rgba(255, 165, 0, 0.3)';
                e.target.style.transform = 'scale(1)';
                e.target.style.textShadow = user.role === 'student' ? '0 0 10px rgba(0, 255, 136, 0.5)' : '0 0 10px rgba(255, 165, 0, 0.5)';
              }}>
                {user.role === 'student' ? '🎓 Dashboard' : '👨‍🏫 Dashboard'}
              </button>
              <button onClick={handleLogout} style={{
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '500',
                fontFamily: "'Orbitron', monospace",
                padding: '10px 18px',
                borderRadius: '20px',
                transition: 'all 0.3s ease',
                border: '2px solid rgba(255, 0, 0, 0.3)',
                background: 'rgba(255, 0, 0, 0.1)',
                textShadow: '0 0 10px rgba(255, 0, 0, 0.5)',
                cursor: 'pointer'
              }} onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
                e.target.style.borderColor = 'rgba(255, 0, 0, 0.6)';
                e.target.style.transform = 'scale(1.05)';
                e.target.style.textShadow = '0 0 15px rgba(255, 0, 0, 0.8)';
              }} onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
                e.target.style.borderColor = 'rgba(255, 0, 0, 0.3)';
                e.target.style.transform = 'scale(1)';
                e.target.style.textShadow = '0 0 10px rgba(255, 0, 0, 0.5)';
              }}>
                🚪 Salir
              </button>
            </>
          ) : (
            <button onClick={handleLoginClick} style={{
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500',
              fontFamily: "'Orbitron', monospace",
              padding: '10px 18px',
              borderRadius: '20px',
              transition: 'all 0.3s ease',
              border: '2px solid rgba(0, 191, 255, 0.3)',
              background: 'rgba(0, 191, 255, 0.1)',
              textShadow: '0 0 10px rgba(0, 191, 255, 0.5)',
              cursor: 'pointer'
            }} onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(0, 191, 255, 0.2)';
              e.target.style.borderColor = 'rgba(0, 191, 255, 0.6)';
              e.target.style.transform = 'scale(1.05)';
              e.target.style.textShadow = '0 0 15px rgba(0, 191, 255, 0.8)';
            }} onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(0, 191, 255, 0.1)';
              e.target.style.borderColor = 'rgba(0, 191, 255, 0.3)';
              e.target.style.transform = 'scale(1)';
              e.target.style.textShadow = '0 0 10px rgba(0, 191, 255, 0.5)';
            }}>
              🔐 Iniciar Sesión
            </button>
          )} */}
        </div>


        {/* Desktop Social Links - Hidden on mobile */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px'
        }} className="desktop-social">
          <button onClick={handleEmailClick} style={{
            background: 'rgba(52, 152, 219, 0.15)',
            border: '2px solid rgba(52, 152, 219, 0.35)',
            borderRadius: '50%',
            cursor: 'pointer',
            padding: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            boxShadow: '0 0 12px rgba(52, 152, 219, 0.25)',
            width: '48px',
            height: '48px'
          }} onMouseEnter={(e) => {
            e.target.style.background = 'rgba(52, 152, 219, 0.35)';
            e.target.style.borderColor = 'rgba(41, 128, 185, 0.6)';
            e.target.style.transform = 'scale(1.06)';
            e.target.style.boxShadow = '0 0 18px rgba(52, 152, 219, 0.45)';
          }} onMouseLeave={(e) => {
            e.target.style.background = 'rgba(52, 152, 219, 0.15)';
            e.target.style.borderColor = 'rgba(52, 152, 219, 0.35)';
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 0 12px rgba(52, 152, 219, 0.25)';
          }}>
            <svg style={{
              width: '24px',
              height: '24px',
              color: '#ffffff',
              transition: 'all 0.3s ease'
            }} viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Hamburger Button - Enhanced */}
      <button 
        onClick={toggleMobileMenu}
        style={{
          display: 'flex',
          position: 'fixed',
          top: '20px',
          right: '20px',
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(20, 20, 20, 0.95))',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '20px',
          width: '60px',
          height: '60px',
          cursor: 'pointer',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          zIndex: 99999,
          WebkitTapHighlightColor: 'transparent',
          WebkitTouchCallout: 'none',
          WebkitUserSelect: 'none',
          userSelect: 'none',
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.6), 0 0 30px rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          overflow: 'hidden'
        }} className="mobile-hamburger-global"
        onMouseEnter={(e) => {
          e.target.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))';
          e.target.style.borderColor = 'rgba(255, 255, 255, 0.6)';
          e.target.style.transform = 'scale(1.05) translateY(-2px)';
          e.target.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.8), 0 0 40px rgba(255, 255, 255, 0.2)';
        }} onMouseLeave={(e) => {
          e.target.style.background = 'linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(20, 20, 20, 0.95))';
          e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
          e.target.style.transform = 'scale(1) translateY(0)';
          e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.6), 0 0 30px rgba(255, 255, 255, 0.1)';
        }}>
        
        {/* Menu Icon */}
        <div style={{
          width: '28px',
          height: '22px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <span style={{
            width: '100%',
            height: '3px',
            background: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '3px',
            transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            transform: isMobileMenuOpen ? 'rotate(45deg) translate(8px, 8px)' : 'none',
            transformOrigin: 'center',
            boxShadow: '0 0 8px rgba(255, 255, 255, 0.3)'
          }}></span>
          <span style={{
            width: '100%',
            height: '3px',
            background: isMobileMenuOpen ? 'transparent' : 'rgba(255, 255, 255, 0.9)',
            borderRadius: '3px',
            transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            opacity: isMobileMenuOpen ? 0 : 1,
            boxShadow: isMobileMenuOpen ? 'none' : '0 0 8px rgba(255, 255, 255, 0.3)'
          }}></span>
          <span style={{
            width: '100%',
            height: '3px',
            background: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '3px',
            transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            transform: isMobileMenuOpen ? 'rotate(-45deg) translate(8px, -8px)' : 'none',
            transformOrigin: 'center',
            boxShadow: '0 0 8px rgba(255, 255, 255, 0.3)'
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
              e.target.style.color = '#ffffff';
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
              textShadow: 'none'
            }}>
              Navigation
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
                background: 'rgba(52, 152, 219, 0.15)',
                border: '2px solid rgba(52, 152, 219, 0.35)',
                borderRadius: '20px',
                textDecoration: 'none',
                color: '#ffffff',
                fontSize: '18px',
                fontWeight: '500',
                fontFamily: "'Orbitron', monospace",
                transition: 'all 0.3s ease',
                textShadow: 'none'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(52, 152, 219, 0.3)';
                e.target.style.borderColor = 'rgba(41, 128, 185, 0.6)';
                e.target.style.color = '#ffffff';
                e.target.style.transform = 'translateX(5px) scale(1.02)';
                e.target.style.boxShadow = '0 8px 25px rgba(52, 152, 219, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(52, 152, 219, 0.15)';
                e.target.style.borderColor = 'rgba(52, 152, 219, 0.35)';
                e.target.style.color = '#ffffff';
                e.target.style.transform = 'translateX(0) scale(1)';
                e.target.style.boxShadow = 'none';
              }}>
              <span>About</span>
            </Link>
            <Link 
              to="/community" 
              onClick={closeMobileMenu}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px 25px',
                background: 'rgba(52, 152, 219, 0.15)',
                border: '2px solid rgba(52, 152, 219, 0.35)',
                borderRadius: '20px',
                textDecoration: 'none',
                color: '#ffffff',
                fontSize: '18px',
                fontWeight: '500',
                fontFamily: "'Orbitron', monospace",
                transition: 'all 0.3s ease',
                textShadow: 'none'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(52, 152, 219, 0.3)';
                e.target.style.borderColor = 'rgba(41, 128, 185, 0.6)';
                e.target.style.color = '#ffffff';
                e.target.style.transform = 'translateX(5px) scale(1.02)';
                e.target.style.boxShadow = '0 8px 25px rgba(52, 152, 219, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(52, 152, 219, 0.15)';
                e.target.style.borderColor = 'rgba(52, 152, 219, 0.35)';
                e.target.style.color = '#ffffff';
                e.target.style.transform = 'translateX(0) scale(1)';
                e.target.style.boxShadow = 'none';
              }}>
              <span>Community</span>
            </Link>
            {/* User-specific mobile buttons - Comentado para acceso directo */}
            {/* {user ? (
              <>
                <button 
                  onClick={() => {
                    handleRoleNavigation();
                    closeMobileMenu();
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '20px 25px',
                    background: user.role === 'student' ? 'rgba(0, 255, 136, 0.2)' : 'rgba(255, 165, 0, 0.2)',
                    border: user.role === 'student' ? '2px solid rgba(0, 255, 136, 0.3)' : '2px solid rgba(255, 165, 0, 0.3)',
                    borderRadius: '20px',
                    textDecoration: 'none',
                    color: '#ffffff',
                    fontSize: '18px',
                    fontWeight: '500',
                    fontFamily: "'Orbitron', monospace",
                    transition: 'all 0.3s ease',
                    textShadow: user.role === 'student' ? '0 0 10px rgba(0, 255, 136, 0.5)' : '0 0 10px rgba(255, 165, 0, 0.5)',
                    cursor: 'pointer',
                    width: '100%'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = user.role === 'student' ? 'rgba(0, 255, 136, 0.4)' : 'rgba(255, 165, 0, 0.4)';
                    e.target.style.borderColor = user.role === 'student' ? 'rgba(0, 255, 136, 0.6)' : 'rgba(255, 165, 0, 0.6)';
                    e.target.style.color = '#ffffff';
                    e.target.style.transform = 'translateX(5px) scale(1.02)';
                    e.target.style.boxShadow = user.role === 'student' ? '0 8px 25px rgba(0, 255, 136, 0.3)' : '0 8px 25px rgba(255, 165, 0, 0.3)';
                    e.target.style.textShadow = user.role === 'student' ? '0 0 15px rgba(0, 255, 136, 0.8)' : '0 0 15px rgba(255, 165, 0, 0.8)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = user.role === 'student' ? 'rgba(0, 255, 136, 0.2)' : 'rgba(255, 165, 0, 0.2)';
                    e.target.style.borderColor = user.role === 'student' ? 'rgba(0, 255, 136, 0.3)' : 'rgba(255, 165, 0, 0.3)';
                    e.target.style.color = '#ffffff';
                    e.target.style.transform = 'translateX(0) scale(1)';
                    e.target.style.boxShadow = 'none';
                    e.target.style.textShadow = user.role === 'student' ? '0 0 10px rgba(0, 255, 136, 0.5)' : '0 0 10px rgba(255, 165, 0, 0.5)';
                  }}>
                  <span>{user.role === 'student' ? '🎓 Dashboard' : '👨‍🏫 Dashboard'}</span>
                  <span style={{color: user.role === 'student' ? 'rgba(0, 255, 136, 0.8)' : 'rgba(255, 165, 0, 0.8)', fontSize: '20px'}}>
                    {user.role === 'student' ? '📚' : '📊'}
                  </span>
                </button>
                <button 
                  onClick={() => {
                    handleLogout();
                    closeMobileMenu();
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '20px 25px',
                    background: 'rgba(255, 0, 0, 0.2)',
                    border: '2px solid rgba(255, 0, 0, 0.3)',
                    borderRadius: '20px',
                    textDecoration: 'none',
                    color: '#ffffff',
                    fontSize: '18px',
                    fontWeight: '500',
                    fontFamily: "'Orbitron', monospace",
                    transition: 'all 0.3s ease',
                    textShadow: '0 0 10px rgba(255, 0, 0, 0.5)',
                    cursor: 'pointer',
                    width: '100%'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255, 0, 0, 0.4)';
                    e.target.style.borderColor = 'rgba(255, 0, 0, 0.6)';
                    e.target.style.color = '#ffffff';
                    e.target.style.transform = 'translateX(5px) scale(1.02)';
                    e.target.style.boxShadow = '0 8px 25px rgba(255, 0, 0, 0.3)';
                    e.target.style.textShadow = '0 0 15px rgba(255, 0, 0, 0.8)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 0, 0, 0.2)';
                    e.target.style.borderColor = 'rgba(255, 0, 0, 0.3)';
                    e.target.style.color = '#ffffff';
                    e.target.style.transform = 'translateX(0) scale(1)';
                    e.target.style.boxShadow = 'none';
                    e.target.style.textShadow = '0 0 10px rgba(255, 0, 0, 0.5)';
                  }}>
                  <span>🚪 Salir</span>
                  <span style={{color: 'rgba(255, 0, 0, 0.8)', fontSize: '20px'}}>❌</span>
                </button>
              </>
            ) : (
              <button 
                onClick={() => {
                  handleLoginClick();
                  closeMobileMenu();
                }}
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
                  textShadow: '0 0 10px rgba(0, 191, 255, 0.5)',
                  cursor: 'pointer',
                  width: '100%'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(0, 191, 255, 0.4)';
                  e.target.style.borderColor = 'rgba(0, 191, 255, 0.6)';
                  e.target.style.color = '#ffffff';
                  e.target.style.transform = 'translateX(5px) scale(1.02)';
                  e.target.style.boxShadow = '0 8px 25px rgba(0, 191, 255, 0.3)';
                  e.target.style.textShadow = '0 0 15px rgba(0, 191, 255, 0.8)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(0, 191, 255, 0.2)';
                  e.target.style.borderColor = 'rgba(0, 191, 255, 0.3)';
                  e.target.style.color = '#ffffff';
                  e.target.style.transform = 'translateX(0) scale(1)';
                  e.target.style.boxShadow = 'none';
                  e.target.style.textShadow = '0 0 10px rgba(0, 191, 255, 0.5)';
                }}>
                <span>🔐 Iniciar Sesión</span>
                <span style={{color: 'rgba(0, 191, 255, 0.8)', fontSize: '20px'}}>🔑</span>
              </button>
            )} */}
          </div>


          {/* Contact Section */}
          <div style={{
            borderTop: '2px solid rgba(0, 191, 255, 0.3)',
            paddingTop: '25px',
            marginTop: '20px'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px'
            }}>
              <button onClick={handleEmailClick} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(52, 152, 219, 0.15)',
                border: '2px solid rgba(52, 152, 219, 0.35)',
                borderRadius: '20px',
                padding: '20px 30px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 0 12px rgba(52, 152, 219, 0.25)',
                color: '#ffffff',
                fontSize: '16px',
                fontWeight: '500',
                fontFamily: "'Orbitron', monospace",
                gap: '10px'
              }} onMouseEnter={(e) => {
                e.target.style.background = 'rgba(52, 152, 219, 0.35)';
                e.target.style.borderColor = 'rgba(41, 128, 185, 0.6)';
                e.target.style.transform = 'translateY(-3px) scale(1.05)';
                e.target.style.boxShadow = '0 8px 25px rgba(52, 152, 219, 0.4)';
              }} onMouseLeave={(e) => {
                e.target.style.background = 'rgba(52, 152, 219, 0.15)';
                e.target.style.borderColor = 'rgba(52, 152, 219, 0.35)';
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 0 12px rgba(52, 152, 219, 0.25)';
              }}>
                <svg style={{
                  width: '20px',
                  height: '20px',
                  color: '#ffffff'
                }} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>Contactar</span>
              </button>
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
