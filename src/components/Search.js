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
            displayData: [],
            countries: []
        };

        this.onChange = this.onChange.bind(this);
    }

    async getAllUsers() {
        const endpoint = 'http://localhost:8080/users/allUsers';
        const response = await Axios.get(endpoint).then(async response => this.setState({ users: await response.data }));
    }


    async getAllCountries(){
        const endpoint = 'http://localhost:8080/country/getAllCountries';
        const response = await Axios.get(endpoint).then(async response => this.setState({countries: await response.data}));
    }



    displayAllUsers() {
        const users = this.state.users;
        const displayData = [];

        for (let i = 0; i < users.length; i++) {
            displayData.push( <a key={i} href={"http://localhost:8080/users/" + users[i].login} style={{ display: '' }}>{users[i].login}</a>);

        }
        this.setState({ displayData });
    }

    displayAllCountries(){
        const countries = this.state.countries;
        const displayData = [];

        for(let i = 0; i < countries.length; i++){
            displayData.push(<a key={i} href={"http://localhost:8080/country/" + countries[i].name} style={{ display: '' }}>{countries[i].name}</a>)
        }
        this.setState({displayData});
    }

    filterUsers() {
        const users = this.state.users;
        const filtered = users.filter((user) => {
            if (user.login.toLowerCase().startsWith(this.state.inputValue)) {
                return user;
            }
        });

        this.setState({ users: filtered });

    }

    filterCountries(){
        const countries = this.state.countries;
        const filtered = countries.filter((country) =>{
            if(country.name.toLowerCase().startsWith(this.state.inputValue.toLowerCase())){
                return country;
            }
        });

        this.setState({countries:filtered});
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
    }

    async onChange(event) {
        this.setState({ inputValue: event.target.value });
        
        if (this.state.isUserSearch) {
            const allUsers = await this.getAllUsers();
            this.filterUsers();
            this.displayAllUsers();
        }else{
            const AllCountries = await this.getAllCountries();
            this.filterCountries();
            this.displayAllCountries();
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