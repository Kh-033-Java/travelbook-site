import React from 'react'
import {NavLink, Route} from 'react-router-dom';
import './App.css';
import LogOut from "./user-page/logOut";
import {avatar} from './user-page/avatar';
import UnauthorizedSettings from './UnauthorizedSettings.js'
import isAuthorized from './checker/authorizationChecker.js'
import {getLogin} from "../helpers/getLogin";

function Settings(props){
    return(
        !isAuthorized()?
            <React.Fragment>
                <UnauthorizedSettings/>
            </React.Fragment>
            :<React.Fragment>
                <LogOut/>
                <div style={{display: "flex", marginLeft : 45}}>
                    <NavLink to="/search-plans">
                        <div className="button-plan" />
                    </NavLink>
                    <NavLink to="/settings">
                        <div className="settings-button" />
                    </NavLink>
                </div>
                <div>
                    <Route path={/userPage/ + getLogin()}>
                        {avatar}
                    </Route>
                </div>
            </React.Fragment>

    )
}
export default Settings;