import React from "react";
import {NavLink} from "react-router-dom";
import {MAIN_USER_LOGIN_ROUTE} from "../../constants/constants";
import UserGeneralInformation from "./UserGeneralInformation";

export function avatar() {
    return (<div>
            <NavLink to={MAIN_USER_LOGIN_ROUTE}>
                <img className="avatar" src={localStorage.getItem("avatar")}>
            </img>
            </NavLink>
        </div>
    )
}