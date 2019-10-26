import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link,NavLink} from 'react-router-dom';
import './App.css';
import SideBar from "./sidebar.js";
import Head from "./header.js";
import Map from "./Map.js";
import Notes from "./Notes.js";



function Icons (props){
  return (
    <div className="icons container ">
        <div className ="icon-comp2 ">
       <NavLink to ="/notes" >
           <button className="icon-button2" ></button>
           </NavLink>
           </div>
           <div className ="icon-comp3 ">
           <NavLink to ="/plans" >
           <button className="icon-button3" ></button>
           </NavLink>
           </div>
           <div className ="icon-comp1 ">
           <NavLink to ="/generalInfo" >
           <button className="icon-button1" ></button>
           </NavLink>
           </div>
           <div className ="icon-comp4 ">
           <NavLink to ="/gallery" >
           <button className="icon-button4" ></button>
           </NavLink>
           </div>
    </div>
  );
  }

export default Icons;