import React, { Component } from 'react';
import isAuthorized from './checker/authorizationChecker';
import "./App.css"
import axios from 'axios';
import * as am4core from "@amcharts/amcharts4/core";
import {getJwt} from "../helpers/jwt";

class VisitedCountryCheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            countries: [],
            token: getJwt()
        };
        this.addAndFill = this.addAndFill.bind(this);
        this.delAndFill = this.delAndFill.bind(this);
        this.onCheck = this.onCheck.bind(this);
    }

    onCheck(e){
        if(e.target.checked){
            this.setState({checked:true});
            this.addAndFill();
        } else {
            this.setState({checked:false});
            this.delAndFill();
        }
    }

    addAndFill() {
        this.props.worldSeries.getPolygonById(this.props.id).fill = am4core.color("#67f58d");
        let endpointVisited = 'http://localhost:8080/country/' + this.props.name + '/visit?user=' + localStorage.getItem("login");
        axios.put(endpointVisited, {
            headers: {
                Authorization: this.state.token
            }
        })
            .then(response => {
                console.log(response);
            })
    }

    delAndFill() {
        this.props.worldSeries.getPolygonById(this.props.id).fill = am4core.color("#cccccc")
        let endpointDidntVisited = 'http://localhost:8080/country/' + this.props.name + '/notvisit?user=' + localStorage.getItem("login");
        axios.put(endpointDidntVisited, {
            headers: {
                Authorization: this.state.token
            }
        })
        .then(response => {
            console.log(response);
        })
    }

    checkVisitedCountry() {
        let endpointAllVisitedCountries = 'http://localhost:8080/users/' + localStorage.getItem("login") + '/map';
        axios.get(endpointAllVisitedCountries, {
            headers: {
                Authorization: this.state.token
            }
        }).then(response => {
            this.setState({countries: response});
            console.log(response);
        })
        let check = false;
        for (let i = 0; i < this.state.countries.length; i++) {
            if (this.props.name === this.state.countries[i]) {
                check = true;
            }
        }
        return check;
    }
    

    componenDidMount() {
        console.log("URAAAA!!!");
        let check = this.checkVisitedCountry();
        if (check) {
            this.setState({checked:true});
        }
    };

    render() {
        return (
            isAuthorized() ?
                <div className="visited">
                        <form name ="visitedCountry">
                        <input type="checkbox"
                               name='isVisited'
                               id='isVisited'
                               onClick={e=>this.onCheck(e)}
                        ></input>
                        <label htmlFor="isVisited">
                        Visited
                        </label>
                        </form>
                </div>
            : <React.Fragment/>
        );
    }
}

export default VisitedCountryCheckBox;