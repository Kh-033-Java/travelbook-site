import React,{Component} from "react";
import '../App.css';
import NotesHeader from "./NotesHeader";
import NoteMain from "./NoteMain";
import * as actions from '../../actions/notesActions'
import NotesFooter from "./NotesFooter";

class Note extends Component{
constructor(props){
    super();
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
    <aside className="rightbar note-whole-comp">
<NotesHeader title = {this.state.note.title} countryName={this.props.name}/>
<NoteMain note = {this.state.note}/>
<NotesFooter/>
</aside>
);
    }
}
export default Note;