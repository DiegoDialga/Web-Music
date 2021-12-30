import React from 'react';
import './Player.css';
import Sidebar from './Sidebar';
import Body from './Body.js';
import Footer from './Footer.js';

function Player(){
    return (
        <div className="player">
            <div className="player_body">
                <Sidebar/>
                <Body/>
                <Footer/>
            </div>
        </div>
    )
};

export default Player;