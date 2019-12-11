import React, {Component} from 'react';
import {getJwt} from "../../helpers/jwt";
import {getLogin} from "../../helpers/getLogin"
import axios from 'axios';
import OneFollower from './OneFollower';

/**
 *
 * @author Zhelezniak Dmytro
 */

class FollowersPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            followers: [],
            following: [],
        };
        this.getFollowers = this.getFollowers.bind(this);
        this.isFollowing = this.isFollowing.bind(this);
    }


    isFollowing(e){
        console.log(e);
        let isFollowing = false;
        let following = this.state.following;
        for (let i = 0; i < following.length; i++){
            if (following[i].login === e){
                isFollowing = true;
                break;
            }
        }
        console.log(isFollowing);
        return isFollowing;
    }

    getFollowers() {
        let friends = [];
        this.state.followers.forEach((e, key) => friends.push(
        <OneFollower login={e.login} link={e.avatar.link} isFollowing={this.isFollowing(e.login)} key={key}/>
    ));
        return friends;
    }

    componentDidMount() {
        let token = getJwt();
        let login = getLogin();

        axios.get(`http://localhost:8080/users/followers?user=${login}`,{
            headers: {
                Authorization: token
            }
        }).then(res => {
            this.setState({followers : res.data});
        });

        axios.get(`http://localhost:8080/users/following?user=${login}`,{
            headers: {
                Authorization: token
            }
        }).then(res => {
            this.setState({following : res.data});
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
