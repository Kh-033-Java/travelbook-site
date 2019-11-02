import React from 'react';
import '../notesComponents/NoteStyling.css'
import '../SideBar.css';

function SideBarFooter(props){
    return (
  <div className ="sidebar-footer container">
                {props.text}
                   </div>

    );
}
export default SideBarFooter;
