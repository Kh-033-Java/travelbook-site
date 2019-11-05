import React, {Component} from 'react';
import '../NoteStyling.css'
import './NewNote.css'
import City from '../../sidebarComponents/CityProperty'
import '../../App.css';
import "../../sidebarComponents/SideBar.css";
import PhotoUploader from './PhotoUploading';
import Estimations from './Estimations';
import * as am4core from "@amcharts/amcharts4/core";
import axios from 'axios';

class NewNoteMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            city: '',
            country: this.props.countryName,
            photos: {},
            login: 'login',
            dateOfVisiting: '',
            description: '',
            isPublic: false,
        }
        this.sendNewNote = this.sendNewNote.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.setPhotos = this.setPhotos.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.setPrices = this.setPrices.bind(this);
        this.setPeople = this.setPeople.bind(this);
        this.setCuisine = this.setCuisine.bind(this);
        this.setImpression = this.setImpression.bind(this);
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeDate(e) {
        this.setState({
            date: e.target.value
        });

    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    sendNewNote(e) {
        e.preventDefault();
        axios.post(`http://localhost:8080/country/${this.props.countryName}/notes`, this.state);
        this.props.worldSeries.getPolygonById(this.props.idCountry).fill = am4core.color("#67f58d");
        console.log("sthg");
        console.log(this.state);
        //will be axios
    }

    setPhotos(e) {
        this.setState({photosEstimate: e});
    }

    setCuisine(e) {
        this.setState({cuisineEstimate: e});
    }

    setPrices(e) {
        this.setState({pricesEstimate: e});
    }

    setImpression(e) {
        this.setState({commonImpression: e});
    }

    setPeople(e) {
        this.setState({
            peopleEstimate: e
        });
    }

    render() {

        return (

            <form name="addNote" id="addNote" className="main-sidebar  main-comp-newnote" onSubmit={this.sendNewNote}>
                <div className="name-field ">
                    <label htmlFor="name-note">Name of the note</label><input type="text" onChange={this.onChangeName}
                                                                              name="name-note"/>
                </div>
                <City select_class="city-select" style_class="city-field" countryName={this.props.countryName}/>
                <div className="date-field ">
                    <label for="date-note">Date</label><input type="date" onChange={this.onChangeDate} name="date-note"
                                                              className="date-in" required/>
                </div>
                <div className="ddescription ">
                    <p className="header-text">Description</p>
                    <textarea placeholder="describe your trip" onChange={this.onChangeDescription} name="description"/>
                </div>
                <PhotoUploader setPhotos={this.setPhotos}/>
                <Estimations setPeople={this.setPeople} setPrices={this.setPrices} setImpression={this.setImpression}
                             setCuisine={this.setCuisine}/>
                <div className="public-checkbox ">
                    <input name="isPublic" type="checkbox"/> <label htmlFor="name-note">public</label>
                </div>

            </form>
        );
    }
}

export default NewNoteMain;

