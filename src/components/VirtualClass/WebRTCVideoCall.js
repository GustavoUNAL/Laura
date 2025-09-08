import React, { useState, useEffect, useRef } from 'react';
import './WebRTCVideoCall.css';

const WebRTCVideoCall = ({ onClose, isFullscreen = false }) => {
    const [, setIsConnected] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [isVideoOn, setIsVideoOn] = useState(true);
    const [isScreenSharing, setIsScreenSharing] = useState(false);
    const [showJoinOverlay, setShowJoinOverlay] = useState(true);
    const [localStream, setLocalStream] = useState(null);
    const [remoteStream, setRemoteStream] = useState(null);
    const [connectionStatus, setConnectionStatus] = useState('disconnected');

    const localVideoRef = useRef(null);
    const remoteVideoRef = useRef(null);
    const peerConnectionRef = useRef(null);

    useEffect(() => {
        initializeWebRTC();

        return () => {
            cleanup();
        };
    }, []);

    const cleanup = () => {
        if (localStream) {
            localStream.getTracks().forEach(track => track.stop());
        }
        if (peerConnectionRef.current) {
            peerConnectionRef.current.close();
        }
    };

    const initializeWebRTC = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: true
            });
            
            setLocalStream(stream);
            
            if (localVideoRef.current) {
                localVideoRef.current.srcObject = stream;
            }

            const peerConnection = new RTCPeerConnection({
                iceServers: [
                    { urls: 'stun:stun.l.google.com:19302' },
                    { urls: 'stun:stun1.l.google.com:19302' }
                ]
            });

            peerConnectionRef.current = peerConnection;

            peerConnection.ontrack = (event) => {
                const remoteStream = event.streams[0];
                setRemoteStream(remoteStream);
                if (remoteVideoRef.current) {
                    remoteVideoRef.current.srcObject = remoteStream;
                }
            };

            peerConnection.onconnectionstatechange = () => {
                setConnectionStatus(peerConnection.connectionState);
                setIsConnected(peerConnection.connectionState === 'connected');
            };

            stream.getTracks().forEach(track => {
                peerConnection.addTrack(track, stream);
            });

        } catch (error) {
            console.error('Error accessing media devices:', error);
            alert('Error accessing camera and microphone. Please check permissions.');
        }
    };

    const joinCall = async () => {
        setShowJoinOverlay(false);
        setIsConnected(true);
        setConnectionStatus('connecting');
        
        // Simulate connection process
        setTimeout(() => {
            setConnectionStatus('connected');
        }, 2000);
    };

    const toggleMute = () => {
        if (localStream) {
            const audioTrack = localStream.getAudioTracks()[0];
            if (audioTrack) {
                audioTrack.enabled = !audioTrack.enabled;
                setIsMuted(!audioTrack.enabled);
            }
        }
    };

    const toggleVideo = () => {
        if (localStream) {
            const videoTrack = localStream.getVideoTracks()[0];
            if (videoTrack) {
                videoTrack.enabled = !videoTrack.enabled;
                setIsVideoOn(videoTrack.enabled);
            }
        }
    };

    const toggleScreenShare = async () => {
        try {
            if (!isScreenSharing) {
                const screenStream = await navigator.mediaDevices.getDisplayMedia({
                    video: true,
                    audio: true
                });
                
                const videoTrack = screenStream.getVideoTracks()[0];
                const sender = peerConnectionRef.current?.getSenders().find(s => 
                    s.track?.kind === 'video'
                );
                
                if (sender) {
                    sender.replaceTrack(videoTrack);
                }
                
                setIsScreenSharing(true);
                videoTrack.onended = () => setIsScreenSharing(false);
            } else {
                const cameraStream = await navigator.mediaDevices.getUserMedia({
                    video: true,
                    audio: true
                });
                
                const videoTrack = cameraStream.getVideoTracks()[0];
                const sender = peerConnectionRef.current?.getSenders().find(s => 
                    s.track?.kind === 'video'
                );
                
                if (sender) {
                    sender.replaceTrack(videoTrack);
                }
                
                setIsScreenSharing(false);
            }
        } catch (error) {
            console.error('Error toggling screen share:', error);
        }
    };

    const endCall = () => {
        cleanup();
        setIsConnected(false);
        setConnectionStatus('disconnected');
        onClose();
    };

    const getConnectionStatusText = () => {
        switch (connectionStatus) {
            case 'connecting':
                return '🟡 Connecting...';
            case 'connected':
                return '🟢 Connected';
            case 'disconnected':
                return '🔴 Disconnected';
            default:
                return '🔴 Disconnected';
        }
    };

    return (
        <div className={`webrtc-video-call ${isFullscreen ? 'fullscreen' : ''}`}>
            {/* Floating Controls */}
            <div className="video-controls">
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
            <div className={`connection-status ${connectionStatus}`}>
                {getConnectionStatusText()}
            </div>

            {/* Video Container */}
            <div className="video-container">
                {/* Remote Video (Main) */}
                <div className="remote-video-container">
                    <video
                        ref={remoteVideoRef}
                        className="remote-video"
                        autoPlay
                        playsInline
                        muted={false}
                    />
                    {!remoteStream && (
                        <div className="no-remote-video">
                            <div className="waiting-for-participant">
                                <div className="avatar">👨‍🏫</div>
                                <p>Waiting for teacher to join...</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Local Video (Picture-in-Picture) */}
                <div className="local-video-container">
                    <video
                        ref={localVideoRef}
                        className="local-video"
                        autoPlay
                        playsInline
                        muted={true}
                    />
                </div>
            </div>

            {/* Join Overlay */}
            {showJoinOverlay && (
                <div className="join-overlay">
                    <div className="join-content">
                        <h3>Start Video Call</h3>
                        <p>Click to start the video session</p>
                        <button className="join-btn" onClick={joinCall}>
                            📹 Start Call
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WebRTCVideoCall;
