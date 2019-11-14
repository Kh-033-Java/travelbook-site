import React, {Component} from 'react';
import axios from "axios";
import GetPhotos from "./GetPhotos";
import {getJwt} from "../../helpers/jwt";


class MyPhotos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            validCountry: true
        }
    }


    componentDidMount() {
        const token = getJwt();
        const endpoint = `http://localhost:8080/country/${this.props.name}/photos/private?user=${localStorage.getItem("login")}`;
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
    }

    render() {
        var render;
        if(this.state.photos === []){
            render = <div>No photos</div>;
            return render
        }else {
            render =  <GetPhotos photos={this.state.photos}/>
            console.log("AAAAA")
            return render;

        }
        return (
            <div className="photoGallery">
                {render}
            </div>)
    }
}

export default MyPhotos;