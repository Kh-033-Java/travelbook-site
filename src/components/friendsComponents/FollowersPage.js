import React, {Component} from 'react';
import {getJwt} from "../../helpers/jwt";
import axios from 'axios';
import OneFollower from './OneFollower';
import FriendsHeader from "./FriendsHeader";

/**
 *
 * @author Zhelezniak Dmytro
 */

class FollowersPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            followers: [],
        };
        this.getFollowers = this.getFollowers.bind(this);
    }

    getFollowers() {
        let friends = [];
        console.log(this.state.followers);
        this.state.followers.forEach(e => friends.push(<OneFollower login = {e.login} link = {e.avatar.link}/>));
        return friends;
    }

    componentDidMount() {
        let token = getJwt();

        axios.get(`http://localhost:8080/users/followers?user=${localStorage.getItem('login')}`,{
            headers: {
                Authorization: token
            }
        }).then(res => {
            this.setState({followers : res.data});
        });
    }

    render() {
        return(
            <div className="all-friends">
                {this.getFollowers()}
            </div>
        )
    }
}

export default FollowersPage;
