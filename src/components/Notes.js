import React from "react";
import './App.css';
import * as am4core from "@amcharts/amcharts4/core";
function Notes(props){
function addAndFill(){
  props.worldSeries.getPolygonById(props.id).fill =am4core.color("#67f58d");

}
    return(
<aside className="rightbar container">
    <h1>InNotes</h1>
<p>{props.name}</p>
<button onClick={addAndFill}>Add Note</button>
</aside>
    )
}
export default Notes;