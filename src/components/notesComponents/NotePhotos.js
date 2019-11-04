import React from 'react';
import './NoteStyling.css'
import '../App.css';
import { Carousel } from 'react-responsive-carousel';
import   'react-responsive-carousel/lib/styles/carousel.min.css';
import logo from '../icons/icon3.jpg'
function NotePhotos(props){

    return (
  <div className ="note-photos container">
   <Carousel  showArrows={true} >
   <div>
                    <img src={logo} alt=""/>
                </div>
                <div>
                    <img src={logo}  alt="" />
                </div>
   </Carousel>
          </div>

    );
}
export default NotePhotos;
