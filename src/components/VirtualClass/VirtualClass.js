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
    }, [classData?.id]);

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
        // Open Google Docs in a new tab
        window.open('https://docs.google.com/document/create', '_blank');
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
                {/* Header */}
                <div className="virtual-class-header">
                    <div className="class-info">
                        <h2>🎓 {classData?.title || 'Virtual Class'}</h2>
                        <p>📅 {classData?.date} at {classData?.time}</p>
                        <p>👨‍🏫 Prof. Laura Chaves</p>
                    </div>
                    <div className="header-actions">
                        <button className="btn-secondary" onClick={openGoogleDocs}>
                            📄 Open Google Docs
                        </button>
                        <button className="btn-close" onClick={onClose}>
                            ✕ Close Class
                        </button>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="virtual-class-main">
                    {/* Video Section */}
                    <div className={`video-section ${isVideoExpanded ? 'expanded' : ''}`}>
                        <div className="video-header">
                            <h3>📹 Video Call</h3>
                            <button 
                                className="toggle-btn"
                                onClick={toggleVideoPanel}
                            >
                                {isVideoExpanded ? '📉 Minimize' : '📈 Maximize'}
                            </button>
                        </div>
                        <div className="video-container">
                            {isVideoActive ? (
                                <div className="video-placeholder">
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
                                        <h4>Join Video Call</h4>
                                        <p>Click to start the video session</p>
                                        <button 
                                            className="btn-primary"
                                            onClick={() => setIsVideoActive(true)}
                                        >
                                            📹 Join Video Call
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Notes Section */}
                    <div className={`notes-section ${isNotesExpanded ? 'expanded' : ''}`}>
                        <div className="notes-header">
                            <h3>📝 Collaborative Notes</h3>
                            <div className="notes-actions">
                                <button 
                                    className="toggle-btn"
                                    onClick={toggleNotesPanel}
                                >
                                    {isNotesExpanded ? '📉 Minimize' : '📈 Maximize'}
                                </button>
                                <button className="btn-primary" onClick={saveNotes}>
                                    💾 Save Notes
                                </button>
                            </div>
                        </div>
                        <div className="notes-container">
                            <div className="notes-toolbar">
                                <button className="tool-btn" onClick={openGoogleDocs}>
                                    📄 Google Docs
                                </button>
                                <button className="tool-btn">
                                    📊 Share Screen
                                </button>
                                <button className="tool-btn">
                                    📎 Attach File
                                </button>
                            </div>
                            <textarea
                                className="notes-textarea"
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                placeholder="Write your notes here... You can also open Google Docs for collaborative editing."
                                rows={isNotesExpanded ? 20 : 8}
                            />
                            <div className="notes-footer">
                                <span className="char-count">{notes.length} characters</span>
                                <span className="auto-save">Auto-save enabled</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Controls */}
                <div className="virtual-class-footer">
                    <div className="class-status">
                        <span className="status-indicator online">🟢 Online</span>
                        <span>Class in progress</span>
                    </div>
                    <div className="footer-actions">
                        <button className="btn-secondary">
                            📊 Share Screen
                        </button>
                        <button className="btn-secondary">
                            📎 Share Files
                        </button>
                        <button className="btn-primary">
                            📝 Open Whiteboard
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VirtualClass;
