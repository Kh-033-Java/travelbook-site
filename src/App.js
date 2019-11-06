import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Main from './components/Main.js';
import Login from './components/login-package/login';
import UserSettings from './components/user-page/UserSettings';
import Registration from "./components/Registration";
import UserGeneralInformation from './components/user-page/UserGeneralInformation'


class App extends Component {

    render() {
        return (

            <Router baseName="/travelbook/">
                <Switch>
                    <Route path="/settings/" component={UserSettings} exact/>
                    <Route path="/login/" component={Login} exact/>
                    <Route path="/registration" component={Registration} exact/>
                    <Route path="/main" component={UserGeneralInformation} exact>
                        <Main gridClass="grid-cont"/>
                    </Route>
                    <Route path="/generalInfo/">
                        <Main gridClass="grid-cont"/>
                    </Route>
                    <Route path="/notes/">
                        <Main gridClass="grid-cont"/>
                    </Route>
                    <Route path="/editNote/">
                        <Main gridClass="grid-cont"/>
                    </Route>
                    <Route path="/gallery/">
                        <Main gridClass="grid-cont"/>
                    </Route>
                    <Route path="/plans/">
                        <Main gridClass="grid-cont"/>
                    </Route>
                    <Route path="/note/">
                        <Main gridClass="grid-cont"/>
                    </Route>
                    <Route path="/newnote/">
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
                    <Route path="/errorPage/">
                        <h1>Error</h1>
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
