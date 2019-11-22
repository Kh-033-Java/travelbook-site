import React,{Component} from "react";
import NoteListElement from './allNotes/NoteListElement'

import '../App.css';
import './AllNotesPage.css';
//gets list of object of notes from props
class NotesWrapper extends Component{
    constructor(props){
        super(props)
        this.getNotes = this.getNotes.bind(this);
    }
  getNotes=()=>{
    const notes=[];
    console.log(this.props.notes);
    const tempList = this.props.notes;
    tempList.forEach(element =>
        notes.push(<NoteListElement note={element} setId={this.props.setId} countryName={this.props.countryName}/>
        ));

    return notes
}
render()
{  
    console.log(this.props.notes);
    return(
    <div className="list-el-container">
{this.getNotes()}

</div>
    )
}
}
export default NotesWrapper;
