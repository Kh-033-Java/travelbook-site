import React,{Component} from 'react';
import {NavLink,Redirect} from 'react-router-dom'
import '../NoteStyling.css'
import '../../App.css';
import '../newNoteComponents/NewNote.css'
import '../AllNotesPage.css'
import NProperty from './NProperty'
import NoteOwner from '../NoteOwner';



class NoteListElement extends Component{
  constructor(props){
    super(props)
    this.state={
   clicked:false

    }
    this.setID = this.setID.bind(this);
  }
setID(e){
  e.preventDefault();
  if(!this.props.note){ return;}
  console.log(this.props.note)
  if(this.props.note.id){
  this.props.setId(this.props.note.id)
  this.setState({clicked:true});
  }


}
    
     avEstimate(){
       let av = (this.props.note.peopleEstimate + this.props.note.cuisineEstimate + this.props.note.commonImpression + this.props.note.pricesEstimate)/4;
       let res = (Math.floor(av*100)/100);
      return res;
    }
    render()
{if(this.state.clicked) {
    const { note } = this.props.note;
    localStorage.setItem("note", note);
    console.log(note);
    return <Redirect to="/note"/>
}
  return(

    
    <div  className="list-el-container list-note-el" onClick={this.props.isReadOnly ? console.log("read only") : e=>this.setID(e)}>
        
      <NoteOwner account={this.props.note.login} logo={this.props.note.linkToUserAvatar} style_="owner-list-notes note-owner-gen" onClick={this.setID}/>
      <Estimation grade={this.avEstimate.bind(this)}/>
      <NProperty positn="property1  prop" type ="Title" text ={this.props.note.title}/>
      <NProperty positn="property2  prop" type="City" text ={this.props.note.describedCity}/>
      <div className="small-description">
        <div >{this.props.note.description}</div>
      </div>
     </div>
  
)
}
}
export default NoteListElement;
function Estimation(props){

  return(
    <div className="gen-grade"><div className="grade">{props.grade()}</div></div>
  )
}