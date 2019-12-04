import React, {Component} from "react";
import '../App.css';
import {getLogin} from "../../helpers/getLogin";
import axios from 'axios';
import './Messages.css'
import Loading from "../Loading";
import Intercolutors from "./Intercolutors";


class Messages extends Component {

    constructor(props) {
        super(props);
        this.state = {
            intercolutors: [],
            isLoading: true
        }
    }

    componentDidMount() {
        const isLoading = false;
        const login = getLogin();
        axios.get(`http://localhost:8080/messages/${login}/contacts`)
            .then(response => {
                this.setState({intercolutors: response.data});
                this.setState({isLoading});
            }).catch(error => console.log(error));
    }

    render() {
        const spinner = this.state.isLoading ? <Loading/> : null;
        if (this.state.isLoading) {
            return (
                <div className="messages-sidebar">
                    {spinner}
                </div>
            )
        }
        else {
            return (
                <aside className="messages-sidebar">
                    <div className="list-main-messages">
                        <Intercolutors intercolutors={this.state.intercolutors}/>
                    </div>
                </aside>
            )
        }
    }
}

export default Messages;