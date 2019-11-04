import React from 'react';
import './NoteStyling.css'
import '../App.css';
import { Carousel } from 'react-responsive-carousel';
import   'react-responsive-carousel/lib/styles/carousel.min.css';
function NotePhotos(props){

    return (
  <div className ="note-photos container">
      <div className="title-note">Photos</div>
      <div  className="carouseel">
   <Carousel  showArrows={true} showThumbs={false} dynamicHeight={true} dynamicWidth={true}>
       {props.photos.map(photo=> 
             <div className="car-img">
           <img src={photo} alt=""/>
       </div>
       )}
   </Carousel>
   </div>
          </div>

    );
}
export default NotePhotos;
