import React from "react";
import './App.css';
function Plans(props){
    return(
<aside className="rightbar container">
    <h1>Plans</h1>
<p>{props.name}</p>
</aside>
    )
}
export default Plans;