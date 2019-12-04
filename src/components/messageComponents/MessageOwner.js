import React from 'react';
import '../App.css';

function MessageOwner(props) {

    return (
        <div>
            <div><img src={props.avatar} alt="" className="account-image"></img></div>
            <div className="account-label">{props.login}</div>
        </div>

    );
}

export default MessageOwner;
