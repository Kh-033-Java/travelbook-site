import React from 'react'
import {NavLink, Route} from 'react-router-dom';
import './App.css';
import icon from './icons/cd143e9b-979b-4fd5-ba9e-6272c5598736.jpg'
import UnauthorizedSettings from './unauthorizedSettings.js'
import isAuthorized from './checker/authorizationChecker.js'
import LogOut from "./user-page/logOut";
import UserGeneralInformation from "./user-page/UserGeneralInformation";
import {avatar} from "./user-page/avatar";

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
                    <img className="settings-button" src={icon}/>
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