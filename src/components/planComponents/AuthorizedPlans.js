import React from "react";
import '../App.css';
import PlansWrapper from "./PlansWrapper.js";
import OnlyMyPlans from "./OnlyMyPlans.js";

function AuthorizedPlans(props){
    
      
    return(
        <React.Fragment>
            <OnlyMyPlans/>
            <PlansWrapper/>

        </React.Fragment>
    )
}

export default AuthorizedPlans;
