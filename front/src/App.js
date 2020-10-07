import React from 'react'
import { Switch, Route} from "react-router-dom"

import Header from './components/Header'
import Nav from './components/Nav'
import Banner from './components/Banner'
import RecipeSearchBar from './components/RecipeSearchBar'

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Switch>
        <Route exact path='/' component={Banner} />
        <RecipeSearchBar />
      </Switch>
    </div>
  );
}

export default App;
