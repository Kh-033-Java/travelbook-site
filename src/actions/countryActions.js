import axios from 'axios';
import React from 'react'
import {Redirect} from 'react-router-dom';

export const getCityPropertyForNotesByCountry = (countryName) => {
    let endpoint= `http://localhost:8080/country/${countryName}/cities`;
    console.log(endpoint);
    return axios.get(endpoint)
        .then(res =>
            res.data
        ).catch(error => {
            console.log(error);
            return <Redirect to="/errorPage"/>
        })
};