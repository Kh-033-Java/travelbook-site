import React from 'react';
import './PlansStyling.css'
/*import NoteOwner from './NoteOwner.js'
import NoteProperties from './NoteProperties.js'*/
import '../App.css';
import"../sidebarComponents/SideBar.css";

function PlansMain(props){

    return (
        <div className = "main-comp main-sidebar container">
           {/* <PlanOwner/>
            <PlanProperties city = {props.plan.city} date = {props.plan.date}/>*/}
            <div className="description container">{props.plan.text}</div>
        </div>
    );
}
export default PlansMain;
