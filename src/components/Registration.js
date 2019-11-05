import React, {Component} from 'react';
import Header from './header';
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
            this.setState({ disabled: !isValid });
        });
    };

    handleSubmit = (e) => {
      e.preventDefault();

      var {login, password, lastName, firstName, description, email} = this.state;

      axios.post("http://localhost:8080/anonymous/registration",{
          login: login,
          password: password,
          lastName: lastName,
          firstName: firstName,
          description: description,
          email: email,
          avatar: localStorage.getItem("avatar")
      }).then(res => {
          console.log(res);
          if(res.status === 200){
              alert("User successfully created, you can sign in now");
              this.setState({isSignedUp: true});
          }
      }).catch((error) => {
          const message = error.response.data.message;
          const checkerOnLogin = message.includes("and property `login` = ");
          const checkerOnEmail = message.includes("and property `email` = ");
          if (checkerOnLogin) {
              alert("User with such login already exists.");
          } else if(checkerOnEmail){
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
            <ValidatorForm ref={node => (this.form = node)}
                           onSubmit={this.handleSubmit} onError={this.handleError}>
            <div className="titlePageName"> Registration</div>
            <div className="ROW">
                <div className="main-registration-form">
                    <div className="main-registration-inner">
                        First Name:
                        <div className="input-forms-dislocation">
                            <input className="input-forms" type="text" name="firstName"
                                   onChange={e => this.handleChange(e)}
                                   value={this.state.firstName}/>
                        </div>
                        Last Name:
                        <div className="input-forms-dislocation">
                            <input className="input-forms" type="text" name="lastName"
                                   onChange={e => this.handleChange(e)}
                                   value={this.state.lastName}/>
                        </div>
                        Login:
                        <div className="input-forms-dislocation">
                            <input className="input-forms" type="text" name="login" onChange={e => this.handleChange(e)}
                                   value={this.state.login}/>
                            <TextValidator
                                validatorListener={this.handleError}
                                onChange={this.handleChange}
                                name="login"
                                value={this.state.login}
                                validators={['required', 'minStringLength: 4', 'maxStringLength: 15']}
                                errorMessages={['this field is required', 'Login should to be 4 or more chars', 'Login should to be maximum 15 chars']}
                            />
                        </div>
                        Email:
                        <div className="input-forms-dislocation">
                            <input className="input-forms" type="text" name="email" onChange={e => this.handleChange(e)}
                                   value={this.state.email}/>
                            <TextValidator
                                validatorListener={this.handleError}
                                onChange={this.handleChange}
                                name="email"
                                value={this.state.email}
                                validators={['required', 'isEmail']}
                                errorMessages={['this field is required', 'email is not valid']}
                            />
                        </div>

                        Password:
                        <div className="input-forms-dislocation">
                            <input className="input-forms" type="password" name="password" onChange={e => this.handleChange(e)}
                                   value={this.state.password}/>
                            <TextValidator
                                validatorListener={this.handleError}
                                onChange={this.handleChange}
                                name="password"
                                value={this.state.password}
                                validators={['required', 'minStringLength: 4']}
                                errorMessages={['this field is required', 'Password should to be 4 or more chars']}
                            />
                        </div>

                    </div>
                </div>
                <div className="photo-upload-form">
                        <ImageUpload/>
                </div>
            </div>
            </ValidatorForm>
            <div className="ROW">
                <div className="registration-button">
                    <form onSubmit={this.handleSubmit}>
                        <div className="registration-button-inner">
                            <button className="registration" type="submit" disabled={this.state.disabled}>
                                Registration
                            </button>
                        </div>
                    </form>
                </div>
                <ValidatorForm ref={node => (this.form = node)}
                               onSubmit={this.handleSubmit} onError={this.handleError}>
                <div className="description">
                    <div className="description-inner">
                        Description
                        <textarea className="description-input-form" name="description" rows="4"
                                  onChange={e => this.handleChange(e)}
                                  value={this.state.description}>
                        </textarea>
                    </div>
                </div>
                </ValidatorForm>
            </div>
        </div>
    }
}

export default Registration;