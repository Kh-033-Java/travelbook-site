import React from "react";

export default function ExistedPhotos (props) {
        const photos = [];
        props.photos.forEach(element =>
            photos.push(<div className="general-photo"><img className="this-photo" src={element.link}/>
                <button> Delete photo </button></div>
            ));
        return photos
}