import React from "react";
import './App.css';
import NotesWrapper from "./notesComponents/NotesWrapper.js";
import isAuthorized from './checker/authorizationChecker'
import AuthorizedNotes from './notesComponents/AuthorizedNotes.js'
import Header from './sidebarComponents/SidebarHeader.js';
import ToAddFooter from './sidebarComponents/ToAddFooter.js';


function Notes(props){
    return(
       !isAuthorized()?
        <aside className="rightbar note-whole-comp-no-footer container">
        <Header title = "Notes" countryName={props.name}/>
        <div className = "note-main-comp  main-sidebar container">
<NotesWrapper setId={props.setId}/>
</div>
</aside>
:
<aside className="rightbar note-whole-comp container">
<Header title = "Notes" countryName={props.name}/>
<AuthorizedNotes worldSeries={props.worldSeries} id= {props.id} setId={props.setId}/>
<ToAddFooter text="add note" path="note"/>{/*change path to add note*/} 
</aside>
                                         
         )
    }

export default Notes;

