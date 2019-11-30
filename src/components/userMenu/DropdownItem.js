import React from 'react'

export default class DropdownItem extends React.Component{
    render() {
      return (<li className="dropdown-option" 
                onClick={this.props.click}>
                  {this.props.label}
            </li>);
    }
  }