import React from "react";
import {NavLink} from "react-router-dom";
import {getLogin} from "../../helpers/getLogin";

export function avatar() {
    return (<div>
            <NavLink to={/userPage/ + getLogin()}>
                <img className="avatar" src={localStorage.getItem("avatar")}>
            </img>
            </NavLink>
        </div>
    )
}