import React, {Component} from 'react';
import '../App.css';
import '../planComponents/./AllPlansPage.css'
import '../planComponents/SinglePlan.css'
import '../planComponents/./NewPlan.css'
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
            <div className="one-plan">
                <div className="owner-list-plans plan-owner-gen">
                    <div><img src={this.props.plan.linkToUserAvatar} alt={""} className="account-image"/></div>
                    <div className="account-label">{this.props.plan.userLoginCreator}</div>
                </div>
                <div className={"propertyTitle-s  prop-s"}>
                    <div>"Title"</div>
                    <textarea value={this.props.plan.title} className="" readOnly/>
                </div>
                <div className={"propertyDate-s  prop-s"}>
                    <div>"Date"</div>
                    <textarea value={this.dateFormat()} className="" readOnly/>
                </div>
                <div className={"propertyCityFrom-s  prop-s"}>
                    <div>"City from"</div>
                    <textarea value={this.props.plan.nameCityFrom} className="" readOnly/>
                </div>
                <div className={"propertyCityTo-s  prop-s"}>
                    <div>"City To"</div>
                    <textarea value={this.props.plan.nameCityToGo} className="" readOnly/>
                </div>
                <div className={"propertyBudgetMin-s  prop-s"}>
                    <div>"BudgetMin"</div>
                    <textarea value={this.props.plan.budgetMin} className="" readOnly/>
                </div>
                <div className={"propertyBudgetMax-s  prop-s"}>
                    <div>"BudgetMax"</div>
                    <textarea value={this.props.plan.budgetMax} className="" readOnly/>
                </div>
                <div className={"propertyTransport-s  prop-s"}>
                    <div>"Transport"</div>
                    <textarea value={this.props.plan.transportType} className="" readOnly/>
                </div>
                <div className={"propertyAmount-s  prop-s"}>
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
