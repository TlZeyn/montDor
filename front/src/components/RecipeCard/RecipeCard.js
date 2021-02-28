import React, { useState, useEffect } from 'react';
import './RecipeCard.css';

import axios from 'axios'


const RecipeCard = ({img, title, id}) => {

    const [singleRecipe, setSingleRecipe] = useState(null)


    const fetchTheRecipe = () => {
        axios.get(`http://localhost:5000/recette/${id}`)
          .then(res => setSingleRecipe(res.data))
          .catch((error) => {console.log(error)})
        }
       
        useEffect(() => {
            console.log("ici mon id", id)
        }, [singleRecipe])

    return(
        <div className="card" onClick={() => fetchTheRecipe()}>
            <img src={img} alt=""/>
            <h3>{title}</h3>
        </div>
    )
}

export default RecipeCard;