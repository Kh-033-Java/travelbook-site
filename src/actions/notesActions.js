import axios from 'axios';
import React from 'react'
import {Redirect} from 'react-router-dom';

export const getNoteById = (nameOfCountry, idNote) => {
    let endpoint = `http://localhost:8080/country/${nameOfCountry}/notes/${idNote}`;
    return axios.get(endpoint)
        .then(res =>
            res.data
        ).catch(error => {
            console.log(error);
            return <Redirect to="/errorPage"/>
        })
};


