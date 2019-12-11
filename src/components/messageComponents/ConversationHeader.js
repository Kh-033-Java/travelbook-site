import React from 'react';
import '../notesComponents/NoteStyling.css'
import '../App.css';
import './Messages.css'

function ConversationHeader(props) {
    return (
        <React.Fragment>
            <div className="conversation-title container header-text">{props.title}</div>
            <div className="conversation-intercolutor container header-text">{props.intercolutor}</div>
        </React.Fragment>
    );
}

export default ConversationHeader;