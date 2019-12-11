import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class SearchPlansHeader extends Component {
    render() {
        return (
            <div>
                <div className="create-plan-button btn btn-primary btn-lg btn-block ">
                    <NavLink to="/search-plans">
                        <button type="button" className="button-plan">Search plans</button>
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default SearchPlansHeader;