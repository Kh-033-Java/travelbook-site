import React ,{useState}from "react";
import '../../App.css';
import"../../sidebarComponents/SideBar.css";
import { FilePond,registerPlugin } from 'react-filepond';
import  'filepond/dist/filepond.min.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
registerPlugin(FilePondPluginImagePreview);

class PhotoUploader extends React.Component{
    render(){
return(
<div className="photo-upload">
    <p className="header-text">Your photos</p>
<FilePond name ="photos" allowMultiple={true}
  ref={(ref)=> this.p = ref}
 onupdatefiles={
     (fileItems) => {
  this.props.setPhotos(fileItems);
  console.log(this.p.getFiles())
  }}
>
        </FilePond>

</div>
);
    }
}

export default PhotoUploader;