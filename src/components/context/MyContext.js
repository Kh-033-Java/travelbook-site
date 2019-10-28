import React,{Component} from 'react';
import { Role } from './Role.js';

export const MyContext = React.createContext();

class MyProvider extends Component{
state={
    currentUser : Role.unauthorized
}
componentDidUpdate(prevProps, prevState) {
    console.log("prev state"+prevState.currentUser);
    if (this.state.value !== prevState.value) {
        console.log(prevState.currentUser);
    }
  }
render(){
    return(
        <MyContext.Provider value={{
            state: this.state,
            changeUser : ()=>{
                this.setState({
                    currentUser :Role.user
                }
                )
            }
        }}>
            {this.props.children}
    </MyContext.Provider>
    )
}
}
export function isAuthorized(role) {
    console.log(role);
  if(role===Role.user)
  return true;
  else return false;
 }
 
export default MyProvider;
