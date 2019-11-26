import React,{Component} from 'react';
import './NoteStyling.css'
import '../App.css';
import { Carousel } from 'react-responsive-carousel';
import   'react-responsive-carousel/lib/styles/carousel.min.css';
class NotePhotos extends Component{
constructor(props){
    super(props)
  this.getNotes = this.getNotes.bind(this)
}
getNotes=()=>{
    const notes=[];
    console.log(this.props.photos);
    const tempList = this.props.photos;
    tempList.forEach(e=>notes.push(<div className="car-img">
    <img src={e} alt=""/>
    </div>));
    console.log(notes);
    return notes
}
componentDidMount(){

}

render(){
    return (
  <div className ="note-photos">
      <div className="title-note">Photos</div>
      <div  className="carouseel">
   <Carousel  showArrows={true} showThumbs={false} dynamicHeight={true} dynamicWidth={true}>
  { this.props.photos ? this.getNotes() : null }
    
   </Carousel>
   </div>
          </div>

    );
}
}
export default NotePhotos;
