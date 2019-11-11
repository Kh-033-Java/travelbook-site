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

class NewNoteMain extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.deleteNote = this.deleteNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
    }

    deleteNote(e) {
        e.preventDefault();
        const endpoint = `http://localhost:8080/notes/${this.props.noteId}`;
        axios.delete(endpoint)
            .then(response => {
                window.location.href = '/notes';
                console.log("deleted");
            })
            .catch(error => {
                window.location.href = '/errorPage';
                console.log(error);
            })
    }

    componentDidMount() {

    }

    render() {

        return (
            <form name="deleteNote" id="deleteNote" className="main-sidebar  main-comp-newnote"
                  onSubmit={this.deleteNote}>
                <div className="name-field">
                    Are you sure you want to delete this note {this.props.noteId}?
                    {/*<NoteListElement note = {this.props.note}/>*/}
                </div>
            </form>
        );
    }

}

export default NewNoteMain;

