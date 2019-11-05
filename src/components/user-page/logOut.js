import {NavLink} from "react-router-dom";
import React, {Component} from 'react';

function LogOut() {
    const logout = () => {
        localStorage.clear();
        window.location.href = '/travelbook';
    };
    return (
        <div className="authorize3 container header-text">
            <NavLink to='/travelbook' onClick={logout}>Log Out</NavLink>
        </div>
    )
}

export default LogOut;