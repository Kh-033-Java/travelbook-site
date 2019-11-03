import React from 'react';
import {NavLink} from 'react-router-dom';
import '../notesComponents/NoteStyling.css'
import '../App.css';

function ToAddFooter(props){
    return (
  <div className ="note-footer container">
      <button><a href = "/plan"/>
                {props.text}
                </button>
                   </div>

    );
}
export default ToAddFooter;
