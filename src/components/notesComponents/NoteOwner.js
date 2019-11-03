import React from 'react';
import './NoteStyling.css'
import '../App.css';
import logo from '../icons/icon3.jpg'
function NoteOwner(props){

    return (
  <div className ="note-owner ">
    <div><img src ={logo} alt="" className="account-image"></img></div>
    <div className="account-label">{props.account}</div>
          </div>

    );
}
export default NoteOwner;
