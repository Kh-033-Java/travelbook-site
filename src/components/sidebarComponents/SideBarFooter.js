import React from 'react';
import '../notesComponents/NoteStyling.css'
import '../sidebarComponents/SideBar.css'
import '../App.css';
function SideBarFooter(props){
    return (
  <div className ="sidebar-footer container header-text">
                <p>{props.text}</p>
                   </div>

    );
}
export default SideBarFooter;
