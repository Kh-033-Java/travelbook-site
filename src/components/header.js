import React, {Component} from "react";
import {BrowserRouter as Router, NavLink} from 'react-router-dom';
import Search from './Search.js'
import './App.css';
import Settings from "./Settings.js";
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
                <AllPlansPageButton/>
            </header>

        )
    }
}

export default Header;