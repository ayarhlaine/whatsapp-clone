import React from 'react';
import ComputerIcon from '@material-ui/icons/Computer';
import './WelcomeScreen.scss';
function WelcomeScreen() {
    return (
        <div className="welcomeScreen">
            <div className="welcomeScreenContainer">
                <img src={`${process.env.PUBLIC_URL}/images/whatsapp-logo.png`} alt=""/>
                <h3 className="welcomeScreen__headerText">Welcome to WhatsApp</h3>
                <p className="welcomeScreen__text">
                    WhatsApp clone app using React JS. Cloned By 
                    <span>&nbsp;Ayar Hlaine</span>
                </p>
                <hr/>
                <div className="welcomeScreen__originalSiteLinkContainer">
                    <p className="welcomeScreen__originalSiteLink">
                        <ComputerIcon />
                        Official WhatsApp is available at 
                        <a href="https://www.whatsapp.com/download" target="_blank" rel="noopener noreferrer">
                        &nbsp;here
                        </a>
                        .
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WelcomeScreen
