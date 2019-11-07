import axios from 'axios';
import * as am4core from "@amcharts/amcharts4/core";

export default function showUserMap(worldSeries) {

    const login = localStorage.getItem("token");
    const endpoint = `http://localhost:8080/users/` + login + `/map`;
    axios.get(endpoint)
        .then(response => {
            const visitedCountries = response.data.visitedCountries;
            const countriesPlannedToVisit = response.data.countriesPlannedToVisit;

            const userMap = worldSeries;

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
                const countryLabel = countryLabels.get(element.name);
                userMap.getPolygonById(countryLabel).fill = am4core.color("#67f58d");
            });
        });

}