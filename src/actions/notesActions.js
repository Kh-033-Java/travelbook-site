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

export async function uploadPhotos(files) {
    const url = 'http://localhost:8080/uploadFile';
    let photoLink = [];

    for (let i = 0; i < files.length; i++) {
        const formData = new FormData();
        formData.append('file', files[i]);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        let res = await upLoadPhoto(url, formData, config);
        photoLink.push(res);
    }

    return photoLink;
}

const upLoadPhoto = async (url, formData, config) => {
    const response = await axios.post(url, formData, config);
    const generatedLink = response.data;
    console.log("generatedLink - " + generatedLink);
    return generatedLink;
};


