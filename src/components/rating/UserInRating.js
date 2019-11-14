import React, {Component} from 'react'
import './Rating.css'

class UserInRating extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="user-container inner-user">
                <div className="user-place">{this.props.id}</div>
                <div><img src ={this.props.user.avatar.link} alt="" className="account-image"></img></div>
                <div className="user-login">{this.props.user.login}</div>
                <div className="user-score">{this.props.user.sumOfLikes}</div>
            </div>
        )
    }
}

export default UserInRating;