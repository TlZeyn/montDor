import React, { useState } from 'react'

import './UploadFront.css'

const UploadFront = () => {
    const [image, setImage] = useState({ preview: "", raw: "" });

    const handleChange = e => {
        if (e.target.files.length) {
            setImage({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]
            });
        }
    };


    const handleUpload = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image.raw);

        await fetch("YOUR_URL", {
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data"
            },
            body: formData
        });
    };

    return (
        <div id='uploadFront'>
            <label htmlFor="upload-button">
                <div className='uploadFront_coverImage'>
                    {image.preview ? (
                        <img className='testFit' src={image.preview} alt="dummy" width="100%" height="100%" />
                    ) : (


                            <p>Ajouter une photo</p>


                        )}
                </div>

            </label>
            <div className='avatar'>
                <img className='uploadFront_avatar' src='https://via.placeholder.com/150' />
            </div>
            <input
                type="file"
                id="upload-button"
                style={{ display: "none" }}
                onChange={handleChange}
            />
            <br />
            {/* <button onClick={handleUpload}>Upload</button> */}
        </div>
    );


}


export default UploadFront