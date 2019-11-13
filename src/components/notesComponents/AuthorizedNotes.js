import React, {Component} from "react";
import '../App.css';
import NotesWrapper from "./NotesWrapper.js";
import OnlyMyNotes from "./OnlyMyNotes";
import ToAddFooter from "../sidebarComponents/ToAddFooter.js";
import './AllNotesPage.css';
import axios from 'axios';
import Loading from "../Loading";
import showUserMap from "../userMap/UserMapShower";


class AuthNotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            checked: false,
            isLoading: true
        }
        this.onCheck = this.onCheck.bind(this);
        this.loadAll = this.loadAll.bind(this);
        this.loadOnlyUsers = this.loadOnlyUsers.bind(this);
    }

    onCheck(e) {
        if (e.target.checked) {
            console.log("checked");
            this.setState({
                checked: true,
                isLoading: true
            });
            this.loadOnlyUsers();
        } else {
            console.log("not checked");
            this.setState({
                checked: false,
                isLoading: true
            });
            this.loadAll();
        }
    }

    loadAll() {
        axios.get(`http://localhost:8080/country/${this.props.countryName}/notes/${localStorage.getItem("login"
        )}`).then(res => {
            console.log(res.data);
            this.setState({...this.state, notes: res.data})
            const isLoading = false;
            this.setState({isLoading});
        })
    }

    loadOnlyUsers() {
        axios.get(`http://localhost:8080/country/${this.props.countryName}/notes/private?user=${localStorage.getItem("login"
        )}`).then(res => {
            console.log(res.data);
            this.setState({...this.state, notes: res.data})
            const isLoading = false;
            this.setState({isLoading});
        })
    }

    componentDidMount() {
        this.loadAll();
    }

    render() {
        const spinner = this.state.isLoading ? <Loading/> : null;
        if (this.state.isLoading) {
            return (
                <div className="list-main-auth main-sidebar ">
                    <OnlyMyNotes funCheck={this.onCheck}/>
                    {spinner}
                </div>
            )
        }
        else {
            return (
                <React.Fragment>
                    <div className="list-main-auth main-sidebar ">
                        <OnlyMyNotes funCheck={this.onCheck}/>
                        <NotesWrapper classWr={"allNotes container"} setId={this.props.setId} notes={this.state.notes}
                                      countryName={localStorage.getItem("country")}/>
                    </div>
                    <ToAddFooter text="add note" path="newnote"/>
                </React.Fragment>
            )
        }
    }
}

export default AuthNotes;