import React from 'react'
import './App.css';
import UnauthorizedSettings from './UnauthorizedSettings.js'
import * as auth from './context/MyContext.js'

function Settings(props){

    return(
       !auth.isAuthorized(props.userType)?
        <React.Fragment>
            <UnauthorizedSettings/>
</React.Fragment>
:
<div className="settings"> AuthorizedSettings</div>
             
    )
}
export default Settings;