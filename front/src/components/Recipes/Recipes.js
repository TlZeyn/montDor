import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Recipes.css'

import img from '../../assets/smaug.jpg'

const Recipes = () => {

  const [recipes, setRecipes] = useState(null)

  const fetchRecipes = () => {
    axios.get('http://localhost:5000/recettes')
      .then((res) => { console.log(res.data) })
      .catch((error) => { console.log(error) })
      .then(data => { setRecipes({ recipes: data }) })
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
          <img src={img} alt="Recette" />
          <h3>La Douceur de Smaug</h3>
        </div>

        <div id="recipes__results--secondCard" className="recipes__results--card">
          <img src={img} alt="Recette" />
          <h3>La Douceur de Smaug</h3>
        </div>

        <div id="recipes__results--thirdCard" className="recipes__results--card">
          <img src={img} alt="Recette" />
          <h3>La Douceur de Smaug</h3>
        </div>

        <div id="recipes__results--fourthCard" className="recipes__results--card">
          <img src={img} alt="Recette" />
          <h3>La Douceur de Smaug</h3>
        </div>

      </div>

    </section>
  );
};

export default Recipes;