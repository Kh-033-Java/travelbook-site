import React from 'react';
import './NoteStyling.css'
import NoteOwner from './NoteOwner.js'
import NoteProperties from './NoteProperties.js'
import NoteEstimations from './NoteEstimations.js'
import '../App.css';
import"../sidebarComponents/SideBar.css";
import NotesPhotos from './NotePhotos';
import logo from '../icons/icon3.jpg'
import logo2 from '../icons/icon4.jpg'
function NoteMain(props){

    return (
   <div className = "main-comp main-sidebar">
       <NoteOwner account={props.note.login}/>
        <NoteProperties city = {props.note.city} date = {props.note.date}/>
       <div className="description container">
       <div className="title-note">Description</div>
       <textarea placeholder={props.note.description} readOnly></textarea>
       </div>
       <NotesPhotos photos ={[logo,logo2,logo,logo2]/*props.note.photos*/ }/>
       <NoteEstimations people = {props.note.peopleEstimate} prices ={props.note.pricesEstimate}
        cuisine ={props.note.cuisineEstimate} impression ={props.note.commonImpression}/>
   </div>
    );
}
export default NoteMain;
