import React from "react";

export default function GetPhotos (props) {
        const photos = [];
        props.photos.forEach(element =>
            photos.push(<div className="general-photo"><img className="this-photo" src={element.link}/></div>
            ));
        return photos
}