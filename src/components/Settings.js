import React from 'react'
import {Route, NavLink} from 'react-router-dom';
import './App.css';
import LogOut from "./user-page/logOut";
import icon from './icons/cd143e9b-979b-4fd5-ba9e-6272c5598736.jpg';
import {avatar} from './user-page/avatar';
import UnauthorizedSettings from './UnauthorizedSettings.js'
import isAuthorized from './checker/authorizationChecker.js'

function Settings(props){
    return(
        !isAuthorized()?
            <React.Fragment>
                <UnauthorizedSettings/>
            </React.Fragment>
            :<React.Fragment>
                <LogOut/>
                <div>
                    <NavLink to="/settings">
                        <div className="settings-button" />
                    </NavLink>
                </div>
                <div>
                    <Route path="/main">
                        {avatar}
                    </Route>
                </div>
            </React.Fragment>

    )
}
export default Settings;