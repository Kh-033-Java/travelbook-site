import React from "react";
import PlanLook from './planComponents/PlanLook.js'
import './App.css';
import {MyContext} from './context/MyContext.js'

function Plans(props){
    return(
        <MyContext.Consumer>
        {(context) => (
                
              <aside className="rightbar container">
                   {/* will be a panel with name and country */}
                  <h1> Plans</h1>
                    <p>In country : {props.name}</p>
                  <PlanLook name={props.name} id ={props.id} worldSeries = {props.worldSeries} typeOfUser = {context.state.currentUser} />
            </aside>
            )
        }
            </MyContext.Consumer>
    )
}
export default Plans;