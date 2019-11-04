import React, {Component} from 'react';
import axios from 'axios';
import '../sidebarComponents/SideBar.css'


export default class OnlyMyPlans extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plans: [{}],
            isChecked: false
        };
    }
    componentDidMount() {
        let endpointCheckedTrue = 'http://localhost:8081/country/' + this.props.name + '/plans/private?user=' + localStorage.getItem("login");
        let endpointCheckedTrue = 'http://localhost:8081/country/' + this.props.name + '/plans?user=' + localStorage.getItem("login");
        this.state.isChecked ? 
            axios.get(endpointCheckedTrue)
                .then(response => {
                    this.setState({plans: response});
                    console.log(response);
                })
            :
            axios.get(endpointCheckedFalse)
                .then(response => {
                    this.setState({plans: response});
                    console.log(response);
                })
    };

    toggleChange = () => {
        this.setState({
            isChecked: !this.state.isChecked,
        });
    };

    render() {
        return (
            <div className="only-my-checkbox container">
            <label >
                <input type="checkbox"
                       checked={this.state.isChecked}
                       onChange={this.toggleChange}
                />
                only my plans
            </label>
            </div>
            
        );
    }
}
