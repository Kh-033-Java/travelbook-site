import React, {Component} from 'react';
import './Rating.css';
import axios from 'axios';
import RatingWrapper from './RatingWrapper';

class Rating extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this.loadAllUsers();
    }

    loadAllUsers = () =>{
        axios.get("http://localhost:8080/users/rating")
            .then(res => {
                console.log(res.data);
                this.setState({...this.state, users: res.data})
            })

    };

    render() {
        return (
            <aside className="main-container  rightbar col-12 col-lg-6">
                <div className="rating-header">Rating</div>
                <RatingWrapper users={this.state.users}/>
            </aside>
        )
    }
}

export default Rating;