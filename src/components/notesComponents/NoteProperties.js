import React from 'react';
import './NoteStyling.css'
import '../App.css';
function NotesProperties(props){

    return (
<React.Fragment>
    <div className ="note-property-city note-property city-field">
    <label for="date-note">City</label><input type ="text"
                                              value={props.describedCity} name="propscity" readOnly/>
    </div>
    <div className ="note-property-date note-property date-field">
    <label for="date-note">Date</label>
    <input type ="text" value={props.date} name="propsdate" readOnly/>
         
    </div>
</React.Fragment>

    );
}
export default NotesProperties;
