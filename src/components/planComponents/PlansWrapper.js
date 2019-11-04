import React from "react";
import '../App.css';

function PlansWrapper(props){

    return(
        <div className = 'plans-wraper container'>
            <p>All Public plans</p>
            {props.plans.map(plans => (
                <p>{plans.title}</p>
                <p>User : {plans.userLoginCreator}  Date of travel: {plans.date}</p>
                <p>City from: {plans.nameCityFrom} City to: {plans.nameCityToGo}</p>
                <p>Budget: {plans.budgetMin} - {plans.budgetMax}     Transport: {plans.transport}</p>
                <p>Amount of people': {plans.amountOfPeople}</p>
                <p>{plans.description}</p>
            ))}
        </div>
    )
}
export default PlansWrapper;
