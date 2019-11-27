import React, { Component } from 'react'
import isAuthorized from "../checker/authorizationChecker";
import OnePlanCreator, { setId } from "../planComponents/OnePlanCreator"
import { RangePicker, theme } from 'react-trip-date';
import { ThemeProvider } from 'styled-components';
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
        const endpoint = `http://localhost:8080/user/${localStorage.getItem('login')}/plans`;
        const response = await Axios.get(endpoint).then(async response => { this.setState({ plans: await response.data }, callback) });

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
        if (isAuthorized && this.state.dates !== undefined) {

            return (
                <aside className="rightbar " style={{ overflow: "auto" }}>
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