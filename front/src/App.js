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

import './App.css';


const App = () => {

  // to developp later
  // const [recipes, setRecipes] = useState(null)

  // const fetchRecipes = () => {
  //   axios.get('http://localhost:5000/')
  //        .then(res => setRecipes(res.data))
  //        .catch((error) => console.log(error))
  // }

  // useEffect(() => {
  //   fetchRecipes()
  // }, [])

  // console.log("dans mon app", recipes)

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
        <Route path='/recipe' component={OneRecipe} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;