import React from "react";
import {BrowserRouter as Router, NavLink} from 'react-router-dom';
import Search from './Search.js'
import './App.css';
import Settings from "./Settings.js";


function Header() {
    return (
        <header className="header">
            <div className="title container header-text"><NavLink to="/travelbook">TravelBook
            </NavLink></div>
            <Search/>
            <Settings/>


        </header>
    )
}

export default Header;