import React, {Component} from 'react'
import isAuthorized from "../checker/authorizationChecker";
import AuthorizedPlans from "../planComponents/AuthorizedPlans"
import OnePlanCreator from "../planComponents/OnePlanCreator"
import Header from "../sidebarComponents/SidebarHeader";
import Axios from 'axios'

export default class AllPlansPage extends Component{
    constructor(props){
        super();
        this.state ={
            plans: []
        }
        this.getAllUserPlans();
        console.log(this.state.plans);
    }

    async getAllUserPlans(){
        const endpoint = `http://localhost:8080/user/${localStorage.getItem('login')}/recommendation/plans`;
        const response = await Axios.get(endpoint).then(async response =>{ this.setState({ plans: await response.data })});
    }

    getArrayPlans=()=>{
        const plans = [];
        this.state.plans.forEach(e=>plans.push(<OnePlanCreator plan = {e} setId = {this.props.setId} countryName = {this.props.countryName}/>));
        return plans;
    };

    render(){
        if(isAuthorized){
            return(
            <aside className="rightbar whole-comp ">
                <Header title="All Plans"/>
                {this.getArrayPlans()};
            </aside>
            )
        }
        
    }
}