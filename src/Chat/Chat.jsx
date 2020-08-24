import React from 'react'
import './Chat.scss';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatBody from './ChatBody/ChatBody';
function Chat() {
    return (
        <div className="chat">
            <ChatHeader />
            <ChatBody />
            {/* Chat Message Input */}
        </div>
    )
}

export default Chat
