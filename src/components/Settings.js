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

                <div className="col-lg"/>
                <div className="col-12 col-lg  d-flex justify-content-lg-end  justify-content-sm-center justify-content-center justify-content-lg-end justify-content-xl-end ">
                    <div className="d-inline-block align-self-center" style={{ marginRight: 2 + "%" }}>
                        <NavLink to="/search-plans" className="">
                            <div className="button-plan " />
                        </NavLink>

                    </div>

                    <Dropdown label="Menu" className="dropdown d-inline-block" >

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

                    <div className="user-page-icon d-inline-block align-self-center" style={{ marginRight: 2 + "%" }}>
                        <Route path={/userPage/ + getLogin()}>
                            {avatar}
                        </Route>
                    </div>
                    <LogOut />
                </div>
            </React.Fragment>

    )
}
export default Settings;