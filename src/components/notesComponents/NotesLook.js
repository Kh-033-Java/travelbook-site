import React from "react";
import '../App.css';
import AuthorizedNotes from './AuthorizedNotes.js'
import NotesWrapper from "./NotesWrapper.js";
import isAuthorized from '../checker/authorizationChecker'


function NotesLook(props){
    return(
       !isAuthorized()?
    <NotesWrapper setId={props.setId}/>
:
<React.Fragment>
<AuthorizedNotes worldSeries={props.worldSeries} id= {props.id} setId={props.setId}/>
</React.Fragment>
    )
}
export default NotesLook;


