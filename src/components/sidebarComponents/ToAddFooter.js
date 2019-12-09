import React from 'react';
import {NavLink} from 'react-router-dom';
import '../sidebarComponents/SideBar.css'
import '../App.css';

function ToAddFooter(props){
    return (
  <div className ="sidebar-footer">
      <NavLink className="nav-link header-text" to ={props.path}>
      <button type="button" class="btn btn-primary btn-lg btn-block">{props.text}</button>

                              </NavLink>
                   </div>

    );
}
export default ToAddFooter;
