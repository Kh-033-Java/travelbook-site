import React from "react";
import PlanLook from './planComponents/PlanLook.js'
import './App.css';
function Plans(props){
    return(
             <aside className="rightbar ">
                   {/* will be a panel with name and country */}
                  <h1> Plans</h1>
                    <p>In country : {props.name}</p>
                  <PlanLook name={props.name} id ={props.id} worldSeries = {props.worldSeries} />
            </aside>
    
    )
}
export default Plans;