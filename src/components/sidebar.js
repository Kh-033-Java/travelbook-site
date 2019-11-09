import React,{Component} from "react";
import './App.css';
import Loading from "./Loading";

function SideBar(props){
    return(
<aside className="rightbar container">
<h1>In country : {props.name}</h1>
</aside>
    )
}
export default SideBar;