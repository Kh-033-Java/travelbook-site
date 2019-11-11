import React,{Component} from "react";
import '../App.css';
import Header from "../sidebarComponents/SidebarHeader";
import"../sidebarComponents/SideBar.css";
import NoteMain from "./NoteMain";
import * as actions from '../../actions/notesActions'
import isAuthorized from '../checker/authorizationChecker'
import FooterWithEdit from '../sidebarComponents/FooterWithEdit'
import axios from 'axios'
import {getJwt} from "../../helpers/jwt";


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
    return (login===localStorage.getItem('login'))
}
    render(){
    
return(
    !isAuthorized()?
    <aside className="rightbar whole-comp-no-footer">
<Header title = {this.state.note.title} countryName={localStorage.getItem('country')}/>
<NoteMain note = {this.state.note}/>
</aside>
:( this.theSameLogin(this.state.note.login)?<aside className="rightbar whole-comp ">{/*check login and node owner*/}
<Header title = {this.state.note.title} countryName={localStorage.getItem('country')}/>
<NoteMain note = {this.state.note}/>
<FooterWithEdit text ="edit note" path="/editNote"/>
</aside>:<aside className="rightbar whole-comp-no-footer ">
<Header title = {this.state.note.title} countryName={localStorage.getItem('country')}/>
<NoteMain note = {this.state.note}/>
</aside>
)
);
    }
}
export default Note;