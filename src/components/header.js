import React from "react";
import Search from './Search.js'
import {MyContext} from './context/MyContext.js'
import './App.css';
import Settings from "./Settings.js";


function Header(){

    return(
<header className="header">
    <div className ="title container header-text">TravelBook</div>
  <Search/>
  <MyContext.Consumer>
        {(context) => (
             <Settings userType={context.state.currentUser}/>   
              )
        }
            </MyContext.Consumer>
    </header>
    )
}

export default Header;