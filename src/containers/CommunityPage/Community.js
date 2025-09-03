import React, { useState } from 'react';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import './Community.css';
import avatarImg from '../../img/profile3.jpeg';

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
            <div className="login-badge">Comunidad</div>
            <div className="login-avatar-wrap">
              <img className="login-avatar" src={avatarImg} alt="Avatar" />
            </div>
            <h1>Iniciar sesión</h1>
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


