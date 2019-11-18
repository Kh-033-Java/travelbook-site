import React, {Component} from "react";
import './App.css';
import './GeneralInfo.css'
import axios from 'axios';
import Loading from "./Loading";
import GetPhotos from "./gallery/GetPhotos";
import { map } from "@amcharts/amcharts4/.internal/core/utils/Iterator";


class GeneralInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            country: '',
            generalInfo: [],
            description: [],
            weather: [],
            photos: [],
            isInfoValid: false,
            isLoading: true,
        };



        this.openFunction = this.openFunction.bind(this);
        props.renderFunc(this.openFunction);
    }

    checkInfoValid(generalInfo) {
        if (generalInfo.description === undefined || generalInfo.name === "undefined") {
            this.setState({isInfoValid: false});
            return false;
        } else {
            this.setState({isInfoValid: true});
            return true;
        }
    }

    componentDidMount(){
        this.openFunction();
    }


    openFunction() {

        const country = localStorage.getItem("country");

        const isLoading = false;
        axios.get(`http://localhost:8080/country/${country}/description`)
            .then(response => {
                const generalInfo = response.data;
                if (this.checkInfoValid(generalInfo)) {
                    const description = response.data.description;
                    const weather = response.data.weather;
                    const photos = response.data.photos;
                    this.setState({country: this.props.name});
                    this.setState({generalInfo});
                    this.setState({description});
                    this.setState({weather});
                    this.setState({photos});
                }
                this.setState({isLoading});
            }).catch(error => {
            console.log("Could not get GI from backend");
            console.log(error);
            this.setState({
                isInfoValid: false
            });
            if (this.description === undefined) {
                this.setState({isInfoValid: false});

            }

        });
    }
    ;


    render() {

        if (this.state.isInfoValid) {
            return (
                <aside className="aside-container general" style={{overflow: 'auto'}}>
                    <div className="title-part header-text general-info-container">General Information</div>
                    <div className="current-country general-info-container">
                        Country name: {this.state.generalInfo.name}
                    </div>
                    <div className="capital-of-country general-info-container">
                        Capital: {this.state.description.capital}
                    </div>
                    <div className="weather">Weather in capital: {this.state.weather.temperature}
                    </div>
                    <img className="weather-img" src={`http://openweathermap.org/img/wn/${this.state.weather.description}@2x.png`}/>
                    <div
                        className="description-part-render">Description: {this.state.description.commonInformation}</div>
                    <div className="general-photos">
                        <GetPhotos photos={this.state.photos}/>
                    </div>
                </aside>
            );
        } else if (this.state.isLoading) {
            return (
                <aside className="rightbar aside-container" style={{overflow: 'auto'}}>
                    <Loading/>
                </aside>
            );
        } else {
            return (
                <aside className="rightbar aside-container" style={{overflow: 'auto'}}>
                    <div className="header-text">no info</div>
                </aside>
            );
        }
    }
}

export default GeneralInfo;
