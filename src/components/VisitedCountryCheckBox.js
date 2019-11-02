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
        };
        this.addAndFill = this.addAndFill.bind(this);
    }

    addAndFill() {
        this.props.worldSeries.getPolygonById(this.props.id).fill = am4core.color("#67f58d");
    }

    delAndFill() {
        this.props.worldSeries.getPolygonById(this.props.id).fill = am4core.color("#000000")
    }

    componentDidMount() {
        let endpointVisited = 'http://localhost:8081/country/' + this.props.name + '/visit?user=' + localStorage.getItem("login");
        let endpointDidntVisited = 'http://localhost:8081/country/' + this.props.name + '/notvisit?user=' + localStorage.getItem("login");
        this.state.isChecked ?
            axios.put(endpointVisited)
                .then(response => {
                    console.log(response);
                })
        :
            axios.put(endpointDidntVisited)
                .then(response => {
                    console.log(response);
                })
    };

    toggleChange = () => {
        this.state.isChecked ?
            this.addAndFill()
        :
            this.delAndFill();    
        this.setState({
            isChecked: !this.state.isChecked,
    });
        //  this.addAndFill();
    };

    render() {
        return (
            isAuthorized() ?
            <label >
                <input type="checkbox"
                       checked={this.state.isChecked}
                       onChange={this.toggleChange}
                />
                Visited
            </label>
                : <React.Fragment/>
        );
    }
}

export default VisitedCountryCheckBox;