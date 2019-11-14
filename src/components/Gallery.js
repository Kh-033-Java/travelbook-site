import React,{Component} from "react";
import './App.css';
import * as actions from '../actions/galleryActions.js'
import isAuthorized from './checker/authorizationChecker'

class Gallery extends Component{
    constructor(props){
        super(props);
        this.state = {
            photos : [{}],
                     validCountry:false
               }
            }
         componentDidMount() {

        actions.getPublicUnAuthorized(this.props.name).then(res =>{
            console.log(res);
            this.setState({ photos:res,validCountry:true });
        }).catch(error =>{
            console.log(error);
            this.setState({validCountry:false });
           });
    }

render(){
      return(
       <aside className="rightbar container">
    <h1>Gallery</h1>
<p>{this.props.name}</p>
<h1>photos</h1>
<React.Fragment>
{/*<GetPhotos photos={this.state.photos}></GetPhotos>*/}
{isAuthorized()?<button>only my gallery</button>:<React.Fragment></React.Fragment>}
</React.Fragment>
</aside>
)
      }
}
export default Gallery;

export function GetPhotos(props){
    let  empty =Object.keys(props.photos).length === 0;
    console.log("empty "+empty)
if(!empty)
{
return (<p>{props.photos[0].link}</p>)
}
else {
return (<p>No such country</p>)}
}
