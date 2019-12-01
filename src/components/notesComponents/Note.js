import React, {Component} from "react";
import '../App.css';
import Header from "../sidebarComponents/SidebarHeader";
import "../sidebarComponents/SideBar.css";
import NoteMain from "./NoteMain";
import isAuthorized from '../checker/authorizationChecker'
import FooterWithEdit from '../sidebarComponents/FooterWithEdit'
import axios from 'axios'
import {getLogin} from "../../helpers/getLogin";
import FooterWithDelete from "../sidebarComponents/FooterWithDelete";
import {getJwt} from "../../helpers/jwt";
import FooterBackToNotes from "../sidebarComponents/FooterBackToNotes";
import FooterBackToNotesAnotherUser from "../sidebarComponents/FooterBackToNotesAnotherUser";
import Loading from "../Loading";

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: {},
            isLoading: true
        }
    }

    componentDidMount() {
        const isLoading = false;
        axios.get(`http://localhost:8080/country/notes/${this.props.noteId}`
        ).then(res => {
            console.log(res.data);
            this.setState({note: res.data});
            this.setState({isLoading});
        }).catch(err => console.log(err));
        console.log(this.props.noteId)
    }

    theSameLogin(login) {
        console.log(localStorage.getItem('country'));
        return (login === getLogin())
    }

    render() {
        const spinner = this.state.isLoading ? <Loading className="loading-center"/> : null;
        if (this.state.isLoading) {
            return <aside className="whole-comp-loading">
                <Header title={this.state.note.title} countryName={localStorage.getItem('country')}/>
                <div className="loading-center">{spinner}</div>
            </aside>
        }
        else {
            return (
                !isAuthorized() ?
                    <aside className="rightbar whole-comp-no-footer">
                        <Header title={this.state.note.title} countryName={localStorage.getItem('country')}/>
                        <NoteMain note={this.state.note}/>
                    </aside>
                    : ( this.theSameLogin(this.state.note.login) ?
                        <aside className="rightbar whole-comp">{/*check login and node owner*/}
                            <Header title={this.state.note.title} countryName={localStorage.getItem('country')}/>
                            <NoteMain note={this.state.note}/>
                            <div className="note-footer">
                                <FooterWithEdit text="edit" path="/editNote"/>
                                <FooterBackToNotes text="back to notes" path="/notes"/>
                                <FooterWithDelete text="delete" path="/deleteNote" noteId={this.state.note.id}/>
                            </div>
                        </aside> : <aside className="rightbar whole-comp-no-footer ">
                            <Header title={this.state.note.title} countryName={localStorage.getItem('country')}/>
                            <NoteMain note={this.state.note}/>
                            <div className="note-footer-another-user">
                                <FooterBackToNotesAnotherUser text="back to notes" path="/notes"/>
                            </div>
                        </aside>
                    )
            );
        }
    }
}

export default Note;