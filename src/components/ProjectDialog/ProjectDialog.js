import React from 'react';
import './ProjectDialog.css';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

function ProjectDialog({ open, project, onClose, onWhatsAppContact }) {
    if (!project) return null;

    return (
        <Dialog 
            open={open} 
            onClose={onClose}
            className="project-dialog"
            maxWidth="md"
            fullWidth
        >
            <DialogTitle className="dialog-title">
                <div className="dialog-header">
                    <h2>{project.title}</h2>
                    <IconButton
                        onClick={onClose}
                        className="close-button"
                        size="large"
                    >
                        <CloseIcon />
                    </IconButton>
                </div>
                <div className="project-category-tag">{project.category}</div>
            </DialogTitle>
            
            <DialogContent className="dialog-content">
                <div className="project-details">
                    <div className="project-image-large">
                        <img src={project.image} alt={project.title} />
                    </div>
                    <div className="project-info">
                        <h3>Descripción</h3>
                        <p>{project.description}</p>
                        
                        <h3>Tecnologías utilizadas</h3>
                        <div className="technologies-list">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </DialogContent>
            
            <DialogActions className="dialog-actions">
                <Button 
                    onClick={onClose}
                    className="close-action-btn"
                    variant="outlined"
                >
                    Cerrar
                </Button>
                <Button 
                    onClick={() => onWhatsAppContact(project.title)}
                    className="whatsapp-action-btn"
                    variant="contained"
                >
                    Contactar por WhatsApp
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default ProjectDialog; 