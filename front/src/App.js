import React from 'react'
import { Switch, Route} from "react-router-dom"

import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Banner from './components/Banner/Banner'
import RecipeSearchBar from './components/RecipeSearchBar/RecipeSearchBar'
import TrendyRecipes from './components/TrendyRecipes/TrendyRecipes'
import Recipes from './components/Recipes/Recipes'
import Footer from './components/Footer/Footer'
import RecipeForm from './components/RecipeForm/RecipeForm'

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
        <Route path='/myrecipes' component={RecipeForm} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;