import React from 'react';
import './RecipeCard.css';


const RecipeCard = ({img, title}) => {


    return(
        <div className="card">
            <img src={img} alt=""/>
            <h3>{title}</h3>
        </div>
    )
}

export default RecipeCard;