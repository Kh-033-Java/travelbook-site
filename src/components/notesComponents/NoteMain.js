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
    
       <NoteProperties city = {props.city} date = {props.date}/>
       <div className="description container"></div>
       <NotesPhotos/>
       <NoteEstimations/>
   </div>
    );
}
export default NoteMain;
