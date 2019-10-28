import React from 'react'
import './App.css';
import {MyContext} from './context/MyContext.js'
function UnSettings(props){

    return(
        <MyContext.Consumer>
        {(context) => (
        <div className="settings">
         <div className="authorize1 container header-text">
             <div>Log in</div>
             <button onClick={context.changeUser}>authorize</button>
         </div>
    <div className="authorize2 container header-text">Registration</div>
    </div>
       )
    }
        </MyContext.Consumer>
    )
}
export default UnSettings;