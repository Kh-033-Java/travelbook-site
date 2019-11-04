import React from "react";
import {NavLink} from 'react-router-dom'
import NoteListElement from './allNotes/NoteListElement'
import '../App.css';
import './AllNotesPage.css';

function NotesWrapper(props){
function getNotes(){
    const notes=[];
    tempList.forEach(e=>notes.push(<NoteListElement/>));
    
    console.log(notes);
    return notes
}
    return(
<div className={props.classWr}>
<NavLink to="/notes">
   {/*} <div setId = {props.setId} ></div>{/*container with small description on click will be a function
    we will pass this function to the container with the state and on click the function in container will call
    ex:
    function setCurrentNodeId(){
        props.setId(this.state.id);

    }
    this function sets id to the main container so that when we go to "/notes" we pass the id of the note we wannns see
    */ }

</NavLink>
<NavLink to="/note">note</NavLink>
<div>
{getNotes()}
</div>
</div>
    )
}
export default NotesWrapper;
const  tempList = [{
    id: 1,
    title: "Lviv is nice",
    isPublic: true,
    description: "Was good and nice",
    dateOfVisiting: "2019-02-15",
    peopleEstimate: 5,
    pricesEstimate: 5,
    cuisineEstimate: 4,
    commonImpression: 5,
    describedCity: null,
    photoLink: null,
    public: true
},{
    id: 2,
    title: "Lviv is nice",
    isPublic: true,
    description: "Was good and nice",
    dateOfVisiting: "2019-02-15",
    peopleEstimate: 5,
    pricesEstimate: 5,
    cuisineEstimate: 4,
    commonImpression: 5,
    describedCity: null,
    photoLink: null,
    public: true
},{
    id: 3,
    title: "Lviv is nice",
    isPublic: true,
    description: "Was good and nice",
    dateOfVisiting: "2019-02-15",
    peopleEstimate: 5,
    pricesEstimate: 5,
    cuisineEstimate: 4,
    commonImpression: 5,
    describedCity: null,
    photoLink: null,
    public: true
},{
    id: 4,
    title: "Lviv is nice",
    isPublic: true,
    description: "Was good and nice",
    dateOfVisiting: "2019-02-15",
    peopleEstimate: 5,
    pricesEstimate: 5,
    cuisineEstimate: 4,
    commonImpression: 5,
    describedCity: null,
    photoLink: null,
    public: true
},{
    id: 5,
    title: "Lviv is nice",
    isPublic: true,
    description: "Was good and nice",
    dateOfVisiting: "2019-02-15",
    peopleEstimate: 5,
    pricesEstimate: 5,
    cuisineEstimate: 4,
    commonImpression: 5,
    describedCity: null,
    photoLink: null,
    public: true
},{
    id: 6,
    title: "Lviv is vert nice",
    isPublic: true,
    description: "Was good and nice",
    dateOfVisiting: "2019-02-15",
    peopleEstimate: 5,
    pricesEstimate: 5,
    cuisineEstimate: 4,
    commonImpression: 5,
    describedCity: null,
    photoLink: null,
    public: true
},{
    id: 7,
    title: "Lviv is not nice",
    isPublic: true,
    description: "Was good and nice",
    dateOfVisiting: "2019-02-15",
    peopleEstimate: 5,
    pricesEstimate: 5,
    cuisineEstimate: 4,
    commonImpression: 5,
    describedCity: null,
    photoLink: null,
    public: true
}];