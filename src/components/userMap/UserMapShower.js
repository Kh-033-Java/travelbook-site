import axios from 'axios';
import * as am4core from "@amcharts/amcharts4/core";
import {Redirect} from "react-router";
import React from "react";

export default function showUserMap(worldSeries) {

    const login = localStorage.getItem("login");

    const countryLabels = new Map();
    axios.get(`http://localhost:8080/country/getAllCountries`)
        .then(res => {
        res.data.forEach(e => {
            countryLabels.set(e.name, e.map_id);
        })
    }).catch(error => {
        console.log(error);
        return <Redirect to="/errorPage"/>;
    });

    const endpoint = `http://localhost:8080/users/` + login + `/map`;
    axios.get(endpoint)
        .then(response => {
            const visitedCountries = response.data.visitedCountries;
            const countriesPlannedToVisit = response.data.countriesPlannedToVisit;

            const userMap = worldSeries;

            countriesPlannedToVisit.forEach(function (element) {
                const countryLabel = countryLabels.get(element.name);
                userMap.getPolygonById(countryLabel).fill = am4core.color("#E111F0");
            });
            visitedCountries.forEach(function (element) {
                const countryLabel = countryLabels.get(element.name);
                userMap.getPolygonById(countryLabel).fill = am4core.color("#67f58d");
            });
        });

}