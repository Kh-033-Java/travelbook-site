import React, {Component} from 'react';
import {NavLink, Redirect} from 'react-router-dom'
import '../App.css';
import axios from 'axios';
import MessageOwner from "./MessageOwner";
import ToConversation from "./ToConversation";


class Intercolutor extends Component {
    constructor(props) {
        super(props)
        this.state = {

        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="list-intercolutor-container">
                <div className="list-intercolutor-el">
                    <MessageOwner login={this.props.intercolutor.login}
                                  avatar={this.props.intercolutor.avatar.link}/>
                    <ToConversation login={this.props.intercolutor.login}/>
                </div>
            </div>
        )
    }
}

export default Intercolutor;


