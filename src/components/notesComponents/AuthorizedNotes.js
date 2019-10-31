import React,{Component} from "react";
import '../App.css';
import NotesWrapper from "./NotesWrapper.js";
import OnlyMyNotes from "./OnlyMyNotes";
import './AllNotesPage.css';


class AuthNotes extends Component{
     
      render(){
    return(
             <div className="list-main-auth main-sidebar container">
            <OnlyMyNotes className="only-my-checkbox container"/>
          <NotesWrapper classWr={"allNotes container"} setId={this.props.setId}/>
             </div>     
                )
      }
}

export default AuthNotes;