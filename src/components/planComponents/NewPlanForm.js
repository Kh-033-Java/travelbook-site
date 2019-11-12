import React, {Component} from "react";
import {Redirect} from 'react-router-dom';
import '../App.css';
import './NewPlan.css';
import * as am4core from "@amcharts/amcharts4/core";
import axios from 'axios';
import "../sidebarComponents/SideBar.css";
import City from "../sidebarComponents/CityProperty";

class NewPlanForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            country: this.props.countryName,
            userLoginCreator: localStorage.getItem('login'),
            isPublic: false,
            title: '',
            date: '',
            nameCityToGo: '',
            nameCityFrom: [],
            budgetMin: '',
            budgetMax: '',
            transportType: [],
            amountOfPeople: '',
            description: '',
        }
        this.sendNewPlan = this.sendNewPlan.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeBudgetMin = this.onChangeBudgetMin.bind(this);
        this.onChangeBudgetMax = this.onChangeBudgetMax.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
    }

    onChangeTitle(e){
        this.setState({title: e.target.value});
    }

    onChangeDate(e){
        this.setState({date: e.target.value});
    }

    onChangeBudgetMin(e){
        this.setState({budgetMin: e.target.value});
    }

    onChangeBudgetMax(e){
        this.setState({budgetMax: e.target.value});
    }

    onChangeAmount(e){
        this.setState({amountOfPeople: e.target.value});
    }

    onChangeDescription(e){
        this.setState({description: e.target.value});
    }
    // //
    // handleChange (e) {
    //     this.setState({[e.target.name]: e.target.value})
    // }

    sendNewPlan(e) {
        e.preventDefault();
        axios.post('http://localhost:8080/plans', this.state);
        this.props.worldSeries.getPolygonById(this.props.idCountry).fill = am4core.color("#7c467f");
        this.setState({onSubmit: true})
    }

    onCheck(e){
        if(e.target.checked){
            this.setState({isPublic:true})
        }else{
            this.setState({isPublic:false})
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/transport')
            .then(res => {
                this.setState({transportType: res.data})
            }).catch(error => {
            console.log(error);
            return <Redirect to="errorPage"/>
        })
    }

    getTransport = () => {
        let options = [];
        for (let i = 0; i < this.state.transportType.length; i++) {
            options.push(<option value={`${this.state.transportType[i].id}`}> {`${this.state.transportType[i].type}`}</option>)
        }
        return options;
    };

    render(){
        if(this.state.onSubmit){
            return <Redirect to="travelbook"/>
        }
        return(
                <form name="addPlan" id="addPlan" className="main-sidebar  main-comp-newplan"
                      onSubmit={this.sendNewPlan}>
                    <div className="title-field prop">
                        <div>Title of the plan</div>
                        {/*<textarea onChange={this.onChangeTitle} value={this.state.title}/>*/}
                        <input className= "input-plan" type = "text" onChange={this.onChangeTitle} value={this.state.title}/>
                    </div>
                    <div className="date-field prop">
                        {/*    /!*<label htmlFor="date-plan">Date</label><input type="date"*!/*/}
                        {/*    /!*                                              onChange={this.onChangeDate}*!/*/}
                        {/*    /!*                                              name="date-plan"*!/*/}
                        {/*    /!*                                              className="date-in"*!/*/}
                        {/*    /!*                                              value={this.state.date}*!/*/}
                        {/*    /!*                                              required/>*!/*/}
                        <div>Date</div>
                        {/*    /!*<textarea onChange={this.onChangeDate} value={this.state.date}/>*!/*/}
                        <input className= "input-plan" type = "text" onChange={this.onChangeDate} value={this.state.date}/>
                    </div>
                    <City select_class="city-select" style_class="city-field-from prop" countryName={this.props.countryName}
                          direct="from"/>
                    <City select_class="city-select" style_class="city-field-to prop" countryName={this.props.countryName}
                          direct="to"/>
                    <div className="budgetMin-field prop">
                        <div>Budget min</div>
                        {/*    <textarea onChange={this.onChangeBudgetMin} value={this.state.budgetMin}/>*/}
                        <input className= "input-plan" type = "text" onChange={this.onChangeBudgetMin} value={this.state.budgetMin}/>
                    </div>
                    <div className="budgetMax-field prop">
                        <div>Budget Max</div>
                        {/*    <textarea onChange={this.onChangeBudgetMax} value={this.state.budgetMax}/>*/}
                        <input className= "input-plan" type = "text" onChange={this.onChangeBudgetMax} value={this.state.budgetMax}/>
                    </div>
                    <div className="transport-field prop">
                        <label htmlFor="form-transport">Transport </label>
                        <select className="transport-select" name="form-transport">
                            {this.getTransport()}
                        </select>
                    </div>
                    <div className="amount-field prop">
                        <div>Amount of people</div>
                        {/*    <textarea onChange={this.onChangeAmount} value={this.state.amountOfPeople}/>*/}
                        <input className= "input-plan" type = "text" onChange={this.onChangeAmount} value={this.state.amountOfPeople}/>
                    </div>
                    <div className="description ">
                        <p className="header-text">Description</p>
                        <textarea placeholder="what do you want" onChange={this.onChangeDescription}
                                  name="description" value={this.state.description}/>
                    </div>
                    <div className="public-checkbox ">
                        <input name="isPublic" onClick={e => this.onCheck(e)} type="checkbox"/> <label
                        htmlFor="name-plan">public</label>
                    </div>
                </form>
        );
    }
}

export default NewPlanForm;
