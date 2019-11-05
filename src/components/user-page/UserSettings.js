import React, {Component} from 'react';
import Header from "../header";
import ImageUpload from "./ImageUpload";
import axios from 'axios';
import {getJwt} from "../../helpers/jwt";
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './UserSettingsPage.css'
import {ValidatorForm} from "react-form-validator-core";
import TextValidator from "../validations/TextValidator";

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
            disabled: true
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

    handleError = () => {
        this.form.isFormValid().then(isValid => {
            this.setState({disabled: !isValid});
        });
    };

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
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

    render() {
        return (
            <div className="userSettingsGeneral">
                <Header/>
                <ValidatorForm ref={node => (this.form = node)}
                               onSubmit={this.handleSubmit}
                               onError={this.handleError}>
                    <div className="titlePageName">Settings</div>
                    <div className="ROW">
                        <div className="CONTENT">
                            <div className="INNER-CONTENT1">
                                    <label className="my-account">My account</label>
                                    <div>
                                        <input className="settings-inputs"
                                               type="text"
                                               placeholder="Change First Name"
                                               name="firstName"
                                               onChange={e => this.handleChange(e)}
                                               value={this.state.firstName}/>
                                        <br/>
                                        <input className="settings-inputs"
                                               type="text"
                                               placeholder="Change Last Name"
                                               name="lastName"
                                               onChange={e => this.handleChange(e)}
                                               value={this.state.lastName}/>
                                    </div>
                            </div>
                            <div className="INNER-CONTENT2">
                                    <label className="security">Security</label>
                                    <div className="inner-content-and-errors">
                                        <input className="settings-inputs" type="text" placeholder="Change Login"
                                               name="login"
                                               onChange={e => this.handleChange(e)}
                                               value={this.state.login}/>
                                        <TextValidator
                                            onChange={this.handleChange}
                                            name="login"
                                            value={this.state.login}
                                            validators={['required', 'minStringLength: 4', 'maxStringLength: 15']}
                                            errorMessages={['this field is required', 'Login should to be 4 or more chars', 'Login should to be maximum 15 chars']}/>
                                        <br/>
                                        <input className="settings-inputs"
                                               type="password"
                                               placeholder="Change Password"
                                               name="password"
                                               autoComplete="on"
                                               onChange={e => this.handleChange(e)}
                                               value={this.state.password}/>
                                        <TextValidator
                                            validatorListener={this.handleError}
                                            onChange={this.handleChange}
                                            name="password"
                                            value={this.state.password}
                                            validators={['required', 'minStringLength: 4']}
                                            errorMessages={['this field is required', 'Password should to be 4 or more chars']}/>
                                    </div>
                            </div>
                        </div>
                        <div className="SIDEBAR-1">
                                <div className="INNER-SIDEBAR-1">Description
                                    <br/>
                                    <textarea className="description-input" type="text" name="description"
                                              onChange={e => this.handleChange(e)}
                                              value={this.state.description}/>
                                </div>
                        </div>
                        <div className="SIDEBAR-2">
                            <div className="INNER-SIDEBAR-2">Profile Image
                                <ImageUpload/>
                            </div>
                        </div>
                    </div>
                </ValidatorForm>
                <div className="FOOTER">
                        <div className="INNER-FOOTER">
                            <form onSubmit={this.deleteAccount}>
                                <div className="delete-account">
                                    <button type="submit">
                                        Delete account
                                    </button>
                                </div>
                            </form>
                            <ValidatorForm ref={node => (this.form = node)}
                                                  onSubmit={this.handleSubmit}
                                                  onError={this.handleError}>
                                <div className="save-settings">
                                    <button type="submit" disabled={this.state.disabled}>
                                        Save settings
                                    </button>
                                </div>
                            </ValidatorForm>
                        </div>
                    </div>
            </div>
        )
    }
}

export default UserSettings;