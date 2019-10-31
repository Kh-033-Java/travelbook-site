import React, {Component} from 'react';
import Header from "../header";
import ImageUpload from "./ImageUpload";
import axios from 'axios';
import {ACCESS_TOKEN} from "../../constants/constants";
import {getJwt} from "../../helpers/jwt";

class UserSettings extends Component {
    constructor(props) {
        super(props);

        this.getUser = this.getUser.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            login: '',
            password: '',
            description: '',
            avatar: ''
        };
    }

    componentDidMount() {
        this.getUser();
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        const {login, password, firstName, lastName, email, description, avatar} = this.state;
    }

    getUser(){
        let token = getJwt();
        var url = 'http://localhost:8080/users/' + localStorage.getItem("login");
        axios.get(url,{
            headers:{
                Authorization: token
            }
        }).then(res =>{
            this.setState({login: res.data.login});
            this.setState({firstName: res.data.firstName});
            this.setState({lastName: res.data.lastName});
            this.setState({description: res.data.description});
            this.setState({avatar: res.data.avatar});
        });
    }

    render() {
        return (
            <div>
                <Header/>
                <body>
                <div className="HEADER">Settings</div>
                <div className="ROW">
                <div className="CONTENT">
                    <div className="INNER-CONTENT">
                    <label className="my-account">My account</label>
                    <div className="settings-inputs">
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" placeholder="Change First Name" name="firstName" onChange={e => this.handleChange(e)}
                                   value={this.state.firstName}/>
                                   <br/>
                            <input type="text" placeholder="Change Last Name" name="lastName" onChange={e => this.handleChange(e)}
                                   value={this.state.lastName}/>
                        </form>
                    </div>
                    <label className="security">Security</label>
                    <div className="settings-inputs">
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" placeholder="Change Login" name="login" onChange={e => this.handleChange(e)}
                                   value={this.state.login}/>
                                   <br/>
                            <input type="text" placeholder="Change Password" name="password" onChange={e => this.handleChange(e)}
                                   value={this.state.password}/>
                        </form>
                    </div>
                    </div>
                    </div>
                    <div className="SIDEBAR-1">
                        <div className="INNER-SIDEBAR-1">Description
                            <form onSubmit={this.handleSubmit}>
                                <input className="description-input"  type="text" name="description" onChange={e => this.handleChange(e)}
                                       value={this.state.description}/>
                            </form>
                        </div>
                    </div>
                    <div className="SIDEBAR-2">
                        <div className="INNER-SIDEBAR-2">Profile Image
                        <ImageUpload avatar={this.state.avatar}/>
                        </div>
                    </div>
                </div>
                </body>
                <div className="FOOTER">
                    <div className="INNER-FOOTER">
                    <div className="delete-account">
                        Delete account
                    </div>
                        <div className="save-settings">
                    <button  type ="submit">
                        Save settings
                    </button>
                        </div>
                </div>
                </div>
            </div>
        )
    }
}

export default UserSettings;