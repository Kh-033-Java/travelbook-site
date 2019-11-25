import axios from 'axios';
import * as am4core from "@amcharts/amcharts4/core";
import {getLogin} from "../../helpers/getLogin";
import isAuthorized from "../checker/authorizationChecker";
import {Redirect} from "react-router";
import React from 'react';

export default function showUserMap(worldSeries) {
    if(isAuthorized()) {
        const login = getLogin();
        const endpoint = `http://localhost:8080/users/` + login + `/map`;
        axios.get(endpoint)
            .then(response => {
                const visitedCountries = response.data.visitedCountries;
                const countriesPlannedToVisit = response.data.countriesPlannedToVisit;

                const login = localStorage.getItem("login");

                const endpoint = `http://localhost:8080/users/` + login + `/map`;
                axios.get(endpoint)
                    .then(response => {
                        const visitedCountries = response.data.visitedCountries;
                        const countriesPlannedToVisit = response.data.countriesPlannedToVisit;

                        const userMap = worldSeries;

                        countriesPlannedToVisit.forEach(function (element) {
                            userMap.getPolygonById(element.map_id).fill = am4core.color("#E111F0");
                        });
                        visitedCountries.forEach(function (element) {
                            userMap.getPolygonById(element.map_id).fill = am4core.color("#67f58d");
                        });
                    })
            })
    }
}