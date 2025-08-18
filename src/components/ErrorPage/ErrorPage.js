import React from 'react';
import './ErrorPage.css';
import { Link } from 'react-router-dom';

function ErrorPage() {
    return (
        <div className="error-page">
            <div className="error-container">
                <h1 className="error-code">404</h1>
                <h2 className="error-message">Página no encontrada</h2>
                <p className="error-description">
                    Lo sentimos, la página que buscas no existe o ha sido movida. 
                    Puedes regresar al inicio o navegar por nuestro sitio.
                </p>
                <Link to="/" className="back-button">
                    Volver al Inicio
                </Link>
            </div>
        </div>
    );
}

export default ErrorPage;