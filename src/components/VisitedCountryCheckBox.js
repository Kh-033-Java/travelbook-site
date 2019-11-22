import React, {Component} from 'react';
import isAuthorized from './checker/authorizationChecker';
import "./App.css"
import axios from 'axios';
import * as am4core from "@amcharts/amcharts4/core";
import {getJwt} from "../helpers/jwt";
import {Redirect} from "react-router";
import {getLogin} from "../helpers/getLogin";

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
        let login = getLogin();
        let endpointDidntVisited = `http://localhost:8080/country/${this.props.countryName}/notvisit?user=${login}`;
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
            console.log(countries.length);
            for(let i = 0; i < countries.length; i++) {
                if (countries[i].name === this.props.countryName) {
                    check = true;
                    break;
                }
            }
        }
        return check;
    }


    componentDidMount() {
        if(isAuthorized()) {
            let token = getJwt();
            axios.get(`http://localhost:8080/users/${localStorage.getItem("login")}/map`, {
                headers: {
                    Authorization: token
                }
            }).then(res => {
                this.setState({visitedCountries: res.data.visitedCountries});
            }).catch(error => {
                console.log(error);
                return <Redirect to={"errorPage"}/>
            });
        }
    };

    render() {
        if(this.isVisitedCountry()){
            return (
                isAuthorized() ?
                    <div className="visited">
                        <form name ="visitedCountry">
                            <input type="checkbox"
                                   name='isVisited'
                                   id='isVisited'
                                   checked= 'true'
                                   readOnly
                            />
                            <label htmlFor="isVisited">
                                Visited
                            </label>
                        </form>
                    </div>
                    : <React.Fragment/>
            );
        }
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
