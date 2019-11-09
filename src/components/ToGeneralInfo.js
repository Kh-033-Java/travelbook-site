import React, {Component} from "react";
import {Redirect} from 'react-router';

class ToGeneralInfo extends Component {

    constructor(props) {
        super();
    }

    componentDidMount() {

    }

    render() {
        return (
            <Redirect to="/generalInfo"/>
        )
    }

}

export default ToGeneralInfo;