import React from 'react'
import { Switch, Route} from "react-router-dom"

import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Banner from './components/Banner/Banner'
import RecipeSearchBar from './components/RecipeSearchBar/RecipeSearchBar'
import TrendyRecipes from './components/TrendyRecipes/TrendyRecipes'
import Recipes from './components/Recipes/Recipes'
import OneRecipe from './components/OneRecipe/OneRecipe'
import Footer from './components/Footer/Footer'

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Banner />
      <RecipeSearchBar />
      <Switch>
        <Route exact path='/' component={TrendyRecipes} />
        <Route path='/recipes' component={Recipes} />
        <Route path='/recipe' component={OneRecipe} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;