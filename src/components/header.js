import React, {Component} from "react";
import {BrowserRouter as Router, NavLink} from 'react-router-dom';
import Search from './Search.js'
import './App.css';
import Settings from "./Settings.js";
import Dropdown from '../components/userMenu/Dropdown'
import DropdownItem from '../components/userMenu/DropdownItem'
class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="header">
                <NavLink to="/travelbook">
                <div className="title ">TravelBook</div>
                </NavLink>
                <Search setMap={this.props.setMap}/>
                <Settings/>
              
            </header>

        )
    }
}

export default Header;