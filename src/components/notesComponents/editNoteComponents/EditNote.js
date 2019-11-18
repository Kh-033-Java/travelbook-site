import React from "react";
import '../../App.css';
import Header from "../../sidebarComponents/SidebarHeader";
import "../../sidebarComponents/SideBar.css";
import EditNoteMain from "./EditNoteMain.js";
import FooterSubmit from "../../sidebarComponents/FooterSubmit";

function EditNote(props){
 
return(
     <aside className="rightbar whole-comp ">
<Header title = "Edit Note" countryName={localStorage.getItem('country')}/>
<EditNoteMain countryName={localStorage.getItem('country')} noteId = {props.noteId}/>
<FooterSubmit text ="edit note" path="notes" for="editNote"/>
</aside>
);
    }
export default EditNote;