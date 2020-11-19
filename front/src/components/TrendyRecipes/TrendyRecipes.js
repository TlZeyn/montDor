import React, { Component } from 'react';
import axios from 'axios';

import './TrendyRecipes.css'

import img from '../../assets/smaug.jpg'

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

        <div className="trendyRecipes__UI">
          <div id="trendyRecipes__UI-firstCard" className="trendyRecipes__UI-card">
            <img src={img} alt="Recette"/>
            <h3>La Douceur de Smaug</h3>
          </div>

          <div id="trendyRecipes__UI-secondCard" className="trendyRecipes__UI-card">
            <img src={img} alt="Recette"/>
            <h3>La Douceur de Smaug</h3>
          </div>

          <div id="trendyRecipes__UI-thirdCard" className="trendyRecipes__UI-card">
            <img src={img} alt="Recette"/>
            <h3>La Douceur de Smaug</h3>
          </div>
        </div>

        <h2 className="trendyRecipes__titles">Recettes coup de coeur du chef personnel de Thranduil</h2>
        
        <div className="trendyRecipes__UI">
          <div id="trendyRecipes__UI-fourthCard" className="trendyRecipes__UI-card">
            <img src={img} alt="Recette"/>
            <h3>La Douceur de Smaug</h3>
          </div>

          <div id="trendyRecipes__UI-fifthCard" className="trendyRecipes__UI-card">
            <img src={img} alt="Recette"/>
            <h3>La Douceur de Smaug</h3>
          </div>

          <div id="trendyRecipes__UI-sixthCard" className="trendyRecipes__UI-card">
            <img src={img} alt="Recette"/>
            <h3>La Douceur de Smaug</h3>
          </div>
        </div>

        <h2 className="trendyRecipes__titles">Dernières recettes</h2>

        <div className="trendyRecipes__UI">
          <div id="trendyRecipes__UI-seventhCard" className="trendyRecipes__UI-card">
            <img src={img} alt="Recette"/>
            <h3>La Douceur de Smaug</h3>
          </div>

          <div id="trendyRecipes__UI-eighteenthCard" className="trendyRecipes__UI-card">
            <img src={img} alt="Recette"/>
            <h3>La Douceur de Smaug</h3>
          </div>

          <div id="trendyRecipes__UI-nineteenthCard" className="trendyRecipes__UI-card">
            <img src={img} alt="Recette"/>
            <h3>La Douceur de Smaug</h3>
          </div>
        </div>
      </section>
    )
  }
}

export default TrendyRecipes