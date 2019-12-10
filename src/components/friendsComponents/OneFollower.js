import React, {Component} from 'react';
import {getJwt} from "../../helpers/jwt";
import axios from 'axios';
import {Redirect} from "react-router";
import {Link} from "react-router-dom";
import {getLogin} from "../../helpers/getLogin";

/**
 *
 * @author Zhelezniak Dmytro
 */

class OneFollower extends Component {
    constructor(props){
        super(props);
        this.state = {
            followings: [],
            login: this.props.login,
            link: this.props.link,
            isFollowing: this.props.isFollowing,
        };
        this.addToFollowings = this.addToFollowings.bind(this);
        this.hasFriends = this.hasFriends.bind(this);
    }

    addToFollowings () {
        let token = getJwt();
        let login = getLogin();

        fetch(`http://localhost:8080/users/addfollow/${this.props.login}?user=${login}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token
            }
        }).then(res => {
            if (res.status === 200) {
                alert("Your friend successfully added!");
                window.location.href = '/friends';
            }
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
                <div className="account-label-friends">
                    <Link to={`/userPage/${this.state.login}`}> {this.state.login} </Link>
                </div>
                {!this.state.isFollowing ?
                <div className="following">
                    <button className="btn btn-outline-primary" onClick={this.addToFollowings}>Follow</button>
                </div>
                    : <React.Fragment/>}
            </div>
        )
    }}
}

export default OneFollower;
