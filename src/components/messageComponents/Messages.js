import React, {Component} from "react";
import '../App.css';
import {getLogin} from "../../helpers/getLogin";
import axios from 'axios';
import './Messages.css'
import Loading from "../Loading";
import Intercolutors from "./Intercolutors";
import Header from "../header";
import SidebarHeader from "../sidebarComponents/SidebarHeader";
import MessagesHeader from "./MessagesHeader";


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
                <div className="whole-comp-messages aside-container col-12 col-lg-6">
                    <MessagesHeader title = "Messages" />
                    {spinner}
                </div>
            )
        }
        else {
            return (
                <aside className="whole-comp-messages aside-container col-12 col-lg-6">
                    <MessagesHeader title = "Messages" />
                    <div className="list-main-messages">
                        <Intercolutors intercolutors={this.state.intercolutors}/>
                    </div>
                </aside>
            )
        }
    }
}

export default Messages;