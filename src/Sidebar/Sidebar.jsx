import React, { useState } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeOutlinedIcon from '@material-ui/icons/DonutLargeOutlined';
import MessageIcon from '@material-ui/icons/Message';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './Sidebar.scss';
import SidebarMessage from './SidebarMessage/SidebarMessage';
function Sidebar() {
    const [isInputFocus, setIsInputFocus] = useState(false);
    const onInputFocusIn = () => {
        setIsInputFocus(true);
    }
    const onInputFocusOut = () => {
        setIsInputFocus(false);
    }
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
            <div className={`sidebar__search ${isInputFocus ? 'sidebar__search--focus':''}`}>
                <div className="sidebar__searchContainer">
                    {
                        isInputFocus ? 
                        <ArrowBackIcon />:
                        <SearchIcon />
                    }
                    <input type="text" 
                    name="searchmessage" 
                    id="searchmessage" 
                    placeholder={'Search or start a new chat'} 
                    onBlur={onInputFocusOut}
                    onFocus={onInputFocusIn}/>
                </div>
            </div>
            <hr/>
            <div className="sidebar__messages">
                <SidebarMessage />
                <SidebarMessage />
                <SidebarMessage />
                <SidebarMessage />
                <SidebarMessage />
                <SidebarMessage />
                <SidebarMessage />
                <SidebarMessage />
                <SidebarMessage />
                <SidebarMessage />
                <SidebarMessage />
                <SidebarMessage />
                <SidebarMessage />
                <SidebarMessage />
                <SidebarMessage />
                <SidebarMessage />
                <SidebarMessage />
            </div>
        </div>
    )
}

export default Sidebar
