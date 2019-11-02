
import React from "react";
import '../App.css';
import PlansWrapper from "./PlansWrapper.js";

import './AllPlansPage.css';


function UnAuthorizedPlans(props){

    return(
        <div className = "list-main-unauth  main-sidebar container">
            <PlansWrapper setId={props.setId}/>
        </div>
    )
}

export default UnAuthorizedPlans;
