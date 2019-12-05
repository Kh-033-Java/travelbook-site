import React from 'react';
import {NavLink} from 'react-router-dom';
import '../sidebarComponents/SideBar.css'
import '../App.css';

function ToConversation(props) {
    return (
        <div className="note-edit container">
            <NavLink className="nav-link header-text" to="/conversation" onClick={setIntercolutor(props)}>
                {/*<button className="icon-button-edit-note icons-button"></button>*/}
                To conversation
            </NavLink>
        </div>
    );
}

export default ToConversation;

function setIntercolutor(props) {
    // localStorage.setItem('intercolutor', props.login);
    // console.log("setIntercolutor = ");
}