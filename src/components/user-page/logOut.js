import {NavLink} from "react-router-dom";
import React, {Component} from 'react';

function LogOut() {
    const logout = () => {
        localStorage.clear();
        window.location.href = '/travelbook';
    };
    return (
        <div className="authorize3 container header-text">
            <a href='http://localhost:3000/travelbook' onClick={logout}>Log Out</a>
        </div>
    )
}

export default LogOut;