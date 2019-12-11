import React from 'react';
import {NavLink} from 'react-router-dom';
import '../App.css';
import './Messages.css'

function MessageIcon(props) {
    return (

            <NavLink to="/messages">
                <div className="icon-button-messages"/>
            </NavLink>

    );
}

export default MessageIcon;
