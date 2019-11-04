
import React from "react";
import '../App.css';
import NotesWrapper from "./NotesWrapper.js";
import './AllNotesPage.css';


function UnAuthNotes(props){
   
    return(
         <div className = "list-main-unauth  main-sidebar">
<NotesWrapper setId={props.setId}/>
</div>
             )
}

export default UnAuthNotes;
