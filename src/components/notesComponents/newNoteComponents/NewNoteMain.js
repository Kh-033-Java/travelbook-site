import React from 'react';
import '../NoteStyling.css'
import './NewNote.css'
import City from '../../sidebarComponents/CityProperty'
import '../../App.css';
import"../../sidebarComponents/SideBar.css";

function NewNoteMain(props){
    return (
        
                 <form name="addNote" id="addNote" className="main-sidebar  main-comp-newnote">
                 <div className="name-field ">
                 <label for="name-note">Name of the note</label><input type="text" name ="name-note" />
                    </div>
                    <City style_class = "city-field" countryName={props.countryName}/>
                    <div className="date-field ">
                 <label for="date-note">date</label><input type="date" value="2019-12-01"   name ="date-note" className="date-in"/>
                    </div>
                    <div className="description container">
                        <textarea placeholder="describe your trip" name="description"/> 
                        
                    </div>
               </form>
                  );
}

export default NewNoteMain;


function InputForm(props){
    return (
        <div className={props.st}>
        <label for={props.fieldName}>Имя</label><input type="text" />
        </div>
    )
}