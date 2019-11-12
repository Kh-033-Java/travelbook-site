import React, {Component} from 'react';
import {NavLink, Redirect} from "react-router-dom";
import {getJwt} from "../../helpers/jwt";
import axios from 'axios';
import '../App.css';
import './NewPlan.css';
import "../sidebarComponents/SideBar.css";

class CreateFooterForPlan extends Component{
     constructor(props){
         super(props);

     }

    isUsersPlan(){
         let check = false;
        if(this.props.userLoginCreator === localStorage.getItem('login')){
            check = true;
        }
        return check;
    }

    deletePlan() {
         let token = getJwt();
         axios.delete(`http://localhost:8080/plans/${this.props.id}`, {
             headers: {
                 Authorization: token
             }
         })
             .then(res => {
                 if (res.status === 200) {
                     return <Redirect to={"/plans"}/>
                 }
             });
    }

    render() {
        return (
            this.isUsersPlan ?
                <div className="edit-plan">
                    <NavLink className="edit-plan" to ="/editPlan">
                        <div className="settings-button"/>
                    </NavLink>
                </div>
                :
                <div className="sidebar-footer-users-plan container">
                    <div className="edit-plan">
                    <NavLink className="edit-plan" to ="/editPlan">
                        <div className="settings-button"/>
                    </NavLink>
                </div>
                    <div className="create-plan-button container ">
                        <NavLink to="/plans">
                            <button type="button" className="button-plan">Edit plan</button>
                        </NavLink>
                    </div>
                    <div className="delete-plan">
                        <button className="button-plan" onClick={this.deletePlan}/>
                    </div>
                </div>
        )
    }
}

export default CreateFooterForPlan;
