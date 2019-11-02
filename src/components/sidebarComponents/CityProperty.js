import React,{Component} from 'react';

import '../sidebarComponents/SideBar.css'
import '../App.css';

class City extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidMount(){

    }
  render(){
    return(
        <div className={this.props.style_class}>
        <label for="from-city">{this.props.countryName}</label><input type="text" name ="from-city" />
               </div>
    );
  }
}
export default City;