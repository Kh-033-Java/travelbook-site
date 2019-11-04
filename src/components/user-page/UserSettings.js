import React, {Component} from 'react';
import Header from "../header";
import ImageUpload from "./ImageUpload";
import axios from 'axios';
import {getJwt} from "../../helpers/jwt";
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './UserSettingsPage.css'

class UserSettings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            login: '',
            password: '',
            description: '',
            avatar: '',
            formErrors: {password: ''},
            passwordValid: false,
            formValid: false
        };
    }

    componentDidMount() {
        this.getUser();
    }

    getUser() {
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
            this.setState({avatar: res.data.avatar.link});
            localStorage.setItem("avatar", res.data.avatar.link)
        });
    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => {
                this.validateField(name, value)
            });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let token = getJwt();
        const url = 'http://localhost:8080/users/' + localStorage.getItem("login");
        var {login, password, lastName, firstName, description, avatar} = this.state;

        if (!"avatar" in localStorage) {
            this.setState({[avatar]: null});
        } else {
            avatar = localStorage.getItem("avatar");
        }

        axios.put(url, {
            login: login,
            password: password,
            lastName: lastName,
            firstName: firstName,
            description: description,
            avatar: avatar
        }, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: token
            }
        }).then(res => {
            if (res.status === 200) {
                confirmAlert({
                    message: 'Your settings successfully updated',
                    buttons: [
                        {
                            label: 'OMG THANK YOU VERY MUCH!!!!!',
                        }
                    ]
                });
            }
            console.log(res)
        }).catch((error) => {
            var message = error.response.data.message;
            var checkerOn = message.includes("and property `login` = ");
            if (checkerOn) {
                alert("User with such login already exists.")
            } else if (error.response.status === 500) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                alert("Session is over, please sign in again!");
            }
        })
    };

    deleteAccount = (e) => {

        e.preventDefault();

        const url = "http://localhost:8080/users/" + localStorage.getItem("login");
        let token = getJwt();
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure you want to delete the account?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        axios.delete(url, {
                            headers: {
                                Authorization: token
                            }
                        }).then(res => {
                            if (res.status === 200) {
                                alert("Your account successfully deleted!");
                                localStorage.clear();
                                window.location.href = '/travelbook';
                            }
                        });
                    }
                },
                {
                    label: 'No',
                    onClick: () => alert('Click No')
                }
            ]
        });

    };

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let passwordValid = this.state.passwordValid;
        if (fieldName === "password") {
            passwordValid = value.length >= 4;
            fieldValidationErrors.password = passwordValid ? '' : ' is too short';
        }
        this.setState({formErrors: fieldValidationErrors, passwordValid: passwordValid},
            this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.passwordValid});
    }

    render() {
        return (
            <div className="userSettingsGeneral">
                <Header/>
                <div className="panel panel-default">
                </div>
                <div className="titlePageName">Settings</div>
                <div className="ROW">
                    <div className="CONTENT">
                        <div className="INNER-CONTENT1">
                            <form onSubmit={this.handleSubmit}>
                                <label className="my-account">My account</label>
                                <div>
                                    <input className="settings-inputs" type="text" placeholder="Change First Name"
                                           name="firstName"
                                           onChange={e => this.handleChange(e)}
                                           value={this.state.firstName}/>
                                    <br/>
                                    <input className="settings-inputs" type="text" placeholder="Change Last Name"
                                           name="lastName"
                                           onChange={e => this.handleChange(e)}
                                           value={this.state.lastName}/>
                                </div>
                            </form>
                        </div>
                        <div className="INNER-CONTENT2">
                            <form onSubmit={this.handleSubmit}>
                                <label className="security">Security</label>
                                <div>
                                    <input className="settings-inputs" type="text" placeholder="Change Login"
                                           name="login"
                                           onChange={e => this.handleChange(e)}
                                           value={this.state.login}/>
                                    <br/>
                                    <input className="settings-inputs" type="password" placeholder="Change Password"
                                           name="password"
                                           autoComplete="on"
                                           onChange={e => this.handleChange(e)}
                                           value={this.state.password}/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="SIDEBAR-1">
                        <form onSubmit={this.handleSubmit}>
                            <div className="INNER-SIDEBAR-1">Description
                                <br/>
                                <textarea className="description-input" type="text" name="description"
                                          onChange={e => this.handleChange(e)}
                                          value={this.state.description}/>
                            </div>
                        </form>
                    </div>
                    <div className="SIDEBAR-2">
                        <div className="INNER-SIDEBAR-2">Profile Image
                            <ImageUpload/>
                        </div>
                    </div>
                </div>
                <div className="FOOTER">
                    <div className="INNER-FOOTER">
                        <form onSubmit={this.deleteAccount}>
                            <div className="delete-account">
                                <button type="submit">
                                    Delete account
                                </button>
                            </div>
                        </form>
                        <form onSubmit={this.handleSubmit}>
                            <div className="save-settings">
                                <button type="submit" disabled={!this.state.formValid}>
                                    Save settings
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserSettings;