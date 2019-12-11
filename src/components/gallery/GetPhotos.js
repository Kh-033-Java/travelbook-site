import React from "react";

export default function GetPhotos(props) {
    const photos = [];
    props.photos.forEach((element, key) =>
        photos.push(<div className="general-photo" key={key}><img className="this-photo" src={element.link} key={key}
                                                                  alt={"No photo"}/></div>
        ));
    return photos
}