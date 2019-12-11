import React from 'react'
import './App.css';
import {NavLink} from "react-router-dom";

function UnSettings(props) {
    return (

        <div className="col-12 col-lg  d-flex justify-content-lg-end  justify-content-sm-center justify-content-center justify-content-lg-end justify-content-xl-end ">
        <div className="">
            <div className="header-text d-inline-block align-self-center">
                <NavLink to="/login" className="nav-link"><button type="button" class="btn btn-outline-dark">Log In</button></NavLink>
            </div>
            <div className="header-text d-inline-block align-self-center">
                <NavLink to="/registration" className="nav-link"><button type="button" class="btn btn-primary">Registration</button></NavLink>
            </div>
        </div>
        </div>
        
    )
}


export default UnSettings;