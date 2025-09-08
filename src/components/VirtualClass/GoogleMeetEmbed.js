import React, { useState, useEffect } from 'react';
import { buildGoogleMeetUrl, GOOGLE_MEET_CONFIG } from '../../config/googleMeetConfig';
import './GoogleMeetEmbed.css';

const GoogleMeetEmbed = ({ meetingId, onClose, isFullscreen = false }) => {
    const [isConnected, setIsConnected] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [isVideoOn, setIsVideoOn] = useState(true);
    const [isScreenSharing, setIsScreenSharing] = useState(false);

    useEffect(() => {
        // Add event listeners for iframe communication
        const handleMessage = (event) => {
            if (event.origin !== 'https://meet.google.com') return;
            
            switch (event.data.type) {
                case 'meet-connected':
                    setIsConnected(true);
                    break;
                case 'meet-disconnected':
                    setIsConnected(false);
                    break;
                case 'meet-muted':
                    setIsMuted(true);
                    break;
                case 'meet-unmuted':
                    setIsMuted(false);
                    break;
                case 'meet-video-off':
                    setIsVideoOn(false);
                    break;
                case 'meet-video-on':
                    setIsVideoOn(true);
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, []);

    const toggleMute = () => {
        const iframe = document.getElementById('google-meet-iframe');
        if (iframe && iframe.contentWindow) {
            iframe.contentWindow.postMessage({ action: 'toggle-mute' }, 'https://meet.google.com');
        }
    };

    const toggleVideo = () => {
        const iframe = document.getElementById('google-meet-iframe');
        if (iframe && iframe.contentWindow) {
            iframe.contentWindow.postMessage({ action: 'toggle-video' }, 'https://meet.google.com');
        }
    };

    const toggleScreenShare = () => {
        const iframe = document.getElementById('google-meet-iframe');
        if (iframe && iframe.contentWindow) {
            iframe.contentWindow.postMessage({ action: 'toggle-screen-share' }, 'https://meet.google.com');
        }
    };

    const endCall = () => {
        const iframe = document.getElementById('google-meet-iframe');
        if (iframe && iframe.contentWindow) {
            iframe.contentWindow.postMessage({ action: 'end-call' }, 'https://meet.google.com');
        }
        onClose();
    };

    const joinMeeting = () => {
        const iframe = document.getElementById('google-meet-iframe');
        if (iframe && iframe.contentWindow) {
            iframe.contentWindow.postMessage({ action: 'join-meeting' }, 'https://meet.google.com');
        }
    };

    return (
        <div className={`google-meet-embed ${isFullscreen ? 'fullscreen' : ''}`}>
            {/* Floating Controls */}
            <div className="meet-controls">
                <button 
                    className={`control-btn ${isMuted ? 'muted' : ''}`}
                    onClick={toggleMute}
                    title={isMuted ? 'Unmute' : 'Mute'}
                >
                    {isMuted ? '🔇' : '🎤'}
                </button>
                <button 
                    className={`control-btn ${!isVideoOn ? 'video-off' : ''}`}
                    onClick={toggleVideo}
                    title={isVideoOn ? 'Turn off video' : 'Turn on video'}
                >
                    {isVideoOn ? '📹' : '📹'}
                </button>
                <button 
                    className={`control-btn ${isScreenSharing ? 'sharing' : ''}`}
                    onClick={toggleScreenShare}
                    title="Share screen"
                >
                    📺
                </button>
                <button className="control-btn end-call" onClick={endCall} title="End call">
                    📞
                </button>
                <button className="control-btn close-btn" onClick={onClose} title="Close">
                    ✕
                </button>
            </div>

            {/* Connection Status */}
            <div className={`connection-status ${isConnected ? 'connected' : 'disconnected'}`}>
                {isConnected ? '🟢 Connected' : '🔴 Disconnected'}
            </div>

            {/* Google Meet Iframe */}
            <div className="meet-iframe-container">
                <iframe
                    id="google-meet-iframe"
                    src={buildGoogleMeetUrl(meetingId)}
                    className="meet-iframe"
                    title="Google Meet"
                    allow={GOOGLE_MEET_CONFIG.IFRAME_PERMISSIONS.join('; ')}
                    allowFullScreen
                />
            </div>

            {/* Join Button (if not connected) */}
            {!isConnected && (
                <div className="join-overlay">
                    <div className="join-content">
                        <h3>Join Google Meet</h3>
                        <p>Click to join the meeting</p>
                        <button className="join-btn" onClick={joinMeeting}>
                            📹 Join Meeting
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GoogleMeetEmbed;
