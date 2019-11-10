
import React,{Component} from "react";
import '../App.css';
import NotesWrapper from "./NotesWrapper.js";
import './AllNotesPage.css';
import axios from 'axios'
import {getJwt} from "../../helpers/jwt";


class UnAuthNotes extends Component{
    constructor(props){
        super(props);
        this.state = {
            notes:[]
        }
    }
    componentDidMount(){

        axios.get(`http://localhost:8080/country/${this.props.countryName}/notes`).then(res=>{
           console.log(res.data);
        this.setState({...this.state,notes:res.data})
        })
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
