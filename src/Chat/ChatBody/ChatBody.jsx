import React from 'react'
import './ChatBody.scss';
import ChatMessage from './ChatMessage/ChatMessage';
function ChatBody() {
    // const imageURL = `${process.env.PUBLIC_URL}/images/whatsapp-background.png`;
    const imageURL = `https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png`;
    return (
        <div className="chatBody" style={{ background: `url(${imageURL})`}}>
            <ChatMessage />
            <ChatMessage />
            <ChatMessage receiver/>
            <ChatMessage />
            <ChatMessage receiver/>
        </div>
    )
}

export default ChatBody
