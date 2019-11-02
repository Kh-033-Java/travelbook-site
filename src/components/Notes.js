import React,{Component} from "react";
import './App.css';
import * as am4core from "@amcharts/amcharts4/core";
class Notes extends Component{
    constructor(props){
        super();
        this.addAndFill = this.addAndFill.bind(this);
    }
    addAndFill(){
        this.props.worldSeries.getPolygonById(this.props.id).fill =am4core.color("#67f58d");
    }
    render(){
        return(
            <aside className="rightbar container">
                <h1>InNotes</h1>
                <p>{this.props.name}</p>
                <button onClick={this.addAndFill}>Add Note</button>
            </aside>
        )
    }
}
export default Notes;
