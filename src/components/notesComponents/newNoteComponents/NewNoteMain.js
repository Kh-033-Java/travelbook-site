import React, {Component} from 'react';
import '../NoteStyling.css'
import {Redirect} from 'react-router-dom';
import './NewNote.css'
import City from '../../sidebarComponents/CityProperty'
import '../../App.css';
import "../../sidebarComponents/SideBar.css";
import PhotoUploader from './PhotoUploading';
import Estimations from './Estimations';
import * as am4core from "@amcharts/amcharts4/core";
import axios from 'axios';
import CityForNote from "../../sidebarComponents/CityForNote";
import {getJwt} from "../../../helpers/jwt";
import ImageUpload from "../../user-page/ImageUpload";

class NewNoteMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            isPublic: false,
            description: '',
            dateOfVisiting: '',
            login: localStorage.getItem('login'),
            describedCity: '',
            country: this.props.countryName,
            photos: {}
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
        this.onCheck = this.onCheck.bind(this);
        this.setCity= this.setCity.bind(this)
    }

    onChangeName(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeDate(e) {
        this.setState({
            dateOfVisiting: e.target.value
        });

    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
        console.log("description changed")
    }

    sendNewNote(e) {
        e.preventDefault();
        axios.post(`http://localhost:8080/notes`, this.state);
        axios.put(`http://localhost:8080/country/${this.state.country}/visit?user=${this.state.login}`);
        this.props.worldSeries.getPolygonById(this.props.idCountry).fill = am4core.color("#67f58d");
        console.log("new note created");
        console.log(this.state);
        this.setState({onSubmit:true})
        
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

    setCity(value) {
        this.setState({
            describedCity: value
        });
    }

    onCheck(e){
        if(e.target.checked){
            console.log("checked");
            this.setState({isPublic:true})
        }else{
            console.log("not checked");
            this.setState({isPublic:false})
        }
    }


    render() {
        if(this.state.onSubmit){        return <Redirect to="travelbook"/>}
        return (

            <form name="addNote" id="addNote"  className="main-sidebar  main-comp-newnote" onSubmit={this.sendNewNote}>
                <div className="name-field ">
                    <label htmlFor="name-note">Name of the note</label><input type="text" onChange={this.onChangeName}
                                                                              name="name-note"/>
                </div>
                <CityForNote select_class="city-select" style_class="city-field" countryName={this.props.countryName} setCity={this.setCity}/>
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
                    <input name="isPublic" onClick={e=>this.onCheck(e)} type="checkbox"/> <label htmlFor="name-note">public</label>
                </div>

            </form>
        );
    }
}

export default NewNoteMain;

