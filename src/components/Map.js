import React, { Component } from "react";
import './App.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import { BrowserRouter as Router, Route, Link, NavLink, Redirect } from 'react-router-dom';

class Map extends Component {
  constructor(props){
    super();
    
  }
  
  componentDidMount() {
    let chart = am4core.create("chartdiv", am4maps.MapChart);

    chart.geodata = am4geodata_worldLow;

    chart.projection = new am4maps.projections.Miller();

    let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.exclude = ["AQ"];
    polygonSeries.useGeodata = true;

    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = am4core.color('rgb(204, 204, 204)');
    polygonTemplate.nonScalingStroke = true;
  

    
    
    polygonTemplate.events.on('hit',(e) => {
      this.props.clicker(e,polygonSeries)
      e.target.series.chart.zoomToMapObject(e.target);
    });
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }


  render() {
    return (
      <main className="mainPage container">
        <NavLink to="/clicked">
          <div className="chartdiv"></div>
        </NavLink>
      </main>
    )
  }
}
export default Map;