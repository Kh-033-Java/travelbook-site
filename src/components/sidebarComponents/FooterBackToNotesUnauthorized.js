import React from 'react';
import {NavLink} from 'react-router-dom';
import '../sidebarComponents/SideBar.css'
import '../App.css';
function FooterBackToNotesUnauthorized(props){
    return (
  <div className ="note-back-to-all-unauth container">
                          <NavLink className="nav-link header-text" to={props.path}>
                              {props.text}
                              </NavLink>
                             </div>

    );
}
export default FooterBackToNotesUnauthorized;
