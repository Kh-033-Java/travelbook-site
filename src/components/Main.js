import React, {Component} from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom';
import './App.css';
import SideBar from "./sidebar.js";
import Head from "./header.js";
import Map from "./Map.js";
import Notes from "./Notes.js";
import Plans from "./Plans.js";
import Gallery from "./gallery/Gallery.js";
import Icons from './Icons';
import MyPhotos from "./gallery/MyPhotos";
import history from "../history";
import GeneralPhotos from "./gallery/GeneralPhotos";


class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nameCountry: "",
            idCountry: ""
        };

        this.regionClicker = this.regionClicker.bind(this);
    }

    regionClicker(ev, worldSeries) {
        console.log(ev.target.dataItem.dataContext);
        this.setState({
            nameCountry: ev.target.dataItem.dataContext.name,
            idCountry: ev.target.dataItem.dataContext.id,
            map: worldSeries
        })
    }

    render() {
        console.log(this.props);
        return (
            <div className={this.props.gridClass}>
                <Head/>
                <Map clicker={this.regionClicker}/>
                <Route path="/travelbook">
                </Route>
                <Route path="/generalInfo">
                    <Icons></Icons>
                    <SideBar id={this.state.nameCountry}/>
                </Route>
                <Route path="/notes">
                    <Icons></Icons>
                    <Notes name={this.state.nameCountry} id={this.state.idCountry} worldSeries={this.state.map}/>
                </Route>
                <Route path="/gallery">
                    <Icons></Icons>
                    <Gallery name={this.state.nameCountry} history={this.props.history}/>
                </Route>
                <Route path="/plans">
                    <Icons></Icons>
                    <Plans name={this.state.nameCountry}/>
                </Route>
                <Route
                    path="/my-photos"
                    render={props => <MyPhotos {...props}/>}
                />
                <Route
                    path="/general-photos"
                    render={props => <GeneralPhotos {...props}/>}
                />
            </div>
        );
    }
}

export default Main;
