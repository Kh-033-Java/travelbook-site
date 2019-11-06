import React from 'react';
import './NoteStyling.css'
import '../App.css';
import logo from '../../images/profile.png'
function NoteOwner(props){

    return (
  <div className ={props.style_}>
    <div><img src ={logo} alt="" className="account-image"></img></div>
    <div className="account-label">{props.account}</div>
          </div>

    );
}
export default NoteOwner;
