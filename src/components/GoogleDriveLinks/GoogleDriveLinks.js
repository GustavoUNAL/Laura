import React from 'react';
import './GoogleDriveLinks.css';
import { googleDriveUtils } from '../../config/googleDrive';

const GoogleDriveLinks = () => {
    return (
        <div className="google-drive-links">
            <div className="drive-header">
                <h2>📁 Recursos en Google Drive</h2>
                <p>Accede a todos los materiales del curso organizados en Google Drive</p>
            </div>
            
            <div className="drive-links-grid">
                <div className="drive-link-card">
                    <div className="drive-icon">📚</div>
                    <h3>Documentos del Curso</h3>
                    <p>Materiales, guías y recursos de aprendizaje</p>
                    <a 
                        href={googleDriveUtils.getFolderUrl()} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="drive-link-btn"
                    >
                        Abrir Carpeta
                    </a>
                </div>
                
                <div className="drive-link-card">
                    <div className="drive-icon">📝</div>
                    <h3>Documento Principal</h3>
                    <p>Información detallada del curso de inglés</p>
                    <a 
                        href={googleDriveUtils.getDocumentUrl()} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="drive-link-btn"
                    >
                        Ver Documento
                    </a>
                </div>
                
                <div className="drive-link-card">
                    <div className="drive-icon">📊</div>
                    <h3>Progreso del Estudiante</h3>
                    <p>Seguimiento de avances y calificaciones</p>
                    <a 
                        href={googleDriveUtils.getFolderUrl()} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="drive-link-btn"
                    >
                        Ver Progreso
                    </a>
                </div>
                
                <div className="drive-link-card">
                    <div className="drive-icon">🎯</div>
                    <h3>Ejercicios y Tareas</h3>
                    <p>Actividades prácticas y ejercicios</p>
                    <a 
                        href={googleDriveUtils.getFolderUrl()} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="drive-link-btn"
                    >
                        Ver Ejercicios
                    </a>
                </div>
            </div>
            
            <div className="drive-footer">
                <p>💡 <strong>Tip:</strong> Todos los archivos están organizados por lecciones y temas para facilitar tu aprendizaje.</p>
            </div>
        </div>
    );
};

export default GoogleDriveLinks;
