import React, { useEffect, useState } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard'
import axios from 'axios';
import { Link } from 'react-router-dom';

import './Recipes.css'

import img from '../../assets/smaug.jpg'

const Recipes = () => {

  const [recipes, setRecipes] = useState(null)
  const absolutePath = "http://localhost:5000"
 
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
            <Link to={{
              pathname:`/recipe/${recipe.id}`,
            }}>
              <RecipeCard
                id={recipe.id}
                img={recipe.photo == null ? img : absolutePath+recipe.photo}
                title={recipe.title}/>
              </Link>
          ))}

      </div>

    </section>
  );
};

export default Recipes;