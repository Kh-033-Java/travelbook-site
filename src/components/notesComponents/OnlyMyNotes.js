import React from "react";
import '../App.css';

function OnlyMyNotes(props){

    return(
<div className="only-my-checkbox ">
<form name="onlyMyNotes">
<input type='checkbox' name='isMy' id="isMy" onClick={e=>props.funCheck(e)}></input>
<label htmlFor="isMy">only my notes</label>
</form>
</div>
    )
}
export default OnlyMyNotes;