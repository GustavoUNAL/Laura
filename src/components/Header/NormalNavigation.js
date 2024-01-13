import NavLinks from "./NavLinks";
import React from "react";

import './Navbar.css';

import X from '../../img/x.jpg'
import github from '../../img/github.png'
import instagram from '../../img/instagram.png'
import linkedin from '../../img/linkedin.png'


const NormalNavigation = () => {

    return (
        <div className="normalNavigation">

            <NavLinks></NavLinks>
        </div>

    );
}

export default NormalNavigation;