import React, {Component} from 'react';
import {getJwt} from "../../helpers/jwt";
import {getLogin} from '../../helpers/getLogin'
import axios from 'axios';
import OneFollowing from "./OneFollowing";
import FriendsHeader from "./FriendsHeader";

/**
 *
 * @author Zhelezniak Dmytro
 */

class FollowingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            followings: [],
        };
        this.getFollowings = this.getFollowings.bind(this);
    }

    getFollowings() {
        let friends = [];
        this.state.followings.forEach((e, key) => friends.push(<OneFollowing login={e.login} link={e.avatar.link}
                                                                             key={key}/>));
        return friends;
    }

    componentDidMount() {
        let token = getJwt();
        let login = getLogin();

        axios.get(`http://localhost:8080/users/following?user=${login}`, {
            headers: {
                Authorization: token
            }
        }).then(res => {
            this.setState({followings: res.data});
        });
    }

    render() {
        return (
            <div className="all-friends">
                {this.getFollowings()}
            </div>
        )
    }
}

export default FollowingPage;
