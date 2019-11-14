import React from 'react';
import './NoteStyling.css'
import NoteOwner from './NoteOwner.js'
import NoteProperties from './NoteProperties.js'
import NoteEstimations from './NoteEstimations.js'
import '../App.css';
import "../sidebarComponents/SideBar.css";
import NotesPhotos from './NotePhotos';

function NoteMain(props) {
    const getDate = () => {
        if (props.note.dateOfVisiting) {
            let str = props.note.dateOfVisiting;
            console.log(str.slice(0, 10));
            return str.slice(0, 10);
        }
    }
    return (
        <div className="main-comp main-sidebar">
            <NoteOwner account={props.note.login} logo={props.note.linkToUserAvatar} style_="note-owne note-owner-gen"
                       onClick={console.log(props.note)}/>
            <NoteProperties city={props.note.describedCity} date={getDate()}/>
            <div className="ddescription">
                <div className="title-note">Description</div>
                <textarea value={props.note.description} readOnly></textarea>
            </div>
            <NotesPhotos photos={props.note.photoLink}/>
            <NoteEstimations people={props.note.peopleEstimate} prices={props.note.pricesEstimate}
                             cuisine={props.note.cuisineEstimate} impression={props.note.commonImpression}/>
        </div>
    );
}

export default NoteMain;
