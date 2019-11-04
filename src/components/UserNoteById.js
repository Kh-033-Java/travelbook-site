import React, {Component} from "react";
import './App.css';
import axios from 'axios';
import {Route, NavLink, Redirect} from 'react-router-dom';

// TODO fix this func
export default function getUserNoteByNoteId(noteId) {

    const login = localStorage.getItem("token");
    const endpoint = `http://localhost:8080/notes/` + noteId + `/user/` + login;
    // console.log(endpoint);
    let userNote = new Map();
    axios.get(endpoint)
        .then(response => {

            userNote.set("title", response.data.title);
            console.log(response.data.title);

        });
    console.log(userNote);
    return userNote;

}
