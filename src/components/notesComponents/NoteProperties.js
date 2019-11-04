import React from 'react';
import './NoteStyling.css'
import '../App.css';
function NotesProperties(props){

    return (
<React.Fragment>
    <div className ="container note-property-city note-property">
        {props.city}
    </div>
    <div className ="container note-property-date note-property">
         {props.date}
    </div>
</React.Fragment>

    );
}
export default NotesProperties;
