import React, {Component} from 'react';
import axios from "axios";
import OnePlane from "./OnePlane";
import {getJwt} from "../../helpers/jwt";

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
                <header className="header"/>
                <div>
                    <div className='list-el-containerS list-plan-elS header'>
                        <div>
                            <h1>Filters</h1>
                        </div>
                        <div className={"propertyTitleS  prop"}>
                            <div>"City From"</div>
                            <input type={"text"} placeholder={cityFrom} onChange={e => {
                                this.setState({
                                    ...this.state,
                                    cityFrom: e.target.value,
                                })
                            }}/>
                        </div>
                        <div className={"propertyCityFromS  prop"}>
                            <div>"City To"</div>
                            <input type={"text"} placeholder={cityTo} onChange={e => {
                                this.setState({
                                    ...this.state,
                                    cityTo: e.target.value,
                                })
                            }}/>
                        </div>
                        <div className={"propertyTransports  prop"}>
                            <div>"Transport"</div>
                            <input type={"text"} placeholder={transport} onChange={e => {
                                this.setState({
                                    ...this.state,
                                    transport: e.target.value,
                                })
                            }}/>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <div className={"propertyBudgetMinS  prop"}>
                            <div>"BudgetMin"</div>
                            <input type={"text"} placeholder={budgetMin} onChange={e => {
                                this.setState({
                                    ...this.state,
                                    budgetMin: e.target.value,
                                })
                            }}/>
                        </div>
                        <div className={"propertyBudgetMaxS  prop"}>
                            <div>"BudgetMax"</div>
                            <input type={"text"} placeholder={budgetMax} onChange={e => {
                                this.setState({
                                    ...this.state,
                                    budgetMax: e.target.value,
                                })
                            }}/>
                        </div>
                        <div className={"propertyDateS  prop"}>
                            <div>"Date From"</div>
                            <input type="date" onChange={e => {
                                this.setState({
                                    ...this.state,
                                    dateFrom: e.target.value,
                                })
                            }}
                                   name="date-note"
                                   className="date-in" required/>
                        </div>
                        <div className={"propertyDateS  prop"}>
                            <div>"Date To"</div>
                            <input type="date" onChange={e => {
                                this.setState({
                                    ...this.state,
                                    dateTo: e.target.value,
                                })
                            }} name="date-note"
                                   className="date-in" required/>
                        </div>
                        <div className={"propertyAmountS  prop"}>
                            <div>"Amount of people min"</div>
                            <input type={"text"} placeholder={amountMin} onChange={e => {
                                this.setState({
                                    ...this.state,
                                    amountMin: e.target.value,
                                })
                            }}/>
                        </div>
                        <div className={"propertyAmountS  prop"}>
                            <div>"Amount of people max"</div>
                            <input type={"text"} placeholder={amountMax} onChange={e => {
                                this.setState({
                                    ...this.state,
                                    amountMax: e.target.value,
                                })
                            }}/>
                        </div>
                    </div>
                    <div style={{textAlign: "center"}}>
                        <button onClick={this.getPlansWithFilter}>
                            Search
                        </button>
                    </div>
                </div>
                <div>
                    <div>
                        <h1>Recommendations</h1>
                    </div>
                    {
                        this.getArrayPlans(plans)
                    }
                </div>
            </div>

        );
    }
}

export default SearchPlans;