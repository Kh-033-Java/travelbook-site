import React,{Component} from 'react';
import {NavLink} from 'react-router-dom'
import '../NoteStyling.css'
import '../../App.css';
import '../newNoteComponents/NewNote.css'
import '../AllNotesPage.css'
import NProperty from './NProperty'
import NoteOwner from '../NoteOwner';
import * as actions from '../../../actions/notesActions'


class NoteListElement extends Component{
  constructor(props){
    super(props)
    this.state={
      login:"account_login",
      describedCity:"VisitedCity"

    }
  }
    goToWholeNote(){
this.props.setId(this.props.note.id);
    }
    
     avEstimate(){
       let av = (this.props.note.peopleEstimate + this.props.note.cuisineEstimate + this.props.note.commonImpression + this.props.note.pricesEstimate)/4;
       let res = (Math.floor(av*100)/100);
      return res;
    }
    render()
{return(

    <NavLink className="nav-link list-el-container list-note-el" to="note" onClick={this.goToWholeNote.bind(this)}>
      <NoteOwner account={this.state.login} style_="owner-list-notes note-owner-gen"/>
      <Estimation grade={this.avEstimate.bind(this)}/>
      <NProperty positn="property1  prop" type ="Title" text ={this.props.note.title}/>
      <NProperty positn="property2  prop" type="City" text ={this.props.note.describedCity}/>
      <div className="small-description">
        <div >{this.props.note.description}</div>
      </div>
        
    </NavLink>
)
}
}
export default NoteListElement;
function Estimation(props){

  return(
    <div className="gen-grade"><div className="grade">{props.grade()}</div></div>
  )
}