import React from "react";
import '../App.css';
import {NavLink} from 'react-router-dom';

function PlansWrapper(props){

    return(
        <div className = 'plans-wraper container'>
            <p>All Public plans</p>
                <div className = 'one-plan container' >
                    <div>{plan.title}</div>
                    <div>User : {plan.userLoginCreator}  Date of travel: {plan.date}</div>
                    <div>City from: {plan.nameCityFrom} City to: {plan.nameCityToGo}</div>
                    <div>Budget: {plan.budgetMin} - {plan.budgetMax}     Transport: {plan.transport}</div>
                    <div>Amount of people: {plan.amountOfPeople}</div>
                    <div>{plan.description}</div>
                    <NavLink to = "/editplan">
                    <button type="button" class="plan-button">more...</button>
                    </NavLink>
                </div>
        </div>
    )
}
export default PlansWrapper;
