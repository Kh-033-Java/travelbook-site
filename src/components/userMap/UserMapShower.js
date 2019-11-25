import axios from 'axios';
import * as am4core from "@amcharts/amcharts4/core";
import {getLogin} from "../../helpers/getLogin";
import isAuthorized from "../checker/authorizationChecker";
import {Redirect} from "react-router";

export default function showUserMap(worldSeries) {
    if(isAuthorized()) {
        const login = getLogin();
        const endpoint = `http://localhost:8080/users/` + login + `/map`;
        axios.get(endpoint)
            .then(response => {
                const visitedCountries = response.data.visitedCountries;
                const countriesPlannedToVisit = response.data.countriesPlannedToVisit;

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
                    })
            })
    }
}