import React from 'react';
import './ContentApp.css';
import { Navigate } from "react-router-dom";
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import profile from '../../img/profile.jpeg';
import card from '../../img/card.png';

function ContentApp() {

    const [goToLogin, setGoToLogin] = React.useState(false);


    if (goToLogin) {
        return <Navigate to="/Login"></Navigate>;
    }

    return (
        <>
            <Navbar />
            <div className="container">


                <div id="about" className="about">
                    <div className="flex-container">
                        <div className='img_profile'>
                            <img src={profile} className="profile-image" alt="Profile"></img>
                        </div>
                    </div>
                    <div className="flex-container">
                        <div className="about_class" >

                            <h1 className="title">GUSTAVO <strong>ARTE</strong></h1>

                            <div className="titular">
                                <p>Sistemas energéticos | Ciencia de datos | Desarrollo de software</p>
                            </div>

                        </div>
                    </div>
                </div>





                <div id="recent-blog" className="recent-blog">
                    <div className='flex-container'>

                        <div className="recent-blog">
                            <h1 >Blog reciente</h1>

                            <div className="description">
                                <img src={card} width="450" height="250" alt="vg"></img>

                            </div>
                        </div>
                    </div>

                </div>





                <div id="recent-projects" className="recent-projects">
                    <div className='flex-container'>
                        <div className="recent-projects"><h1>Proyectos recientes</h1>

                            {/* <button className="btn" onClick={() => { setGoToLogin(true) }}>CALCULA TU MICRORRED</button> */}
                            <img src={card} width="450" height="250" alt="vg"></img>
                        </div>

                    </div>
                </div>




            </div>
            <Footer />
        </>
    )
}

export default ContentApp