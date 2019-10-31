import React,{Component} from "react";
import '../App.css';
import Header from "../sidebarComponents/SidebarHeader";
import NoteMain from "./NoteMain";
import * as actions from '../../actions/notesActions'


class Note extends Component{
constructor(props){
    super(props);
    this.state ={
        //temporary
           note: {
               title:"",
               city :"",
               date:"",
               photos :{}
           }
    }
}
componentDidMount(){
    actions.getNoteById(this.props.countryName,this.props.noteId).then(res=>
        this.setState({notes : res})
        );
}
    render(){  
return(
    <aside className="rightbar note-whole-comp-no-footer container">
<Header title = {this.state.note.title} countryName={this.props.name}/>
<NoteMain note = {this.state.note}/>
</aside>
);
    }
}
export default Note;