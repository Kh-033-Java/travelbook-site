import React, {Component} from 'react'
import './Rating.css'

class UserInRating extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="user-container justify-content-center row">
                <div className="user-place col-1 align-self-center">{this.props.id}</div>
                <div className="col-1 align-self-center"><img src ={this.props.user.avatar.link} alt="" className="account-image"></img></div>
                <div className="user-login col-7 align-self-center">{this.props.user.login}</div>
                <div className="user-score col align-self-center">{this.props.user.sumOfLikes}</div>
            </div>
        )
    }
}

export default UserInRating;