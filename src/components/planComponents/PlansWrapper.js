import React from "react";
import '../App.css';
import './AllPlansPage.css'
import {NavLink} from 'react-router-dom';

function PlansWrapper(props){

    return(
        <div className = 'plans-wraper container'>
            <div className ="title">
                Title: {props.title}
                </div>
            <div className ="plan-owner">
                Author: {props.login}
            </div>
            <div className ="plan-property-date">
                Date of travel: {props.date}
            </div>
                <div className ="plan-property-cityFrom">
                    City from: {props.nameCityFrom}
                </div>
                <div className ="plan-property-cityToGo">
                    City to: {props.nameCityToGo}
                </div>
                <div className ="plan-property-budget">
                    Budget: {props.budgetMin} - {props.budgetMax}
                </div>
                <div className ="plan-property-transport">
                    Transport: {props.transport}
                </div>
            <div className="amount-of-people">Amount of people: {props.amountOfPeople}</div>
            <div className="description">{props.description}</div>
            <div className="button">
            <NavLink to = "/plan">
                <button type="button">more...</button>
            </NavLink>
            </div>
        </div>
    )
}
export default PlansWrapper;
