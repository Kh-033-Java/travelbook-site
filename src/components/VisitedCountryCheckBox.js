import React, { Component } from 'react';
import isAuthorized from './checker/authorizationChecker';
import "./App.css"
import axios from 'axios';
import * as am4core from "@amcharts/amcharts4/core";

class VisitedCountryCheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
            countries: [],
        };
        this.addAndFill = this.addAndFill.bind(this);
        this.delAndFill = this.delAndFill.bind(this);
    }

    addAndFill() {
        this.props.worldSeries.getPolygonById(this.props.id).fill = am4core.color("#67f58d");
    }

    delAndFill() {
        this.props.worldSeries.getPolygonById(this.props.id).fill = am4core.color("#cccccc")
    }

    checkVisitedCountry() {
        let check = false;
        for (let i = 0; i < this.state.countries.length; i++) {
            if (this.props.name === this.state.countries[i]) {
                check = true;
            }
        }
        return check;
    }

    componentDidMount() {
        let endpointVisited = 'http://localhost:8080/country/' + this.props.name + '/visit?user=' + localStorage.getItem("login");
        let endpointDidntVisited = 'http://localhost:8080/country/' + this.props.name + '/notvisit?user=' + localStorage.getItem("login");
        let endpointAllVisitedCountries = 'http://localhost:8080/user/' + localStorage.getItem("login") + '/map';
        axios.get(endpointAllVisitedCountries).then(response => {
            this.setState({countries: response});
        })
        if (this.state.checkVisitedCountry === true) {
            this.state.setState({isChecked: true});
        } else {
          if (this.state.checkVisitedCountry === false) {
            if (this.state.isChecked === true) {
                axios.put(endpointVisited)
                    .then(response => {
                        console.log(response);
                    })
                } else {
                    axios.put(endpointDidntVisited)
                    .then(response => {
                        console.log(response);
                    })
                    }
        }
    }
    };

    toggleChange = () => {
        this.state.isChecked ?
            this.delAndFill()
        :
            this.addAndFill();    
        this.setState({
            isChecked: !this.state.isChecked,
    });

    };

    render() {
        return (
            isAuthorized() ?
                <div>
                    {!this.checkVisitedCountry ? 
                        <label >
                        <input type="checkbox"
                               checked="true"
                        />
                        Visited
                        </label>    
                    :
                        <label >
                        <input type="checkbox"
                               checked={this.state.isChecked}
                               onChange={this.toggleChange}
                        />
                        Visited
                        </label>    
                    }
                </div>
            : <React.Fragment/>
        );
    }
}

export default VisitedCountryCheckBox;