import React,{Component} from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import {BrowserRouter as Router,Route,Link,NavLink} from 'react-router-dom';
import './App.css';
import SideBar from "./sidebar.js";
import Header from "./header.js";
import Map from "./Map.js";
import Notes from "./Notes.js";
import Plans from "./Plans.js";
import Gallery from "./Gallery.js";
import Icons from './Icons';
import Login from "./login-package/login";
import {getJwt} from "../helpers/jwt";
import AuthenticationChecker from "./checker/authorizationChecker";
import UserGeneralInformation from "./user-page/UserGeneralInformation";




class Main extends Component{
   constructor(){
      super();
  
      this.state = {
        nameCountry : "",
        idCountry :""
      }

      this.regionClicker = this.regionClicker.bind(this);
    }

    regionClicker(ev,worldSeries) {
      console.log(ev.target.dataItem.dataContext);
      
        this.setState({
        nameCountry : ev.target.dataItem.dataContext.name,
        idCountry: ev.target.dataItem.dataContext.id,
        map:worldSeries
      })
   }
   render(){
  return (
      <div className = {this.props.gridClass}>
    <Header/>
        <Map clicker={this.regionClicker}/>
    <Route path = "/travelbook">
          </Route>
    <Route path = "/clicked">
    <Icons></Icons>
     <SideBar id={this.state.nameCountry}/>
     </Route>
       <Route path = "/notes">
        <Icons></Icons>
     <Notes name={this.state.nameCountry} id={this.state.idCountry} worldSeries = {this.state.map} />
     </Route>
     <Route path = "/gallery">
        <Icons></Icons>
     <Gallery name={this.state.nameCountry}/>
     </Route>
     <Route path = "/plans">
        <Icons></Icons>
     <Plans name={this.state.nameCountry}/>
     </Route>
      <Route path="/main">
          <Icons></Icons>
          <UserGeneralInformation/>
      </Route>
     </div>
  );
   }
}

export default Main;
