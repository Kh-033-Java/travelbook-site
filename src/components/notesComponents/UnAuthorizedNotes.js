
import React,{Component} from "react";
import '../App.css';
import NotesWrapper from "./NotesWrapper.js";
import './AllNotesPage.css';


class UnAuthNotes extends Component{
    constructor(props){
        super(props);
        this.state = {
            notes:[]
        }
    }
    componentDidMount(){
        //will be axios
    }
   render(){
    return(
         <div className = "list-main-unauth  main-sidebar">
<NotesWrapper classWr={"allNotes container"}  setId={this.props.setId} countryName={this.props.name} notes={this.state.notes}/>
</div>
             )
}
}
export default UnAuthNotes;
