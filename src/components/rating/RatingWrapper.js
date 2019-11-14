import React, {Component} from 'react';
import UserInRating from "./UserInRating";
import "./Rating.css"

class RatingWrapper extends Component {
    constructor(props) {
        super(props);

        this.getUsersByRating = this.getUsersByRating.bind(this);
    }

    getUsersByRating = () => {
        const users = [];
        console.log(this.props.users);
        const tempList = this.props.users;
        for(var i = 0;i<tempList.length; i++){
            var id = i;
            users.push(<UserInRating user={tempList[i]} id={++id}/>)
        }
        return users
    }

    render() {
        return (<div>
                {this.getUsersByRating()}
            </div>
        )
    }
}

export default RatingWrapper;