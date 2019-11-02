import React from "react";
import './App.css';
import isAuthorized from "./checker/authorizationChecker";
import Header from "./sidebarComponents/SidebarHeader";
import ToAddFooter from "./sidebarComponents/ToAddFooter";
import AuthorizedPlans from "./planComponents/AuthorizedPlans.js"
import UnAuthorizedPlans from "./planComponents/UnAuthorizedPlans";

function Plans(props){
    return(
        !isAuthorized()?
            <aside className="rightbar whole-comp-no-footer container">
                <Header title = "Plans" countryName={props.name}/>
                <UnAuthorizedPlans />
            </aside>
            :
            <aside className="rightbar whole-comp container">
                <Header title = "Plans" countryName={props.name}/>
                <AuthorizedPlans worldSeries={props.worldSeries} id= {props.id} setId={props.setId}/>
                <ToAddFooter text="add plan" path="plan"/>
            </aside>

    )
}

export default Plans;
