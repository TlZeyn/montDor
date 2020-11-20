import React, { usteState, useEffect, useState } from 'react'
import React from 'react'
import { Switch, Route } from "react-router-dom"

import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Banner from './components/Banner/Banner'
import RecipeSearchBar from './components/RecipeSearchBar/RecipeSearchBar'
import TrendyRecipes from './components/TrendyRecipes/TrendyRecipes'
import Recipes from './components/Recipes/Recipes'
import Footer from './components/Footer/Footer'

import './App.css';


const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [recipesListDefault, setRecipesListDefault] = useState();
  const [recipesList, setRecipesList] = useState();
}


const fetchData = async () => {
  return await fetch('...')
    .then(response => response.json())
    .then(data => {
      setRecipesList(data)
      setRecipesListDefault(data)
    });
}

const updateInput = async (input) => {
  const filtered = setRecipesListDefault.filter(recipes => {
    return recipes.name.toLowerCase().includes(input.toLowerCase())
  })
  setInput(input)
  setRecipesListDefault(filtered)
}

useEffect(() => { fetchData() }, []);

return (
    <>
    <h1>Recipes List</h1>
    <SearchBar
      input={input}
      onChange={updateInput
        />
        <RecipesList recipesList={recipesList} />
    </>
  );
  }

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
      </Switch>
      <Footer />
    </div>
  );
}

export default App;