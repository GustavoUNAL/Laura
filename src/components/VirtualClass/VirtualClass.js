import React, { useState, useEffect } from 'react';
import GoogleMeetEmbed from './GoogleMeetEmbed';
import './VirtualClass.css';

const VirtualClass = ({ classData, onClose }) => {
    const [isVideoExpanded, setIsVideoExpanded] = useState(true);

    useEffect(() => {
        // Add virtual class active class to body
        document.body.classList.add('virtual-class-active');

        // Add escape key listener
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        
        // Cleanup
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.classList.remove('virtual-class-active');
        };
    }, [onClose]);

    return (
        <div className="virtual-class-overlay">
            <div className="virtual-class-container">
                {/* Floating Close Button */}
                <button className="floating-close-btn" onClick={onClose} title="Press ESC to exit">
                    ✕
                </button>
                
                {/* Floating Toggle Button */}
                <button className="floating-toggle-btn" onClick={() => setIsVideoExpanded(!isVideoExpanded)} title="Toggle Video Size">
                    {isVideoExpanded ? '📉' : '📈'}
                </button>
                
                {/* Main Content Area */}
                <div className={`virtual-class-main ${isVideoExpanded ? 'video-fullscreen' : ''}`}>
                    {/* Google Meet Section */}
                    <div className={`video-section ${isVideoExpanded ? 'expanded' : ''}`}>
                        <GoogleMeetEmbed 
                            meetingId="bqu-dieh-oor"
                            onClose={onClose}
                            isFullscreen={isVideoExpanded}
                        />
                    </div>

                    {/* Google Docs Section */}
                    <div className="notes-section">
                        <div className="google-docs-container">
                            <iframe
                                src="https://docs.google.com/document/d/1vQnjfqr56yD5Kfc1lRAMj_VROvqVqPGayIdoczUARkg/edit?usp=sharing&embedded=true"
                                className="google-docs-iframe"
                                title="Class Document"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VirtualClass;
