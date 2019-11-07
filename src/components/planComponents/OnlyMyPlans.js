import React, {Component} from 'react';
import axios from 'axios';
import '../sidebarComponents/SideBar.css'
import PlansWrapper from './PlansWrapper';
import { getJwt } from '../../helpers/jwt';


class OnlyMyPlans extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
            plans: [],
            token: getJwt()
            }
            this.onCheck = this.onCheck.bind(this);

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
            let endpointCheckedTrue = 'http://localhost:8080/country/' + this.props.name + '/plans/private?user=' + localStorage.getItem("login");
            axios.get(endpointCheckedTrue, {
                headers: {
                    Authorization: this.state.token
                }
            })
                .then(response => {
                    this.setState({plans: response});
                    console.log(response);
                });     
         };

         showOnlyUsersPlans() {
            let endpointCheckedFalse = 'http://localhost:8080/country/' + this.props.name + '/plans?user=' + localStorage.getItem("login");
            axios.get(endpointCheckedFalse, {
                headers: {
                    Authorization: this.state.token
                }
            })
                .then(response => {
                    this.setState({plans: response});
                    console.log(response);
                })
            }     
    
    componentDidMount() {
        this.showAllPlans();
    };

    render() {
        return (
            <div className="only-my-checkbox container">
            <form name="onlyMyPlans">
                <input type="checkbox"
                        name='isMyPlan'
                        id='isMyPlan'
                       onClick={e=>this.state.checked}
                ></input>
                <label htmlFor="isMyPlan">
                only my plans
            </label>
            </form>
            <div className = "list-main-auth container">
                {/* {this.state.plans.map((plan) => {
                   return <PlansWrapper plan = {plan}/>
                })}; */}
                <PlansWrapper plan = {this.state.plans}/>
            </div>
            </div>
        );
    }
}

export default OnlyMyPlans;