import React from 'react';
import {NavLink} from 'react-router-dom';
import '../sidebarComponents/SideBar.css'
import '../App.css';
function FooterWithDelete(props){
    return (
  <div className ="note-delete container">
                          <NavLink className="nav-link header-text" to={props.path} noteId={props.noteId} note={props.note}>
                    {props.text}
                              </NavLink>
                             </div>

    );
}
export default FooterWithDelete;
