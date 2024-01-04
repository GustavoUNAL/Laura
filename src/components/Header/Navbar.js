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
        <a className="navbar-brand" href="/#"><Link to="/" className="navbar-logo">
          <img src={profile} alt="description" width="40" height="40" className="header-image" />

        </Link>
        </a>

      </div>
      <div className='name-header'>

        <span >G. ARTE</span>
      </div>
      <NormalNavigation />
      <MobileNavigation />
     
    </nav>


  )
}

export default Navbar