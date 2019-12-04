import React from 'react'


export default class DropdownMenu extends React.Component {
  
  render() {
    let className="dropdown-select";
    if (this.props.toggled) {
      className += " open";
    }
    
    return <ul className={className}>
          {this.props.children}
        </ul>
  }
}