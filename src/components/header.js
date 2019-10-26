import React,{Component} from "react";
import {BrowserRouter as Router,Route,Link,NavLink} from 'react-router-dom';
import Search from './Search.js'
import UnSettings from './UnauthorizedSettings.js'
import './App.css';


class Header extends Component{
   
    state ={
        login:"LogIn",
        registration:"Registration",
    }
    
render(){
    return(
<header className="header">
    <div className ="title container header-text">TravelBook</div>
  <Search/>
  <UnSettings login ="Log In" registration ="Registration"></UnSettings>
    </header>
    )
}


}
export default Header;