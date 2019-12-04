import React from 'react'
import { NavLink, Route } from 'react-router-dom';
import './App.css';
import LogOut from "./user-page/logOut";
import { avatar } from './user-page/avatar';
import UnauthorizedSettings from './UnauthorizedSettings.js'
import isAuthorized from './checker/authorizationChecker.js'
import { getLogin } from "../helpers/getLogin";
import Dropdown from '../components/userMenu/Dropdown'
import DropdownItem from '../components/userMenu/DropdownItem'

function Settings(props) {
    return (
        !isAuthorized() ?
            <React.Fragment>
                <UnauthorizedSettings />
            </React.Fragment>
            : <React.Fragment>

                <Dropdown label="Menu" className="dropdown">

                    <NavLink to="/friends" className="dropdown-option">
                        <DropdownItem label="Friens" />
                    </NavLink>


                    <NavLink to="/alluserplans" className="dropdown-option">
                        <DropdownItem label="My Plans" />
                    </NavLink>

                    <NavLink to="/settings" className="dropdown-option">
                        <DropdownItem label="Settings" />
                    </NavLink>
                </Dropdown>
                <div style={{ gridRow: 1, gridColumn: 3, marginLeft: 80 + '%' }}>
                    <NavLink to="/search-plans">
                        <div className="button-plan" />
                    </NavLink>

                </div>
                <div className="user-page-icon">
                    <Route path={/userPage/ + getLogin()}>
                        {avatar}
                    </Route>
                </div>
                <LogOut />

            </React.Fragment>

    )
}
export default Settings;