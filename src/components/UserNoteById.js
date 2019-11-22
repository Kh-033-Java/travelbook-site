import React, {Component} from "react";
import './App.css';
import axios from 'axios';
import {Route, NavLink, Redirect} from 'react-router-dom';
import {getLogin} from "../helpers/getLogin";

// TODO fix this func
export default function getUserNoteByNoteId(noteId) {

    const login = getLogin();
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
