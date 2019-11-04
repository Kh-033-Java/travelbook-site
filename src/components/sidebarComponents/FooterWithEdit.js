import React from 'react';

import '../sidebarComponents/SideBar.css'
import '../App.css';
function FooterWithEdit(props){
    return (
  <div className ="sidebar-footer container">
                    {props.text}
                                 </div>

    );
}
export default FooterWithEdit;
