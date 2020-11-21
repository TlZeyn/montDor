import React, { useState, useEffect,} from 'react'
import { Switch, Route } from "react-router-dom"

import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Banner from './components/Banner/Banner'
import RecipeSearchBar from './components/RecipeSearchBar/RecipeSearchBar'
import TrendyRecipes from './components/TrendyRecipes/TrendyRecipes'
import Recipes from './components/Recipes/Recipes'
import Footer from './components/Footer/Footer'
import RecipesList from './components/RecipesList/recipesList'

import './App.css';



const SearchRecipes = (props) => {
  const [input, setInput] = useState('');
  const [recipesListDefault, setrecipesListDefault] = useState();
  const [recipesList, setRecipes] = useState();
}

const updateInput = async (input) => {
  const filtered = recipesListDefault.filter(recipes => {
    return recipes.name.toLowerCase().includes(input.toLowerCase())
  })
  setInput(input);
  setRecipesList(filtered);
}

useEffect( () => {axiosData()}, []);


const App = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Banner />
      <RecipeSearchBar 
      
      />

      <RecipesList  input={input}
      onChange={updateInput}  />
      <Switch>
        <Route exact path='/' component={TrendyRecipes} />
        <Route path='/recipes' component={Recipes} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;