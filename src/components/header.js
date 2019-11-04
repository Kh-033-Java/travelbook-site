import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link, NavLink, Redirect} from 'react-router-dom';
import './App.css';
import {LOGIN} from "../constants/constants";
import Search from "./Search";
import Settings from "./Settings";

function Header() {
        return (
            <header className="header">
                <div className="title container header-text">
                        <NavLink to="/travelbook">TravelBook
                        </NavLink>
                        </div>
                <Search/>
                <Settings/>
            </header>
        )
}

export default Header;