import React, {Component} from "react";
import '../App.css';
import MyPhotos from "./MyPhotos";
import GeneralPhotos from "./GeneralPhotos";
import './Gallery.css'
import isAuthorized from "../checker/authorizationChecker";


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
            isUserPhoto: true,
        })
    };
    changeToUserPhoto = () => {
        this.setState({
            ...this.state,
            isUserPhoto: false,
        })

    };


    render() {
        const name = this.props.name;
        var button1;
        var button2;
        if (isAuthorized()) {
            button1 =
                <button className="btn-margin-first" onClick={this.changeToGeneralPhoto}>
                    My Photos
                </button>
            button2 =
                <button className="btn-margin-second" onClick={this.changeToUserPhoto}>
                    General Photos
                </button>

        } else {
            return <aside className="aside-container">
                <div className="header-text">
                    General Photos
                    <GeneralPhotos name={name} onClick={this.changeToUserPhoto}/>
                </div>
            </aside>;
        }
        return (
            <aside className="aside-container col-12 col-lg-6">
                {button1}
                {button2}
                {
                    this.state.isUserPhoto ? <MyPhotos name={name}/> : <GeneralPhotos name={name}/>
                }
            </aside>
        )
    }
}

export default Gallery;