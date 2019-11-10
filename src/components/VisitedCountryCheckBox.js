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
            visitedCountries: [],
        };
        this.addAndFill = this.addAndFill.bind(this);
        this.delAndFill = this.delAndFill.bind(this);
        this.onCheck = this.onCheck.bind(this);
        this.isVisitedCountry = this.isVisitedCountry.bind(this);
    }

    onCheck(e) {
        if (!this.isVisitedCountry()) {
            if (e.target.checked) {
                this.setState({checked: true});
                this.addAndFill();
            } else {
                this.setState({checked: false});
                this.delAndFill();
            }
        }
    }

    addAndFill() {
        let token = getJwt();
        this.props.worldSeries.getPolygonById(this.props.id).fill = am4core.color("#67f58d");
        let endpointVisited = `http://localhost:8080/country/${this.props.countryName}/visit?user=${localStorage.getItem("login")}`;
        axios.put(endpointVisited, {
            headers: {
                Authorization: token
            }
        })
            .then(response => {
                console.log(response);
            })
    }

    delAndFill() {
        let token = getJwt();
        this.props.worldSeries.getPolygonById(this.props.id).fill = am4core.color("#cccccc")
        let endpointDidntVisited = `http://localhost:8080/country/${this.props.countryName}/notvisit?user=${localStorage.getItem("login")}`;
        axios.put(endpointDidntVisited, {
            headers: {
                Authorization: token
            }
        })
        .then(response => {
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        })
    }

    isVisitedCountry() {
        let token = getJwt();
        let endpointAllVisitedCountries = `http://localhost:8080/users/${localStorage.getItem("login")}/map`;
        axios.get(endpointAllVisitedCountries, {
            headers: {
                Authorization: token
            }
        }).then((res) =>{
            let visitedCountries = res.data.visitedCountries;
            this.setState({visitedCountries: visitedCountries});
            console.log(this.state.visitedCountries);
        });
        let check = false;
        this.state.visitedCountries.forEach(e => {
            console.log(e.name);
            if(e.name === this.props.countryName) {
                check = true;
                this.setState({checked: true});
                this.props.worldSeries.getPolygonById(this.props.id).fill = am4core.color("#67f58d");
            }
        });
        return check;
    }


    componentDidMount() {
        if (isAuthorized()) {
            this.isVisitedCountry();
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
                               onClick={e => this.onCheck(e)}
                        />
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
