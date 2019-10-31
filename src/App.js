import React,{Component} from 'react';
import {BrowserRouter as Router,Route,Link,NavLink,Switch} from 'react-router-dom';
import SideBar from "./components/sidebar.js";
import Head from "./components/header.js";
import Map from "./components/Map.js";
import Main from './components/Main.js';
import Login from './components/login-package/login';
import UserSettings from './components/user-page/UserSettings';

class App extends Component{

   render(){
  return (
    <Router baseName="/travelbook/">
      <Switch>
          <Route path="/settings/" component={UserSettings} exact/>
          <Route path="/login/" component={Login} exact/>
      <Route path="/clicked/">
        <Main gridClass="grid-cont"/>
        </Route>
        <Route path="/notes/">
        <Main gridClass="grid-cont"/>
        </Route>
        <Route path="/gallery/">
        <Main gridClass="grid-cont"/>
        </Route>
        <Route path="/plans/">
        <Main gridClass="grid-cont"/>
        </Route>
        <Route path="/travelbook/">
        <Main gridClass="grid-cont-initially"/>
        </Route>
        <h1>Not Found</h1>
      </Switch>
      </Router>
  );
   }
}

export default App;
