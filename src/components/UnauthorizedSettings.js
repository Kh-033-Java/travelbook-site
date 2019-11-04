import React from 'react'
import './App.css';
function UnSettings(props){
const authorize=()=>{
localStorage.setItem("token","ivanmalik");
}
    return(
            <div className="settings">
         <div className="authorize1  header-text">
             <div>Log in</div>
             <button onClick={authorize}>authorize</button>
         </div>
    <div className="authorize2  header-text">Registration</div>
    </div>
       )
    }

export default UnSettings;