import React from 'react'
import { NavLink } from 'react-router-dom'
import isAuthorized from "../checker/authorizationChecker";

export default function AllPlansPageButton() {


    return (
        isAuthorized() ?
            <NavLink to="/allplans">
                <button >All plans</button>
            </NavLink>
            : null
        )


}