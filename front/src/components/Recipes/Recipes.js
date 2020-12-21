import React, { useEffect, useState } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard'
import axios from 'axios';

import './Recipes.css'

import img from '../../assets/smaug.jpg'

const Recipes = () => {

  const [recipes, setRecipes] = useState(null)
 
  const fetchRecipes = () => {
    axios.get('http://localhost:5000/recettes')
          .then(res => setRecipes(res.data))
          .catch((error) => {console.log(error)})
        }
        
        useEffect(() => {
          fetchRecipes()
        }, [])

  return (
    <section id="recipes">

      <div id="recipes__filters">

        <input type="button" className="recipes__filters-inputs" value="Entrées"></input>
        <input type="button" className="recipes__filters-inputs" value="Plats"></input>
        <input type="button" className="recipes__filters-inputs" value="Desserts"></input>
        <input type="button" className="recipes__filters-inputs" value="Favoris"></input>

      </div>

      <div id="recipes__results">
          {recipes && recipes.map(recipe => (
            <RecipeCard
              id={recipe.id}
              img={img}
              title={recipe.title}/>
          ))}

      </div>

    </section>
  );
};

export default Recipes;