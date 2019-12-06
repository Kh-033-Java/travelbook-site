import React, {Component} from "react";
import '../App.css';
import "../sidebarComponents/SideBar.css";
import axios from 'axios'
import {getLogin} from "../../helpers/getLogin";
import Loading from "../Loading";
import FooterBackToMessages from "./FooterBackToMessages";
import ConversationHeader from "./ConversationHeader";
import "./Messages.css"
import FooterSendMessage from "./FooterSendMessage";
import {Redirect} from 'react-router-dom';

class Conversation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sendedMessages: [],
            receivedMessages: [],
            isLoading: true,
            text: ''
        };
        this.onChangeText = this.onChangeText.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.updateMessagesData = this.updateMessagesData.bind(this);
    }

    componentDidMount() {
        const isLoading = false;
        const login = getLogin();
        const intercolutor = localStorage.getItem('intercolutor');
        axios.get(`http://localhost:8080/messages/${login}/history/${intercolutor}`
        ).then(res => {
            this.setState({
                sendedMessages: res.data.sendedMessages,
                receivedMessages: res.data.receivedMessages
            });
            this.setState({isLoading});
        }).catch(err => console.log(err));
    }

    onChangeText(e) {
        this.setState({
                text: e.target.value
            }
        );
    }

    async sendMessage(e) {
        const sender = getLogin();
        const receiver = localStorage.getItem('intercolutor');
        const endpoint = `http://localhost:8080/messages/sendMessage?sender=${sender}&receiver=${receiver}`;
        // this.setState({isLoading: true});
        await axios.post(endpoint, this.state)
            .then(response => {
                console.log(response.data);
            }).catch(error => {
            window.location.href = '/errorPage';
            console.log(error);
        });
        this.updateMessagesData();
    }

    updateMessagesData() {
        this.setState({isLoading: true});
        const login = getLogin();
        const intercolutor = localStorage.getItem('intercolutor');
        axios.get(`http://localhost:8080/messages/${login}/history/${intercolutor}`
        ).then(res => {
            this.setState({
                sendedMessages: res.data.sendedMessages,
                receivedMessages: res.data.receivedMessages
            });
            this.setState({isLoading: false});
        }).catch(err => console.log(err));
    }

    render() {
        const spinner = this.state.isLoading ? <Loading className="loading-center"/> : null;
        if (this.state.isLoading) {
            return <aside className="whole-comp-loading">
                <ConversationHeader title="Conversation" intercolutor={localStorage.getItem('intercolutor')}/>
                <div className="loading-center">{spinner}</div>
            </aside>
        }
        else {
            return (
                <aside className="rightbar whole-comp-conversation">
                    <ConversationHeader title="Conversation" intercolutor={localStorage.getItem('intercolutor')}/>
                    <div className="correspondence correspondence-sidebar">
                        {this.state.sendedMessages.map(message => <div
                            className="sended-message container"> {message.text} </div>)}
                        {this.state.receivedMessages.map(message => <div
                            className="received-message container"> {message.text} </div>)}
                    </div>
                    <div className="text-message">
                        <p className="header-text">Your message</p>
                        <textarea name="message" onChange={this.onChangeText}/>
                    </div>
                    <div className="conversation-footer">
                        <FooterSendMessage sendMessage={this.sendMessage}/>
                        <FooterBackToMessages text="back to messages" path="/messages"/>
                    </div>
                </aside>
            )
        }
    }
}

export default Conversation;