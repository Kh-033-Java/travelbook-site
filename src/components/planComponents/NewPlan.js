import React, {Component} from "react";
import {Redirect} from 'react-router-dom';
import '../App.css';
import './NewPlan.css';
import * as am4core from "@amcharts/amcharts4/core";
import axios from 'axios';
import Header from "../sidebarComponents/SidebarHeader";
import "../sidebarComponents/SideBar.css";
import FooterSubmit from '../sidebarComponents/FooterSubmit'
import City from "../sidebarComponents/CityProperty";
import Transport from "./TransportProperty"

class NewPlan extends Component{
    constructor(props){
        super(props);
        this.state = {
            country: this.props.countryName,
            login: localStorage.getItem('login'),
            check: false,
            title: '',
            date: '',
            budgetMin: '',
            budgetMax: '',
            transport: '',
            amount: '',
            description: '',
        }
        // this.onChangeTitle = this.onChangeTitle.bind(this);
        // this.onChangeDate = this.onChangeDate(this);
        // this.onChangeBudgetMin = this.onChangeBudgetMin(this);
        // this.onChangeBudgetMax = this.onChangeBudgetMax(this);
        // this.onChangeTransport = this.onChangeTransport(this);
        // this.onChangeAmount = this.onChangeAmount(this);
        // this.onChangeDescription = this.onChangeDescription(this);
    }

    onChangeTitle(e){
       this.setState({name: e.target.value});
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
        this.setState({amount: e.target.value});
    }

    onChangeDescription(e){
        this.setState({description: e.target.value});
    }

    onCheck(e){
        if(e.target.checked){
            console.log("checked")
            this.setState({check:true})
        }else{
            console.log("not checked")
            this.setState({check:false})
        }
    }

    sendNewPlan(e){
        e.preventDefault();
        axios.post(`http://localhost:8080/plans`, this.state);
        this.props.worldSeries.getPolygonById(this.props.idCountry).fill = am4core.color("#7c467f");
        this.setState({onSubmit: true})
    }

    componentDidMount() {
        let endpoint= `http://localhost:8080/transport`;
        axios.get(endpoint)
            .then(res => {
                this.setState({transport: res.data})
            }).catch(error => {
            console.log(error);
            return <Redirect to="/errorPage"/>
        })
    }

    createOptionsForSelect = () => {
        let options = [];
        for (let i = 0; i < this.state.transport.length; i++) {
            options.push(<option value={`${this.state.transport[i].id}`}> {`${this.state.transport[i].type}`}</option>)
        }
        return options;
    };

    render(){
        if(this.state.onSubmit){
            return <Redirect to={"travelbook"}/>
        }
        return(
            <aside className="rightbar whole-comp ">
                <Header title = "New Plan" countryName={this.props.countryName}/>
                <form name="addPlan" id="addPlan" className="main-sidebar  main-comp-newplan"
                      onSubmit={this.sendNewPlan}>
                    <div className="title-field ">
                        <label htmlFor="name-plan">Title of the plan</label><input type="text"
                                                                                  onChange={this.onChangeTitle}
                                                                                  name="title-plan"/>
                    </div>
                    <div className="date-field ">
                        <label htmlFor="date-plan">Date</label><input type="date" onChange={this.onChangeDate}
                                                                      name="date-plan"
                                                                      className="date-in" required/>
                    </div>
                    <City select_class="city-select" style_class="city-field-from" countryName={this.props.countryName} direct="from"/>
                    <City select_class="city-select" style_class="city-field-to" countryName={this.props.countryName} direct="to"/>
                    <div className="budgetMin-field ">
                        <label htmlFor="budgetMin-plan">Budget min</label><input type="text"
                                                                                   onChange={this.onChangeBudgetMin}
                                                                                   name="budgetMin-plan"/>
                    </div>
                    <div className="budgetMax-field ">
                        <label htmlFor="budgetMax-plan">Budget Max</label><input type="text"
                                                                                   onChange={this.onChangeBudgetMax}
                                                                                   name="budgetMax-plan"/>
                    </div>
                    <div className="transport-select">
                        <label htmlFor="form-transport">Transport </label>
                        <select className="transport-field" name="form-transport">
                            {this.createOptionsForSelect()}
                        </select>
                    </div>
                    <div className="amount-field ">
                        <label htmlFor="amount-plan">Amount of people</label><input type="text"
                                                                                 onChange={this.onChangeAmount}
                                                                                 name="amount-plan"/>
                    </div>
                    <div className="description ">
                        <p className="header-text">Description</p>
                        <textarea placeholder="what do you want" onChange={this.onChangeDescription}
                                  name="description"/>
                    </div>
                    <div className="public-checkbox ">
                        <input name="isPublic" onClick={e => this.onCheck(e)} type="checkbox"/> <label
                        htmlFor="name-plan">public</label>
                    </div>
                </form>
                <FooterSubmit text ="Add plan" for="addPlan"/>
            </aside>
        );
    }
}

export default NewPlan;
