import React, {Component} from "react";

import '../App.css';
import Intercolutor from "./Intercolutor";

class Intercolutors extends Component {
    constructor(props) {
        super(props)
        this.getIntercolutors = this.getIntercolutors.bind(this);
    }

    getIntercolutors = () => {
        const intercolutors = [];
        const tempList = this.props.intercolutors;
        tempList.forEach((element, key) =>
            intercolutors.push(<Intercolutor intercolutor={element} key={key}/>
            ));
        return intercolutors;
    };

    render() {
        return (
            <div className="list-element">
                {this.getIntercolutors()}
            </div>
        )
    }
}

export default Intercolutors;
