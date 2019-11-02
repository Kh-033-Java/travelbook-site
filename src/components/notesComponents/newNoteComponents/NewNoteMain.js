import React,{Component} from 'react';
import '../NoteStyling.css'
import './NewNote.css'
import City from '../../sidebarComponents/CityProperty'
import '../../App.css';
import"../../sidebarComponents/SideBar.css";
import PhotoUploader from './PhotoUploading';
import Estimations from './Estimations';
import * as am4core from "@amcharts/amcharts4/core";

class NewNoteMain extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:'',
            city:'',
            country : this.props.countryName,
            photos: {},
            estimations:{},
            date:'',
            description: '',
            isPublic : false,     
        }
        this.sendNewNote = this.sendNewNote.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.setPhotos = this.setPhotos.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.setPrices= this.setPrices.bind(this);
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
        console.log(this.state);
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
        console.log(this.state);
    }
    sendNewNote(e){
        e.preventDefault();
        console.log(this.props.idCountry);
        this.props.worldSeries.getPolygonById(this.props.idCountry).fill =am4core.color("#67f58d");
        console.log("sthg");
        console.log(this.state);
            //will be axios
    }
    setPhotos(e){
           this.setState({photos :e});
       console.log(this.state.photos);
    }
    setCuisine(e){
        this.setState({cuisine :e});
    }
    setPrices(e){
        this.setState({prices :e});
    }
    setImpression(e){
        this.setState({impression :e});
    }
    setPeople(e){
        this.setState({people :e});
    }
    render(){
    
    return (
        
                 <form name="addNote" id="addNote" className="main-sidebar  main-comp-newnote" onSubmit={this.sendNewNote} >
                 <div className="name-field ">
                 <label htmlFor="name-note">Name of the note</label><input type="text" onChange={this.onChangeName} name ="name-note" />
                    </div>
                    <City style_class = "city-field" countryName={this.props.countryName}/>
                    <div className="date-field ">
                 <label for="date-note">date</label><input type="date" onChange={this.onChangeDate}  name ="date-note" className="date-in" required/>
                    </div>
                    <div className="description container">
                        <textarea placeholder="describe your trip" onChange={this.onChangeDescription} name="description"/> 
                    </div>
                    <PhotoUploader setPhotos={this.setPhotos} />
                    <Estimations setPeople={this.setPeople} setPrices={this.setPrices} setImpression={this.setImpression} setCuisine={this.setCuisine} />
                    <div className="public-checkbox container">
                    <input name="isPublic" type="checkbox"/> <label htmlFor="name-note" >public</label>  
                    </div>
                 
                                   </form>
                  );
    }
}

export default NewNoteMain;


function InputForm(props){
    return (
        <div className={props.st}>
        <label for={props.fieldName}>Имя</label><input type="text" />
        </div>
    )
}