import { Route} from 'react-router-dom';
import React, {useState} from 'react';
import './App.css';
import SideBar from "./sidebar.js";
import Head from "./header.js";
import Map from "./Map.js";
import Notes from "./Notes.js";
import Plans from "./Plans.js";
import Gallery from "./gallery/Gallery.js";
import Icons from './Icons';
import UserGeneralInformation from "./user-page/UserGeneralInformation";
import Note from './notesComponents/Note.js';
import NewNote from './notesComponents/newNoteComponents/NewNote.js';
import EditNote from './notesComponents/editNoteComponents/EditNote';
import MyPhotos from "./gallery/MyPhotos";
import GeneralPhotos from "./gallery/GeneralPhotos";
import GeneralInfo from "./GeneralInfo.js";



function Main(props){
   const [state,setState] = useState({ });
    function regionClicker(ev,worldSeries) {
      console.log(ev.target.dataItem.dataContext);
         setState({
        nameCountry : ev.target.dataItem.dataContext.name,
        idCountry: ev.target.dataItem.dataContext.id,
        map:worldSeries,
        idNote:49
      })
      localStorage.setItem('country',ev.target.dataItem.dataContext.name);
      localStorage.setItem('id',ev.target.dataItem.dataContext.id)
      localStorage.setItem('world',worldSeries)

   }
   function setNoteID(id){
      console.log("got"+id);
      setState({
         idNote:id
      })
   }

  return (
      <div className = {props.gridClass}>
    <Head/>
    <Map clicker={regionClicker}/>
    <Route path = "/travelbook">
          </Route>
    <Route path = "/map">
    <Icons countryName={state.nameCountry} id={state.idCountry} worldSeries={state.map}></Icons>
        <SideBar name={state.nameCountry} worldSeries = {state.map}/>
     </Route>
          <Route path = "/generalInfo">
              <Icons></Icons>
              <GeneralInfo name={state.nameCountry} worldSeries = {state.map}/>
          </Route>
       <Route path = "/notes">
        <Icons></Icons>
     <Notes name={state.nameCountry} id={state.idCountry} worldSeries = {state.map} setId={setNoteID} />
     </Route>
          <Route path="/gallery">
              <Icons></Icons>
              <Gallery name={state.nameCountry}/>
          </Route>
     <Route path = "/plans">
        <Icons></Icons>
     <Plans name={state.nameCountry} id={state.idCountry} worldSeries = {state.map}/>
     </Route>

          <Route
              path="/my-photos"
              render={props => <MyPhotos {...props}/>}
          />
          <Route
              path="/general-photos"
              render={props => <GeneralPhotos {...props}/>}
          />
     <Route path = "/note">
        <Icons></Icons>
     <Note countryName={state.nameCountry} id={state.idCountry} worldSeries = {state.map} noteId ={state.idNote} />
     </Route>
     <Route path = "/newnote">
        <Icons></Icons>
     <NewNote countryName={state.nameCountry} id={state.idCountry} worldSeries = {state.map} noteId ={state.idNote} />
     </Route>
     <Route path = "/editNote">
        <Icons></Icons>
     <EditNote countryName={state.nameCountry} id={state.idCountry} worldSeries = {state.map} noteId ={state.idNote} />
     </Route>

     <Route path="/main">
                <Icons></Icons>
                <UserGeneralInformation/>
            </Route>

     </div>
  );

}




export default Main;