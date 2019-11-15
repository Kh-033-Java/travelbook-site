import React from 'react';
import {NavLink} from 'react-router-dom';
import './App.css';
import VisitedCountryCheckBox from './VisitedCountryCheckBox.js';


function Icons(props) {


    return (
        <div className="icons">
            <div className="icon-comp2 ">
                <NavLink to="/notes">
                    <button className="icon-button2 icons-button"></button>
                </NavLink>
            </div>
            <div className="icon-comp3 ">
                <NavLink to="/plans">
                    <button className="icon-button3 icons-button"></button>
                </NavLink>
            </div>
            <div className="icon-comp1 ">
                <NavLink to="/generalInfo">
                    <button className="icon-button1 icons-button"></button>
                </NavLink>
            </div>
            <div className="icon-comp4">
                <NavLink to="/gallery">
                    <button className="icon-button4 icons-button"></button>
                </NavLink>
            </div>
            <div className="icon-comp5">
                <NavLink to="/rating">
                    <button className="icon-button5 icons-button"></button>
                </NavLink>
            </div>
        </div>
    );
}

export default Icons;
