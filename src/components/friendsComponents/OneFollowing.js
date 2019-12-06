import React, {Component} from 'react';
import {getJwt} from "../../helpers/jwt";
import axios from 'axios';
import {confirmAlert} from "react-confirm-alert";
import {Redirect} from "react-router";
import {Link} from "react-router-dom";
import {getLogin} from "../../helpers/getLogin";

/**
 *
 * @author Zhelezniak Dmytro
 */

class OneFollowing extends Component {
    constructor(props){
        super(props);
        this.state = {
            login: this.props.login,
            link: this.props.link,
        };
        this.deleteFollowing = this.deleteFollowing.bind(this);
        this.hasFriends = this.hasFriends.bind(this);
    }

    deleteFollowing () {
        let token = getJwt();
        let login = getLogin();

        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure you want to delete this great person from your following?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        fetch(`http://localhost:8080/users/deletefollow/${this.state.login}?user=${login}`, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization: token
                            }
                        }).then(res => {
                            if (res.status === 200) {
                                alert("This guy isn't your friend already! ;(");
                                window.location.href = '/friends';
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
                <div className="account-label">
                    <Link to={`/userPage/${this.state.login}`}> {this.state.login} </Link>
                </div>
                <div className="delete">
                    <button className="btn btn-outline-danger" onClick={this.deleteFollowing}>Delete</button>
                </div>
            </div>
        )
    }}
}

export default OneFollowing;