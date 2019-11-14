import React, {Component} from 'react';
import axios from "axios";


class GeneralPhotos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
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
        console.log(this.state.photos);
    }

    render() {
        return (
            <div>
                <div className="photoGallery">
                    <GetPhotos photos={this.state.photos}/>
                </div>
            </div>
        )
    }
}

export default GeneralPhotos;