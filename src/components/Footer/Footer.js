import React from 'react';
// import './Footer.css';
import '../Footer/Footer.css';
import X from '../../img/x.jpg'
import github from '../../img/github.png'
import instagram from '../../img/instagram.png'
import linkedin from '../../img/linkedin.png'

import NormalNavigation from '../Header/NormalNavigation';





function Footer() {


  return (

    <footer className="footer">
      <div className="flex-container-footer">
        <div className="social-footer">

          <div className="social-footer">
            <div><a href={"https://www.linkedin.com/in/gustavo-arteaga/"} rel="noreferrer" target="_blank"> <img src={linkedin} alt="" className="icons-footer" width="40" height="40"></img></a></div>
            <div> <a href={"https://www.linkedin.com/in/gustavo-arteaga/"} rel="noreferrer" target="_blank" ><img src={instagram} alt="" className="icons-footer" width="47" height="47"></img></a></div>
            <div><a href={"https://www.linkedin.com/in/gustavo-arteaga/"} rel="noreferrer" target="_blank"> <img src={github} alt="" className="icons-footer" width="40" height="40"></img></a></div>
            <div><a href={"https://www.linkedin.com/in/gustavo-arteaga/"} rel="noreferrer" target="_blank"> <img src={X} alt="" className="icons-footer" width="45" height="45"></img></a></div>
          </div>
        </div>
        <p className="copyright">© Gustavo Arte, Colombia.</p>
      </div>
      {/* <NormalNavigation /> */}
    </footer>
  )
}

export default Footer