import React from 'react';

import './Recipes.css'

const Recipes = () => {
  return (
    <section id="recipes">

    <div id="recipes__filters">

      <input type="button" class="recipes__filters-inputs" value="Entrées"></input>
      <input type="button" class="recipes__filters-inputs" value="Plats"></input>
      <input type="button" class="recipes__filters-inputs" value="Desserts"></input>
      <input type="button" class="recipes__filters-inputs" value="Favoris"></input>

    </div>

    <div id="recipes__results">

    

    </div>
      
    </section>
  );
};

export default Recipes;