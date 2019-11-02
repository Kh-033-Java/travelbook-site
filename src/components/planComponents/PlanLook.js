import React from "react";
import AuthorizedPlans from './AuthorizedPlans.js'
import PlansWrapper from "./PlansWrapper.js";
import isAuthorized from '../checker/authorizationChecker'
import '../App.css';


function PlansLook(props){

    return(
        !isAuthorized()?
        <React.Fragment>
            <PlansWrapper/>
        </React.Fragment>
        :
        <React.Fragment>
            <AuthorizedPlans worldSeries={props.worldSeries} id ={props.id} setId/>
        </React.Fragment>
    )
}
export default PlansLook;


