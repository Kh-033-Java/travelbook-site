import React from "react";
import {NavLink} from 'react-router-dom'
import '../App.css';
import './AllNotesPage.css';

function NotesWrapper(props){
    return(
<div className={props.classWr}>
<p>All Public notes</p>
<NavLink to="/notes">
    <div setId = {props.setId}></div>{/*container with small description on click will be a function
    we will pass this function to the container with the state and on click the function in container will call
    ex:
    function setCurrentNodeId(){
        props.setId(this.state.id);

    }
    this function sets id to the main container so that when we go to "/notes" we pass the id of the note we wannns see
    */ }

</NavLink>
<NavLink to="/note">note</NavLink>
</div>
    )
}
export default NotesWrapper;