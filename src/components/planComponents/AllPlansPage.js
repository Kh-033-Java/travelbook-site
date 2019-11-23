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
            displayData:[]
        }
        this.getAllUserPlans(this.getAllPlansDates);
        

    }


    Day = ({ day }) => {
        const onClick = (day) => {
            
            console.log(day,'test')

        }

        return (
            <p className="date" onClick={() => onClick(day)}>{day.format('DD')}</p>
        );
    };

    async getAllUserPlans(callback) {
        const endpoint = `http://localhost:8080/user/${localStorage.getItem('login')}/plans`;
        const response = await Axios.get(endpoint).then(async response => { this.setState({ plans: await response.data}, callback) });

    }

    getArrayPlans = () => {
        const plans = [];
        const { setId } = this.props;
        this.state.plans.forEach(e => plans.push(<OnePlanCreator plan={e} setId={setId} />));
        return plans;
    };

    setDisplayPlans = (plans, callback) =>{
        console.log(this.state.plans, "setDisplay")
        this.setState({displayData: plans}, callback)
    }

    onChange = date => console.log(date, '123')

    getAllPlansDates = (callback) => {
        const { plans } = this.state;
        const dates = plans.map((el) => el.date.substring(0, 10))
        console.log(dates, this.state.plans, 'return dates');
        //return dates;
        this.setState(() => { return { dates: dates } },callback);

    }
    componentWillUpdate() {
        console.log(this.state.plans, this.state.dates, 'update')
        this.render();

    }


    render() {
        if (isAuthorized && this.state.dates !== undefined) {
            console.log(this.state.displayData, 'plans');

            return (
                <aside className="rightbar " style={{overflow: "auto"}}>
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
                        {this.getArrayPlans()}
                    </div>
                </aside>
            )
        } else {
            return null;
        }


    }
}