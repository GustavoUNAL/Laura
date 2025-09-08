// Google Meet Configuration
export const GOOGLE_MEET_CONFIG = {
    // Meeting ID for the English class
    MEETING_ID: 'bqu-dieh-oor',
    
    // Google Meet base URL
    BASE_URL: 'https://meet.google.com',
    
    // Embedded parameters for iframe
    EMBED_PARAMS: {
        authuser: 0,
        hs: 179,
        pli: 1,
        no_redirect: 1,
        embedded: true
    },
    
    // API endpoints (if needed for future integration)
    API_ENDPOINTS: {
        CREATE_MEETING: 'https://meet.google.com/new',
        JOIN_MEETING: 'https://meet.google.com',
        MEETING_INFO: 'https://meet.google.com/_/meet/api'
    },
    
    // Permissions for iframe
    IFRAME_PERMISSIONS: [
        'camera',
        'microphone', 
        'display-capture',
        'fullscreen',
        'autoplay'
    ],
    
    // Meeting settings
    MEETING_SETTINGS: {
        autoJoin: false,
        showControls: true,
        allowFullscreen: true,
        enableChat: true,
        enableScreenShare: true
    }
};

// Helper function to build Google Meet URL
export const buildGoogleMeetUrl = (meetingId = GOOGLE_MEET_CONFIG.MEETING_ID) => {
    const params = new URLSearchParams(GOOGLE_MEET_CONFIG.EMBED_PARAMS);
    return `${GOOGLE_MEET_CONFIG.BASE_URL}/${meetingId}?${params.toString()}`;
};

// Helper function to build Google Meet join URL (opens in new tab)
export const buildGoogleMeetJoinUrl = (meetingId = GOOGLE_MEET_CONFIG.MEETING_ID) => {
    return `${GOOGLE_MEET_CONFIG.BASE_URL}/${meetingId}`;
};

export default GOOGLE_MEET_CONFIG;
