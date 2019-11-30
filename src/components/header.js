import React, {Component} from "react";
import {BrowserRouter as Router, NavLink} from 'react-router-dom';
import Search from './Search.js'
import './App.css';

import Settings from "./Settings.js";
import Dropdown from '../components/userMenu/Dropdown'
import DropdownItem from '../components/userMenu/DropdownItem'


import AllPlansPageButton from "../components/planComponents/AllPlansPageButton"

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="header">

                <div className="title ">TravelBook</div>
                <Search setMap={this.props.setMap}/>
                <Settings/>
                <Dropdown label="Menu">

                    <NavLink to="/friends" className = "dropdown-option">
                    <DropdownItem label="Friens"/>
                    </NavLink>


                    <NavLink to="/alluserplans" className = "dropdown-option">
                    <DropdownItem label="My Plans"/>
                    </NavLink>

                    <NavLink to="/settings" className = "dropdown-option">
                    <DropdownItem label="Settings"/>
                    </NavLink>
                </Dropdown>
            </header>

        )
    }
}

export default Header;