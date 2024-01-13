import React   from 'react';
import { Link } from 'react-router-dom';


const NavLinks = (props) => {
    return (
        <ul className="nav-list">
        <li className="nav-list-item" >
            <Link to="/about" className="nav-link">Acerca de</Link>
        </li>
        <li className="nav-list-item" >
            <Link to="/" className="nav-link">Proyectos</Link>
        </li>
        <li className="nav-list-item" >
            <Link to="/" className="nav-link">Blog</Link>
        </li>
        </ul>
     );
}

export default NavLinks;