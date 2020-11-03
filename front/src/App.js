// Librairies
import React from 'react'
import { Switch, Route} from "react-router-dom"
// Components
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Banner from './components/Banner/Banner'
import RecipeSearchBar from './components/RecipeSearchBar/RecipeSearchBar'
import Footer from './components/Footer/Footer'
// Screens
import TrendyRecipes from './components/TrendyRecipes/TrendyRecipes'
import Recipes from './components/Recipes/Recipes'
// Style
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
      </Switch>
      <Footer />
    </div>
  );
}

export default App;