import React from 'react';
import axios from 'axios';
import {ACCESS_TOKEN} from "../../constants/constants";
import {Redirect} from "react-router";
import './UserInput.css'

export default class UserInput extends React.Component {
    state = {
        login: '',
        password: '',
        isSignedUp: false,
        token: '',
    };

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }


    handleSubmit(e) {
        e.preventDefault();

        const {login, password} = this.state;

        axios.post(`http://localhost:8080/anonymous/login`, {
            login: login,
            password: password
        })
            .then(res => {
                localStorage.setItem(ACCESS_TOKEN, res.data.token);
                localStorage.setItem("login", res.data.login);
                localStorage.setItem("avatar", res.data.avatar);
                console.log(res.data);
                this.setState({isSignedUp: true})
            }).catch((error) => {
            if (error.request) {
                alert("Login or password incorrect");
                window.location = 'login'
            }
        })
    };


    render() {
        if (this.state.isSignedUp) {
            return <Redirect to={{pathname: "/travelbook"}}/>;
        }
        return <form onSubmit={e => this.handleSubmit(e)}>
            <div className="login-input">Login:
                <input type="text" className="auth" name="login" onChange={e => this.handleChange(e)}
                       value={this.state.login}/>
            </div>
            <div className="password-input">Password:
                <input type="password" className="auth" name="password" id="pwd"
                       onChange={e => this.handleChange(e)} value={this.state.password}/>
            </div>
            <button className="button-submit" type="submit">Sign In</button>
        </form>

    }
}