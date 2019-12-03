import React, {Component} from 'react';
import './Checkbox.css';



class CheckBox extends Component {
    
    constructor(props){
        super();
        this.onClick = this.onClick.bind(this);
    }
    onClick(e){

        if(e.type === 'click')
        {
            this.props.onClick();
        }
    }
    render(){
    return (
        <div className='check-box'>
            <p className={this.props.isUserSearch || this.props === undefined ? "selected" : null}>User</p>
            <label  className="switch">
                <input onClick={this.onClick} type="checkbox"/>
                <span className="slider round"></span>
            </label>
            <p className={this.props.isUserSearch ? null : "selected"}>Country</p>
        </div>
    );
    }
}
export default CheckBox;