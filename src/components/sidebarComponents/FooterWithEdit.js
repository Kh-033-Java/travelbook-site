import React from 'react';
import {NavLink} from 'react-router-dom';
import '../sidebarComponents/SideBar.css'
import '../App.css';
function FooterWithEdit(props){
    return (
  <div className ="sidebar-footer-edit container">
                          <NavLink className="nav-link header-text" to ={props.path}>
                    {props.text}
                              </NavLink>
                             </div>

    );
}
export default FooterWithEdit;
