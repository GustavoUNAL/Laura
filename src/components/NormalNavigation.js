import NavLinks from "./NavLinks";
import React from "react";

import './Navbar.css';

import X from '../img/x.jpg'
import github from '../img/github.png'
import instagram from '../img/instagram.png'
import linkedin from '../img/linkedin.png'


const NormalNavigation = () => {

    return (
        <div className="normalNavigation">

            <NavLinks></NavLinks>
            <div className="social-header">
                <div><a href={"https://www.linkedin.com/in/gustavo-arteaga/"} rel="noreferrer" target="_blank"> <img src={linkedin} alt="" className="icons-header" width="20" height="20"></img></a></div>
                <div> <a href={"https://www.linkedin.com/in/gustavo-arteaga/"} rel="noreferrer" target="_blank" ><img src={instagram} alt="" className="icons-header" width="27" height="27"></img></a></div>
                <div><a href={"https://www.linkedin.com/in/gustavo-arteaga/"} rel="noreferrer" target="_blank"> <img src={github} alt="" className="icons-header" width="20" height="20"></img></a></div>
                <div><a href={"https://www.linkedin.com/in/gustavo-arteaga/"} rel="noreferrer" target="_blank"> <img src={X} alt="" className="icons-header" width="30" height="30"></img></a></div>
            </div>

        </div>

    );
}

export default NormalNavigation;