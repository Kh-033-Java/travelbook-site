import React,{Component} from "react";
import NoteListElement from './allNotes/NoteListElement'

import '../App.css';
import './AllNotesPage.css';
//gets list of object of notes from props
class NotesWrapper extends Component{
    constructor(props){
        super(props)
        this.getNotes = this.getNotes.bind(this);
    }
  getNotes=()=>{
    const notes=[];
    console.log(this.props.notes);
    tempList = this.props.notes;
    tempList.forEach(e=>notes.push(<NoteListElement note={e} setId={this.props.setId} countryName={this.props.countryName}/>));
    console.log(tempList);
    console.log(notes);
    return notes
}
render()
{  
    console.log(this.props.notes);
    return(
<div className={this.props.classWr}>
{this.getNotes()}

</div>
    )
}
}
export default NotesWrapper;
let  tempList = [{
    id: 1,
    title: "Lviv is nice",
    isPublic: true,
    description: "Was good and nice",
    dateOfVisiting: "2019-02-15",
    peopleEstimate: 5,
    pricesEstimate: 5,
    cuisineEstimate: 5,
    commonImpression: 5,
    describedCity: null,
    photoLink: null,
    public: true
},{
    id: 2,
    title: "Lviv is nice",
    isPublic: true,
    description: "Was good and nice",
    dateOfVisiting: "2019-02-15",
    peopleEstimate: 3.44,
    pricesEstimate: 3.1,
    cuisineEstimate: 4,
    commonImpression: 5,
    describedCity: null,
    photoLink: null,
    public: true
},{
    id: 3,
    title: "Lviv is nice",
    isPublic: true,
    description: "Was good and nice",
    dateOfVisiting: "2019-02-15",
    peopleEstimate: 5,
    pricesEstimate: 5,
    cuisineEstimate: 4,
    commonImpression: 5,
    describedCity: null,
    photoLink: null,
    public: true
},{
    id: 4,
    title: "Lviv is nice",
    isPublic: true,
    description: "Was good and nice",
    dateOfVisiting: "2019-02-15",
    peopleEstimate: 5,
    pricesEstimate: 5,
    cuisineEstimate: 4,
    commonImpression: 5,
    describedCity: null,
    photoLink: null,
    public: true
},{
    id: 5,
    title: "Lviv",
    isPublic: true,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Vitae tempus quam pellentesque nec nam aliquam sem et. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Id leo in vitae turpis massa sed elementum. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Risus quis varius quam quisque id diam vel quam elementum. Libero enim sed faucibus turpis in eu mi. Egestas erat imperdiet sed euismod. Dictum sit amet justo donec enim. Tincidunt nunc pulvinar sapien et. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Tortor condimentum lacinia quis vel eros.",
    dateOfVisiting: "2019-02-15",
    peopleEstimate: 5,
    pricesEstimate: 5,
    cuisineEstimate: 4,
    commonImpression: 5,
    describedCity: null,
    photoLink: null,
    public: true
},{
    id: 6,
    title: "Lviv is vert nice",
    isPublic: true,
    description: "Was good and nice",
    dateOfVisiting: "2019-02-15",
    peopleEstimate: 5,
    pricesEstimate: 5,
    cuisineEstimate: 4,
    commonImpression: 5,
    describedCity: null,
    photoLink: null,
    public: true
},{
    id: 7,
    title: "Lviv is not nice",
    isPublic: true,
    description: "Was good and nice",
    dateOfVisiting: "2019-02-15",
    peopleEstimate: 5,
    pricesEstimate: 5,
    cuisineEstimate: 4,
    commonImpression: 5,
    describedCity: null,
    photoLink: null,
    public: true
}];