import React, {Component} from "react";
import OnePlanCreator from "./OnePlanCreator.js";
import '../sidebarComponents/SideBar.css'
import axios from 'axios';

/**
 *
 * @author Zhelezniak Dmytro
 */

class UnAuthorizedPlans extends Component{

    constructor(props){
        super(props);
        this.state = {
            plans: [],
        };
        this.getArrayPlans = this.getArrayPlans.bind(this);
    }

    componentDidMount() {
        let endpoint= `http://localhost:8080/country/${this.props.countryName}/plans`;
        axios.get(endpoint).then(res => {
            this.setState({...this.state, plans: res.data});
            console.log(res.data);
        }).catch(error => {
            throw error;
        });
    };

    getArrayPlans=()=>{
        const plans = [];
        this.state.plans.forEach(e=>plans.push(<OnePlanCreator plan = {e} setId = {this.props.setId} countryName = {this.props.countryName}/>));
        return plans;
    };

    render() {
       return(
            <div className = "list-main-unauth  main-sidebar ">
                <div className={"allPlans container"}>
                    {this.getArrayPlans()}
                </div>
            </div>
        )
    }
}

export default UnAuthorizedPlans;
