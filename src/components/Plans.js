import React,{Component} from "react";
import './App.css';
class Plans extends Component{
    constructor(props){
        super();
        
      }

render(){
    return(
<aside className="rightbar container">
    <h1>Plans</h1>
<p>{this.props.name}</p>
</aside>
    )
}
}
export default Plans;