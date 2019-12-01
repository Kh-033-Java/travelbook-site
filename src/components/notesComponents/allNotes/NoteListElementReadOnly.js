import React, {Component} from 'react';
import {NavLink, Redirect} from 'react-router-dom'
import '../NoteStyling.css'
import '../../App.css';
import '../newNoteComponents/NewNote.css'
import '../AllNotesPage.css'
import NProperty from './NProperty'
import NoteOwner from '../NoteOwner';
import axios from 'axios';
import {getJwt} from "../../../helpers/jwt";
import isAuthorized from "../../checker/authorizationChecker";
import {getLogin} from "../../../helpers/getLogin";


class NoteListElementReadOnly extends Component {
    constructor(props) {
        super(props)
        this.state = {
            noteId: '',
            numberOfLikes: '',
            clicked: false,
            liked: false,
            disabled: false
        }
        this.setID = this.setID.bind(this);
        this.getCountOfLikes = this.getCountOfLikes.bind(this);
        this.sendLike = this.sendLike.bind(this);
        this.checkIfAlreadyLiked = this.checkIfAlreadyLiked.bind(this);
    }

    componentDidMount() {
        console.log(this.props.note.id);
        this.getCountOfLikes();
        if (isAuthorized()) {
            this.checkIfAlreadyLiked();
            this.setState({disabled: true});
        }
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

    getCountOfLikes = () => {
        axios.get(`http://localhost:8080/notes/${this.props.note.id}/likes`)
            .then((res) => {
                this.setState({numberOfLikes: res.data});
            });
    };

    sendLike = (e) => {
        e.preventDefault();

        if (this.props.note.id) {
            this.props.setId(this.props.note.id)
            this.setState({noteId: this.props.note.id})
        }


        console.log(this.state.noteId);

        const token = getJwt();
        const login = getLogin();
        fetch(`http://localhost:8080/notes/${this.props.note.id}/like/${login}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token
            }
        }).then((res) => {
            console.log(res.status)
            if (isAuthorized()) {
                this.checkIfAlreadyLiked();
            }
            this.getCountOfLikes();
        })
    }

    checkIfAlreadyLiked = () => {
        var login = getLogin();
        var token = getJwt();
        axios.get(`http://localhost:8080/notes/${this.props.note.id}/liked/${login}`, {
            headers: {
                Authorization: token
            }
        }).then((res) => {
            if (res.data === true) {
                this.setState({liked: true})
                console.log(this.state.liked)
            } else if (res.data === false) {
                this.setState({liked: false})
                console.log(this.state.liked)
            }
        })
    };

    avEstimate() {
        let av = (this.props.note.peopleEstimate + this.props.note.cuisineEstimate + this.props.note.commonImpression + this.props.note.pricesEstimate) / 4;
        let res = (Math.floor(av * 100) / 100);
        return res;
    }


    render() {
        let like = null;
        if (!this.state.liked) {
            like = <div className="like"/>;
        } else if (this.state.liked) {
            like = <div className="liked"/>;
        }

        if (this.state.clicked) {
            const { note } = this.props.note;
            return <Redirect to="/note"/>
        }
        return (
            <div className="list-el-container">
                <div className="list-note-el">
                    <NoteOwner account={this.props.note.login} logo={this.props.note.linkToUserAvatar}
                               style_="owner-list-notes note-owner-gen"/>
                    <Estimation grade={this.avEstimate.bind(this)}/>
                    <NProperty positn="property1  prop" type="Title" text={this.props.note.title}/>
                    <NProperty positn="property2  prop" type="City" text={this.props.note.describedCity}/>
                </div>
                <div className="like-part">
                    <div className="small-description">
                        <div>{this.props.note.description}</div>
                    </div>
                    {like}
                    <div className="count-of-likes">
                        {this.state.numberOfLikes}
                    </div>
                </div>
            </div>
        )
    }
}

export default NoteListElementReadOnly;

function Estimation(props) {

    return (
        <div className="gen-grade">
            <div className="grade">{props.grade()}</div>
        </div>
    )
}

