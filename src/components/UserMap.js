import React, {Component} from "react";
import './App.css';
import axios from 'axios';
import * as am4core from "@amcharts/amcharts4/core";

class UserMap extends Component {

    constructor(props) {
        super();
        this.state = {
            visitedCountries: [{}],
            countriesPlannedToVisit: [{}],
        };
        this.showUserPlannedCountries = this.showUserPlannedCountries.bind(this);
        this.showUserVisitedCountries = this.showUserVisitedCountries.bind(this);
    }

    componentDidMount() {
        const login = "ivanmalik"; // mocking user login
        const endpoint = `http://localhost:8080/users/` + login + `/map`;
        // const endpoint = `http://localhost:8080/users/ivanmalik/map`;
        // console.log(endpoint);
        axios.get(endpoint)
            .then(response => {
                const visitedCountries = response.data.visitedCountries;
                const countriesPlannedToVisit = response.data.countriesPlannedToVisit;
                this.setState({visitedCountries});
                this.setState({countriesPlannedToVisit});
                const userMap = this.props.worldSeries;
                // console.log(this.props.worldSeries);
                let countryLabels = new Map();
                countryLabels.set("Ukraine", "UA");
                countryLabels.set("France", "FR");
                countryLabels.set("Poland", "PL");
                countryLabels.set("Germany", "DE");
                countriesPlannedToVisit.forEach(function (element) {
                    console.log(countryLabels.get(element.name));
                    const countryLabel = countryLabels.get(element.name);
                    userMap.getPolygonById(countryLabel).fill = am4core.color("#E111F0");
                });
                visitedCountries.forEach(function (element) {
                    console.log(countryLabels.get(element.name));
                    const countryLabel = countryLabels.get(element.name);
                    userMap.getPolygonById(countryLabel).fill = am4core.color("#67f58d");
                });
            });

    };

    showUserPlannedCountries() {

        const userMap = this.props.worldSeries;

        this.state.countriesPlannedToVisit.forEach(function (element) {

            let countryLabels = new Map();
            countryLabels.set("Ukraine", "UA");
            countryLabels.set("France", "FR");
            countryLabels.set("Poland", "PL");
            countryLabels.set("Germany", "DE");
            console.log(countryLabels.get(element.name));
            const countryLabel = countryLabels.get(element.name);
            userMap.getPolygonById(countryLabel).fill = am4core.color("#E111F0");

        });

    };

    showUserVisitedCountries() {

        const userMap = this.props.worldSeries;

        this.state.visitedCountries.forEach(function (element) {

            let countryLabels = new Map();
            countryLabels.set("Ukraine", "UA");
            countryLabels.set("France", "FR");
            countryLabels.set("Poland", "PL");
            countryLabels.set("Germany", "DE");
            console.log(countryLabels.get(element.name));
            const countryLabel = countryLabels.get(element.name);
            userMap.getPolygonById(countryLabel).fill = am4core.color("#67f58d");

        });

    };


    render() {
        return (
            <aside className="rightbar container">
                <h1 style={{color: '#67f58d'}}>User's visited countries : </h1>
                {this.state.visitedCountries.map(country => <p>{country.name}</p>)}

                <h1 style={{color: '#E111F0'}}>User's planned countries : </h1>
                {this.state.countriesPlannedToVisit.map(country => <p>{country.name}</p>)}

                <button onClick={this.showUserVisitedCountries}>Show Visited</button>
                <br/><br/>
                <button onClick={this.showUserPlannedCountries}>Show Planned</button>
            </aside>
        )
    }
}

export default UserMap;

