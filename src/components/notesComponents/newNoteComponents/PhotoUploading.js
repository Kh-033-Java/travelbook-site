import React ,{useState}from "react";
import '../../App.css';
import"../../sidebarComponents/SideBar.css";
import { FilePond,registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
registerPlugin(FilePondPluginImagePreview);

function PhotoUploader(props){
    const[state,setState] = useState({});

return(
<div className="photo-upload container">
    <p className="header-text">Your photos</p>
<FilePond name ="photos" allowMultiple={true} 
 onupdatefiles={
     (fileItems) => {
         setState({files: fileItems.map(fileItem => fileItem.file)
            
  });
  props.setPhotos(fileItems); 
  }}>
        </FilePond>
</div>
);
    }

export default PhotoUploader;