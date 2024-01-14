import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import MobileNavigation from './MobileNavigation';
import NormalNavigation from './NormalNavigation';
import profile from '../../img/profile2.jpeg';

function Navbar() {


  return (
    <nav className="main-navigation">
      <div className="navbar-header animated fadeInUp">
        <Link to="/" className="navbar-logo">
          <img src={profile} alt="description" width="40" height="40" className="header-image" />
        </Link>
        <Link to="/" className="name-header">G. ARTE</Link>
      </div>
      <NormalNavigation />
      <MobileNavigation />
      

    </nav>


  )
}

export default Navbar