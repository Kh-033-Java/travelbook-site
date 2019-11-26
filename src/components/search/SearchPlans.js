import React, {Component} from 'react';
import axios from "axios";
import OnePlane from "./OnePlane";
import {getJwt} from "../../helpers/jwt";
import "./SearchPage.css"

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
            budgetMin: 100000000,
            budgetMax: 100000000,
            amountMin: 0,
            amountMax: 100000000,
        }
    }

    componentDidMount() {
        let token = getJwt();
        const login = localStorage.getItem("login");
        let endpoint = `http://localhost:8080/user/${login}/recommendation/plans`;
        axios.get(endpoint, {
            headers: {
                Authorization: token
            }
        })
            .then(res => {
                this.setState({plans: res.data});
                console.log(res.data);
            }).catch(error => {
            console.log("error");
            console.log(error);
        });
        console.log("plans " + this.state.plans);
    }

    getPlansWithFilter = () => {
        const {cityFrom, cityTo, transport, budgetMin, budgetMax, amountMin, amountMax, dateFrom, dateTo} = this.state;
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
                this.setState({plans: res.data});
                console.log(res.data);
            }).catch(error => {
            console.log("error");
            console.log(error);
        });
    };


    getArrayPlans = (plans) => {
        const newPlans = [];
        plans.forEach((e) => newPlans.push(<OnePlane plan={e}
                                                     countryName={this.props.countryName}/>));
        return newPlans;
    };

    render() {
        const {plans, cityFrom, cityTo, transport, budgetMin, budgetMax, amountMin, amountMax} = this.state;
        return (
            <div className="search-plan">
                <header style={{color: "white"}}/>
                <div>
                    <div>
                        <div>
                            <h1>Filters</h1>
                        </div>
                        <div className="search-filter">
                            <div>
                                <div>"City From"</div>
                                <input className="input-field-search" type={"text"} placeholder={cityFrom} onChange={e => {
                                    this.setState({
                                        ...this.state,
                                        cityFrom: e.target.value,
                                    })
                                }}/>
                            </div>
                            <div>
                                <div>"City To"</div>
                                <input className="input-field-search" type={"text"} placeholder={cityTo} onChange={e => {
                                    this.setState({
                                        ...this.state,
                                        cityTo: e.target.value,
                                    })
                                }}/>
                            </div>
                            <div>
                                <div>"Transport"</div>
                                <input className="input-field-search" type={"text"} placeholder={transport} onChange={e => {
                                    this.setState({
                                        ...this.state,
                                        transport: e.target.value,
                                    })
                                }}/>
                            </div>
                            <div>
                                <div>"Budget"</div>
                                <input className="input-field-search" type={"text"} placeholder={0} onChange={e => {
                                    this.setState({
                                        ...this.state,
                                        budgetMin: e.target.value,
                                    })
                                }}/>
                            </div>
                            <div>
                                <input className="input-field-search" type={"text"} placeholder={budgetMax} onChange={e => {
                                    this.setState({
                                        ...this.state,
                                        budgetMax: e.target.value,
                                    })
                                }}/>
                            </div>
                            <div>
                                <div>"Date"</div>
                                <input type="date" onChange={e => {
                                    this.setState({
                                        ...this.state,
                                        dateFrom: e.target.value,
                                    })
                                }}
                                       name="date-note"
                                       className="date-in-search" required/>
                            </div>
                            <div>
                                <input  type="date" onChange={e => {
                                    this.setState({
                                        ...this.state,
                                        dateTo: e.target.value,
                                    })
                                }} name="date-note"
                                       className="date-in-search" required/>
                            </div>
                            <div >
                                <div>"Amount of people"</div>
                                <input className="input-field-search" type={"text"} placeholder={amountMin} onChange={e => {
                                    this.setState({
                                        ...this.state,
                                        amountMin: e.target.value,
                                    })
                                }}/>
                            </div>
                            <div >
                                <input className="input-field-search" type={"text"} placeholder={amountMax} onChange={e => {
                                    this.setState({
                                        ...this.state,
                                        amountMax: e.target.value,
                                    })
                                }}/>
                            </div>
                        </div>
                    </div>
                    <div className="button-field-search">
                        <button onClick={this.getPlansWithFilter}>
                            Search
                        </button>
                    </div>
                </div>
                <div>
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

        );
    }
}

export default SearchPlans;