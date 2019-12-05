import React from 'react';
import '../notesComponents/NoteStyling.css'
import '../App.css';

function MessagesHeader (props){
    return (
       <React.Fragment>
<div className ="note-title container header-text">{props.title}</div>
</React.Fragment>
    );
}
export default MessagesHeader;
