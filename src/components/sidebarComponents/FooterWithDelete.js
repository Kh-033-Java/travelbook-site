import React from 'react';
import {NavLink} from 'react-router-dom';
import '../sidebarComponents/SideBar.css'
import '../App.css';

function FooterWithDelete(props) {
    return (
        <div className="note-delete container-box">
            <NavLink className="nav-link header-text" to={props.path} noteId={props.noteId} note={props.note}>
                <button className="icon-button-delete-note icons-button"></button>
            </NavLink>
        </div>

    );
}

export default FooterWithDelete;
