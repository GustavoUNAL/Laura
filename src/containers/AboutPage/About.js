// AboutPage/About.js
import React from 'react';
import { Navigate } from "react-router-dom";
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import './About.css';

function About() {
    return (
        <>
            <Navbar />
            <div className="container">

                <div id="about-page" className="about-page">
                    <div className="flex-container">
                        <div className='img_profile'>
                            {/* <img src={profile} className="profile-image" alt="Profile"></img> */}
                        </div>
                    </div>
                    <div className="flex-container">
                        <div className="about-class" >
                            <h1>GUSTAVO ARTEAGA</h1>
                            <div className="titular">
                                <p>Innovador y apasionado con un propósito claro: impactar el futuro a través de las decisiones tecnológicas del presente. Mi misión es generar un impacto significativo en el mundo, centrándome en la optimización de sistemas de energía. Creo firmemente que los datos son el activo más valioso en la era actual, y estoy comprometido a desbloquear su potencial para transformar nuestro entorno.

                                    Enfoco mis esfuerzos en convertir los datos de los sistemas deenergía en una herramienta poderosa para generar valor y mejorarla eficiencia de los sistemas, contribuyendo así de manerasignificativa a un impacto positivo.</p>
                            </div>
                            <div className="frase">
                                <p>“Cada bit de información se convierte en una oportunidad para construir un futuro más sostenible.”</p>
                            </div>
                            <h2>ACADEMIA</h2>
                            <h3>ESTUDIANTE MAESTRÍA EN SISTEMAS ENERGÉTICOS | UNIVERSIDAD NACIONAL | COLOMBIA</h3>
                            <div className="titular">
                                <p>Como estudiante de maestría, mi proyecto de investigación se centra en el desarrollo de un algoritmo de protecciones eléctricas de sobrecorriente adaptativas en microrredes eléctricas. Este enfoque se basa en el uso de métodos y estrategias que involucran algoritmos de optimización y ciencia de datos con el fin de lograr dicho propósito. Debido a la integración de fuentes no convencionales de energía en el sistema de potencia y a la capacidad de las microrredes para operar de manera aislada o conectada al sistema de potencia principal, se vuelven necesarias estas estrategias para garantizar la seguridad y confiabilidad del sistema.</p>
                            </div>
                            <h3>INGENIERO ELECTRICISTA | UNIVERSIDAD DEL VALLE | COLOMBIA</h3>
                            <div className="titular">
                                <p>

                                    Como resultado de mis estudios de pregrado, desarrollé la aplicación EFLAB para determinar las regiones eficientes en transformadores de potencia. Esta aplicación utiliza perfiles de carga capturados de los sistemas SCADA o medidores de los usuarios, los cuales son cargados a una base de datos no relacional en la nube. Posteriormente, estos datos son procesados mediante algoritmos de ciencia de datos implementados con Python, los cuales han sido validados y respaldados por la norma IEC 60076-20.

                                    Las regiones identificadas por el software proporcionan apoyo al administrador del transformador, permitiéndole tomar decisiones estratégicas basadas en datos. Esto asegura que el transformador opere de manera constante en su región más óptima, contribuyendo así a la eficiencia del sistema.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;