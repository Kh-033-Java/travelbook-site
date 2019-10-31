import React from "react";
import * as am4core from "@amcharts/amcharts4/core";
import '../App.css';
import PlansWrapper from "./PlansWrapper.js";
import OnlyMyPlans from "./OnlyMyPlans.js";

function AuthPlans(props){
    function addAndFill(){
        props.worldSeries.getPolygonById(props.id).fill =am4core.color("#dde5ed");
      }
      
    return(
        <React.Fragment>
            <OnlyMyPlans/>
            <PlansWrapper/>
        <button onClick={addAndFill}>Add Plan</button>
              </React.Fragment>
    )
}

export default AuthPlans;