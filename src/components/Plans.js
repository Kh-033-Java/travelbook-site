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
            <aside className="rightbar whole-comp-no-footer ">
                <Header title="Plans" countryName={props.countryName}/>
                <UnAuthorizedPlans countryName={props.countryName} id={props.id} setId={props.setId}/>
                <div className="create-plan-button container ">
                    <NavLink to="/search-plans">
                        <button type="button" className="button-plan">Search plans</button>
                    </NavLink>
                </div>
            </aside>
            :
            <aside className="rightbar whole-comp ">
                <Header title="Plans" countryName={props.countryName}/>
                <AuthorizedPlans countryName={props.countryName} id={props.id} worldSeries={props.worldSeries}
                                 setId={props.setId}/>
                <div className="create-plan-button container ">
                    <NavLink to="/newPlan">
                        <button type="button" className="button-plan">Create plan</button>
                    </NavLink>
                </div>

            </aside>

    )
}

export default Plans;
