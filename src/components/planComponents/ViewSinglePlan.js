import React, {Component} from "react";
import '../App.css';
import './SinglePlan.css'
import "../sidebarComponents/SideBar.css";
import * as moment from 'moment';
import CreateFooterForPlan from "./CreateFooterForPlan";
import {Redirect} from "react-router";
import axios from 'axios';
import Header from "../sidebarComponents/SidebarHeader";
import {confirmAlert} from "react-confirm-alert";
import {getJwt} from "../../helpers/jwt";
import {getLogin} from "../../helpers/getLogin";

/**
 *
 * @author Zhelezniak Dmytro
 */

class ViewSinglePlan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: this.props.countryName,
            userLoginCreator: '',
            linkToUserAvatar: '',
            isPublic: false,
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
        this.toCreateNote = this.toCreateNote.bind(this);
        this.isUsersPlan = this.isUsersPlan.bind(this);
    }

    toCreateNote () {
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Do you want to delete this plan and create new note of this trip?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        let token = getJwt();
                        axios.delete(`http://localhost:8080/plans/${this.props.planId}`, {
                            headers: {
                                Authorization: token
                            }
                        }).then(res => {
                            if (res.status === 200) {
                                alert("Your plan successfully deleted!");
                                window.location.href = "/newnote";
                            }
                        });
                    }
                },
                {
                    label: 'No',
                    onClick: () => alert('Click No')
                }
            ]
        });
    };


    isUsersPlan(){
        let check = false;
        const login = getLogin();
        if(this.state.userLoginCreator === login){
            check = true;
        }
        return check;
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/country/plans/${this.props.planId}`)
            .then(res => {
                this.setState({
                    userLoginCreator: res.data.userLoginCreator,
                    linkToUserAvatar: res.data.linkToUserAvatar,
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
            .catch(error => {
                console.log(error);
                return <Redirect to="/errorPage"/>
            })
    }

    dateFormat() {
        const date = this.state.date;
        return moment(date).format( 'LL')
    }

    render() {
        let button = <React.Fragment/>;
        if(this.isUsersPlan()){
            button =
                    <div className="done">
                        <button className="btn btn-success" onClick={this.toCreateNote}>Done</button>
                    </div>
        }
        return (
            <aside className="rightbar aside-container whole-comp col-12 col-lg-6">
                <Header title = "View Plan" countryName={this.props.countryName}/>
            <div className='main-comp-plan main-sidebar'>
                <div className="plan-owner plan-owner-gen main-sidebar">
                    <div><img src={this.state.linkToUserAvatar} alt={""} className="account-image"/></div>
                    <div className="account-label">{this.state.userLoginCreator}</div>
                    {button}
                </div>
                <div className="planTitle  prop">
                    <div>Title </div>
                    <textarea value={this.state.title} className="" readOnly/>
                </div>
                <div className={"planDate  prop"}>
                    <div>Date </div>
                    <textarea value= {this.dateFormat()} className="" readOnly/>
                </div>
                <div className={"planCityFrom  prop"}>
                    <div>City from </div>
                    <textarea value={this.state.nameCityFrom} className="" readOnly/>
                </div>
                <div className={"planCityTo  prop"}>
                    <div>City To </div>
                    <textarea value={this.state.nameCityToGo} className="" readOnly/>
                </div>
                <div className={"planBudgetMin  prop"}>
                    <div>BudgetMin </div>
                    <textarea value={this.state.budgetMin} className="" readOnly/>
                </div>
                <div className={"planBudgetMax  prop"}>
                    <div>BudgetMax </div>
                    <textarea value={this.state.budgetMax} className="" readOnly/>
                </div>
                <div className={"planTransport  prop"}>
                    <div>Transport </div>
                    <textarea value={this.state.transportType} className="" readOnly/>
                </div>
                <div className={"planAmount  prop"}>
                    <div>Amount of people </div>
                    <textarea value={this.state.amountOfPeople} className="" readOnly/>
                </div>
                <div className="description-view-plan">
                    <div className="title-plan">Description</div>
                    <textarea value={this.state.description} readOnly/>
                </div>
            </div>
                <CreateFooterForPlan userLoginCreator = {this.state.userLoginCreator} planId = {this.props.planId}/>
            </aside>
        )
    }
}
export default ViewSinglePlan;
