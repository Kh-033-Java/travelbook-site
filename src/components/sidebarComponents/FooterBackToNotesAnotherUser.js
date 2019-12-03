import React from 'react';
import {NavLink} from 'react-router-dom';
import '../sidebarComponents/SideBar.css'
import '../App.css';
function FooterBackToNotesAnotherUser(props){
    return (
  <div className ="note-back-to-all-another-user container">
                          <NavLink className="nav-link header-text" to={props.path}>
                              {props.text}
                              </NavLink>
                             </div>

    );
}
export default FooterBackToNotesAnotherUser;
