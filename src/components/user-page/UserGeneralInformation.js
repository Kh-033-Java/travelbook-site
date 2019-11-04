import React, {Component} from 'react';
import {getJwt} from "../../helpers/jwt";
import Header from '../header';
import axios from 'axios';
import './UserMainPage.css';

class UserGeneralInformation extends Component {
    state = {
        login: '',
        firstName:'',
        lastName: '',
        description: '',
    }

    componentDidMount() {
        let token = getJwt();
        const url = 'http://localhost:8080/users/' + localStorage.getItem("login");

        axios.get(url, {
            headers: {
                Authorization: token
            }
        }).then(res => {
            this.setState({login: res.data.login});
            this.setState({firstName: res.data.firstName});
            this.setState({lastName: res.data.lastName});
            this.setState({description: res.data.description});
        });
    }


    render() {
        return (
            <aside className="rightbar container">
                <div className="first container">
                    Profile
                </div>
                <div className="second container">
                    {this.state.login}
                </div>
                <div className="third container">
                            <img className="avatar-inner" src={localStorage.getItem("avatar")}/>
                </div>
                <div className="fourth container">
                    {this.state.firstName}
                <br/>
                <br/>
                    {this.state.lastName}
                </div>
                <div className="fifth container">
                    Description
                    <div className="container">
                    {this.state.description}
                </div>
                    <div className="fifth-inner">
                    </div>
                </div>
            </aside>
        )
    }
}

export default UserGeneralInformation;