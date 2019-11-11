import React, {Component} from 'react';
import '../App.css';
import '../planComponents/./AllPlansPage.css'
import '../planComponents/./PlansStyling.css'
import '../planComponents/./NewPlan.css'
import {Redirect} from 'react-router-dom';
import * as moment from 'moment';

class OnePlane extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        };
    }


    dateFormat() {
        const date = this.props.plan.date;
        return moment(date).format('LL')
    }

    render() {
        return (
            <div className='list-el-container list-plan-el'>
                <div className="owner-list-plans plan-owner-gen">
                    <div><img src={this.props.plan.linkToUserAvatar} alt={""} className="account-image"/></div>
                    <div className="account-label">{this.props.plan.userLoginCreator}</div>
                </div>
                <div className={"propertyTitle  prop"}>
                    <div>"Title"</div>
                    <textarea value={this.props.plan.title} className="" readOnly/>
                </div>
                <div className={"propertyDate  prop"}>
                    <div>"Date"</div>
                    <textarea value={this.dateFormat()} className="" readOnly/>
                </div>
                <div className={"propertyCityFrom  prop"}>
                    <div>"City from"</div>
                    <textarea value={this.props.plan.nameCityFrom} className="" readOnly/>
                </div>
                <div className={"propertyCityTo  prop"}>
                    <div>"City To"</div>
                    <textarea value={this.props.plan.nameCityToGo} className="" readOnly/>
                </div>
                <div className={"propertyBudgetMin  prop"}>
                    <div>"BudgetMin"</div>
                    <textarea value={this.props.plan.budgetMin} className="" readOnly/>
                </div>
                <div className={"propertyBudgetMax  prop"}>
                    <div>"BudgetMax"</div>
                    <textarea value={this.props.plan.budgetMax} className="" readOnly/>
                </div>
                <div className={"propertyTransport  prop"}>
                    <div>"Transport"</div>
                    <textarea value={this.props.plan.transportType} className="" readOnly/>
                </div>
                <div className={"propertyAmount  prop"}>
                    <div>"Amount of people"</div>
                    <textarea value={this.props.plan.amountOfPeople} className="" readOnly/>
                </div>
                <div className="description">
                    <div>{this.props.plan.description}</div>
                </div>
            </div>
        )
    }
}

export default OnePlane;