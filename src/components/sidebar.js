import React,{Component} from "react";
import './App.css';
import { BrowserRouter as Router, Route, Link, NavLink, Redirect } from 'react-router-dom';

function SideBar(props){
    return(
<aside className="rightbar container">
<p>{props.id}</p>

</aside>
    )
}
export default SideBar;