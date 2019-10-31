import React from "react";
import '../App.css';

function OnlyMyNotes(props){
    return(
<div>
<form name="onlyMyNotes">
<input type='checkbox' name='isMy' id="isMy"></input>
<label htmlFor="isMy">only my notes</label>
</form>
</div>
    )
}
export default OnlyMyNotes;