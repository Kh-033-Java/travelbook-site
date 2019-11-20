import React, {Component} from 'react';
import Header from './Header';
import ImageUpload from "./user-page/ImageUpload";
import axios from 'axios';
import './Registration.css';
import {ValidatorForm} from 'react-form-validator-core';
import TextValidator from "./validations/TextValidator";
import {object} from "@amcharts/amcharts4/core";
import {Redirect} from "react-router";

class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            login: '',
            password: '',
            email: '',
            description: '',
            avatar: '',
            disabled: true,
            isSignedUp: false
        };
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleError = () => {
        this.form.isFormValid().then(isValid => {
            this.setState({disabled: !isValid});
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        var {login, password, lastName, firstName, description, email} = this.state;

        axios.post("http://localhost:8080/anonymous/registration", {
            login: login,
            password: password,
            lastName: lastName,
            firstName: firstName,
            description: description,
            email: email,
            avatar: localStorage.getItem("avatar")
        }).then(res => {
            console.log(res);
            if (res.status === 200) {
                alert("User successfully created, you can sign in now");
                this.setState({isSignedUp: true});
            }
        }).catch((error) => {
            const message = error.response.data.message;
            const checkerOnLogin = message.includes("and property login = ");
            const checkerOnEmail = message.includes("and property email = ");
            if (checkerOnLogin) {
                alert("User with such login already exists.");
            } else if (checkerOnEmail) {
                alert("User with such email already exists.");
            }
        })
    };

    render() {
        if (this.state.isSignedUp) {
            return <Redirect to={{pathname: "/login"}}/>;
        }
        return <div>
            <Header/>
            <div className="registration-title header-text"> Registration</div>
            <div className="main-registration-form">
                <div className="main-registration-inner">
                    <div className="name-of-field1">
                        First Name:
                    </div>
                    <div className="name-of-field2">
                        Last Name:
                    </div><div className="name-of-field3">
                    Login:
                    </div><div className="name-of-field4">
                    Email:
                    </div><div className="name-of-field5">
                    Password:
                </div>
                    <div className="input-forms-dislocation1">
                        <input className="input-forms" type="text" name="firstName"
                               style={{'border-top': 'none', 'border-left': 'none', 'border-right': 'none', 'border-radius': '6px'}}
                               onChange={e => this.handleChange(e)}
                               value={this.state.firstName}/>
                        <span className="bar"></span>
                    </div>
                    <div className="input-forms-dislocation2">
                        <input className="input-forms" type="text" name="lastName"
                               style={{'border-top': 'none', 'border-left': 'none', 'border-right': 'none', 'border-radius': '6px'}}
                               onChange={e => this.handleChange(e)}
                               value={this.state.lastName}/>
                        <span className="bar"></span>
                    </div>
                    <ValidatorForm ref={node => (this.form = node)}
                                   onSubmit={this.handleSubmit}
                                   onError={this.handleError}>

                        <div className="input-forms-dislocation3">
                            <input className="input-forms" type="text" name="login"
                                   style={{'border-top': 'none', 'border-left': 'none', 'border-right': 'none', 'border-radius': '6px'}}
                                   onChange={e => this.handleChange(e)}
                                   value={this.state.login}/>
                            <span className="bar"></span>
                            <TextValidator
                                validatorListener={this.handleError}
                                onChange={this.handleChange}
                                name="login"
                                value={this.state.login}
                                validators={['required', 'minStringLength: 4', 'maxStringLength: 15']}
                                errorMessages={['this field is required', 'Login should to be 4 or more chars', 'Login should to be maximum 15 chars']}
                            />
                        </div>

                        <div className="input-forms-dislocation4">
                            <input className="input-forms" type="text" name="email"
                                   style={{'border-top': 'none', 'border-left': 'none', 'border-right': 'none', 'border-radius': '6px'}}
                                   onChange={e => this.handleChange(e)}
                                   value={this.state.email}/>
                            <span className="bar"></span>
                            <TextValidator
                                validatorListener={this.handleError}
                                onChange={this.handleChange}
                                name="email"
                                value={this.state.email}
                                validators={['required', 'isEmail']}
                                errorMessages={['this field is required', 'email is not valid']}
                            />
                        </div>
                        <div className="input-forms-dislocation5">
                            <input className="input-forms" type="password" name="password"
                                   style={{'border-top': 'none', 'border-left': 'none', 'border-right': 'none', 'border-radius': '6px'}}
                                   onChange={e => this.handleChange(e)}
                                   value={this.state.password}/>
                            <span className="bar"></span>
                            <TextValidator
                                validatorListener={this.handleError}
                                onChange={this.handleChange}
                                name="password"
                                value={this.state.password}
                                validators={['required', 'minStringLength: 4']}
                                errorMessages={['this field is required', 'Password should to be 4 or more chars']}
                            />
                        </div>
                        <div className="registration-button">
                            <div className="registration-button-inner">
                                <button className="registration submitButton" type="submit" disabled={this.state.disabled}>
                                    Registration
                                </button>
                            </div>
                        </div>
                    </ValidatorForm>

                </div>
                <div className="description-part">
                    <div className="description-title">
                        Description
                    </div>
                        <div className="description-inner">
                        <textarea className="description-input-form" name="description" rows="4"
                                  onChange={e => this.handleChange(e)}
                                  value={this.state.description}>
                        </textarea>
                    </div>
                </div>
                <div className="photo-upload-form">
                    <ImageUpload/>
                </div>
            </div>
        </div>
    }
}

export default Registration;