import React, {Component} from "react";
import '../App.css';
import './SinglePlan.css';
import './NewPlan.css';
import "../sidebarComponents/SideBar.css";
import Header from "../sidebarComponents/SidebarHeader"
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import {getJwt} from "../../helpers/jwt";
import * as moment from 'moment';
import NewNote from "../notesComponents/newNoteComponents/NewNote";

/**
 *
 * @author Zhelezniak Dmytro
 */


class EditPlan extends Component {
    constructor(props){
        super(props);
        this.state = {
            country: this.props.countryName,
            cities: [],
            transports: [],
            userLoginCreator: localStorage.getItem('login'),
            linkToUserAvatar: localStorage.getItem('avatar'),
            isPublic: '',
            title: '',
            date: '',
            nameCityToGo: '',
            nameCityFrom: '',
            budgetMin: '',
            budgetMax: '',
            transportType: '',
            amountOfPeople: '',
            description: ''
        };
        this.sendEditedPlan = this.sendEditedPlan.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    sendEditedPlan(e){
        e.preventDefault();
        let token = getJwt();
        axios.put(`http://localhost:8080/plans/${this.props.planId}`,this.state, {
            headers: {
                Authorization: token
            }
        });
        this.setState({onSubmit: true})
    }

    onCheck(e){
        if(e.target.checked){
            this.setState({isPublic:true})
        }else{
            this.setState({isPublic:false})
        }
    }

    getCities() {
        let options = [];
        for (let i = 0; i < this.state.cities.length; i++){
            options.push(<option value={this.state.cities[i].name}> {`${this.state.cities[i].name}`}</option>)
        }
        return options;
    };

    getTransport() {
        let options = [];
        for (let i = 0; i < this.state.transports.length; i++) {
            options.push(<option value={this.state.transports[i].type}> {`${this.state.transports[i].type}`}</option>)
        }
        return options;
    };

    componentDidMount(){
        axios.get(`http://localhost:8080/country/plans/${this.props.planId}`)
            .then(res => {
                this.setState({
                    isPublic: res.data.isPublic,
                    title: res.data.title,
                    date: moment(res.data.date).format('YYYY-MM-DD'),
                    nameCityToGo: res.data.nameCityToGo,
                    nameCityFrom: res.data.nameCityFrom,
                    budgetMin: res.data.budgetMin,
                    budgetMax: res.data.budgetMax,
                    transportType: res.data.transportType,
                    amountOfPeople: res.data.amountOfPeople,
                    description: res.data.description,
                });
            })
            .catch(error=>{
                console.log(error);
                return <Redirect to="/errorPage"/>
            });

        let token = getJwt();
        axios.get('http://localhost:8080/transport', {
            headers: {
                Authorization: token
            }
        })
            .then(res => {
                this.setState({transports: res.data});
            }).catch(error => {
            console.log(error);
            return <Redirect to="errorPage"/>
        });
        axios.get('http://localhost:8080/cities', {
            headers: {
                Authorization: token
            }
        })
            .then(res => {
                this.setState({cities: res.data});
                console.log(res.data);
            }).catch(error => {
            console.log(error);
            return <Redirect to={"errorPage"}/>
        })
    }

    render(){
        if(this.state.onSubmit){
            return <Redirect to="travelbook"/>
        }
        return (
            <aside className="rightbar whole-comp col-12 col-lg-6">
                <Header title="Edit Plan" countryName={this.props.countryName}/>
                <form name="editPlan" id="editPlan" className="main-sidebar  main-comp-newplan"
                      onSubmit={this.sendEditedPlan}>
                    <div className="title-field prop-plan">
                        <div>Title of the plan</div>
                        <input className= "input-plan" type = "text" onChange={this.handleChange} name = "title" value={this.state.title}/>
                    </div>
                    <div className="date-field-plan prop-plan">
                        <div>Date</div>
                        <input type="date" onChange={this.handleChange} name="date" className="date-in" value={this.state.date} required/>
                    </div>
                    <div className="city-field-from prop-plan">
                        <div>City from </div>
                        <select className="city-select" name="nameCityFrom" value = {this.state.nameCityFrom} onChange={this.handleChange}>
                            {this.getCities()}
                        </select>
                    </div>
                    <div className="city-field-to prop-plan">
                        <div>City to </div>
                        <select className="city-select" name="nameCityToGo" value = {this.state.nameCityToGo} onChange={this.handleChange}>
                            {this.getCities()}
                        </select>
                    </div>
                    <div className="budgetMin-field prop-plan">
                        <div>Budget min</div>
                        <input className= "input-plan" type = "text" onChange={this.handleChange} name ="budgetMin" value={this.state.budgetMin}/>
                    </div>
                    <div className="budgetMax-field prop-plan">
                        <div>Budget Max</div>
                        <input className= "input-plan" type = "text" onChange={this.handleChange} name="budgetMax" value={this.state.budgetMax}/>
                    </div>
                    <div className="transport-field prop-plan">
                        <div>Transport </div>
                        <select className="transport-select" name="transportType" value={this.state.transportType} onChange={this.handleChange}>
                            {this.getTransport()}
                        </select>
                    </div>
                    <div className="amount-field prop-plan">
                        <div>Amount of people</div>
                        <input className= "input-plan" type = "text" onChange={this.handleChange} name="amountOfPeople" value={this.state.amountOfPeople}/>
                    </div>
                    <div className="description-newplan">
                        <p className="header-text">Description</p>
                        <textarea placeholder="what do you want" onChange={this.handleChange} name="description" value={this.state.description}/>
                    </div>
                    <div className="public-checkbox ">
                        <input name="isPublic" onClick={e => this.onCheck(e)} type="checkbox"/> <label
                        htmlFor="name-plan">public</label>
                    </div>
                </form>
                <div className ="create-plan-button">
                    <input type='submit' className="create-plan-button submitButton" form ="editPlan" value="Edit Plan"/>
                </div>
            </aside>
        );
    }
}

export default EditPlan;
