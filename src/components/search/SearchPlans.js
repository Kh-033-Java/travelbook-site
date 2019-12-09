import React, { Component } from 'react';
import axios from "axios";
import OnePlane from "./OnePlane";
import { getJwt } from "../../helpers/jwt";
import "./SearchPage.css"
import { getLogin } from "../../helpers/getLogin";

class SearchPlans extends Component {

    constructor(props) {
        super(props);
        this.state = {
            plans: [{}],
            dateFrom: null,
            dateTO: null,
            cityFrom: "",
            cityTo: "",
            transport: "",
            budgetMin: 0,
            budgetMax: 100000000,
            amountMin: 0,
            amountMax: 100000000,
        }
    }

    componentDidMount() {
        let token = getJwt();
        const login = getLogin();
        let endpoint = `http://localhost:8080/user/${login}/recommendation/plans`;
        axios.get(endpoint, {
            headers: {
                Authorization: token
            }
        })
            .then(res => {
                this.setState({ plans: res.data });
                console.log(res.data);
            }).catch(error => {
                console.log("error");
                console.log(error);
            });
        console.log("plans " + this.state.plans);
    }

    getPlansWithFilter = () => {
        const { cityFrom, cityTo, transport, budgetMin, budgetMax, amountMin, amountMax, dateFrom, dateTo } = this.state;
        let token = getJwt();
        let endpoint = `http://localhost:8080/plans/search`;
        axios.put(endpoint, {
            budgetMin: budgetMin,
            budgetMax: budgetMax,
            minDate: dateFrom,
            maxDate: dateTo,
            amountOfPeopleMin: amountMin,
            amountOfPeopleMax: amountMax,
            transportType: transport,
            cityFrom: cityFrom,
            cityGoTo: cityTo,
        }, {
            headers: {
                Authorization: token
            }

        })
            .then(res => {
                this.setState({ plans: res.data });
                console.log(res.data);
            }).catch(error => {
                console.log("error");
                console.log(error);
            });
    };


    getArrayPlans = (plans) => {
        const newPlans = [];
        plans.forEach((e, key) => newPlans.push(<OnePlane plan={e} key={key}
            countryName={this.props.countryName} />));
        return newPlans;
    };

    render() {
        const { plans, cityFrom, cityTo, transport, budgetMin, budgetMax, amountMin, amountMax } = this.state;
        return (
            <div className="row">
                <div className="row h-100 w-100">
                    <header style={{ color: "white" }} />
                    <div className='col-12 col-md plan-search-block'>
                        <div>
                            <h1>Filters</h1>
                            <div className="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-default">City from: </span>
                                </div>
                                <input className="" type={"text"} placeholder={cityFrom} onChange={e => {
                                    this.setState({
                                        ...this.state,
                                        cityFrom: e.target.value,
                                    })
                                }} />
                            </div>
                            <div className="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-default">City to: </span>
                                </div>
                                <input type={"text"} placeholder={cityTo} onChange={e => {
                                    this.setState({
                                        ...this.state,
                                        cityTo: e.target.value,
                                    })
                                }} />
                            </div>
                            <div className="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-default">Transport: </span>
                                </div>
                                <input type={"text"} placeholder={transport} onChange={e => {
                                    this.setState({
                                        ...this.state,
                                        transport: e.target.value,
                                    })
                                }} />
                            </div>
                            <div className="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-default">Min budget: </span>
                                </div>
                                <input type={"text"} placeholder={0} onChange={e => {
                                    this.setState({
                                        ...this.state,
                                        budgetMin: e.target.value,
                                    })
                                }} />
                            </div>
                            <div className="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-default">Max budget: </span>
                                </div>
                                <input type={"text"} placeholder={budgetMax} onChange={e => {
                                    this.setState({
                                        ...this.state,
                                        budgetMax: e.target.value,
                                    })
                                }} />
                            </div>
                            <div className="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-default">Date start: </span>
                                </div>
                                <input type="date" onChange={e => {
                                    this.setState({
                                        ...this.state,
                                        dateFrom: e.target.value,
                                    })
                                }}
                                    name="date-note"
                                    className="date-in-search" required />
                            </div>
                            <div className="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-default">Date end: </span>
                                </div>                                    <input type="date" onChange={e => {
                                    this.setState({
                                        ...this.state,
                                        dateTo: e.target.value,
                                    })
                                }} name="date-note"
                                    className="date-in-search" required />
                            </div>
                            <div className="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-default">Min amount of people: </span>
                                </div>
                                <input className="input-field-search" type={"text"} placeholder={amountMin} onChange={e => {
                                    this.setState({
                                        ...this.state,
                                        amountMin: e.target.value,
                                    })
                                }} />
                            </div>
                            <div className="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-default">Max amount of people: </span>
                                </div>
                                <input className="input-field-search" type={"text"} placeholder={amountMax} onChange={e => {
                                    this.setState({
                                        ...this.state,
                                        amountMax: e.target.value,
                                    })
                                }} />
                            </div>
                        </div>
                        <div className="button-field-search">
                            <button className ='btn btn-primary' onClick={this.getPlansWithFilter}>
                                Search
                        </button>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 justify-content-center justify-content-md-start plan-search-block'>
                        <div>
                            <h1>Recommendations</h1>
                        </div>
                        <div className="plan-scroll">
                            {
                                this.getArrayPlans(plans)
                            }
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default SearchPlans;