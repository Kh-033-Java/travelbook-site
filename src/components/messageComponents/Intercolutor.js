import React, {Component} from 'react';
import {NavLink, Redirect} from 'react-router-dom'
import '../App.css';
import axios from 'axios';
import MessageOwner from "./MessageOwner";


class Intercolutor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clicked: false
        };

    }

    componentDidMount() {
        // console.log(this.props.note.id);
        // this.getCountOfLikes();
        // if (isAuthorized()) {
        //     this.checkIfAlreadyLiked();
        //     this.setState({disabled: true});
        // }
    }

    setID(e) {
        e.preventDefault();
        if (!this.props.note) {
            return;
        }
        console.log(this.props.note)
        if (this.props.note.id) {
            this.props.setId(this.props.note.id)
            this.setState({clicked: true});
        }
    }


    render() {
        return (
            <div className="list-el-container">
                <div className="list-note-el" onClick={event => this.setID(event)}>
                    <MessageOwner login={this.props.intercolutor.login}
                                  avatar={this.props.intercolutor.avatar.link}/>

                    {/*<Estimation grade={this.avEstimate.bind(this)} onClick={e => this.setID(e)}/>*/}
                    {/*<NProperty positn="property1  prop" type="Title" text={this.props.note.title}*/}
                    {/*onClick={e => this.setID(e)}/>*/}
                    {/*<NProperty positn="property2  prop" type="City" text={this.props.note.describedCity}*/}
                    {/*onClick={e => this.setID(e)}/>*/}
                    {/*</div>*/}
                    {/*<div className="like-part">*/}
                    {/*<div className="small-description">*/}
                    {/*<div>{this.props.note.description}</div>*/}
                    {/*</div>*/}
                    {/*{like}*/}
                    {/*<div className="count-of-likes">*/}
                    {/*{this.state.numberOfLikes}*/}
                    {/*</div>*/}
                </div>
            </div>
        )
    }
}

export default Intercolutor;


