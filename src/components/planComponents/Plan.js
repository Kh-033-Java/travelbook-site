import React,{Component} from "react";
import '../App.css';
import Header from "../sidebarComponents/SidebarHeader";
import"../sidebarComponents/SideBar.css";
import PlansMain from "./PlansMain";
import * as actions from "../../actions/plansActions.js";


class Plan extends Component{
    constructor(props){
        super(props);
        this.state ={
            plan: {
                title:"",
                author: "",
                cityDeparture :"",
                cityArrival :"",
                date:"",
                budgetMin: "",
                budgetMax: "",
                transport: "",
            }
        }
    }
    componentDidMount(){
        actions.getPlanById(this.props.name,this.props.planId).then(res=>
            this.setState({plan : res})
        );
    }
    render(){
        return(
            <aside className="rightbar whole-comp-no-footer container">
                <Header title = {this.state.plan.title} countryName={this.props.name}/>
                <PlansMain note = {this.state.plan}/>
            </aside>
        );
    }
}
export default Plan;
