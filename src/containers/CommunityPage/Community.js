import React, { useState } from 'react';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import './Community.css';

function Community() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: hook up to backend/auth later
    // eslint-disable-next-line no-alert
    alert(`Usuario: ${username}`);
  };

  return (
    <>
      <Navbar />
      <div className="community-page">
        <div className="login-card">
          <div className="login-header">
            <div className="login-avatar-wrap">
              <img
                className="login-avatar"
                src={`data:image/svg+xml;utf8,${encodeURIComponent(`<?xml version='1.0' encoding='UTF-8'?>
<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'>
  <defs>
    <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
      <stop offset='0%' stop-color='#0b1414'/>
      <stop offset='100%' stop-color='#0f1f1f'/>
    </linearGradient>
  </defs>
  <circle cx='80' cy='80' r='78' fill='url(#g)' stroke='rgba(78,205,196,0.35)' stroke-width='2'/>
  <circle cx='80' cy='62' r='26' fill='rgba(255,255,255,0.85)'/>
  <path d='M30 130 C45 108 62 98 80 98 C98 98 115 108 130 130 Z' fill='rgba(255,255,255,0.85)'/>
  <circle cx='80' cy='80' r='78' fill='none' stroke='rgba(78,205,196,0.25)' stroke-width='2' stroke-dasharray='6 6'/>
  <circle cx='128' cy='32' r='6' fill='rgba(78,205,196,0.6)'/>
  <circle cx='24' cy='120' r='4' fill='rgba(69,183,209,0.6)'/>
  <circle cx='136' cy='112' r='3' fill='rgba(69,183,209,0.6)'/>
</svg>`)}" alt="Avatar" />
            </div>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="username">Usuario</label>
              <input
                id="username"
                type="text"
                placeholder="tu_usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="password">Contraseña</label>
              <div className="password-wrapper">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                >
                  {showPassword ? 'Ocultar' : 'Mostrar'}
                </button>
              </div>
            </div>

            <button className="submit-btn" type="submit">Entrar</button>

            <div className="form-footer">
              <a href="#" onClick={(e) => e.preventDefault()}>¿Olvidaste tu contraseña?</a>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Community;


