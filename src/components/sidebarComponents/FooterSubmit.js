import React from 'react';

import '../sidebarComponents/SideBar.css'
import '../App.css';
function FooterSubmit(props){
    return (
  <div className ="sidebar-footer container">
     <input type='submit' name="addNoteSubmit" className="add-note-button" form ={props.for} value="Add Note"/>
 </div>

    );
}
export default FooterSubmit;
