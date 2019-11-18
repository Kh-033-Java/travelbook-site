import React, {Component} from 'react';
import {getJwt} from "../../helpers/jwt";
import axios from 'axios';
import {Redirect} from "react-router";

/**
 *
 * @author Zhelezniak Dmytro
 */

class OneFollower extends Component {
    constructor(props){
        super(props);
        this.state = {
            followings: [],
            login: '',
            link: '',
        };
        this.addToFollowings = this.addToFollowings.bind(this);
        this.isFollowing = this.isFollowing.bind(this);
        this.hasFriends = this.hasFriends.bind(this);
    }

    addToFollowings () {
        let token = getJwt();
        let data = new FormData();
        let request = new XMLHttpRequest();
        request.open('PUT', `http://localhost:8080/users/addfollow/${this.props.login}?user=${localStorage.getItem('login')}`);
        request.setRequestHeader("Authorization", token);
        request.send(data);
        request.onload = function () {
            if (request.status === 200) {
                alert("Your friend successfully added!");
                window.location.href = '/friends';
            }
        };
    }

    componentDidMount() {
        let token = getJwt();

        axios.get(`http://localhost:8080/users/following?user=${localStorage.getItem('login')}`,{
            headers: {
                Authorization: token
            }
        }).then(res => {
            this.setState({followings : res.data});
        });
        this.setState({login: this.props.login,
                            link: this.props.link});
        console.log(this.state)
    }

    isFollowing(){
        let isFollowing = false;
        let followings = this.state.followings;
        for (let i = 0; i < followings.length; i++){
            if (followings[i].login === this.state.login){
                isFollowing = true;
                break;
            }
        }

        return isFollowing;
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
                {!this.isFollowing() ?
                <div className="following">
                    <button className="follow-button" onClick={this.addToFollowings}>Follow</button>
                </div>
                    : <React.Fragment/>}
            </div>
        )
    }}
}

export default OneFollower;
