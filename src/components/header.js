import React,{Component} from "react";
import {BrowserRouter as Router, NavLink} from 'react-router-dom';
import Search from './Search.js'
import './App.css';
import Settings from "./Settings.js";

class Header extends Component{

    constructor(props){
        super(props);
        console.log('props1', props);
        console.log(props.setMap());
    }

 render(){
    return(
<header className="header">

             <div className ="title ">TravelBook</div>
                <Search setMap = {this.props.setMap}/>
               <Settings/>   
                </header>

    )
}
}
export default Header;