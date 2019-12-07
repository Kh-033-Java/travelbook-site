import React from 'react';
import {NavLink} from 'react-router-dom';
import '../sidebarComponents/SideBar.css'
import '../App.css';
function FooterBackToNotes(props){
    return (
  <div className ="note-back-to-all btn btn-primary btn-lg btn-block">
                          <NavLink className="" to={props.path}>
                              {props.text}
                              </NavLink>
                             </div>

    );
}
export default FooterBackToNotes;
