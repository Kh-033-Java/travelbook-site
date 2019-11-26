import React, {Component} from "react";
import '../App.css';
import FollowingPage from "./FollowingPage";
import FollowersPage from "./FollowersPage";


class Friends extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFollowers: false
        }
    }


    toFollowers = () => {
        this.setState({
            isFollowers: true,
        })
    };
    toFollowing = () => {
        this.setState({
            isFollowers: false,
        })

    };

    render() {
        return (
            <aside className="friends-sidebar">
                <button className="following-page-button" onClick={this.toFollowing}>
                    Following
                </button>
                <button className="followers-page-button" onClick={this.toFollowers}>
                    Followers
                </button>
                {!this.state.isFollowers ? <FollowingPage/> : <FollowersPage/>}
            </aside>
        )
    }
}

export default Friends;