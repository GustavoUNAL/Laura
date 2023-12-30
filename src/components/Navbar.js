import React from 'react';
import { Link} from 'react-router-dom';
import './Navbar.css';
import MobileNavigation from './MobileNavigation';
import NormalNavigation from './NormalNavigation';
import profile from '../img/profile.png';


function Navbar() {


  return (
    <nav className="main-navigation">
    <div className="navbar-header animated fadeInUp">
        <a className="navbar-brand" href="/#"><Link to="/" className="navbar-logo">
                    <img src={profile} alt="description "  width="40" height="40"/>
                    </Link>
        </a>
        
      </div>
      {/* <div className="navbar-header animated fadeInUp">
        <a href="#que_obtiene" className="nav-link">Gustavo Arteaga</a>

      </div> */}
    <NormalNavigation />
    <MobileNavigation />
</nav>


  )
}

export default Navbar