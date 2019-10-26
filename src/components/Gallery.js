import React,{Component} from "react";
import './App.css';
import axios from 'axios';

class Gallery extends Component{
    constructor(props){
        super();
        this.state = {
            photos :[{}],
            validCountry:true
        }
            }
      componentDidMount() {
        let endpoint= `http://localhost:8080/country/${this.props.name}/photos`;
        axios.get(endpoint)
        .then(res => {
         this.setState({ photos:res.data,validCountry:true });
          console.log(res.data);
        }).catch(error=>{
            console.log("error");
            console.log(error);
            this.setState({
              validCountry:false
            });
        })
        console.log("photots"+this.state.photos);
    }

render(){
  
    return(
<aside className="rightbar container">
    <h1>Gallery</h1>
<p>{this.props.name}</p>
<h1>photos</h1>
{this.state.photos?<p>{this.state.photos[0].link}</p>:<p>No such country</p>}
</aside>
    )
}
}
export default Gallery;