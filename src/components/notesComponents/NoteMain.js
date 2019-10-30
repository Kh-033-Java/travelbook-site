import React from 'react';
import './NoteStyling.css'
import NoteOwner from './NoteOwner.js'
import NoteProperties from './NoteProperties.js'
import NoteEstimations from './NoteEstimations.js'
import '../App.css';
import NotesPhotos from './NotePhotos';
function NoteMain(props){

    return (
   <div className = "note-main-comp container">
       <NoteOwner/>
        <NoteProperties city = {props.note.city} date = {props.note.date}/>
       <div className="description container">{props.note.text}</div>
       <NotesPhotos photos ={props.note.photos}/>
       <NoteEstimations people = {props.note.peopleEstimate} prices ={props.note.peopleEstimate}
        cuisine ={props.note.peopleEstimate} impression ={props.note.peopleEstimate}/>
   </div>
    );
}
export default NoteMain;
