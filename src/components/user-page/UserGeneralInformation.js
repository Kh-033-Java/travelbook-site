import React, {Component} from 'react';
import {getJwt} from "../../helpers/jwt";
import axios from 'axios';
import './UserMainPage.css';
import OneFollower from "../friendsComponents/OneFollower";
import {useParams} from "react-router";

class UserGeneralInformation extends Component {
    constructor(params) {
        super(params);

        this.state = {
            login: '',
            firstName: '',
            lastName: '',
            description: '',
            followers: [],
        };
        this.isFollowing = this.isFollowing.bind(this);
        this.addToFollowing = this.addToFollowing.bind(this);
    }


    componentDidMount() {
        let token = getJwt();
        const url = 'http://localhost:8080/users/' + localStorage.getItem("login");

        axios.get(url, {
            headers: {
                Authorization: token
            }
        }).then(res => {
            console.log(res.data);
            this.setState({login: res.data.login});
            this.setState({firstName: res.data.firstName});
            this.setState({lastName: res.data.lastName});
            this.setState({description: res.data.description});
            this.setState({avatar: res.data.avatar.link});
            this.setState({followers: res.data.followers});
        });
    }

    checkIfPresent = (param) => {
        var string = param;
        switch (string) {
            case this.state.firstName:
                return <div className="fourth-inner-firstName container">
                    {this.state.firstName}
                </div>;
                break;
            case this.state.lastName:
                return <div className="fourth-inner-secondName container">
                    {this.state.lastName}
                </div>;
                break;
            case this.state.description:
                return <div>
                    <div className="fifth-inner">
                        Description
                    </div>
                    <div className="container description-inner">
                        {this.state.description}
                    </div>
                </div>
                break;
            default: return null;
        }
    };

    isFollowing() {
        let check = false;
        if (this.state.login === localStorage.getItem('login')){
            check = true;
        }
        for (let i = 0; i < this.state.length; i++){
            if (this.state.followers[i].login === localStorage.getItem('login')){
                check = true;
                break;
            }
        }
        return check;
    }

    addToFollowing () {
        let token = getJwt();
        let data = new FormData();
        let request = new XMLHttpRequest();
        request.open('PUT', `http://localhost:8080/users/addfollow/${this.state.login}?user=${localStorage.getItem('login')}`);
        request.setRequestHeader("Authorization", token);
        request.send(data);
        request.onload = function () {
            if (request.status === 200) {
                alert("Your friend successfully added!");
                window.location.href = '/userPage/' + this.state.login;
            }
        };
    }

    render() {
        return (
            <aside className="users-page-container">
                <div className="first container">
                    <div className="first-inner">
                        Profile
                    </div>
                </div>
                <div className="second container">
                    <div className="second-inner">
                        {this.state.login}
                    </div>
                </div>
                <div className="third container">
                    <img className="avatar-inner" src={this.state.avatar}/>
                </div>
                <div className="fourth container">
                    {this.checkIfPresent(this.state.firstName)}
                    {this.checkIfPresent(this.state.lastName)}
                </div>
                <div className="fifth container">

                    {this.checkIfPresent(this.state.description)}
                </div>
                {this.isFollowing() ?
                    <React.Fragment/>
                    :
                    <div className="following-in-general">
                        <button className="follow-button-in-general" onClick={this.addToFollowing}>Follow</button>
                    </div>}
            </aside>
        )
    }
}

export default UserGeneralInformation;