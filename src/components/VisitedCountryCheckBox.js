import React, {Component} from 'react';
import isAuthorized from './checker/authorizationChecker';
import "./App.css"
import axios from 'axios';
import * as am4core from "@amcharts/amcharts4/core";
import {getJwt} from "../helpers/jwt";
import {Redirect} from "react-router";


/**
 *
 * @author Zhelezniak Dmytro
 */


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
        if (e.target.checked) {
            this.setState({checked: true});
            this.addAndFill();
        } else {
            this.setState({checked: false});
            this.delAndFill();
        }
    }

    addAndFill() {
        let token = getJwt();
        let endpointVisited = `http://localhost:8080/country/${this.props.countryName}/visit?user=${localStorage.getItem("login")}`;
        let data = new FormData();
        let request = new XMLHttpRequest();
        request.open('POST', endpointVisited);
        request.setRequestHeader("Authorization", token);
        request.send(data);
        request.onload = function () {
            console.log(request.response);
        };
        this.props.worldSeries.getPolygonById(this.props.id).fill = am4core.color("#67f58d");
    }

    delAndFill() {
        let token = getJwt();
        let endpointDidntVisited = `http://localhost:8080/country/${this.props.countryName}/notvisit?user=${localStorage.getItem("login")}`;
        let data = new FormData();
        let request = new XMLHttpRequest();
        request.open('POST', endpointDidntVisited);
        request.setRequestHeader("Authorization", token);
        request.send(data);
        request.onload = function () {
            console.log(request.response);
        };
        this.props.worldSeries.getPolygonById(this.props.id).fill = am4core.color("#cccccc");
    }

    isVisitedCountry() {
        let check = false;
        let countries = this.state.visitedCountries;
        if (countries.length !== 0) {
            for (let i = 0; i < countries.length; i++) {
                if (countries[i].name === localStorage.getItem('country')) {
                    check = true;
                    break;
                }
            }
        }
        return check;
    }


    componentDidMount() {
        axios.get(`http://localhost:8080/users/${localStorage.getItem("login")}/map`)
            .then(res => {
                this.setState({visitedCountries: res.data.visitedCountries});
            }).catch(error => {
            console.log(error);
            return <Redirect to={"errorPage"}/>
        });
    };

    render() {
        let checkBox;
        if (this.isVisitedCountry()) {
            checkBox =
                <input type="checkbox" name='isVisited' id='isVisited' checked='true' readOnly/>
        } else {
            checkBox =
                <input type="checkbox" name='isVisited' id='isVisited' onClick={e => this.onCheck(e)}/>
        }
        return (
            isAuthorized() ?
                <div className="visited">
                    <form name="visitedCountry">
                        {checkBox}
                        <label htmlFor="isVisited">Visited</label>
                    </form>
                </div>
                : <React.Fragment/>
        );
    }
}

export default VisitedCountryCheckBox;
