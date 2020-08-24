import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile'; 
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './ChatHeader.scss';
function ChatHeader() {
    return (
        <div className="chatHeader">
            <Avatar src={`${process.env.PUBLIC_URL}/images/avatar.png`}/>
            <div className="chatHeader__info">
                <h3 className="chatHeader__info__text">Ayar Hlaine</h3>
                <p className="chatHeader__info__text">last seen at 7/24/2020</p>
            </div>
            <div className="chatHeader__icons">
                <IconButton >
                    <SearchIcon />
                </IconButton>
                <IconButton >
                    <AttachFileIcon />
                </IconButton>
                <IconButton >
                    <MoreVertIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default ChatHeader
