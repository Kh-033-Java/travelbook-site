import React,{Component} from "react";
import '../App.css';
import Header from "../sidebarComponents/SidebarHeader";
import"../sidebarComponents/SideBar.css";
import NoteMain from "./NoteMain";
import * as actions from '../../actions/notesActions'
import isAuthorized from '../checker/authorizationChecker'
import FooterWithEdit from '../sidebarComponents/FooterWithEdit'


class Note extends Component{
constructor(props){
    super(props);
    this.state ={
        //temporary
           note: {
               title:"title",
               city :"city",
               date:"date",
               photos :[]

           }
    }
}
componentDidMount(){
    actions.getNoteById(this.props.countryName,/*this.props.noteId*/49).then(res=>{
        console.log(res);
        this.setState({note : res[0]})
    })
    
      
}
    render(){  
return(
    !isAuthorized()?
    <aside className="rightbar whole-comp-no-footer ">
<Header title = {this.state.note.title} countryName={this.props.countryName}/>
<NoteMain note = {this.state.note}/>
</aside>
: <aside className="rightbar whole-comp ">
<Header title = {this.state.note.title} countryName={this.props.countryName}/>
<NoteMain note = {this.state.note}/>
<FooterWithEdit text ="edit note"/>
</aside>
);
    }
}
export default Note;