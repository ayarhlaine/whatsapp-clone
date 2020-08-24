import React from 'react';
import './ChatMessage.scss';
function ChatMessage({receiver}) {
    return (
        <div className="chatMessage">
            <p className={`chatMessage__container ${receiver && 'chat__receiver'}`}>
                <span className="chatMessage__senderName">Ayar Hlaine</span>
                Hello Guys
                <span className="chatMessage__time">2:02 PM</span>
            </p>
        </div>
    )
}

export default ChatMessage
