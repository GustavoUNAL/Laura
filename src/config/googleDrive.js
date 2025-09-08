// Configuración para integración con Google Drive
export const googleDriveConfig = {
    // ID de la carpeta de Google Drive
    folderId: '1w15iM4-hL5LzCN68UzgA9vO2awf0uXy8',
    
    // ID del documento de Google Docs
    documentId: '1vQnjfqr56yD5Kfc1lRAMj_VROvqVqPGayIdoczUARkg',
    
    // Configuración de la API
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY || '',
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID || '',
    
    // URLs de la API
    apiUrls: {
        drive: 'https://www.googleapis.com/drive/v3',
        docs: 'https://docs.googleapis.com/v1',
        sheets: 'https://sheets.googleapis.com/v4'
    },
    
    // Configuración de archivos
    fileTypes: {
        documents: ['application/vnd.google-apps.document'],
        spreadsheets: ['application/vnd.google-apps.spreadsheet'],
        presentations: ['application/vnd.google-apps.presentation'],
        pdfs: ['application/pdf'],
        images: ['image/jpeg', 'image/png', 'image/gif', 'image/webp']
    },
    
    // Configuración de permisos
    permissions: {
        read: 'reader',
        write: 'writer',
        admin: 'owner'
    }
};

// Funciones de utilidad para Google Drive
export const googleDriveUtils = {
    // Construir URL de carpeta
    getFolderUrl: (folderId = googleDriveConfig.folderId) => {
        return `https://drive.google.com/drive/folders/${folderId}`;
    },
    
    // Construir URL de documento
    getDocumentUrl: (documentId = googleDriveConfig.documentId) => {
        return `https://docs.google.com/document/d/${documentId}/edit`;
    },
    
    // Construir URL de vista previa
    getPreviewUrl: (fileId) => {
        return `https://drive.google.com/file/d/${fileId}/preview`;
    },
    
    // Construir URL de descarga
    getDownloadUrl: (fileId) => {
        return `https://drive.google.com/uc?export=download&id=${fileId}`;
    },
    
    // Construir URL de edición
    getEditUrl: (fileId) => {
        return `https://docs.google.com/document/d/${fileId}/edit`;
    }
};

// Configuración de temas para el proyecto
export const themeConfig = {
    colors: {
        primary: '#3498db',
        secondary: '#2980b9',
        success: '#4CAF50',
        warning: '#FF9800',
        error: '#f44336',
        info: '#2196F3',
        light: '#f8fafc',
        dark: '#1a202c'
    },
    
    gradients: {
        primary: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)',
        success: 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)',
        warning: 'linear-gradient(135deg, #FF9800 0%, #f57c00 100%)',
        error: 'linear-gradient(135deg, #f44336 0%, #d32f2f 100%)'
    },
    
    shadows: {
        small: '0 2px 4px rgba(0,0,0,0.1)',
        medium: '0 4px 8px rgba(0,0,0,0.12)',
        large: '0 8px 16px rgba(0,0,0,0.15)',
        xlarge: '0 16px 32px rgba(0,0,0,0.2)'
    },
    
    borderRadius: {
        small: '8px',
        medium: '12px',
        large: '16px',
        xlarge: '24px'
    }
};

export default googleDriveConfig;
