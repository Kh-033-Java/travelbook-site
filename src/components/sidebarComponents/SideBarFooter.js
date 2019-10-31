import React from 'react';
import {NavLink} from 'react-router-dom';
import '../notesComponents/NoteStyling.css'
import '../App.css';
function SideBarFooter(props){
    return (
  <div className ="note-footer container">
                {props.text}
                   </div>

    );
}
export default SideBarFooter;
