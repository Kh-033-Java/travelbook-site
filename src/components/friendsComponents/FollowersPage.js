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
        this.state.followers.forEach(e => friends.push(<OneFollower login = {e.login} avatar = {e.avatar}/>));
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
            console.log(res.data);
        });
    }

    render() {
        return(
            <aside className="rightbar container">
                <FriendsHeader/>
                <aside className="followers">
                    {this.getFollowers()}
                </aside>
            </aside>
        )
    }
}

export default FollowersPage;
