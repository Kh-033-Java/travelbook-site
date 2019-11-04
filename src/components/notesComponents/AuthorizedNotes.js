import React,{Component} from "react";
import '../App.css';
import NotesWrapper from "./NotesWrapper.js";
import OnlyMyNotes from "./OnlyMyNotes";
import ToAddFooter from "../sidebarComponents/ToAddFooter.js";
import './AllNotesPage.css';



class AuthNotes extends Component{
     
      render(){

    function addAndFill(){
        props.worldSeries.getPolygonById(props.id).fill =am4core.color("#67f58d");
      }
    

    return(
       <React.Fragment>
             <div className="list-main-auth main-sidebar ">
            <OnlyMyNotes />
          <NotesWrapper classWr={"allNotes container"} setId={this.props.setId}/>
             </div>   
             <ToAddFooter text="add note" path="newnote"/>
             </React.Fragment>
                )
      }
}

export default AuthNotes;