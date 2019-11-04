import React from "react";
import '../App.css';
import {NavLink} from 'react-router-dom';

function PlansWrapper(props){

    return(
        <div className = 'plans-wraper container'>
            <h4>Title: {props.title}</h4>
            <React.Fragment>
            <div className ="plan-owner ">
                <div className="account-label">{props.login}</div>
            </div>
            <div className ="container plan-property-date plan-property">
                {props.date}
            </div>
            </React.Fragment>
            <React.Fragment>
                <div className ="container plan-property-cityFrom plan-property">
                    City from: {props.nameCityFrom}
                </div>
                <div className ="container plan-property-cityToGo plan-property">
                    City to: {props.nameCityFrom}
                </div>
            </React.Fragment>
            <React.Fragment>
                <div className ="container plan-property-budget plan-property">
                    Budget: {props.budgetMin} - {props.budgetMax}
                </div>
                <div className ="container plan-property-budget plan-property">
                    Transport: {props.transport}
                </div>
            </React.Fragment>
            <p>Amount of people: {props.amountOfPeople}</p>
            <div className="description container">{props.description}</div>

            <NavLink to = "/plan">
                <button type="button" class="plan-button">more...</button>
            </NavLink>

        </div>
    )
}
export default PlansWrapper;
