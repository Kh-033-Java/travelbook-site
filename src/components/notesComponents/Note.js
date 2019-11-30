import React, {Component} from "react";
import '../App.css';
import Header from "../sidebarComponents/SidebarHeader";
import "../sidebarComponents/SideBar.css";
import NoteMain from "./NoteMain";
import isAuthorized from '../checker/authorizationChecker'
import FooterWithEdit from '../sidebarComponents/FooterWithEdit'
import axios from 'axios'
import {getLogin} from "../../helpers/getLogin";
import FooterWithDelete from "../sidebarComponents/FooterWithDelete";
import {getJwt} from "../../helpers/jwt";
import FooterBackToNotes from "../sidebarComponents/FooterBackToNotes";
import FooterBackToNotesUnauthorized from "../sidebarComponents/FooterBackToNotesUnauthorized";

class Note extends Component{
constructor(props){
    super(props);
    this.state ={
     note :{}
    }
}

componentDidMount(){

            axios.get(`http://localhost:8080/country/notes/${this.props.noteId}`
    ).then(res=>{
        console.log(res.data);
     this.setState({note:res.data})
     }).catch(err=>console.log(err))
console.log(this.props.noteId)  
}
theSameLogin(login){
    console.log(localStorage.getItem('country'))
    return (login===getLogin())
}
    render(){
    
return(
    !isAuthorized()?
    <aside className="rightbar whole-comp-no-footer">
<Header title = {this.state.note.title} countryName={localStorage.getItem('country')}/>
<NoteMain note = {this.state.note}/>
</aside>
:( this.theSameLogin(this.state.note.login)?<aside className="rightbar whole-comp">{/*check login and node owner*/}
<Header title = {this.state.note.title} countryName={localStorage.getItem('country')}/>
<NoteMain note = {this.state.note}/>
 <div className="note-footer">
<FooterWithEdit text ="edit" path="/editNote"/>
<FooterBackToNotes text ="back to notes" path="/notes"/>
<FooterWithDelete text ="delete" path="/deleteNote" noteId={this.state.note.id}/>
 </div>
</aside>:<aside className="rightbar whole-comp-no-footer ">
<Header title = {this.state.note.title} countryName={localStorage.getItem('country')}/>
<NoteMain note = {this.state.note}/>
<FooterBackToNotesUnauthorized text ="back to notes" path="/notes"/>
</aside>
)
);
    }
}
export default Note;