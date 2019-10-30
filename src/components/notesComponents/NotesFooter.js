import React from 'react';
import {NavLink} from 'react-router-dom';
import './NoteStyling.css'
import '../App.css';
function NotesFooter(props){

    return (
  <div className ="note-footer container">
      <NavLink to='/notes'>
          back to all notes
          </NavLink>
          </div>

    );
}
export default NotesFooter;
