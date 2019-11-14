import React, {Component} from 'react';
import axios from "axios";


class MyPhotos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [{}],
            validCountry: true
        }
    }


    componentDidMount() {
        const login = localStorage.getItem("login");
        const endpoint = `http://localhost:8080/country/${this.props.name}/photos/${login}`;
        axios.get(endpoint)
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
        const photos = this.state.photos;
        console.log();
        return (
            <div>
                <div>
                    <h1>photos</h1>
                    <div className="photos-gallery">
                        {photos ? <p>{photos.map((value, index) =>
                            <img src={value.link} alt={"No image"} className="photoGallery" key={index}/>
                        )}</p> : <p>No such country</p>}
                    </div>
                </div>
            </div>
        )
    }
}

export default MyPhotos;