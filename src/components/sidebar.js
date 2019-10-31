import React,{Component} from "react";
import './App.css';


function SideBar(props){
    return(
<aside className="rightbar container">
<p>{props.id}</p>

</aside>
    )
}
export default SideBar;