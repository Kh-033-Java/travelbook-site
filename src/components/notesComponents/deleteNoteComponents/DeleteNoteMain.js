import React, {Component} from 'react';
import '../NoteStyling.css'
import '../newNoteComponents/NewNote.css'
import '../../App.css';
import "../../sidebarComponents/SideBar.css";
import axios from 'axios';
import * as actions from '../../../actions/notesActions'
import {deleteNoteById} from "../../../actions/notesActions";
import {Redirect} from 'react-router-dom';
import NoteListElement from "../allNotes/NoteListElement";
import {getJwt} from "../../../helpers/jwt";

class DeleteNoteMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: [{}],
            country: localStorage.getItem('country'),
            login: localStorage.getItem('login')
        };
        this.deleteNote = this.deleteNote.bind(this);
    }

    deleteNote(e) {
        e.preventDefault();
        const token = getJwt();
        const deleteRelationshipEndpoint = `http://localhost:8080/country/${this.state.country}/notvisit?user=${this.state.login}`;
        console.log(deleteRelationshipEndpoint);
        axios.put(deleteRelationshipEndpoint, {
            headers: {
                Authorization: token
            }
        }
            .catch(error => {
                window.location.href = '/errorPage';
                console.log(error);
            });
        const deleteNoteEndpoint = `http://localhost:8080/notes/${this.props.noteId}`;
        axios.delete(deleteNoteEndpoint, {
            headers: {
                Authorization: token
            }
        })
            .then(response => {
                window.location.href = '/notes';
                console.log("deleted");
            })
            .catch(error => {
                window.location.href = '/errorPage';
                console.log(error);
            })
    }

    getNoteEntityById(noteId) {
        const endpoint = `http://localhost:8080/country/notes/${noteId}`;
        axios.get(endpoint)
            .then(response => {
                const note = response.data;
                this.setState({note})
            });
    }

    componentDidMount() {
        this.getNoteEntityById(this.props.noteId);
        console.log(this.state.note);
    }

    render() {

        return (
            <form name="deleteNote" id="deleteNote" className="main-sidebar  main-comp-newnote"
                  onSubmit={this.deleteNote}>
                <div className="name-field">
                    Are you sure you want to delete this note?
                    <NoteListElement note={this.state.note} isReadOnly={true}/>
                </div>
            </form>
        );
    }

}

export default DeleteNoteMain;

