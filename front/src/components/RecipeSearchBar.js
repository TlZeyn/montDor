import React from 'react';

import './RecipeSearchBar.css'

const RecipeSearchBar = () => {
  return (
    <div id="searchBar">
      <input type="text" id="searchBar__field" placeholder="Ingrédients, recettes..."></input>
      <input type="button" id="searchBar__button"></input>
    </div>
  )
}

export default RecipeSearchBar