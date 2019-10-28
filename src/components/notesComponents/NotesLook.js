import React from "react";
import '../App.css';
import AuthorizedNotes from './AuthorizedNotes.js'
import NotesWrapper from "./NotesWrapper.js";
import * as auth from '../context/MyContext.js';


function NotesLook(props){

    return(
        !auth.isAuthorized(props.typeOfUser)?
        <React.Fragment>
<NotesWrapper/>
</React.Fragment>
:
<React.Fragment>
<AuthorizedNotes worldSeries={props.worldSeries} id = {props.id}></AuthorizedNotes>
</React.Fragment>
    )
}
export default NotesLook;


