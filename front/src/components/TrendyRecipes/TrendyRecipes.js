import React from 'react';
import axios from 'axios';

import './TrendyRecipes.css'

axios.get('http://localhost:5000/accueil')
  .then((res) => {console.log(res.data)
  }).catch((error) => {
    console.log(error)
  });

const TrendyRecipes = () => {
  return (
    <section id="trendyRecipes">
      <h2 className="trendyRecipes__titles">Recettes tendances de la Terre du Milieu</h2>
      <div></div>
      <h2 className="trendyRecipes__titles">Recettes coup de coeur du chef personnel de Thranduil</h2>
      <div></div>
      <h2 className="trendyRecipes__titles">Dernières recettes</h2>
      <div></div>
    </section>
  )
}

export default TrendyRecipes