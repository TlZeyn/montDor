import React from 'react'
import { Switch, Route} from "react-router-dom"

import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Banner from './components/Banner/Banner'
import RecipeSearchBar from './components/RecipeSearchBar/RecipeSearchBar'
import TrendyRecipes from './components/TrendyRecipes/TrendyRecipes'
import Footer from './components/Footer/Footer'

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Switch>
        <Route exact path='/' component={Banner} />
      </Switch>
      <RecipeSearchBar />
      <TrendyRecipes />
      <Footer />
    </div>
  );
}

export default App;
