import React,{Component} from 'react';
import {NavLink} from 'react-router-dom'
import '../NoteStyling.css'
import '../../App.css';
import '../newNoteComponents/NewNote.css'
import '../AllNotesPage.css'

export default function Property(props){
    return(
        <div className={props.positn}>
            <div>{props.type}</div>
            <textarea value={props.text} className="" readOnly/>
        </div>
    )
}