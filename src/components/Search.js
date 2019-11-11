import React, { Component } from 'react'
import './App.css';
import './searchComponents/Dropdown.css';
import Axios from 'axios';
import Checkbox from './searchComponents/Checkbox';

class Search extends Component {

    constructor(props) {
        super();
        this.state = {
            inputValue: '',
            isUserSearch: true,
            users: [],
            displayData: []
        };

        this.onChange = this.onChange.bind(this);
    }

    async getAllUsers() {
        const endpoint = 'http://localhost:8080/users/allUsers'
        const response = await Axios.get(endpoint).then(async response => this.setState({ users: await response.data }));

        console.log(this.state.users[0]);
    }



    addUserToDisplay(userData) {
        return <a href={"http://localhost:8080/users/" + userData.login} style={{ display: '' }}>{userData.login}</a>
    }


    displayAllUsers() {
        const users = this.state.users;

        const displayData = [];
        for (let i = 0; i < users.length; i++) {
            displayData.push(this.addUserToDisplay(users[i]));

        }
        this.setState({ displayData });
    }

    filterFunction() {
        const users = this.state.users;
        const filtered = users.filter((user) => {
            if (user.login.toLowerCase().startsWith(this.state.inputValue)) {
                return user;
            }
        });

        this.setState({ users: filtered });

    }

    onClick = () => {
        this.setState({
            inputValue: '',
            displayData: ''
        });
        if (this.state.isUserSearch == false) {
            this.setState({ isUserSearch: true });
        } else {
            this.setState({ isUserSearch: false });
        }
        console.log('state', this.state.isUserSearch);
    }

    async onChange(event) {
        this.setState({ inputValue: event.target.value });
        
        if (this.state.isUserSearch) {
            const allUsers = await this.getAllUsers();
            this.filterFunction();
            this.displayAllUsers();
        }else{

        }
        
        if (this.state.inputValue.length > 0) {
            document.querySelector('.dropdown-content').style.display = 'block';
        }
        else {
            document.querySelector('.dropdown-content').style.display = 'none';
        }
    }

    render() {
        return (
            <div className="search">
                <form name="myForm" className="search-form">
                    <input type="text" placeholder={this.state.isUserSearch ? 'Search User' : 'Search Country'} value={this.state.inputValue} onChange={this.onChange} />
                </form>
                <div className='dropdown-content'>
                    {this.state.displayData}
                </div>
                <Checkbox onClick={this.onClick} />

            </div>
        )
    }
}

export default Search;