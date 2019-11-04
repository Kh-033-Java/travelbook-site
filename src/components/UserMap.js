import React, {Component} from "react";
import './App.css';
import axios from 'axios';
import * as am4core from "@amcharts/amcharts4/core";

class UserMap extends Component {

    constructor(props) {
        super();
        this.state = {
            // visitedCountries: [{}],
            // countriesPlannedToVisit: [{}],
        };
    }

    componentDidMount() {
        const login = localStorage.getItem("token");
        const endpoint = `http://localhost:8080/users/` + login + `/map`;
        // console.log(endpoint);
        axios.get(endpoint)
            .then(response => {
                const visitedCountries = response.data.visitedCountries;
                const countriesPlannedToVisit = response.data.countriesPlannedToVisit;
                // this.setState({visitedCountries});
                // this.setState({countriesPlannedToVisit});
                const userMap = this.props.worldSeries;

                let countryLabels = new Map();
                countryLabels.set("Ukraine", "UA");
                countryLabels.set("France", "FR");
                countryLabels.set("Poland", "PL");
                countryLabels.set("Germany", "DE");
                countriesPlannedToVisit.forEach(function (element) {
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

    render() {
        return (
            <aside className="rightbar container">
            </aside>
        )
    }
}

export default UserMap;

