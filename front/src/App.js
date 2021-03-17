import React, {useEffect, useState} from 'react'
import { Switch, Route} from 'react-router-dom'
import axios from 'axios'

import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Banner from './components/Banner/Banner'
import RecipeSearchBar from './components/RecipeSearchBar/RecipeSearchBar'
import TrendyRecipes from './components/TrendyRecipes/TrendyRecipes'
import Recipes from './components/Recipes/Recipes'
import OneRecipe from './components/OneRecipe/OneRecipe'
import Footer from './components/Footer/Footer'
import RecipeForm from './components/RecipeForm/RecipeForm'
import RecipeCard from './components/RecipeCard/RecipeCard'

import './App.css';


const App = () => {

  return (
    <div className="App">
      <Header />
      <Nav />
      <Banner />
      <RecipeSearchBar />
      <Switch>
        <Route exact path='/'><TrendyRecipes /></Route>
        <Route path='/recipes'><Recipes /></Route>
        <Route path='/recipe/:id'><OneRecipe /></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;