import React from 'react';
import './NoteStyling.css'
import '../App.css';
function NotesEstimations(props){

    return (
          <div className ="estimations container">
               <Estimate type="people" stars ={props.people} cl ="container one-est"/>
               <Estimate type="cuisine" stars ={props.cuisine} cl ="container one-est"/>
               <Estimate type="general impression" stars ={props.impression} cl ="container one-est"/>
               <Estimate type="prices" stars ={props.prices} cl ="container one-est"/>
          </div>

    );
}
export default NotesEstimations;
function Estimate(props){
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
     stars.push(<div className="star-img"></div>);
     return stars;
  }
