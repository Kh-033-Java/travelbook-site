import React from "react";
import * as am4core from "@amcharts/amcharts4/core";
import '../App.css';
import NotesWrapper from "./NotesWrapper.js";
import OnlyMyNotes from "./OnlyMyNotes";

function AuthNotes(props){
    function addAndFill(){
        props.worldSeries.getPolygonById(props.id).fill =am4core.color("#67f58d");
      }
      
    return(
        <React.Fragment>
            <OnlyMyNotes/>
          <NotesWrapper/>
        <button onClick={addAndFill}>Add Note</button>
        </React.Fragment>
    )
}

export default AuthNotes;