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
            clicked: false
        };
        this.setIntercolutor = this.setIntercolutor.bind(this);
    }

    componentDidMount() {
        // console.log(this.props.note.id);
        // this.getCountOfLikes();
        // if (isAuthorized()) {
        //     this.checkIfAlreadyLiked();
        //     this.setState({disabled: true});
        // }
    }

    setID(e) {
        e.preventDefault();
        if (!this.props.note) {
            return;
        }
        console.log(this.props.note)
        if (this.props.note.id) {
            this.props.setId(this.props.note.id)
            this.setState({clicked: true});
        }
    }

    setIntercolutor(e) {
        e.preventDefault();
        console.log("setIntercolutor = ");
        localStorage.setItem('intercolutor', this.props.intercolutor.login);
    }

    render() {
        return (
            <div className="list-el-container">
                <div className="list-note-el" onClick={event => this.setID(event)}>
                    <MessageOwner login={this.props.intercolutor.login}
                                  avatar={this.props.intercolutor.avatar.link}/>
                    <ToConversation onClick={event => this.setIntercolutor(event)} login={this.props.intercolutor.login}/>
                </div>
            </div>
        )
    }
}

export default Intercolutor;


