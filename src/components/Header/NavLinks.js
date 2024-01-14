import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import X from '../../img/x.jpg'
import github from '../../img/github.png'
import instagram from '../../img/instagram.png'
import linkedin from '../../img/linkedin.png'
import './Navbar.css';

const NavLinks = ({ setOpen }) => {
    
    const handleClick = () => {
        const element = document.getElementById('recent-projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setOpen(false);
    };
    const handleClick_blog = () => {
        const element = document.getElementById('recent-blog');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setOpen(false);
    };
    
    return (
        <>
            <ul className="nav-list">
                <li className="nav-list-item" >
                    <Link to="/about" className="nav-link">Acerca de</Link>
                </li>
                <li className="nav-list-item" >
                <Link to="/#recent-projects" className="nav-link" onClick={handleClick}>Proyectos</Link>
                </li>
                <li className="nav-list-item" >
                    <Link to="/#recent-blog" className="nav-link" onClick={handleClick_blog}>Blog</Link>
                </li>

                <li className="social-header" >
                <div><a href={"https://www.linkedin.com/in/gustavo-arteaga/"} rel="noreferrer" target="_blank"> <img src={linkedin} alt="" className="icons-header" width="20" height="20"></img></a></div>
                <div> <a href={"https://www.instagram.com/gustavo.art3/"} rel="noreferrer" target="_blank" ><img src={instagram} alt="" className="icons-header" width="27" height="27"></img></a></div>
                <div><a href={"https://github.com/GustavoUNAL"} rel="noreferrer" target="_blank"> <img src={github} alt="" className="icons-header" width="20" height="20"></img></a></div>
                <div><a href={"https://twitter.com/gustavo_arte_"} rel="noreferrer" target="_blank"> <img src={X} alt="" className="icons-header" width="30" height="30"></img></a></div>
                </li>


            </ul>
        </>
    );
}

export default NavLinks;