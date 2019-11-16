import React, {Component} from 'react';
import {getJwt} from "../../helpers/jwt";
import axios from 'axios';
import './UserMainPage.css';
import {useParams} from "react-router";

class UserGeneralInformation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login: '',
            firstName: '',
            lastName: '',
            description: '',
        }
    }

    componentWillReceiveProps(newProps){
        this.setState({login: newProps.match.params.login}, this.componentDidMount);
    }
    

    componentDidMount() {
        let token = getJwt();
        console.log('did', this.state.login);
        if(this.state.login !== ''){
        const url = 'http://localhost:8080/users/' + this.state.login;
            console.log(url);
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
        });
    }
    }

    checkIfPresent = (param) => {
        var string = param;
        switch (string) {
            case this.state.firstName:
                return <div className="fourth-inner-firstName container">
                    {this.state.firstName}
                </div>;
                break;
            case this.state.lastName:
                return <div className="fourth-inner-secondName container">
                    {this.state.lastName}
                </div>;
                break;
            case this.state.description:
                return <div>
                    <div className="fifth-inner">
                        Description
                    </div>
                    <div className="container description-inner">
                        {this.state.description}
                    </div>
                </div>
                break;
            default: return null;
        }
    }


    render() {
        return (
            <aside className="users-page-container">
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
                    <img className="avatar-inner" src={this.state.avatar}/>
                </div>
                <div className="fourth container">
                    {this.checkIfPresent(this.state.firstName)}
                    {this.checkIfPresent(this.state.lastName)}
                </div>
                <div className="fifth container">

                    {this.checkIfPresent(this.state.description)}
                </div>
            </aside>
        )
    }
}

export default UserGeneralInformation;