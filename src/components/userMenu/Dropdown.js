import React from 'react'
import DropdownMenu from './DropdownMenu'
import './Dropdown.css'

export default class Dropdown extends React.Component {
    constructor (){
      super();
      
      this.state = {
        toggled: false,
        selected: "Default"
      };
    }
    
    toggleDropdown () {
      this.setState({toggled: !this.state.toggled});
    }
  
    handleClick(value) {
      this.setState({selected: value});
      
    }
  
    render () {
      var className="dropdown-container";
      
      if (this.props.className) {
        className += " " + this.props.className;
      }
  
      var dropdown = React.Children.map(
        this.props.children, (child, i) => {
        
        var clonedProps = {};
        clonedProps.click = this.handleClick.bind(this, i);
  
        return React.cloneElement(child, clonedProps);
      });
      if(this.props !== undefined){
      return (
        <div className={className}  
          onClick={this.toggleDropdown.bind(this)} style={{ marginRight: 2 + "%" }}>
          <div className="dropdown-label " >
            {this.props.label}
          </div>

          <DropdownMenu toggled={this.state.toggled} >
            {dropdown}
          </DropdownMenu>
        </div>
      );
    }
  }
  }