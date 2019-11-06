import React from 'react';
import './NoteStyling.css'
import '../App.css';
import './newNoteComponents/NewNote.css'
function NotesEstimations(props){

    return (
          <div id ="show-est"className ="set-estimations ">
              <p className="title-note est-title">Estimations</p>
               <div  className="label-stars people-l ">people</div>
               <Estimate type="people" stars ={props.people} cl =" one-est"/>
               <div  className="label-stars cuisine-l ">cuisine</div>
               <Estimate type="cuisine" stars ={props.cuisine} cl =" one-est"/>
               <div  className="label-stars impression-l ">general impression</div>
               <Estimate type="impression" stars ={props.impression} cl =" one-est"/>
               <div  className="label-stars prices-l ">prices</div>
               <Estimate type="prices" stars ={props.prices} cl =" one-est"/>
          </div>

    );
}
export default NotesEstimations;

function Estimate(props){
    return (
        <div className={props.type}>
                 <div className="feedback2 ">
                <div className="rating2">
                  {printStars(props.stars,props)}
                 </div>
                </div>
                </div>
    
    );
}
const  printStars = (quantity,props)=>{
    const stars = [];
     for(let i =0;i<quantity;i++)
     stars.push(  
     <label htmlFor={props.type + "5"} className="starL"></label>
     );
     return stars;
  }