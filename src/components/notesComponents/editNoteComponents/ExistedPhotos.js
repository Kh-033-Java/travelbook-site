import React from "react";
import "../newNoteComponents/NewNote.css";

export default function ExistedPhotos(props) {
    const photos = [];
    props.photos.forEach(element =>
        photos.push(<div className="existed-photos"><img className="this-photo" src={element.link}/>
                <input name="deletePhoto" onClick={func => props.deletePhoto(element.link)} type="button" value="delete photo"/>
            </div>
        ));
    return photos;
}

