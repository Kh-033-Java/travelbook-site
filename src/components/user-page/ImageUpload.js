import React, {Component} from 'react';
import {UPLOAD_PHOTO} from "../../constants/constants";
import './ImageUpload.css'
class ImageUpload extends Component{
    constructor(props){
        super(props);
        this.state = {file: '', imagePreviewUrl: ''};
    }

    componentDidMount() {
        this.setState({imagePreviewUrl: localStorage.getItem("avatar")})
    }

    handleSubmitDeletePhoto(e){
        e.preventDefault();

        localStorage.removeItem("avatar");
    }

    handleSubmit(e) {
        e.preventDefault();

        let data = new FormData();

        data.append('file', this.state.file);

        let request = new XMLHttpRequest();
        request.open('POST', UPLOAD_PHOTO);
        request.send(data);
        request.onload = function () {
            console.log(request.response);
            localStorage.setItem("avatar", request.response);
            if(request.response.status === 200){
                alert("Photo successfully uploaded")
            }
        };
        console.log('handle uploading-', this.state.file);


    }

    handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        };

        reader.readAsDataURL(file);
        alert("Submit please, press Upload Image button");
    }

    render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img className="photo" src={imagePreviewUrl}  />);
        } else {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }
        let DeleteButton;
        if (localStorage.getItem("avatar")){
            DeleteButton = <button className="deleteSubmitButton" type="delete" onClick={(e) =>this.handleSubmitDeletePhoto(e)}>Delete photo
            </button>;
        }

        return (
            <div className="previewComponent">
                <div className="imgPreview">
                    {$imagePreview}
                </div>
                <form onSubmit={(e)=>this.handleSubmit(e)}>
                    <input className="fileInput"
                           type="file"
                           onChange={(e)=>this.handleImageChange(e)}/>
                           <br/>
                    <button className="submitButton"
                            type="submit"
                            onClick={(e)=>this.handleSubmit(e)}>Upload Image</button>
                    {DeleteButton}
                </form>
            </div>
        )
    }
}

export default ImageUpload;