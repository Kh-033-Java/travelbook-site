import React,{Component} from "react";
import '../App.css';


class Note extends Component{
constructor(props){
    super();
    this.state ={
            title : 'title',
            countryName:"sth",
            city:"city",
            date :'date'
    }
}
componentDidMount(){
//in this component will be axios 
}
    render(){  
return(
    <aside className="rightbar note-whole-comp">
</aside>
);
    }
}
export default Note;