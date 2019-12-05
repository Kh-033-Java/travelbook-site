import {Route} from 'react-router-dom';
import React, {Component} from 'react';
import './App.css';
import Head from "./header.js";
import Map from "./Map.js";
import Notes from "./Notes.js";
import Plans from "./Plans.js";
import Gallery from "./gallery/Gallery.js";
import Icons from './Icons';
import UserGeneralInformation from "./user-page/UserGeneralInformation";
import Note from './notesComponents/Note.js';
import NewNote from './notesComponents/newNoteComponents/NewNote.js';
import EditNote from './notesComponents/editNoteComponents/EditNote';
import NewPlan from './planComponents/NewPlan.js';
import EditPlan from './planComponents/EditPlan'
import ViewSinglePlan from "./planComponents/ViewSinglePlan";
import MyPhotos from "./gallery/MyPhotos";
import GeneralPhotos from "./gallery/GeneralPhotos";
import VisitedCountryCheckBox from "./VisitedCountryCheckBox";
import GeneralInfo from "./GeneralInfo.js";
import DeleteNote from "./notesComponents/deleteNoteComponents/DeleteNote";
import SearchPlans from "./search/SearchPlans";
import SearchMain from "./search/SearchMain";
import AllPlansPage from './planComponents/AllPlansPage'
import Rating from './rating/Rating';
import Friends from "./friendsComponents/Friends";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameCountry: '',
            idCountry: '',
            map:"",
            idPlan: '',
            mapComponent: '',
            idNote: '',
            generalInfo: ''
        }
        this.setNoteID = this.setNoteID.bind(this);
        this.regionClicker = this.regionClicker.bind(this);
        this.setPlanID = this.setPlanID.bind(this)
        this.setMapComponent = this.setMapComponent.bind(this);
        this.renderGI = this.renderGI.bind(this);
        this.setGeneralInfo = this.setGeneralInfo.bind(this);

    }

    regionClicker(ev, worldSeries) {
        console.log(ev.target.dataItem.dataContext);
        this.setState({
            nameCountry: ev.target.dataItem.dataContext.name,
            idCountry: ev.target.dataItem.dataContext.id,
            map: worldSeries,
        })
        localStorage.setItem('country', ev.target.dataItem.dataContext.name);
        localStorage.setItem('id', ev.target.dataItem.dataContext.id)
        localStorage.setItem('world', worldSeries)

    }

    setNoteID(id) {
        console.log("noteId = " + id);
        this.setState({
            idNote: id
        })
    }

    setPlanID(id) {
        this.setState({
            idPlan: id
        })
    }

    setGeneralInfo(generalInfo){
        this.setState({generalInfo: generalInfo})
    }

    renderGI(renderFunction){
        this.setState({
            renderGI: renderFunction
        });
    }

    setMapComponent(newMap){
        this.setState({
        mapComponent: newMap
        },()=>{})
    }

    componentDidMount() {
        console.log(localStorage.getItem('world'))
        if (this.state.nameCountry === '') {

            this.setState({
                nameCountry: localStorage.getItem('country'),
                idCountry: localStorage.getItem('id'),
                map: localStorage.getItem('world')
            })
        }

    }


    render() {
        return (
            <div className='container-fluid'>
                <Head setMap={this.state.mapComponent}/>
                <div className='row'>
                <Icons countryName={this.state.nameCountry} id={this.state.idCountry}
                                            worldSeries={this.state.mapComponent}/>
                </div>
                <div className='row'>
                <Map clicker={this.regionClicker} getMap={this.setMapComponent} renderGI={this.state.renderGI} generalInfo={this.state.generalInfo}/>

                <Route path="/travelbook">

                </Route>
                <Route path="/generalInfo">

                    <GeneralInfo name={this.state.nameCountry} worldSeries={this.state.map} renderFunc={this.renderGI} setGeneralInfo={this.setGeneralInfo}/>
                </Route>
                <Route path="/notes">
                    <Notes name={this.state.nameCountry} id={this.state.idCountry} worldSeries={this.state.map}
                           setId={this.setNoteID}/>
                </Route>
                <Route path="/gallery">
                    <Gallery name={this.state.nameCountry}/>
                </Route>
                <Route path="/plans">
                    <Plans countryName={this.state.nameCountry} id={this.state.idCountry} worldSeries={this.state.map}
                           setId={this.setPlanID}/>
                </Route>
                <Route
                    path="/my-photos"
                    render={props => <MyPhotos {...props}/>}
                />
                <Route
                    path="/general-photos"
                    render={props => <GeneralPhotos {...props}/>}
                />
                <Route path="/note">
                    <Note countryName={this.state.nameCountry} id={this.state.idCountry} worldSeries={this.state.map}
                          noteId={this.state.idNote}/>
                </Route>
                <Route path="/newnote">
                    <NewNote countryName={this.state.nameCountry} id={this.state.idCountry} worldSeries={this.state.map}
                             noteId={this.state.idNote}/>
                </Route>
                <Route path="/editNote">
                    <EditNote countryName={this.state.nameCountry} id={this.state.idCountry}
                              worldSeries={this.state.map} noteId={this.state.idNote}/>
                </Route>
                <Route path = "/deleteNote">
                    <DeleteNote countryName={this.state.nameCountry} noteId ={this.state.idNote} />
                </Route>
                <Route path="/newPlan">
                    <NewPlan countryName={this.state.nameCountry} id={this.state.idCountry} worldSeries={this.state.map}/>
                </Route>
                <Route path="/editPlan">
                    <EditPlan countryName={this.state.nameCountry} id={this.state.idCountry} worldSeries={this.state.map}
                             planId={this.state.idPlan}/>
                </Route>
                <Route path = "/plan">
                    <ViewSinglePlan countryName={this.state.nameCountry} id={this.state.idCountry} worldSeries = {this.state.map} planId ={this.state.idPlan} />
                </Route>
                <Route path = "/allplans">
                    <AllPlansPage setId={this.setPlanID}/>
                </Route>
                <Route path = "/friends">
                    <Friends/>
                </Route>
                <Route path="/userPage/:login">
                    <Route path="/userPage/:login" component={UserGeneralInformation}/>
                </Route>
                <Route
                    path="/search-plans">
                    <SearchMain countryName={this.state.nameCountry}
                                 id={this.state.idCountry}
                                 worldSeries={this.state.map}
                                 setId={this.setPlanID}/>
                </Route>
                <Route path="/rating">
                    <Rating/>
                </Route>
                {console.log(this.state.mapComponent, 'map')}
                </div>
            </div>
            
        );
    }
}


export default Main;
