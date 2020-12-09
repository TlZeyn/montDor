import React, { useEffect, useState } from 'react';
import axios from 'axios';

import RecipeCard from '../RecipeCard/RecipeCard';

import './Recipes.css'

import img from '../../assets/smaug.jpg'

const Recipes = () => {

  const [recipes, setRecipes] = useState(null)

  const fetchRecipes = () => {
    axios.get('http://localhost:5000/accueil')
      .then(res => setRecipes(res.data))
      .catch((error) => { console.log(error) })
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

        <div id="recipes__results--firstCard" className="recipes__results--card">
        {recipes && recipes.map(recipe => (
          <RecipeCard
            img={img}
            title={recipe.title} />
        ))}
        </div>

        <div id="recipes__results--secondCard" className="recipes__results--card">
        {recipes && recipes.map(recipe => (
          <RecipeCard
            img={img}
            title={recipe.title} />
        ))}
        </div>

      </div>

    </section>
  );
};

export default Recipes;