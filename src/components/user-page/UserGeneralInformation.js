import React, { Component } from 'react';
import { getJwt } from "../../helpers/jwt";
import axios from 'axios';
import './UserMainPage.css';
import {useParams} from "react-router";

class UserGeneralInformation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            firstName: '',
            lastName: '',
            description: '',
            following: [],
            isFollowing: false,
        };
        this.isFollowing = this.isFollowing.bind(this);
        this.addToFollowing = this.addToFollowing.bind(this);
        }

    componentWillReceiveProps(newProps) {
        this.setState({ login: newProps.match.params.login }, this.componentDidMount);
    }


    componentDidMount() {
        let token = getJwt();
        const url = 'http://localhost:8080/users/' + this.state.login;

        axios.get(url, {
            headers: {
                Authorization: token
            }
        }).then(res => {
             console.log(res.data);
            if(res.data.id !== undefined){ 
            this.setState({login: res.data.login});
            this.setState({firstName: res.data.firstName});
            this.setState({lastName: res.data.lastName});
            this.setState({description: res.data.description});
            this.setState({avatar: res.data.avatar.link});
            }
        });
        if (this.props.match !== undefined && this.state.login === '') {
            this.setState({ login: this.props.match.params.login }, this.componentDidMount);
        } else {
            const url = 'http://localhost:8080/users/' + this.state.login;
            axios.get(url, {
                headers: {
                    Authorization: token
                }
            }).then(res => {
                this.setState({ login: res.data.login });
                this.setState({ firstName: res.data.firstName });
                this.setState({ lastName: res.data.lastName });
                this.setState({ description: res.data.description });
                this.setState({ avatar: res.data.avatar.link });
            });
        }
        axios.get(`http://localhost:8080/users/following?user=${localStorage.getItem('login')}`,{
            headers: {
                Authorization: token
            }
        }).then(res => {
            this.setState({following: res.data});
        });
    }

    checkIfPresent = (param) => {
        var string = param;
        switch (string) {
            case this.state.firstName:
                return <div className="fourth-inner-firstName container-box">
                    {this.state.firstName}
                </div>;
                break;
            case this.state.lastName:
                return <div className="fourth-inner-secondName container-box">
                    {this.state.lastName}
                </div>;
                break;
            case this.state.description:
                return <div>
                    <div className="fifth-inner">
                        Description
                    </div>
                    <div className="container-box description-inner">
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
        } else {
            for (let i = 0; i < this.state.following.length; i++) {
                if (this.state.following[i].login === this.state.login) {
                    check = true;
                    break;
                }
            }
        }
        return check;
    }

    addToFollowing () {
        let token = getJwt();
        let data = new FormData();
        let request = new XMLHttpRequest();
        let login = this.state.login;
        request.open('PUT', `http://localhost:8080/users/addfollow/${this.state.login}?user=${localStorage.getItem('login')}`);
        request.setRequestHeader("Authorization", token);
        request.send(data);
        request.onload = function () {
            if (request.status === 200) {
                alert("Your friend successfully added!");
                window.location.href = '/userPage/'+ login;
            }
        };
    }

    render() {
        return (
            <aside className="users-page-container col-12 col-lg-6">
                <div className="first container-box">
                    <div className="first-inner">
                        Profile
                    </div>
                </div>
                <div className="second container-box">
                    <div className="second-inner">
                        {this.state.login}
                    </div>
                </div>
                <div className="third container-box">
                    <img className="avatar-inner" src={this.state.avatar} />
                </div>
                <div className="fourth container-box">
                    {this.checkIfPresent(this.state.firstName)}
                    {this.checkIfPresent(this.state.lastName)}
                </div>
                <div className="fifth container-box">

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