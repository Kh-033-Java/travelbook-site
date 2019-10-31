import React from "react";
import * as am4core from "@amcharts/amcharts4/core";
import '../App.css';
import NotesWrapper from "./NotesWrapper.js";
import OnlyMyNotes from "./OnlyMyNotes";
import ToAddFooter from '../sidebarComponents/ToAddFooter.js';

function AuthNotes(props){
    function addAndFill(){
        props.worldSeries.getPolygonById(props.id).fill =am4core.color("#67f58d");
      }
      
    return(
             <div className="listnotes-main-comp main-sidebar container">
            <OnlyMyNotes/>
          <NotesWrapper setId={props.setId}/>
                        </div>     
        
       
    )
}

export default AuthNotes;