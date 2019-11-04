import React from 'react';
import './NoteStyling.css'
import '../App.css';
import './newNoteComponents/NewNote.css'
function NotesEstimations(props){

    return (
          <div className ="set-estimations container">
               <div><span>people</span></div>
               <Estimate type="people" stars ={props.people} cl ="container one-est"/>
               <div><span>cuisine</span></div>
               <Estimate type="cuisine" stars ={props.cuisine} cl ="container one-est"/>
               <div><span>general impression</span></div>
               <Estimate type="general impression" stars ={props.impression} cl ="container one-est"/>
               <div><span>prices</span></div>
               <Estimate type="prices" stars ={props.prices} cl ="container one-est"/>
          </div>

    );
}
export default NotesEstimations;
/*function Estimate(props){
    return (
        <div className = {props.cl}>
            <div><span>{props.type}</span></div>
           {printStars(props.stars)}
        </div>
    );
}
const  printStars = (quantity)=>{
    const stars = [];
     for(let i =0;i<quantity;i++)
     stars.push(<div className="star-img" key={i}></div>);
     return stars;
  }*/
function Estimate(props){
    return (
                 <div className="feedback2 container">
                <div className="rating2">
                  {printStars(props.stars,props)}
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