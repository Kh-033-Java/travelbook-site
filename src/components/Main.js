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
import SearchMain from "./search/SearchMain";
import Rating from './rating/Rating'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameCountry: '',
            idCountry: '',
            map:"",
            idPlan: '',
            mapComponent: '',
            
        }
        this.setNoteID = this.setNoteID.bind(this);
        this.regionClicker = this.regionClicker.bind(this);
        this.setPlanID = this.setPlanID.bind(this)
        this.setMapComponent = this.setMapComponent.bind(this);
        this.renderGI = this.renderGI.bind(this);

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
        console.log("got" + id);
        this.setState({
            idNote: id
        })
    }

    setPlanID(id) {
        this.setState({
            idPlan: id
        })
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
            <div className={this.props.gridClass}>
                
                <Map clicker={this.regionClicker} getMap={this.setMapComponent} renderGI={this.state.renderGI}/> 
                <Head setMap={this.state.mapComponent}/>

                <Route path="/travelbook">
                </Route>
                <Route path="/generalInfo">
                    <VisitedCountryCheckBox countryName={this.state.nameCountry} id={this.state.idCountry}
                                            worldSeries={this.state.map}/>
                    <Icons countryName={this.state.nameCountry} id={this.state.idCountry} worldSeries={this.state.map}/>
                    <GeneralInfo name={this.state.nameCountry} worldSeries={this.state.map} renderFunc={this.renderGI}/>
                </Route>
                <Route path="/notes">
                    <Icons></Icons>
                    <Notes name={this.state.nameCountry} id={this.state.idCountry} worldSeries={this.state.map}
                           setId={this.setNoteID}/>
                </Route>
                <Route path="/gallery">
                    <Icons></Icons>
                    <Gallery name={this.state.nameCountry}/>
                </Route>
                <Route path="/plans">
                    <Icons></Icons>
                    <Plans name={this.state.nameCountry} id={this.state.idCountry} worldSeries={this.state.map}
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
                    <Icons></Icons>
                    <Note countryName={this.state.nameCountry} id={this.state.idCountry} worldSeries={this.state.map}
                          noteId={this.state.idNote}/>
                </Route>
                <Route path="/newnote">
                    <Icons></Icons>
                    <NewNote countryName={this.state.nameCountry} id={this.state.idCountry} worldSeries={this.state.map}
                             noteId={this.state.idNote}/>
                </Route>
                <Route path="/editNote">
                    <Icons></Icons>
                    <EditNote countryName={this.state.nameCountry} id={this.state.idCountry}
                              worldSeries={this.state.map} noteId={this.state.idNote}/>
                </Route>
                <Route path="/newPlan">
                    <Icons></Icons>
                    <NewPlan countryName={this.state.nameCountry} id={this.state.idCountry} worldSeries={this.state.map}/>
                </Route>
                <Route path="/editPlan">
                    <Icons></Icons>
                    <EditPlan countryName={this.state.nameCountry} id={this.state.idCountry} worldSeries={this.state.map}
                             planId={this.state.idPlan}/>
                </Route>
                <Route path = "/plan">
                    <Icons></Icons>
                    <ViewSinglePlan countryName={this.state.nameCountry} id={this.state.idCountry} worldSeries = {this.state.map} planId ={this.state.idPlan} />
                </Route>
                <Route path="/userPage/:login">
                    <Route path="/userPage/:login" component={UserGeneralInformation}/>
                    <Icons></Icons>
                </Route>
                <Route
                    path="/search-plans">
                    <Icons></Icons>
                    <SearchMain countryName={this.state.nameCountry}
                                 id={this.state.idCountry}
                                 worldSeries={this.state.map}
                                 setId={this.setPlanID}/>
                </Route>
                <Route path="/rating">
                    <Icons/>
                    <Rating/>
                </Route>

            </div>
        );
    }
}


export default Main;
