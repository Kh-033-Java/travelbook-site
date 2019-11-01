import React from "react";
import Search from './Search.js'
import './App.css';
import Settings from "./Settings.js";


function Header(){
    return(
<header className="header">
             <div className ="title ">TravelBook</div>
                <Search/>
               <Settings/>   
                </header>
    )
}

export default Header;