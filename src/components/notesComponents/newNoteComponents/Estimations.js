import React from 'react';
import '../../App.css';
function Estimations(props){

    return (
          <div className ="set-estimations ">
        <p className="header-text est-title">Estimations</p>
            <div className="label-stars">people</div>
            <Estimate type ="people" fun={props.setPeople} cssCl={props.type +"rating"}/>
          
            <div className="label-stars">prices</div>
            <Estimate type ="prices" fun={props.setPrices}/>
           
            
            <div className="label-stars">cuisine</div>
            <Estimate type ="cuisine" fun={props.setCuisine}/>
            
          
            <div className="label-stars">general impression</div>
            <Estimate type ="general impression" fun={props.setImpression}/>
            
      </div>
           );
    }

export default Estimations;

function Estimate(props){
    function check(e){
        let str  = e.target.id;
        console.log(e.target.id);
        props.fun(str.charAt(str.length-1));
    }
    
return(
    <div className={props.type}>
    <div className="feedback">
    <div className="rating">
      <input type="radio" name={props.type +"rating"} id={props.type + "5"} onChange={check}/>
      <label htmlFor={props.type + "5"}></label>
      <input type="radio" name={props.type +"rating"} id={props.type + "4"} onChange={check}/>
      <label htmlFor={props.type + "4"} ></label>
      <input type="radio" name={props.type +"rating"} id={props.type + "3"} onChange={check}/>
      <label htmlFor={props.type + "3"}></label>
      <input type="radio" name={props.type +"rating"} id={props.type + "2"} onChange={check} />
      <label htmlFor={props.type + "2"}></label>
      <input type="radio" name={props.type +"rating"} id={props.type + "1"} onChange={check}/>
      <label htmlFor={props.type + "1"}></label>
        </div>
        </div>
        </div>
)
}