import React, { Component } from 'react';
import './App.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

class App extends Component {
  componentDidMount() {
    let chart = am4core.create("chartdiv", am4maps.MapChart);

    chart.geodata = am4geodata_worldLow;

    chart.projection = new am4maps.projections.Miller();

    let worldSeries = chart.series.push(new am4maps.MapPolygonSeries());
    worldSeries.exclude = ["AQ"];
    worldSeries.useGeodata = true;

    let polygonTemplate = worldSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = am4core.color('rgb(204, 204, 204)');
    polygonTemplate.nonScalingStroke = true;

    // Hover state
    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#888888");

    const mapContainer = document.getElementsByClassName('chartdiv')[0];

    function doSomeThing(event) {

        event.target.style.fill = '#888888';

    }

    mapContainer.addEventListener('click', doSomeThing);
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <div className="chartdiv"></div>
    );
  }
}

export default App;