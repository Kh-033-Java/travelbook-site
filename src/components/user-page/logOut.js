import {NavLink} from "react-router-dom";
import React, {Component} from 'react';

function LogOut() {
    const logout = () => {
        localStorage.clear();
        window.location.href = '/travelbook';
    };
    return (
        <div className="authorize3  header-text">
            <NavLink to='/travelbook' className="nav-link" onClick={logout}>Log Out</NavLink>
        </div>
    )
}

export default LogOut;