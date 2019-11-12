import React, {Component} from 'react';
import axios from "axios";
import GetPhotos from "./GetPhotos";
import {getJwt} from "../../helpers/jwt";


class MyPhotos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [{}],
            validCountry: true
        }
    }


    componentDidMount() {
        const token = getJwt();
        const endpoint = `http://localhost:8080/country/${this.props.name}/photos/${localStorage.getItem("login")}`;
        axios.get(endpoint, {
            headers: {
                Authorization: token
            }
        })
            .then(res => {
                this.setState({photos: res.data, validCountry: true});
                console.log(res.data);
            }).catch(error => {
            console.log("error");
            console.log(error);
            this.setState({
                validCountry: false
            });
        });
        console.log("photots" + this.state.photos);
    }

    render() {
        return (
            <div className="photoGallery">
                <GetPhotos photos={this.state.photos}/>
            </div>)
    }
}

export default MyPhotos;