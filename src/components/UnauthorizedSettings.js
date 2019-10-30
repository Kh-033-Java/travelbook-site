import React from 'react'
import './App.css';
function UnSettings(props){
const authorize=()=>{
localStorage.setItem("token","sth");
}
    return(
            <div className="settings">
         <div className="authorize1 container header-text">
             <div>Log in</div>
             <button onClick={authorize}>authorize</button>
         </div>
    <div className="authorize2 container header-text">Registration</div>
    </div>
       )
    }

export default UnSettings;