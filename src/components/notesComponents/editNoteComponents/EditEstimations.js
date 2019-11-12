import React from 'react';
import '../NoteStyling.css'
import '../../App.css';
import '../newNoteComponents/NewNote.css'

function NotesEstimations(props) {

    return (
        <div className="set-estimations ">
            <p className="title-note est-title">Estimations</p>
            <div className="label-stars people-l ">people</div>
            <Estimate type="people" stars={props.people} cl="one-est" fun={props.setPeople}/>
            <div className="label-stars cuisine-l " fun={props.setPeople}>cuisine</div>
            <Estimate type="cuisine" stars={props.cuisine} fun={props.setCuisine} cl="one-est"/>
            <div className="label-stars impression-l ">general impression</div>
            <Estimate type="impression" stars={props.impression} fun={props.setImpression} cl="one-est"/>
            <div className="label-stars prices-l ">prices</div>
            <Estimate type="prices" stars={props.prices} fun={props.setPrices} cl="one-est"/>
        </div>

    );
}

export default NotesEstimations;

function Estimate(props) {

    function check(e) {
        document.getElementById(e.target.id).defaultChecked = true;
        let str = e.target.id;

        props.fun(str.charAt(str.length - 1));
    }

    const printChecked = (i, quantity) => {
        if (i === quantity) {
            return <input type="radio" name={props.type} id={props.type + " " + i} onChange={check}
                          defaultChecked={true}/>
        } else {
            return <input type="radio" name={props.type} id={props.type + " " + i} onChange={check}/>
        }
    }
    return (
        <div className="feedback">
            <div className="rating">
                {printChecked(5, props.stars)}
                <label htmlFor={props.type + " 5"}></label>
                {printChecked(4, props.stars)}
                <label htmlFor={props.type + " 4"}></label>
                {printChecked(3, props.stars)}
                <label htmlFor={props.type + " 3"}></label>
                {printChecked(2, props.stars)}
                <label htmlFor={props.type + " 2"}></label>
                {printChecked(1, props.stars)}
                <label htmlFor={props.type + " 1"}></label>
            </div>
        </div>


    );
}
