import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import RecipeCard from '../RecipeCard/RecipeCard';

import './TrendyRecipes.css'

import img from '../../assets/smaug.jpg'

const TrendyRecipes = () => {
  
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
    <section id="trendyRecipes">
      {/* <h2 className="trendyRecipes__titles">Notre recette du moment</h2>
      <div className="trendyRecipes__UI">
        <div id="trendyRecipes__UI-firstCard" className="trendyRecipes__UI-card">
          <img src={img} alt="Recette"/>
          {recipes && <h3>{recipes[0].title}</h3>}
        </div>

      </div> */}

      {/* <h2 className="trendyRecipes__titles">Recettes coup de coeur du chef personnel de Thranduil</h2>
        
      <div className="trendyRecipes__UI">
        {recipes && recipes.map(recipe => (
          <RecipeCard 
          img={img}
          title={recipe.title}/>
        ))}
      </div> */}

      <h2 className="trendyRecipes__titles">Dernières recettes</h2>

      <div className="trendyRecipes__UI">
        {recipes && recipes.map(recipe => (
          <Link to={{
            pathname:`/recipe/${recipe.id}`,
          }}>
            <RecipeCard
              img={recipe.photo == null ? img : absolutePath+recipe.photo}
              title={recipe.title}/>
          </Link>
        ))}
      </div>
    </section>
  )
  
}

export default TrendyRecipes