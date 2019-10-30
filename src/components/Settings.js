import React from 'react'
import {NavLink} from 'react-router-dom';
import './App.css';

import UnauthorizedSettings from './UnauthorizedSettings.js'
import isAuthorized from './checker/authorizationChecker.js'

function Settings(props){
    const unauthorize=()=>{
        localStorage.clear();
        }
    return(
       !isAuthorized()?
        <React.Fragment>
            <UnauthorizedSettings/>
</React.Fragment>
:<React.Fragment>
    <NavLink to="/travelbook"><button onClick={unauthorize}>unauthorize</button></NavLink>
<div className="settings"> AuthorizedSettings</div>
</React.Fragment>
             
    )
}
export default Settings;