import React from 'react'
import {Route, NavLink} from 'react-router-dom';
import './App.css';
import LogOut from "./user-page/logOut";
import icon from './icons/cd143e9b-979b-4fd5-ba9e-6272c5598736.jpg';
import {avatar} from './user-page/avatar';
import UnauthorizedSettings from './UnauthorizedSettings.js'
import isAuthorized from './checker/authorizationChecker.js'
import {MAIN_USER_LOGIN_ROUTE} from "../constants/constants";

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
                    <Route path={MAIN_USER_LOGIN_ROUTE}>
                        {avatar}
                    </Route>
                </div>
            </React.Fragment>

    )
}
export default Settings;