import React from 'react';
import {NavLink} from 'react-router-dom';
import '../sidebarComponents/SideBar.css'
import '../App.css';
import "./Messages.css"

function FooterBackToMessages(props){
    return (
        <div className ="conversation-back-to-all container">
            <NavLink className="nav-link header-text" to={props.path}>
                {props.text}
            </NavLink>
        </div>

    );
}
export default FooterBackToMessages;