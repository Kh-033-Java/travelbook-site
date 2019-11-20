import React, {Component} from 'react'
import isAuthorized from "../checker/authorizationChecker";
import OnePlanCreator,{setId} from "../planComponents/OnePlanCreator"
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
        const endpoint = `http://localhost:8080/user/${localStorage.getItem('login')}/plans`;
        const response = await Axios.get(endpoint).then(async response =>{ this.setState({ plans: await response.data })});
    }

    getArrayPlans=()=>{
        const plans = [];
        const {setId} = this.props;
        this.state.plans.forEach(e=>plans.push(<OnePlanCreator plan = {e} setId = {setId}/>));
        return plans;
    };

    render(){
        if(isAuthorized){
            return(
            <aside className="rightbar whole-comp ">
                <Header title="All Plans"/>
                <div className="allUserPlans">
                {this.getArrayPlans()}
                </div>
            </aside>
            )
        }
        
    }
}