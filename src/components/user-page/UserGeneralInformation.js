import React, {Component} from 'react';
import {getJwt} from "../../helpers/jwt";
import axios from 'axios';
import './UserMainPage.css';

class UserGeneralInformation extends Component {
    constructor(params){
        super(params);

        this.state = {
            login: '',
            firstName:'',
            lastName: '',
            description: '',
        }
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
            <aside className="container">
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
                            <img className="avatar-inner" src={localStorage.getItem("avatar")}/>
                </div>
                <div className="fourth container">
                    <div className="fourth-inner">
                    {this.state.firstName}
                <br/>
                <br/>
                    {this.state.lastName}
                    </div>
                </div>
                <div className="fifth container">
                    <div className="fifth-inner">
                    Description
                    <div className="container">
                    {this.state.description}
                    </div>
                </div>
                    <div className="fifth-inner">
                    </div>
                </div>
            </aside>
        )
    }
}

export default UserGeneralInformation;