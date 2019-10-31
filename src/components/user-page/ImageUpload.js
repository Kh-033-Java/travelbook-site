import React, {Component} from 'react';

class ImageUpload extends Component{
    constructor(props){
        super(props);
        this.state = {file: '', imagePreviewUrl: ''};
    }

    handleSubmit(e) {
        e.preventDefault();
        localStorage.setItem("avatar", this.state.imagePreviewUrl);
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
        }

        reader.readAsDataURL(file)
    }

    render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img className="photo" src={imagePreviewUrl} />);
        } else {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }
        return (
            <div className="previewComponent">
                <div className="imgPreview">
                    {$imagePreview}
                </div>
                <form onSubmit={(e)=>this.handleSubmit(e)}>
                    <input className="fileInput"
                           type="file"
                           onChange={(e)=>this.handleImageChange(e)} />
                    <button className="submitButton"
                            type="submit"
                            onClick={(e)=>this.handleSubmit(e)}>Upload Image</button>
                </form>
            </div>
        )
    }
}

// ReactDOM.render(<ImageUpload/>, document.getElementById("mainApp"));

export default ImageUpload;