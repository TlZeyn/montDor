import React from 'react';

import './RecipeSearchBar.css'

const RecipeSearchBar = ({input:keyword, onChange:setKeyword}) => {
  const BarStyling = {width: "20rem", background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    <div id="searchBar">
      <input style={BarStyling} key="random1" value={keyword} type="text" id="searchBar__field" placeholder={"Ingrédients, recettes..."} onChange={(e) => setKeyword(e.target.value)}></input>
      <input type="button" id="searchBar__button"></input>
    </div>
  )
}

export default RecipeSearchBar