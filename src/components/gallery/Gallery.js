import React, {Component} from "react";
import '../App.css';
import MyPhotos from "./MyPhotos";
import GeneralPhotos from "./GeneralPhotos";


class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isUserPhoto: false
        }
    }


    changeToGeneralPhoto = () => {
        this.setState({
            ...this.state,
            isUserPhoto : false,
    })
    };
    changeToUserPhoto = () => {
        this.setState({
            ...this.state,
            isUserPhoto : true,
        })

    };


    render() {
        console.log(this.props);
        console.log(this.state.isUserPhoto);
        return (
            <aside className="rightbar container">
                <button
                    className="btn-margin"
                    onClick={this.changeToGeneralPhoto}
                >
                    My Photos
                </button>
                <button
                    className="btn-margin"
                    onClick={this.changeToUserPhoto}
                >
                    General Photos
                </button>

                {
                    this.state.isUserPhoto === false ? <MyPhotos/> : <GeneralPhotos/>
                }
            </aside>
        )
    }
}

export default Gallery;