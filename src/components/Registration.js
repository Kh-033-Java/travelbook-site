import React, {Component} from 'react';
import Header from './header';
import ImageUpload from "./user-page/ImageUpload";
import axios from 'axios';
import './Registration.css';

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
            avatar: ''
        };
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

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
          console.log(res)
      }).catch((error) => {
          var message = error.response.data.message;
          var checkerOnLogin = message.includes("and property `login` = ");
          var checkerOnEmail = message.includes("and property `email` = ");
          if (checkerOnLogin) {
              alert("User with such login already exists.");
          } else if(checkerOnEmail){
              alert("User with such email already exists.");
          }
      })
    };

    render() {
        return <div>
            <Header/>
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
                        </div>
                        Email:
                        <div className="input-forms-dislocation">
                            <input className="input-forms" type="text" name="email" onChange={e => this.handleChange(e)}
                                   value={this.state.email}/>
                        </div>
                        Password:
                        <div className="input-forms-dislocation">
                            <input className="input-forms" type="password" name="password" onChange={e => this.handleChange(e)}
                                   value={this.state.password}/>
                        </div>
                    </div>
                </div>
                <div className="photo-upload-form">
                        <ImageUpload/>
                </div>
            </div>
            <div className="ROW">
                <div className="registration-button">
                    <form onSubmit={this.handleSubmit}>
                        <div className="registration-button-inner">
                            <button className="registration" type="submit">
                                Registration
                            </button>
                        </div>
                    </form>
                </div>
                <div className="description">Desc
                    <div className="description-inner">
                        <textarea className="description-input-form" type="text" name="description" rows="4"
                                  onChange={e => this.handleChange(e)}
                                  value={this.state.description}>
                        </textarea>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Registration;