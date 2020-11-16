import React, { Component } from 'react';
import axios from 'axios';

import './TrendyRecipes.css'

class TrendyRecipes extends Component {

  state = {
    recipes: []
  }

  fetchRecipes = () => {
    axios.get('http://localhost:5000/accueil')
          .then((res) => {console.log(res.data)})
          .catch((error) => {console.log(error)})
          .then(data => {this.setState({ recipes: data})})
  }

  componentDidMount() {
    this.fetchRecipes()
  }

  render() {
    return (
      <section id="trendyRecipes">
        <h2 className="trendyRecipes__titles">Recettes tendances de la Terre du Milieu</h2>
        <div id="trendyRecipes__first">
          <img src="../../assets/smaug.jpg" alt="recette"/>
          <h3>La Douceur de Smaug</h3>
        </div>
        <h2 className="trendyRecipes__titles">Recettes coup de coeur du chef personnel de Thranduil</h2>
        <div></div>
        <h2 className="trendyRecipes__titles">Dernières recettes</h2>
        <div></div>
      </section>
    )
  }
}

export default TrendyRecipes