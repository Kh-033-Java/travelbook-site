import React from "react";
import './App.css';
import './sidebarComponents/SideBar.css';
import {NavLink} from 'react-router-dom';
import isAuthorized from "./checker/authorizationChecker";
import Header from "./sidebarComponents/SidebarHeader";
import UnAuthorizedPlans from "./planComponents/UnAuthorizedPlans";
import AuthorizedPlans from "./planComponents/AuthorizedPlans";

function Plans(props) {
    return (

        !isAuthorized() ?
            <aside className="rightbar whole-comp-no-footer col-12 col-lg-6">
                <Header title="Plans" countryName={props.countryName}/>
                <UnAuthorizedPlans countryName={props.countryName} id={props.id} setId={props.setId}/>
            </aside>
            :
            <aside className="rightbar whole-comp col-12 col-lg-6">
                <Header title="Plans" countryName={props.countryName}/>
                <AuthorizedPlans countryName={props.countryName} id={props.id} worldSeries={props.worldSeries}
                                 setId={props.setId}/>
                <div className="create-plan-button  ">
                    <NavLink to="/newPlan">
                        <button type="button" className="create-plan-button submitButton">Create plan</button>
                    </NavLink>
                </div>
            </aside>
    )
}

export default Plans;