import './NoteStyling.css'
import NoteOwner from './NoteOwner.js'
import NoteProperties from './NoteProperties.js'
import NoteEstimations from './NoteEstimations.js'
import '../App.css';
import "../sidebarComponents/SideBar.css";
import NotesPhotos from './NotePhotos';
import React, {Component} from "react";

class NoteMain extends Component {

    constructor(props) {
        super();
        this.state = {};
    }

    getDate() {
        if (this.props.note.dateOfVisiting) {
            let str = this.props.note.dateOfVisiting;
            console.log(str.slice(0, 10));
            return str.slice(0, 10);
        }
    }

    render() {
        return (
            <div className="main-comp main-sidebar">
                <NoteOwner account={this.props.note.login} logo={this.props.note.linkToUserAvatar}
                           style_="note-owne note-owner-gen" onClick={console.log(this.props.note)}/>
                <NoteProperties describedCity={this.props.note.describedCity} date={this.getDate()}/>
                {console.log("notemain - " + this.props.note.describedCity)}
                <div className="ddescription">
                    <div className="title-note">Description</div>
                    <textarea value={this.props.note.description} readOnly></textarea>
                </div>
                <NotesPhotos photos={this.props.note.photoLink}/>
                <NoteEstimations people={this.props.note.peopleEstimate} prices={this.props.note.pricesEstimate}
                                 cuisine={this.props.note.cuisineEstimate} impression={this.props.note.commonImpression}/>
            </div>
        );
    }

}

export default NoteMain;


// function NoteMain(props) {
//     const getDate = () => {
//         if (props.note.dateOfVisiting) {
//             let str = props.note.dateOfVisiting;
//             console.log(str.slice(0, 10));
//             return str.slice(0, 10);
//         }
//     }
//
//     const getDescribedCity = () => {
//         return props.note.describedCity;
//     }
//
//     return (
//         <div className="main-comp main-sidebar">
//             <NoteOwner account={props.note.login} logo={props.note.linkToUserAvatar} style_="note-owne note-owner-gen"
//                        onClick={console.log(props.note)}/>
//             <NoteProperties city={props.note.describedCity} date={getDate()}/>
//             {console.log("notemain - " + getDescribedCity())}
//             <div className="ddescription">
//                 <div className="title-note">Description</div>
//                 <textarea value={props.note.description} readOnly></textarea>
//             </div>
//             <NotesPhotos photos={props.note.photoLink}/>
//             <NoteEstimations people={props.note.peopleEstimate} prices={props.note.pricesEstimate}
//                              cuisine={props.note.cuisineEstimate} impression={props.note.commonImpression}/>
//         </div>
//     );
// }
//
// export default NoteMain;
