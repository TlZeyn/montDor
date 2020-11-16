import React from 'react';
import axios from 'axios';

import './Recipes.css'

axios.get('http://localhost:5000/recettes')
  .then((res) => {console.log(res.data)
  }).catch((error) => {
    console.log(error)
  });

const Recipes = () => {
  return (
    <section id="recipes">

    <div id="recipes__filters">

      <input type="button" className="recipes__filters-inputs" value="Entrées"></input>
      <input type="button" className="recipes__filters-inputs" value="Plats"></input>
      <input type="button" className="recipes__filters-inputs" value="Desserts"></input>
      <input type="button" className="recipes__filters-inputs" value="Favoris"></input>

    </div>

    <div id="recipes__results">

    

    </div>
      
    </section>
  );
};

export default Recipes;