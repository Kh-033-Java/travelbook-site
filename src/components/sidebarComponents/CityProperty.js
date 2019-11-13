import React, {Component} from 'react';

import '../sidebarComponents/SideBar.css'
import '../App.css';
import * as actions from "../../actions/countryActions";

class City extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: []
        }
    }

    componentDidMount() {
        actions.getCityPropertyForNotesByCountry(localStorage.getItem('country')).then(res => {
            console.log(res);
            this.setState({cities: res})
        })
    }

    createOptionsForSelect = () => {
        let options = [];
        for (let i = 0; i < this.state.cities.length; i++) {
            options.push(<option value={`${this.state.cities[i].id}`}> {`${this.state.cities[i].name}`}</option>)
        }
        return options;
    };

    render() {
        return (
            <div className={this.props.style_class}>
                <label for="from-city">City {this.props.direct}</label>
                <select className={this.props.select_class} name="from-city">
                    {this.createOptionsForSelect()}
                </select>
            </div>
        );
    }
}

export default City;