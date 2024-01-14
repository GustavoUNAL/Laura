import React, { useEffect } from 'react';
import './ContentApp.css';
import { Navigate } from "react-router-dom";
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import profile from '../../img/profile.jpeg';
import presentacion from '../../img/presentacion_mr360.jpeg';



import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';




function ContentApp() {

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
                            <div id="recent-projects" className="titular">
                                <p>Sistemas energéticos | Ciencia de datos | Desarrollo de software</p>
                            </div>

                        </div>
                    </div>
                </div>


                <div  className="recent-projects">

                    <h1  >Proyectos Recientes</h1>
                    <div className='flex-container'>
                        <div className="grid-container-projects">
                            <img src={presentacion} alt="Image description" className="grid-container-projects" />

                            <div className="container-projects-description">
                                <h2>Microrred360</h2>
                                <p>La aplicación "Microrred 360" posibilita la estimación del potencial energético fotovoltaico de una microrred al relacionar datos técnicos y económicos en un punto geográfico específico. Este innovador proyecto fue desarrollado en conjunto con el equipo de trabajo de GERS SAS Colombia, siendo el fruto del Premio a la Innovación 2023 de Colombia Inteligente.</p>
                                <a href="https://mr360.gers.com/" target="_blank">Explorar</a>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="recent-blog">
                    <h1 id="recent-blog" >Últimas
                        Publicaciones</h1>
                    <div className='flex-container'>

                        <div className="grid-container-publications">
                            <a href="https://www.linkedin.com/pulse/c%C3%B3mo-se-est%C3%A1-abordando-la-transici%C3%B3n-energ%C3%A9tica-en-colombia-arteaga/?trk=public_post_embed_feed-article-content" target="_blank" rel="noopener noreferrer">
                                <Card className="my-card">
                                    <CardMedia
                                        className="my-card-media"
                                        image="https://media.licdn.com/dms/image/D4E12AQHc1XmLwle8lw/article-cover_image-shrink_720_1280/0/1674109852789?e=1709769600&v=beta&t=J2L_68eOMCViO0UMbPYg4hr6c8xDm5HP91CepwnFYuE"
                                        title="green iguana"
                                    />
                                    <CardContent className="my-card-content">
                                        <h2>¿Cómo se está abordando la transición energética en Colombia?</h2>
                                        <p>Colombia le apuesta a tener iniciativas amigables con el medio ambiente alineado a las estrategias para lograr que en el 2050 se alcance la carbono-neutralidad y se logre una transición energética justa.</p>
                                    </CardContent>
                                </Card>
                            </a>



                            <a href="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7021745314453684224" target="_blank" rel="noopener noreferrer">
                                <Card className="my-card">
                                    <CardMedia
                                        className="my-card-media"
                                        image="https://media.licdn.com/dms/image/D4E12AQF_f7zd_2VAPg/article-cover_image-shrink_720_1280/0/1677916148652?e=1709769600&v=beta&t=PZ80RK3cCDagD_q2iSg7uTKokyP5VjJoxBsIwtTgJfs"
                                        title="green iguana"
                                    />
                                    <CardContent className="my-card-content">
                                        <h2>Common Information Model (CIM) - IEC 61970</h2>
                                        <p>El uso de un modelo de información común CIM permite a los operadores de sistemas de potencia trabajar con información de difernetes fuentes mejorando la eficiencia, fiabilidad y seguridad del sistema.</p>
                                    </CardContent>
                                </Card>
                            </a>

                        </div>

                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContentApp