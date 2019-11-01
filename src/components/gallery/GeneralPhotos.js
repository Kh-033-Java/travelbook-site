import React, {Component} from 'react';
import axios from "axios";


class GeneralPhotos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [{}],
            validCountry: true
        }
    }

    componentDidMount() {
        let endpoint = `http://localhost:8080/country/${this.props.name}/photos`;
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
        const photos = ['https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200'];
        // const photos = this.state.photos;
        return (

            <aside className="rightbar container">
                <div>
                    <h1>General Gallery</h1>
                    <p>{this.props.name}</p>
                    <h1>photos</h1>
                    {photos ? <p>{photos.map((value, index) =>
                        <img src={value} alt={"No image"} className="photo"/>
                    )}</p> : <p>No such country</p>}
                </div>
            </aside>
        )
    }
}

export default GeneralPhotos;