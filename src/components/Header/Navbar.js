import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import MobileNavigation from './MobileNavigation';
import NormalNavigation from './NormalNavigation';

function Navbar() {
  return (
    <nav className="main-navigation">
      <Link to="/" className="name-header">G. ARTEAGA</Link>
      <NormalNavigation />
      <MobileNavigation />
    </nav>
  )
}

export default Navbar