import React, {Component} from 'react';
import isAuthorized from './checker/authorizationChecker'
import axios from 'axios';


export default class VisitedCountry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
        };
    }

    componentDidMount() {
        let endpointVisited = 'http://localhost:8080/country/' + this.props.name + '/visit?user=' + localStorage.getItem("login");
        let endpointDidntVisited = 'http://localhost:8080/country/' + this.props.name + '/notvisit?user=' + localStorage.getItem("login");
        this.state.isChecked ?
            axios.put(endpointVisited)
                .then(response => {
                    console.log(response);
                })
        :
            axios.put(endpointDidntVisited)
                .then(response => {
                    console.log(response);
                })
    };

    toggleChange = () => {
        this.setState({
            isChecked: !this.state.isChecked,
        });
    };

    render() {
        return (
            isAuthorized() ?
            <label >
                <input type="checkbox"
                       checked={this.state.isChecked}
                       onChange={this.toggleChange}
                />
                Visited
            </label>
                : <React.Fragment/>
        );
    }
}
