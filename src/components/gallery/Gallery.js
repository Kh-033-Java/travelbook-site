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
            isUserPhoto : true,
    })
    };
    changeToUserPhoto = () => {
        this.setState({
            ...this.state,
            isUserPhoto : false,
        })

    };


    render() {
        const name = this.props.name;
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
                    this.state.isUserPhoto ? <MyPhotos name={name}/> : <GeneralPhotos name={name}/>
                }
            </aside>
        )
    }
}

export default Gallery;