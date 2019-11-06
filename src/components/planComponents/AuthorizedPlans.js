import React from "react";
import '../App.css';
import OnlyMyPlans from "./OnlyMyPlans.js";

function AuthorizedPlans(props){
    
      
    return(
        <div className = "list-main-auth  main-sidebar container">
            <React.Fragment>
                <OnlyMyPlans name={props.name} id={props.id} />
            </React.Fragment>
        </div>
    )
}

export default AuthorizedPlans;
