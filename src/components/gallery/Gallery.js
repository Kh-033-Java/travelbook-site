import React, {Component} from "react";
import '../App.css';


class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    goTo(route) {
        this.props.history.replace(`/${route}`);
    }

    render() {
        console.log(this.props);
        return (
            <aside className="rightbar container">
                <button
                    className="btn-margin"
                    onClick={this.goTo.bind(this, "my-photos")}
                >
                    My Photos
                </button>
                <button
                    className="btn-margin"
                    onClick={this.goTo.bind(this, "general-photos")}
                >
                    General Photos
                </button>
            </aside>
        )
    }
}

export default Gallery;