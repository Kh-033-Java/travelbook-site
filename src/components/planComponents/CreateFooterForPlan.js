import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {getJwt} from "../../helpers/jwt";
import axios from 'axios';
import '../App.css';
import './NewPlan.css';
import "../sidebarComponents/SideBar.css";
import {confirmAlert} from "react-confirm-alert";

class CreateFooterForPlan extends Component{
     constructor(props){
         super(props);
         this.deletePlan = this.deletePlan.bind(this);
         this.isUsersPlan = this.isUsersPlan.bind(this);
     }

    isUsersPlan(){
         let check = false;
        if(this.props.userLoginCreator === localStorage.getItem('login')){
            check = true;
        }
        return check;
    }

    deletePlan () {
        let token = getJwt();
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure you want to delete this plan?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        axios.delete(`http://localhost:8080/plans/${this.props.planId}`, {
                            headers: {
                                Authorization: token
                            }
                        }).then(res => {
                            if (res.status === 200) {
                                alert("Your plan successfully deleted!");
                                localStorage.clear();
                                window.location.href = '/travelbook';
                            }
                        });
                    }
                },
                {
                    label: 'No',
                    onClick: () => alert('Click No')
                }
            ]
        });
    }

    render() {
        return (
            !this.isUsersPlan() ?
                <div className="footer-single-plan-unauth main-sidebar">
                    <NavLink to="/plans">
                        <button type="button" className="unauth-return-plan">Return to plans</button>
                    </NavLink>
                </div>
                :
                <div className="footer-single-plan-auth">
                    <div className="edit-plan">
                        <NavLink to ="/editPlan">
                            <button className="edit-button-plan plan-footer-buttons"/>
                        </NavLink>
                    </div>
                    <div className="return-to-plan">
                        <NavLink to="/plans">
                            <button className="auth-return-plan">Return to plans</button>
                        </NavLink>
                    </div>
                    <div className="delete-plan">
                        <button className="delete-button-plan plan-footer-buttons" onClick={this.deletePlan}/>
                    </div>
                </div>
        )
    }
}

export default CreateFooterForPlan;
