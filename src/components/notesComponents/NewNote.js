import React from "react";
import '../App.css';
import Header from "../sidebarComponents/SidebarHeader";
import"../sidebarComponents/SideBar.css";
import NewNoteMain from "./NewNoteMain";
import FooterSubmit from '../sidebarComponents/FooterSubmit'


function NewNote(props){
 
return(
 <aside className="rightbar whole-comp ">
<Header title = "New Note" countryName="countryName"/>
<form name="addNote" className="main-sidebar container">
<NewNoteMain />
</form>
<FooterSubmit text ="edit note" for="addNote"/>
</aside>
);
    }

export default NewNote;