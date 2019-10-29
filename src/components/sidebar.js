import React, {Component} from "react";
import './App.css';
import {BrowserRouter as Router, Route, Link, NavLink, Redirect} from 'react-router-dom';

class SideBar extends Component {
    constructor(props) {
        super();

    }

    render() {
        return (
            <aside className="rightbar container">
                <p>{this.props.id}</p>
                <NavLink to="/notes">
                    To Notes
                </NavLink>
                <br/>
                <NavLink to="/gi">
                    To General Info
                </NavLink>
            </aside>
        )
    }
}

export default SideBar;