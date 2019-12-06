import React from 'react';

import '../sidebarComponents/SideBar.css'
import '../App.css';
function FooterSubmit(props){
    return (
  <div className ="sidebar-footer ">
     <input type='submit' name="addNoteSubmit" className="btn btn-primary btn-lg btn-block" form ={props.for} value={props.text}/>
 </div>

    );
}
export default FooterSubmit;
