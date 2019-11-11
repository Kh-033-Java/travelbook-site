import React, {Component} from "react";
import './NoteStyling.css'
import '../App.css';
import './newNoteComponents/NewNote.css'

class NotesEstimations extends Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div id ="show-est" className ="set-estimations ">

                <p className="title-note est-title">Estimations</p>

                <div  className="label-stars people-l ">people</div>
                <Estimate type="people" stars ={this.props.people} cl =" one-est"/>

                <div  className="label-stars cuisine-l ">cuisine</div>
                <Estimate type="cuisine" stars ={this.props.cuisine} cl =" one-est"/>

                <div  className="label-stars impression-l ">general impression</div>
                <Estimate type="impression" stars ={this.props.impression} cl =" one-est"/>

                <div  className="label-stars prices-l ">prices</div>
                <Estimate type="prices" stars ={this.props.prices} cl =" one-est"/>

            </div>
        )
    }

}

function Estimate(props){
    return (
                <div>
                <div className="feedback2">
                <div className="rating2">
                  {printStars(props.stars, props)}
                </div>
                </div>
                </div>

    );
}

function printStars (quantity,props) {
    const stars = [];
    for(let i = 0; i < quantity; i++)
        stars.push(
           <label htmlFor={props.type + "5"} className="starL"></label>
        );
    return stars;
}

export default NotesEstimations;