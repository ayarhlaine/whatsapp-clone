import React from 'react';
import { Avatar } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './SidebarMessage.scss';

function SidebarMessage() {
    return (
        <div className="sidebarMessage">
            <Avatar src={`${process.env.PUBLIC_URL}/images/avatar.png`}/>
            <div className="sidebarMessage__message">
                <h3>Ayar Hlaine</h3>
                <p>What?</p>
            </div>
            <div className="sidebarMessage__time">
                <p>8/15/2020</p>
                <ExpandMoreIcon className="sidebarMessage__expand"/>
            </div>
        </div>
    )
}

export default SidebarMessage
