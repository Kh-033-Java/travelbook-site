import React, {Component} from 'react';
import {getJwt} from "../../helpers/jwt";
import axios from 'axios';
import {confirmAlert} from "react-confirm-alert";
import {Redirect} from "react-router";

/**
 *
 * @author Zhelezniak Dmytro
 */

class OneFollowing extends Component {
    constructor(props){
        super(props);
        this.state = {
            login: '',
            link: '',
        };
        this.deleteFollowing = this.deleteFollowing.bind(this);
        this.hasFriends = this.hasFriends.bind(this);
    }

    deleteFollowing () {
        let token = getJwt();
        let data = new FormData();
        let request = new XMLHttpRequest();

        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure you want to delete this great person from your following?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        request.open('PUT', `http://localhost:8080/users/deletefollow/${this.state.login}?user=${localStorage.getItem('login')}`);
                        request.setRequestHeader("Authorization", token);
                        request.send(data);
                        request.onload = function () {
                            if (request.status === 200) {
                                alert("Your friend successfully added!");
                                window.location.href = '/friends';
                            }
                        };
                    }
                },
                {
                    label: 'No',
                    onClick: () => alert('Click No')
                }
            ]
        });
    }

    componentDidMount() {
        this.setState({
            login: this.props.login,
            link: this.props.link
        });
        console.log(this.state)
    }

    hasFriends(){
        let check = true;
        if (this.state.login === '') {
            check = false;
        }

        return check;
    }

    render() {
        if (!this.hasFriends()){
            return (<React.Fragment>
                <p>Don't have friends</p>
            </React.Fragment>)
        } else {
        return(
            <div className="one-friend-cont">
                <div><img src={this.state.link} alt={""} className="account-image"/></div>
                <div className="account-label">{this.state.login}</div>
                <div className="delete">
                    <button className="delete-button" onClick={this.deleteFollowing}>Delete</button>
                </div>
            </div>
        )
    }}
}

export default OneFollowing;