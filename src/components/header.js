import React,{Component} from "react";
import {BrowserRouter as Router,Route,Link,NavLink} from 'react-router-dom';
import './App.css';


class Head extends Component{
    state ={
        login:"LogIn",
        registration:"Registration",
    }
    
render(){
    return(
<header className="header">
    <div className ="title container header-text">TravelBook</div>
    <div className="search container">
 
        <form name ="myForm">
            <input type= "text" placeholder="Search"/>
                    </form>
    </div>
    <div className="authorize1 container header-text">{this.state.login}</div>
    <div className="authorize2 container header-text">{this.state.registration}</div>
    
</header>
    )
}


}
export default Head;