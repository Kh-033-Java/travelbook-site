import React,{Component} from "react";
import './App.css';
import * as actions from '../actions/galleryActions.js'
import {MyContext} from './context/MyContext.js'
import * as auth from './context/MyContext.js';

class Gallery extends Component{
    constructor(props){
        super();
        this.state = {
            photos :[{}],
               }
            }
         componentDidMount() {
        actions.getPublicUnAuthorized(this.props.name).then(res =>{
            console.log(res.data);
            this.setState({ photos:res,validCountry:true });
        }).catch(error =>{
            console.log(error);
           });
    }

render(){
      return(
        <MyContext.Consumer>{context =>(
<aside className="rightbar container">
    <h1>Gallery</h1>
<p>{this.props.name}</p>
<h1>photos</h1>
{this.state.photos?<p>{this.state.photos[0].link}</p>:<p>No such country</p>}
{auth.isAuthorized(context.state.currentUser)?<button>only my gallery</button>:<React.Fragment></React.Fragment>}
</aside>)}
</MyContext.Consumer>
    )
}
}
export default Gallery;