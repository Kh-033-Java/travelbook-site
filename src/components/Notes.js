import React from "react";
import './App.css';
import NotesLook from "./notesComponents/NotesLook";

function Notes(props){
    return(
                        
              <aside className="rightbar container">
                   {/* will be a panel with name and country */}
                  <h1>In Notes</h1>
                    <p>In country : {props.name}</p>
                <NotesLook name={props.name} id ={props.id} worldSeries = {props.worldSeries} />
            </aside>
         )
}
export default Notes;

