import React from 'react'
import {NavLink} from 'react-router-dom';
import './App.css';

import UnauthorizedSettings from './unauthorizedSettings.js'
import isAuthorized from './checker/authorizationChecker.js'
import LogOut from "./user-page/logOut";

function Settings(){
    return(
        !isAuthorized()?
            <React.Fragment>
                <UnauthorizedSettings/>
            </React.Fragment>
            :<React.Fragment>
                <LogOut/>
                <div>
                    <NavLink to="/settings">
                    <img className="avatar" src={localStorage.getItem("avatar")}>
                    </img>
                </NavLink></div>
            </React.Fragment>

    )
}
export default Settings;