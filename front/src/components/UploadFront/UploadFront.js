import axios from 'axios';
import React, { useState, useEffect } from 'react'

import './UploadFront.css'

const UploadFront = ({parentCallback})=> {
    const [image, setImage] = useState({ preview: "", raw: "" });

    const test2 = () => {
        parentCallback(image.raw)
    }

    useEffect(() => {
        test2()
    }, [image, setImage])

    const handleChange = e => {
        if (e.target.files.length) {
            setImage({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]
            });
            
        }      
        
    };


    // const handleUpload = async e => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append("file", image.raw);

    //     axios.post('http://localhost:5000/upload', formData, {

    //     })
    //         .then((response) => {
    //             console.log(response);
    //         }, (error) => {
    //             console.log(error)
    //         });
    // }



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

            {/* <button onClick={handleUpload}>Upload</button> */}

        
        </div>
    );


}


export default UploadFront