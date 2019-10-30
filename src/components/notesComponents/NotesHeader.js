import React from 'react';
import './NoteStyling.css'
import '../App.css';
function NotesHeader(props){

    return (
       <React.Fragment>
<div className ="note-title container">{props.title}</div>
<div className ="note-country container">{props.countryName}</div>
</React.Fragment>
    );
}
export default NotesHeader;
