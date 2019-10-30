import React,{Component} from "react";
import '../App.css';
import NotesHeader from "./NotesHeader";
import NoteMain from "./NoteMain";
import NotesFooter from "./NotesFooter";

class Note extends Component{
constructor(props){
    super();
    this.state ={
            title : 'title',
            countryName:"sth",
            city:"city",
            date :'date'
    }
}
componentDidMount(){
//in this component will be axios 
}
    render(){  
return(
    <aside className="rightbar note-whole-comp">
<NotesHeader title = {this.state.title} countryName={this.state.name}/>
<NoteMain city = {this.state.city} date ={this.state.date}/>
<NotesFooter/>
</aside>
);
    }
}
export default Note;