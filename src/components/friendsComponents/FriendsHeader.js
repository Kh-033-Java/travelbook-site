import React from 'react';
import {NavLink} from "react-router-dom";
import './Friends.css';

/**
 *
 * @author Zhelezniak Dmytro
 */

function FriendsHeader(props) {
    return(
        <div className="friends-header">
            <div className="following-page">
                <NavLink to = "/following">
                    <button className="following-page-button">Following</button>
                </NavLink>
            </div>
            <div className="follower-page">
                <NavLink to="/followers">
                    <button className="followers-page-button">Followers</button>
                </NavLink>
            </div>
        </div>
    )
}

export default FriendsHeader;