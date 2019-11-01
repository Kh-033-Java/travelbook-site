import React from 'react';
import './NoteStyling.css'
import NoteOwner from './NoteOwner.js'
import NoteProperties from './NoteProperties.js'
import NoteEstimations from './NoteEstimations.js'
import '../App.css';
import"../sidebarComponents/SideBar.css";
import NotesPhotos from './NotePhotos';
function NewNoteMain(props){

    return (
   <div className="main-comp">
       sth
      {/*} <NoteOwner/>
        <NoteProperties city = {props.note.city} date = {props.note.date}/>
       <div className="description container">{props.note.description}</div>
       <NotesPhotos photos ={props.note.photos}/>
       <NoteEstimations people = {props.note.peopleEstimate} prices ={props.note.pricesEstimate}
    cuisine ={props.note.cuisineEstimate} impression ={props.note.commonImpression}/>*/}
   </div>
    );
}
export default NewNoteMain;
