import React from 'react';
import {NavLink} from 'react-router-dom';
import '../sidebarComponents/SideBar.css'
import '../App.css';

function ToAddFooter(props){
    return (
  <div className ="sidebar-footer container ">
      <NavLink className="nav-link header-text" to ={props.path}>
                    {props.text}
                              </NavLink>
                   </div>

    );
}
export default ToAddFooter;
