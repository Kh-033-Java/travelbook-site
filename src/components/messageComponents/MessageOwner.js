import React from 'react';
import '../App.css';
import './Messages.css';

function MessageOwner(props) {

    return (
        <div>
            <div><img src={props.avatar} alt="" className="message-account-image"></img></div>
            <div className="message-account-label">{props.login}</div>
        </div>

    );
}

export default MessageOwner;
