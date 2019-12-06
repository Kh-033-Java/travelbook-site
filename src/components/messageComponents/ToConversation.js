import {Link, NavLink, Redirect} from 'react-router-dom';
import '../sidebarComponents/SideBar.css'
import '../App.css';
import React, {Component} from 'react';


class ToConversation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
        this.setIntercolutor = this.setIntercolutor.bind(this);
    }

    setIntercolutor(e) {
        e.preventDefault();
        console.log(this.props.login);
        localStorage.setItem('intercolutor', this.props.login);
        this.setState({redirect: true});
    }

    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to='/conversation'/>;
        }
        return (
            <div className="note-edit container">
                <Link className="nav-link header-text" to="/conversation"
                      onClick={this.setIntercolutor}>
                    To conversation
                </Link>
            </div>
        )
    }
}

export default ToConversation;
