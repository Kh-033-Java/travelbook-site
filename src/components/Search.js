import React, { Component } from 'react'
import ReactDOM, { Link } from 'react-router-dom'
import './App.css';
import './searchComponents/Dropdown.css';
import Axios from 'axios';
import Checkbox from './searchComponents/Checkbox';

class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
            isUserSearch: true,
            users: [],
            displayData: [],
            countries: [],
            mapComponent: props.setMap,
            isDisplay: false
        };
        this.onChange = this.onChange.bind(this);
    }

    componentWillReceiveProps(newProp) {
        this.setState({ mapComponent: newProp.setMap });
    }
    async getAllUsers() {
        const endpoint = 'http://localhost:8080/users/allUsers';
        const response = await Axios.get(endpoint).then(async response => this.setState({ users: await response.data }));
    }


    async getAllCountries() {
        const endpoint = 'http://localhost:8080/country/getAllCountries';
        const response = await Axios.get(endpoint).then(async response => this.setState({ countries: await response.data }));
    }



    displayAllUsers() {
        const users = this.state.users;
        const displayData = [];

        for (let i = 0; i < users.length; i++) {
            displayData.push(<Link to={`/userPage/${users[i].login}`} onClick={() => {
                this.setState({ displayData: '' });
                this.setState({ inputValue: '' }, this.checkInput)
            }}> {users[i].login}</Link>);

        }
        this.checkInput();
        this.setState({ displayData });
    }



    displayAllCountries() {
        const countries = this.state.countries;
        const displayData = [];

        for (let i = 0; i < countries.length; i++) {
            displayData.push(<Link to="/generalInfo" key={i} style={{ display: '' }} onClick={() => {
                this.state.mapComponent.changeSelectedCountry(countries[i].name, countries[i].map_id);
                this.state.mapComponent.zoomToCurrentCountry();
                if (this.state.mapComponent.props.renderGI !== undefined) {
                    this.state.mapComponent.props.renderGI();
                }
                this.setState({ displayData });
                this.setState({ inputValue: '' }, this.checkInput);

            }}>{countries[i].name}</Link>)
        }
        this.checkInput();
        this.setState({ displayData });

    }

    filterUsers() {
        const users = this.state.users;
        const filtered = users.filter((user) => {
            if (user.login.toLowerCase().startsWith(this.state.inputValue.toLowerCase())) {
                return user;
            }
        });

        this.setState({ users: filtered });

    }

    filterCountries() {
        const countries = this.state.countries;
        const filtered = countries.filter((country) => {
            if (country.name.toLowerCase().startsWith(this.state.inputValue.toLowerCase())) {
                return country;
            }
        });

        this.setState({ countries: filtered });
    }

    onClick = () => {
        this.setState({
            inputValue: '',
            displayData: ''
        });
        document.querySelector('.dropdown-content').style.display = 'none';

        if (this.state.isUserSearch == false) {
            this.setState({ isUserSearch: true });
        } else {
            this.setState({ isUserSearch: false });
        }
    }

    async onChange(event) {
        this.setState({ inputValue: event.target.value });

        if (this.state.isUserSearch) {
            this.setState({ countries: [] });
            const allUsers = await this.getAllUsers();
            this.filterUsers();
            this.displayAllUsers();
        } else {
            this.setState({ users: [] });
            const AllCountries = await this.getAllCountries();
            this.filterCountries();
            this.displayAllCountries();

        }
        this.checkInput();

    }


    checkInput() {
        if (this.state.inputValue.length > 0 && (this.state.users.length > 0 || this.state.countries.length > 0)) {
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
                    <div className='dropdown-content'>
                        {this.state.displayData}
                    </div>
                </form>

                <Checkbox onClick={this.onClick} />

            </div>
        )
    }
}

export default Search;