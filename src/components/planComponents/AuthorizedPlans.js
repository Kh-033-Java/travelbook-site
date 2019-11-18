import React, {Component} from "react";
import '../App.css';
import axios from 'axios';
import {getJwt} from "../../helpers/jwt";
import OnePlanCreator from "./OnePlanCreator";

/**
 *
 * @author Zhelezniak Dmytro
 */

class AuthorizedPlans extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
            plans: [],
        };
        this.onCheck = this.onCheck.bind(this);
        this.showAllPlans = this.showAllPlans.bind(this);
        this.showOnlyUsersPlans = this.showOnlyUsersPlans.bind(this);
    }

    onCheck(e){
        if(e.target.checked)
        {
            console.log("checked");
            this.setState({checked:true});
            this.showOnlyUsersPlans();
        }else{
            console.log("not checked");
            this.setState({checked:false});
            this.showAllPlans();
        }
    }

    showAllPlans() {
        let token = getJwt();
        let endpointCheckedTrue = `http://localhost:8080/country/${this.props.countryName}/plans?user=${localStorage.getItem("login")}`;
        axios.get(endpointCheckedTrue, {
            headers: {
                Authorization: token
            }
        }).then(response => {
            this.setState({...this.state, plans: response.data});
        }).catch(error => {
            throw error;
        });
    };

    showOnlyUsersPlans() {
        let token = getJwt();
        let endpointCheckedFalse = `http://localhost:8080/country/${this.props.countryName}/plans/private?user=${localStorage.getItem("login")}`;
        axios.get(endpointCheckedFalse, {
            headers: {
                Authorization: token
            }
        })
            .then(response => {
                this.setState({...this.state, plans: response.data});
            }).catch(error => {
                throw error;
        });
    };

    getArrayPlans=()=>{
        const plans = [];
        this.state.plans.forEach(e=>plans.push(<OnePlanCreator plan = {e} setId = {this.props.setId} countryName = {this.props.countryName}/>));
        return plans;
    };

    componentDidMount() {
        this.showAllPlans();
    };

    render() {
        return (
            <React.Fragment>
                <div className="list-main-auth main-sidebar">
                    <div className="only-my-checkbox ">
                        <form name="onlyMyPlans">
                            <input type="checkbox"
                                   name='isMyPlan'
                                   id='isMyPlan'
                                   onClick={e => this.onCheck(e)}
                            />
                            <label htmlFor="isMyPlan">
                                only my plans
                            </label>
                        </form>
                    </div>
                    <div className = "allPlans container">
                        {this.getArrayPlans()}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default AuthorizedPlans;
