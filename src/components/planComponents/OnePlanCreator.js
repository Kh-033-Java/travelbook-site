import React, {Component} from "react";
import './AllPlansPage.css'
import {Redirect} from 'react-router-dom';
import * as moment from 'moment';

/**
 *
 * @author Zhelezniak Dmytro
 */

class OnePlanCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
        this.setId = this.setId.bind(this);
    }

    setId(e) {
        e.preventDefault();
        if (!this.props.plan){
            return;
        }
        if (this.props.plan.id) {
            this.props.setId(this.props.plan.id);
            this.setState({clicked: true});
        }
    }

    dateFormat() {
        const date = this.props.plan.date;
        return moment(date).format( 'LL')
    }

    render() {
        if(this.state.clicked){
            return <Redirect to={"/plan"}/>;
        }
        return (
            <div className='list-el-container list-plan-el' onClick ={e=>this.setId(e)}>
                <div className="owner-list-plans plan-owner-gen">
                    <div><img src={this.props.plan.linkToUserAvatar} alt={""} className="account-image"/></div>
                    <div className="account-label">{this.props.plan.userLoginCreator}</div>
                </div>
                <div className={"propertyTitle  prop"}>
                    <div>Title </div>
                    <textarea value={this.props.plan.title} className="" readOnly/>
                </div>
                <div className={"propertyDate  prop"}>
                    <div>Date </div>
                    <textarea value= {this.dateFormat()} className="" readOnly/>
                </div>
                <div className={"propertyCityFrom  prop"}>
                    <div>City from </div>
                    <textarea value={this.props.plan.nameCityFrom} className="" readOnly/>
                </div>
                <div className={"propertyCityTo  prop"}>
                    <div>City To </div>
                    <textarea value={this.props.plan.nameCityToGo} className="" readOnly/>
                </div>
            </div>
        )
    }
}
export default OnePlanCreator;
