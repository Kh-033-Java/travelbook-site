import React, {Component} from "react";
import './App.css';
import axios from 'axios';
import {Route, NavLink, Redirect} from 'react-router-dom';

class UserNoteById extends Component {

    constructor(props) {
        super();
        this.state = {
            userNotes: [{}],
            noteId: "",
            login: ""
        };
    }

    componentDidMount() {

        // const token = getjwt ();

        const noteId = "49" // mocking note id
        const login = localStorage.getItem("token");
        this.setState({noteId});
        this.setState({login});

        const endpoint = `http://localhost:8080/notes/` + noteId + `/user/` + login;
        console.log(endpoint);
        axios.get(endpoint)
        //     headers:{
        //         Authorization: token
        //     }
        // })
            .then(response => {
                const userNotes = response.data;
                this.setState({userNotes});
            });
    };

    render() {
        return (
            <aside className="rightbar container">
                <h1>User's notes (id = {this.state.noteId}, login = {this.state.login}) : </h1>
                {this.state.userNotes.map(note => <p>title - {note.title}</p>)}
                {this.state.userNotes.map(note => <p>description - {note.description}</p>)}
            </aside>
        )
    }
}

export default UserNoteById;
