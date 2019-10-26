import React,{Component} from "react";
import './App.css';
import { BrowserRouter as Router, Route, Link, NavLink, Redirect } from 'react-router-dom';

function SideBar(props){
    return(
<aside className="rightbar container">
<p>{props.id}</p>
<NavLink to="/notes">
         To Notes
        </NavLink>
</aside>
    )
}
export default SideBar;