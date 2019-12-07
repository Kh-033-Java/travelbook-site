import {NavLink} from "react-router-dom";
import React, {Component} from 'react';

function LogOut() {
    const logout = () => {
        localStorage.clear();
        window.location.href = '/travelbook';
    };
    return (
        <div className="header-text d-inline-block align-self-center">
            <NavLink to='/travelbook' className="nav-link" onClick={logout}><button type="button" class="btn btn-danger">Sign out</button>
</NavLink>
        </div>
    )
}

export default LogOut;