import axios from 'axios';
import React, { useState, useEffect } from 'react'

import './UploadFront.css'

const UploadFront = ({parentCallback})=> {
    const [image, setImage] = useState({ preview: "", raw: "" });

    const refreshParent = () => {
        parentCallback(image.raw)
    }

    useEffect(() => {
        refreshParent()
    }, [image, setImage])

    const handleChange = e => {
        if (e.target.files.length) {
            setImage({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]
            });        
        }      
        
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
                name="upload"
                id="upload-button"
                style={{ display: "none" }}
                onChange={handleChange}
            />    
        </div>
    );
}


export default UploadFront