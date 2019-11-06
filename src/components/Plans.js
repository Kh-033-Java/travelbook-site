import React from "react";
import './App.css';
import './sidebarComponents/SideBar.css';
import {NavLink} from 'react-router-dom';
import isAuthorized from "./checker/authorizationChecker";
import Header from "./sidebarComponents/SidebarHeader";

import UnAuthorizedPlans from "./planComponents/UnAuthorizedPlans";
import AuthorizedPlans from "./planComponents/AuthorizedPlans";

function Plans(props){
    return(
        !isAuthorized()?
            <aside className="rightbar whole-comp-no-footer container">
                <Header title = "Plans" countryName={props.name}/>
                <UnAuthorizedPlans name={props.name} id={props.id} planId={props.planId}/>
            </aside>
            :
            <aside className="rightbar whole-comp container">
                <Header title = "Plans" countryName={props.name}/>
                <AuthorizedPlans name={props.name} id={props.id} worldSeries = {props.worldSeries} planId={props.planId}/>
                <div className="create-plan-button container ">
                    <NavLink to="/newplan">
                        <button type="button" class="button-plan">Create plan</button>
                    </NavLink>
                </div>
            </aside>

    )
}

export default Plans;
