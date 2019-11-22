import React,{Component} from "react";
import '../App.css';
import NotesWrapper from "./NotesWrapper.js";
import './AllNotesPage.css';
import axios from 'axios'
import Loading from "../Loading";

class UnAuthNotes extends Component{
    constructor(props){
        super(props);
        this.state = {
            notes:[],
            isLoading: true
        }
    }
    componentDidMount(){
        const isLoading = false;
        axios.get(`http://localhost:8080/country/${this.props.countryName}/notes`).then(res=>{
           console.log(res.data);
        this.setState({...this.state,notes:res.data})
        this.setState({isLoading})
        })
    }
   render() {
       const spinner = this.state.isLoading ? <Loading/> : null;
    return(
         <div className = "list-main-unauth  main-sidebar">
<NotesWrapper classWr={"allNotes note-container"}  setId={this.props.setId} countryName={this.props.name} notes={this.state.notes}/>
             {spinner}
</div>
             )
}
}
export default UnAuthNotes;
