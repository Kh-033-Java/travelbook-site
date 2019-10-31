import React,{Component} from "react";
import './App.css';
import axios from 'axios';

class Gallery extends Component{
    constructor(props){
        super();
        this.state = {
            photos :[{}]
        }
        this.getGallery = this.getGallery.bind(this);
       
      }
getGallery(){
    let endpoint= `http://localhost:8080/country/`+this.props.name + `/photos`;
    axios.get(endpoint)
    .then(res => {
      const photos = res.data;
      this.setState({ photos });
      console.log(res.data);
    })
    console.log("photots"+this.state.photos);
}
render(){
   this.getGallery();
    return(

<aside className="rightbar container">
    <h1>Gallery</h1>
<p>{this.props.name}</p>
<h1>photos</h1>

<p>{this.state.photos[0].link}</p>
</aside>
    )
}
}
export default Gallery;