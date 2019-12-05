import React, {Component} from "react";
import '../App.css';
import Header from "../sidebarComponents/SidebarHeader";
import "../sidebarComponents/SideBar.css";
import FooterWithEdit from '../sidebarComponents/FooterWithEdit'
import axios from 'axios'
import {getLogin} from "../../helpers/getLogin";
import FooterWithDelete from "../sidebarComponents/FooterWithDelete";
import FooterBackToNotes from "../sidebarComponents/FooterBackToNotes";
import Loading from "../Loading";
import FooterBackToMessages from "./FooterBackToMessages";

class Conversation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sendedMessages: [],
            receivedMessages: [],
            isLoading: true
        }
    }

    componentDidMount() {
        const isLoading = false;
        const login = getLogin();
        const intercolutor = localStorage.getItem('intercolutor');
        axios.get(`http://localhost:8080/messages/${login}/history/${intercolutor}`
        ).then(res => {
            // console.log(res.data);
            this.setState({
                sendedMessages: res.data.sendedMessages,
                receivedMessages: res.data.receivedMessages
            });
            this.setState({isLoading});
        }).catch(err => console.log(err));
    }

    render() {
        const spinner = this.state.isLoading ? <Loading className="loading-center"/> : null;
        if (this.state.isLoading) {
            return <aside className="whole-comp-loading">
                <Header title="Conversation" countryName={localStorage.getItem('intercolutor')}/>
                <div className="loading-center">{spinner}</div>
            </aside>
        }
        else {
            return (
                <aside className="rightbar whole-comp">
                    <Header title="Conversation" countryName={localStorage.getItem('intercolutor')}/>
                    {/*<NoteMain note={this.state.note}/>*/}
                    <div className="note-footer">
                        <FooterBackToMessages text="back to messages" path="/messages"/>
                    </div>
                </aside>
            )
        }
    }
}

export default Conversation;