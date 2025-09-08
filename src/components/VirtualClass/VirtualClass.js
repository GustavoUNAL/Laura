import React, { useState, useEffect } from 'react';
import './VirtualClass.css';

const VirtualClass = ({ classData, onClose }) => {
    const [isVideoActive, setIsVideoActive] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [isVideoOn, setIsVideoOn] = useState(true);
    const [isScreenSharing, setIsScreenSharing] = useState(false);
    const [notes, setNotes] = useState('');
    const [isNotesExpanded, setIsNotesExpanded] = useState(false);
    const [isVideoExpanded, setIsVideoExpanded] = useState(false);

    useEffect(() => {
        // Load saved notes from localStorage
        const savedNotes = localStorage.getItem(`class_notes_${classData?.id}`);
        if (savedNotes) {
            setNotes(savedNotes);
        }

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
        };
    }, [classData?.id, onClose]);

    const saveNotes = () => {
        localStorage.setItem(`class_notes_${classData?.id}`, notes);
        alert('Notes saved successfully!');
    };

    const toggleVideo = () => {
        setIsVideoOn(!isVideoOn);
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    const toggleScreenShare = () => {
        setIsScreenSharing(!isScreenSharing);
    };

    const openGoogleDocs = () => {
        // Open the specific Google Docs document
        window.open('https://docs.google.com/document/d/1vQnjfqr56yD5Kfc1lRAMj_VROvqVqPGayIdoczUARkg/edit?usp=sharing', '_blank');
    };

    const joinGoogleMeet = () => {
        // Open Google Meet with the specific link
        window.open('https://meet.google.com/bqu-dieh-oor', '_blank');
    };

    const toggleNotesPanel = () => {
        setIsNotesExpanded(!isNotesExpanded);
    };

    const toggleVideoPanel = () => {
        setIsVideoExpanded(!isVideoExpanded);
    };

    return (
        <div className="virtual-class-overlay">
            <div className="virtual-class-container">
                {/* Floating Close Button */}
                <button className="floating-close-btn" onClick={onClose} title="Press ESC to exit">
                    ✕
                </button>
                
                {/* Floating Save Notes Button */}
                <button className="floating-save-btn" onClick={saveNotes} title="Save Notes">
                    💾
                </button>
                
                {/* Main Content Area */}
                <div className="virtual-class-main">
                    {/* Video Section */}
                    <div className={`video-section ${isVideoExpanded ? 'expanded' : ''}`}>
                        <div className="video-container">
                            {isVideoActive ? (
                                <div className="video-placeholder fullscreen-video">
                                    <div className="video-screen">
                                        <div className="video-content">
                                            <div className="teacher-video">
                                                <div className="video-avatar">
                                                    👨‍🏫
                                                </div>
                                                <p>Prof. Laura Chaves</p>
                                                <div className="video-status">
                                                    {isVideoOn ? '📹 Video On' : '📹 Video Off'}
                                                    {isMuted ? ' 🔇 Muted' : ' 🎤 Unmuted'}
                                                </div>
                                            </div>
                                            <div className="student-video">
                                                <div className="video-avatar">
                                                    👨‍🎓
                                                </div>
                                                <p>Gustavo Arteaga</p>
                                                <div className="video-status">
                                                    📹 Video On 🎤 Unmuted
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="video-controls">
                                        <button 
                                            className={`control-btn ${isMuted ? 'muted' : ''}`}
                                            onClick={toggleMute}
                                        >
                                            {isMuted ? '🔇' : '🎤'}
                                        </button>
                                        <button 
                                            className={`control-btn ${!isVideoOn ? 'video-off' : ''}`}
                                            onClick={toggleVideo}
                                        >
                                            {isVideoOn ? '📹' : '📹'}
                                        </button>
                                        <button 
                                            className={`control-btn ${isScreenSharing ? 'sharing' : ''}`}
                                            onClick={toggleScreenShare}
                                        >
                                            📺
                                        </button>
                                        <button className="control-btn end-call">
                                            📞
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="video-placeholder">
                                    <div className="join-video">
                                        <h4>Join Google Meet</h4>
                                        <p>Click to join the video session</p>
                                        <button 
                                            className="btn-primary"
                                            onClick={joinGoogleMeet}
                                        >
                                            📹 Join Google Meet
                                        </button>
                                        <button 
                                            className="btn-secondary"
                                            onClick={() => setIsVideoActive(true)}
                                            style={{marginTop: '0.5rem'}}
                                        >
                                            📺 Preview Mode
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Notes Section */}
                    <div className={`notes-section ${isNotesExpanded ? 'expanded' : ''}`}>
                        <div className="notes-container">
                            <div className="notes-toolbar">
                                <button className="tool-btn" onClick={openGoogleDocs}>
                                    📄 Open in New Tab
                                </button>
                                <button className="tool-btn" onClick={joinGoogleMeet}>
                                    📹 Google Meet
                                </button>
                                <button className="tool-btn">
                                    📊 Share Screen
                                </button>
                            </div>
                            
                            {/* Google Docs iframe */}
                            <div className="google-docs-container">
                                <iframe
                                    src="https://docs.google.com/document/d/1vQnjfqr56yD5Kfc1lRAMj_VROvqVqPGayIdoczUARkg/edit?usp=sharing&embedded=true"
                                    className="google-docs-iframe"
                                    title="Class Document"
                                />
                            </div>
                            
                            {/* Local Notes */}
                            <div className="local-notes-section">
                                <h4>📝 Personal Notes</h4>
                                <textarea
                                    className="notes-textarea"
                                    value={notes}
                                    onChange={(e) => setNotes(e.target.value)}
                                    placeholder="Write your personal notes here..."
                                    rows={4}
                                />
                                <div className="notes-footer">
                                    <span className="char-count">{notes.length} characters</span>
                                    <span className="timezone-info">🕐 America/Bogota</span>
                                    <span className="auto-save">Auto-save enabled</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VirtualClass;
