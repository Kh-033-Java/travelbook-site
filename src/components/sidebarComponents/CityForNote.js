import React, {Component} from 'react';

import '../sidebarComponents/SideBar.css'
import '../App.css';
import * as actions from "../../actions/countryActions";

class CityForNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: []
        };
        this.onSelect = this.onSelect.bind(this);
    }

    componentDidMount() {
        actions.getCityPropertyForNotesByCountry(this.props.countryName).then(res => {
            this.setState({
                cities: res
            });
            console.log(this.props.currentCity);
            if (this.props.currentCity === undefined) {
                this.props.setCity(this.state.cities[0].name);
            } else {
                this.props.setCity(this.props.currentCity);
            }
        })
    }

    createOptionsForSelect = () => {
        let options = [];
        for (let i = 0; i < this.state.cities.length; i++) {
            options.push(<option value={`${this.state.cities[i].name}`}> {`${this.state.cities[i].name}`} </option>)
        }
        return options;
    };

    onSelect(e) {
        this.props.setCity(e.target.value);
        console.log("selected " + e.target.value);
    }

    render() {
        return (
            <div className={this.props.style_class}>
                <label for="from-city">City</label>
                <select className={this.props.select_class} name="from-city" onChange={this.onSelect}
                        value={this.props.currentCity}>
                    {this.createOptionsForSelect()}
                </select>
            </div>
        );
    }
}

export default CityForNote;