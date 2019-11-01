import React, {Component} from 'react';
import {Router, Route, Link, NavLink, Switch} from 'react-router-dom';
import SideBar from "./components/sidebar.js";
import Head from "./components/header.js";
import Map from "./components/Map.js";
import Main from './components/Main.js';
import Login from './components/login';
import MyPhotos from "./components/gallery/MyPhotos";
import GeneralPhotos from "./components/gallery/GeneralPhotos";
import history from "./history";

class App extends Component {


    render() {
        return (
            <Router baseName="/travelbook/" history={history}>
                <Switch>
                    <Route path="/generalInfo/">
                        <Main gridClass="grid-cont"/>
                    </Route>
                    <Route path="/notes/">
                        <Main gridClass="grid-cont"/>
                    </Route>
                    <Route path="/gallery/">
                        <Main gridClass="grid-cont" history={history}/>
                    </Route>
                    <Route path="/plans/">
                        <Main gridClass="grid-cont"/>
                    </Route>
                    <Route path="/travelbook/">
                        <Main gridClass="grid-cont-initially"/>
                    </Route>
                    <Route path="/my-photos">
                        <Main gridClass="grid-cont"/>
                    </Route>
                    <Route path="/general-photos">
                        <Main gridClass="grid-cont"/>
                    </Route>
                    <Route>
                        <h1>Not Found</h1>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
