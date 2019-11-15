import React, {Component} from 'react';
import {getJwt} from "../../helpers/jwt";
import axios from 'axios';

/**
 *
 * @author Zhelezniak Dmytro
 */

class OneFollower extends Component {
    constructor(props){
        super(props);
        this.addToFollowings = this.addToFollowings.bind(this);
    }

    addToFollowings () {
        let token = getJwt();

        axios.post(`http://localhost:8080/users/${this.props.login}?user=${localStorage.getItem('login')}`,{
            headers: {
                Authorization: token
            }
        }).then(res => {
            console.log(res);
        });
    }

    isFollowing(){

    }

    render() {
        return(
            <div className="list-following friends-comp">
                <div><img src={this.props.avatar.link} alt={""} className="account-image"/></div>
                <div className="account-label">{this.props.login}</div>
                <div className="following">
                    <button className="follow-button" onClick={this.addToFollowings}>Following</button>
                </div>
            </div>
        )
    }
}

export default OneFollower;