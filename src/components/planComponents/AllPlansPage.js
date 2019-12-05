import React, { Component } from 'react'
import isAuthorized from "../checker/authorizationChecker";
import OnePlanCreator, { setId } from "../planComponents/OnePlanCreator"
import { RangePicker, theme } from 'react-trip-date';
import { ThemeProvider } from 'styled-components';
import {getLogin} from '../../helpers/getLogin'
import {getJwt} from "../../helpers/jwt";
import Axios from 'axios'



export default class AllPlansPage extends Component {
    constructor(props) {
        super();
        this.state = {
            plans: [],
            displayData: []
        }
        this.getAllUserPlans(() => { this.getAllPlansDates(); this.setDisplayPlans(this.getArrayPlans(this.state.plans)) });


    }


    Day = ({ day }) => {
        const onClick = (day) => {

            let date = new Date(day);
            date = new Date(date.setHours(date.getHours()+2));
            const filteredData = this.state.plans.filter((el)=> new Date(el.date).getTime() === date.getTime());
            this.setState({displayData: this.getArrayPlans(filteredData)})
        }

        return (
            <p className="date" onClick={() => onClick(day)}>{day.format('DD')}</p>
        );
    };

    async getAllUserPlans(callback) {
        const endpoint = `http://localhost:8080/user/${getLogin()}/plans`;
        const response = await Axios.get(endpoint, {
            headers: {
                Authorization: getJwt()
            }
        }).then(async response => { this.setState({ plans: await response.data }, callback) });

    }

    getArrayPlans = (plans) => {
        const temp = [];
        const { setId } = this.props;
        plans.forEach(e => temp.push(<OnePlanCreator key ={e.id} plan={e} setId={setId} />));
        return temp;
    };

    setDisplayPlans = (plans, callback) => {
        this.setState({ displayData: plans }, callback)
    }

    getAllPlansDates = (callback) => {
        const { plans } = this.state;
        const dates = plans.map((el) => el.date.substring(0, 10))
        this.setState(() => { return { dates: dates } }, callback);

    }
    componentWillUpdate() {
        this.render();

    }


    render() {
        console.log(isAuthorized, 'auth', this.state.dates, 'dates');
        if (isAuthorized && this.state.dates !== undefined) {

            return (
                <aside className="rightbar col-12 col-lg-6" style={{ overflow: "auto" }}>
                    <h3 className="note-title container header-text" style={{ gridColumnStart: 1, gridColumnEnd: 3 }}>All plans</h3>
                    <div className="calendar">
                        <ThemeProvider theme={theme}>
                            <RangePicker
                                handleChange={this.onChange}
                                onClick={this.onCalendarClick}
                                selectedDays={this.state.dates}
                                dayComponent={this.Day}
                                disabledBeforToday={false}
                                disabled={true}
                            />
                        </ThemeProvider>
                    </div>
                    <div className="allUserPlans" >
                        {this.state.displayData.length > 0? this.state.displayData : <p>You dont have any plans</p> }
                    </div>
                </aside>
            )
        } else {
            return null;
        }


    }
}