import React from 'react';
import '../sidebarComponents/SideBar.css'
import '../App.css';

function FooterSendMessage(props){
    return (
        <div className ="conversation-send-message container">
            <input name="sendMessage" onClick={props.sendMessage} type="button" value="Send message"/>
        </div>
    );
}
export default FooterSendMessage;