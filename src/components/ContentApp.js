import React from 'react';
import './ContentApp.css';
import { Navigate } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import profile from '../img/profile2.jpeg';

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
                            {/* <div className="name"> <h1> GUSTAVO ARTEAGA</h1>
                            </div> */}
                            <h1> GUSTAVO ARTE</h1>
                            <div className="name">
                                <p>Sistemas energéticos | Ciencia de datos | Desarrollo de software</p>
                                {/* <button onClick={() => { setGoToLogin(true) }} className="btn">CALCULA TU MICRORRED</button> */}
                            </div>
                            <div className="name"> 
                                <p>Innovador y apasionado con un propósito claro: impactar el futuro a través de las decisiones tecnológicas del presente. Mi misión es generar un impacto significativo en el mundo, centrándome en la optimización de sistemas de energía. Creo firmemente que los datos son el activo más valioso en la era actual, y estoy comprometido a desbloquear su potencial para transformar nuestro entorno.</p>

                                <p> Enfoco mis esfuerzos en convertir los datos de los sistemas de energía en una herramienta poderosa para generar valor y mejorar la eficiencia de los sistemas, contribuyendo así de manera significativa a un impacto positivo.</p>

                                <p>"Cada bit de información se convierte en una oportunidad para construir un futuro más sostenible y eficiente".</p>
                                {/* <button onClick={() => { setGoToLogin(true) }} className="btn">CALCULA TU MICRORRED</button> */}
                            </div>
                        </div>
                    </div>
                </div>
              




























                <div id="como_usar" className="como_usar">
                    <div className="como_usar_imagen">
                        {/* <img src="https://mr360bucket.s3.amazonaws.com/formulario.png" className="imagenes " alt="" width="550" height="300"></img> */}
                    </div>
                    <div className="texto_como_usar"> <h1 >&iquest;C&oacute;mo usar?</h1>
                        <p><span >Para conocer los resultados que entrega la herramienta Microrred 360, es necesario:</span></p>
                        <p><span > 1. Seleccionar en el mapa interactivo el punto geogr&aacute;fico para el cual se desea ejecutar el an&aacute;lisis.</span></p>
                        <p><span > 2. Seleccionar el estrato socioecon&oacute;mico del usuario final. </span></p>
                        <p><span >3. Seleccionar el proveedor del servicio de suministro de energ&iacute;a.</span></p>
                        <p><span > 4. Indicar la fecha y hora del año en la cual desea garantizar un suministro ininterrumpido de energ&iacute;a.</span><span ></span></p>
                        <p><span > A partir de estos datos la herramienta calcula la alternativa de microrred m&aacute;s adecuada para el usuario.</span><span ></span></p>
                        <div className="boton_center">
                            <button className="btn" onClick={() => { setGoToLogin(true) }}  >CALCULA TU MICRORRED</button>
                        </div>
                    </div>
                </div>
                <div id="que_obtiene" className="que_obtiene">
                    <div className="boton_center"><h1>¿Qué se obtiene?</h1>
                        Microrred 360 está en la capacidad de
                        suministrar los tamaños (potencia) y los tipos
                        de activos que integran las microrredes
                        diseñadas con la herramienta. Asimismo, los
                        usuarios podrán obtener los costos de los
                        activos y el ahorro previsto al implementar la
                        alternativa de microrred, entre otros
                        resultados técnicos, económicos y
                        ambientales.<br></br><br></br><br></br>
                        <button className="btn" onClick={() => { setGoToLogin(true) }}>CALCULA TU MICRORRED</button>
                    </div>
                    <div>
                        <img src="https://mr360bucket.s3.amazonaws.com/mr360_images/img3.png" className="imagenes " width="550" height="350" alt="vg"></img>
                    </div>
                </div>
                {/* <div id="patrocinadores" className="patrocinadores">
        <h1 className="texto_patrocinadores">Patrocinadores</h1>
        <div className="patrocinadores2">
            <div className="grid_patrocinadores">
            <div>
             <img src="https://mr360bucket.s3.amazonaws.com/mr360_images/logo-CIDET.png" alt=""  width="280" height="70"></img>
             </div>
            <div> <img src="https://mr360bucket.s3.amazonaws.com/mr360_images/logo_gers.png" alt="" width="280" height="80"></img>
            </div>
            <div> <img src="https://mr360bucket.s3.amazonaws.com/mr360_images/logo_colombia_inteligente.png" alt="" width="300" height="100"></img>
            </div>
            </div>
        </div>
    </div> */}
                <div id="patrocinadores" className="patrocinadores">
                    <h1 className="texto_patrocinadores">Noticias</h1>
                    <div className="patrocinadores2">
                        <div className="grid_patrocinadores">
                            {/* <div>
                                <img className="convocatoria" src="https://mr360bucket.s3.amazonaws.com/convocatoria.png" alt=""  ></img>
                            </div>
                            <div>
                                <img className="ganadores" src="https://mr360bucket.s3.amazonaws.com/mr360_images/Ganadores.jpg" alt="" ></img>
                            </div> */}
                        </div>
                    </div>
                </div>


            </div>
            <Footer />
        </>
    )
}

export default ContentApp