import React from 'react';
import '../notesComponents/NoteStyling.css'
import '../App.css';
function SidebarHeader(props){
    return (
       <React.Fragment>
<div className ="note-title container">{props.title}</div>
<div className ="note-country container">{props.countryName}</div>
</React.Fragment>
    );
}
export default SidebarHeader;
