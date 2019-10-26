import React from 'react'
import './App.css';

function UnSettings(props){

    return(
        <div className="settings">
         <div className="authorize1 container header-text"><div>{props.login}</div></div>
    <div className="authorize2 container header-text">{props.registration}</div>
    </div>
    )
}
export default UnSettings;