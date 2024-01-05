import React from 'react';
import './ContentApp.css';
import { Navigate } from "react-router-dom";
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import profile from '../../img/profile.jpeg';
import card from '../../img/card.png';
import presentacion from '../../img/presentacion_mr360.jpeg';

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


                <div id="recent-projects" className="recent-projects">

                    <h1>Proyectos Recientes</h1>
                    <div className='flex-container'>
                        <div className="grid-container-projects">
                            <img src={presentacion} alt="Image description" className="grid-container-projects" />
              
                            <div className="container-projects-description">
                                <h1>Microrred360</h1>
                                <p>La aplicación "Microrred 360" posibilita la estimación del potencial energético fotovoltaico de una microrred al relacionar datos técnicos y económicos en un punto geográfico específico. Este innovador proyecto fue desarrollado en conjunto con el equipo de trabajo de GERS SAS Colombia, siendo el fruto del Premio a la Innovación en Colombia Inteligente.</p>
                                <a href="https://example.com">Leer más</a>
                            </div>

                        </div>

                    </div>
                </div>





                <div id="recent-blog" className="recent-blog">
                    <div className='flex-container'>

                        <div className="recent-blog">
                            <h1 >Últimas
                                Publicaciones</h1>
                            <div className="iframe-grid">
                                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7021745314453684224" height="466" width="520" frameborder="0" allowfullscreen="" title="Publicación integrada"></iframe>

                                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7037697073554554880" height="466" width="520" frameborder="0" allowfullscreen="" title="Publicación integrada"></iframe>
                            </div>


                        </div>

                    </div>

                </div>











            </div>
            <Footer />
        </>
    )
}

export default ContentApp