import React from "react";
import {NavLink} from "react-router-dom";

export function avatar() {
    return (<div>
            <NavLink to="/userPage/:login">
                <img className="avatar" src={localStorage.getItem("avatar")}>
            </img>
        </NavLink>
        </div>
    )
}