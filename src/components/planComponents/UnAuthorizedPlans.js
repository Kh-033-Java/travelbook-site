
import React, { Component } from "react";
import '../App.css';
import PlansWrapper from "./PlansWrapper.js";
import '../sidebarComponents/SideBar.css'
import './AllPlansPage.css';
import * as actions from '../../actions/plansActions.js'


class UnAuthorizedPlans extends Component{

    constructor(props){
        super(props);
        this.state = {
            plans: [{}],
        }
    }

    componentDidMount() {
        actions.getPublicPlans(this.props.name).then(res => {
            this.setState({plans: res})
        });
    }

    render() {
       return(
            <div className = "list-main-unauth  main-sidebar container">
                {/* {this.state.plans.map((plan) => {
                    return <PlansWrapper plan={plan} id={plan.id}/>
                })} */}
                <PlansWrapper plan={this.state.plans} id={this.state.plans.id}/>
            </div>
        )
    }
}

export default UnAuthorizedPlans;
