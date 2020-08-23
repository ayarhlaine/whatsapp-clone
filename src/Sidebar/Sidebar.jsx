import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeOutlinedIcon from '@material-ui/icons/DonutLargeOutlined';
import MessageIcon from '@material-ui/icons/Message';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './Sidebar.scss';
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerRight">
                    <IconButton >
                        <DonutLargeOutlinedIcon />
                    </IconButton>
                    <IconButton >
                        <MessageIcon />
                    </IconButton>
                    <IconButton >
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            {/* Sidebar Header */}
            {/* Sidebar Search*/}
            {/* Sidebar Messages */}
        </div>
    )
}

export default Sidebar
