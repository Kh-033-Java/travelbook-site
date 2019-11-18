import React from 'react';
import {NavLink} from "react-router-dom";
import './Friends.css';
import '../App.css';

/**
 *
 * @author Zhelezniak Dmytro
 */

function FriendsHeader(props) {
    return(
        <div className="header-container">
            <NavLink to = "/following">
                <button className="following-page-button">Following</button>
            </NavLink>
            <NavLink to="/followers">
                <button className="followers-page-button">Followers</button>
            </NavLink>
        </div>
    )
}

export default FriendsHeader;