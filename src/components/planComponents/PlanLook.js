import React from "react";
import AuthorizedPlans from './AuthorizedPlans.js'
import PlansWrapper from "./PlansWrapper.js";
import * as auth from '../context/MyContext.js';
import '../App.css';


function PlansLook(props){

    return(
        !auth.isAuthorized(props.typeOfUser)?
        <React.Fragment>
<PlansWrapper/>
</React.Fragment>
:
<React.Fragment>
<AuthorizedPlans worldSeries={props.worldSeries} id ={props.id}/>
</React.Fragment>
    )
}
export default PlansLook;


