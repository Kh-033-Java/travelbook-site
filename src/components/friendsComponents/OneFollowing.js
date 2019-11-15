import React, {Component} from 'react';
import {getJwt} from "../../helpers/jwt";
import axios from 'axios';

/**
 *
 * @author Zhelezniak Dmytro
 */

class OneFollowing extends Component {
    constructor(props){
        super(props);
        this.deleteFollowing = this.deleteFollowing.bind(this);
    }

    deleteFollowing () {
        let token = getJwt();

        axios.delete(`http://localhost:8080/users/${this.props.login}?user=${localStorage.getItem('login')}`,{
            headers: {
                Authorization: token
            }
        }).then(res => {
            console.log(res);
        });
    }

    render() {
        return(
            <div className="list-following friends-comp">
                <div><img src={this.props.avatar.link} alt={""} className="account-image"/></div>
                <div className="account-label">{this.props.login}</div>
                <div className="delete">
                    <button className="delete-button" onClick={this.deleteFollowing}>Delete</button>
                </div>
            </div>
        )
    }
}

export default OneFollowing;