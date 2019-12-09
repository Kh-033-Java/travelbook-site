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
import {getLogin} from "../../helpers/getLogin";

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
        const login = getLogin();
        const url = 'http://localhost:8080/users/' + login;

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
            localStorage.setItem("avatar", res.data.avatar.link);
            localStorage.setItem("login", res.data.login)
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
        const currentLogin = getLogin();
        const url = 'http://localhost:8080/users/' + currentLogin;
        var {login, password, lastName, firstName, description, avatar} = this.state;

        localStorage.setItem("login", login);

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
            <div className="container-fluid h-100">
                <Header/>
                <div className="">
                    <div className="titlePageName container-box row col justify-content-center">Settings</div>
                    <div className="row no-gutters">
                    <div className="settings-title container-box col-4">
                        My account
                    </div>
                    <div className="settings-title container-box col-4">
                        Description
                    </div>
                    <div className="settings-title container-box col-4">
                        Profile Image
                    </div>
                    </div>
                    <div className="row  d-flex justify-content-center">
                    <div className="CONTENT col-4">
                        <label className="label">First and Last Name</label>
                        <div className="INNER-CONTENT1 ">
                            <div >
                                <input className="settings-inputs container-input "
                                       style={{'border-top': 'none', 'border-left': 'none', 'border-right': 'none'}}
                                       type="text"
                                       placeholder="Change First Name"
                                       name="firstName"
                                       onChange={e => this.handleChange(e)}
                                       value={this.state.firstName}/>
                                <span className="bar"></span>
                            </div>
                            <br/>
                            <input className="settings-inputs"
                                   style={{'border-top': 'none', 'border-left': 'none', 'border-right': 'none'}}
                                   type="text"
                                   placeholder="Change Last Name"
                                   name="lastName"
                                   onChange={e => this.handleChange(e)}
                                   value={this.state.lastName}/>
                            <span className="bar"></span>
                        </div>
                        <ValidatorForm ref={node => (this.form = node)}
                                       onSubmit={this.handleSubmit}
                                       onError={this.handleError}>
                            <br/>
                            <label className="label">Security</label>
                            <div className="INNER-CONTENT2">
                                <div className="inner-content-and-errors">
                                    <br/>
                                    <div>
                                    <input className="settings-inputs" type="text" placeholder="Change Login"
                                           style={{'border-top': 'none', 'border-left': 'none', 'border-right': 'none'}}
                                           name="login"
                                           onChange={e => this.handleChange(e)}
                                           value={this.state.login}/>
                                    <span className="bar"></span>
                                    <TextValidator
                                        validatorListener={this.handleError}
                                        onChange={this.handleChange}
                                        name="login"
                                        value={this.state.login}
                                        validators={['required', 'minStringLength: 4', 'maxStringLength: 15']}
                                        errorMessages={['this field is required', 'Login should to be 4 or more chars', 'Login should to be maximum 15 chars']}/>
                                    <br/>
                                    </div>
                                    <input className="settings-inputs"
                                           style={{'border-top': 'none', 'border-left': 'none', 'border-right': 'none'}}
                                           type="password"
                                           placeholder="Change Password"
                                           name="password"
                                           autoComplete="on"
                                           onChange={e => this.handleChange(e)}
                                           value={this.state.password}/>
                                    <span className="bar"></span>
                                    <TextValidator
                                        validatorListener={this.handleError}
                                        onChange={this.handleChange}
                                        name="password"
                                        value={this.state.password}
                                        validators={['required', 'minStringLength: 4']}
                                        errorMessages={['this field is required', 'Password should to be 4 or more chars']}/>
                                </div>
                                <div className="save-settings">
                                    <button className=" btn btn-outline-success" type="submit" disabled={this.state.disabled}>
                                        Save settings
                                    </button>
                                </div>
                            </div>
                        </ValidatorForm>
                    </div>
                    <div className="SIDEBAR-1 col-4">
                        <div className="INNER-SIDEBAR-1">
                                    <textarea className="description-input" type="text" name="description"
                                              onChange={e => this.handleChange(e)}
                                              value={this.state.description}/>
                        </div>
                    </div>
                    <div className="SIDEBAR-2 col-4">
                        <div className="INNER-SIDEBAR-2">
                            <ImageUpload/>
                        </div>
                    </div>

                    </div>

                    <div className="row justify-content-center">
                        <form onSubmit={this.deleteAccount}>
                            <button className="deleteSubmitButton btn btn-danger" type="submit">
                                Delete account
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserSettings;