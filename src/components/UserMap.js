import React, {Component} from "react";
import './App.css';
import axios from 'axios';
import * as am4core from "@amcharts/amcharts4/core";

class UserMap extends Component {

    constructor(props) {
        super();
        this.state = {
            visitedCountries: [{}],
            countriesPlannedToVisit: [{}]
        };
    }

    componentDidMount() {
        const endpoint = `http://localhost:8080/users/`+ this.props.login + `/map`;
        axios.get(endpoint)
            .then(response => {
                const visitedCountries = response.data.visitedCountries;
                const countriesPlannedToVisit = response.data.countriesPlannedToVisit;
                this.setState({visitedCountries});
                this.setState({countriesPlannedToVisit});
                console.log(visitedCountries);
            });
    };

    fillUserCountries() {
        // this.props.worldSeries.getPolygonById(this.props.id).fill = am4core.color("lightyellow");
    }

    render() {
        return (
            <aside className="rightbar container">
                <h1>User's visited : </h1>
                {this.state.visitedCountries.map(country => <p>{country.name}</p>)}

                <h1>User's planned : </h1>
                {this.state.countriesPlannedToVisit.map(country => <p>{country.name}</p>)}

            </aside>
        )
    }
}

export default UserMap;

