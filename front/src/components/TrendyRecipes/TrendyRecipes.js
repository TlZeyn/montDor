import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Banner from '../Banner/Banner';
import RecipeSearchBar from '../RecipeSearchBar/RecipeSearchBar';
import RecipeCard from "../RecipeCard/RecipeCard";

import "./TrendyRecipes.css";

import img from "../../assets/smaug.jpg";

const TrendyRecipes = () => {
  const [recipes, setRecipes] = useState(null);
  const absolutePath = "http://localhost:5000";

  const fetchRecipes = () => {
    axios
      .get("http://localhost:5000/recettes")
      .then(res => setRecipes(res.data))
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <>
    <Banner />
    <RecipeSearchBar />
    <section id="trendyRecipes">
      <h2 className="trendyRecipes__titles">Dernières recettes</h2>

      <div className="trendyRecipes__UI">
        {recipes &&
          recipes.map(recipe => (
            <div className="trendyRecipes__UI-card">
              <Link
                className="trendyRecipes__UI-card--link"
                to={{
                  pathname: `/recipe/${recipe.id}`
                }}
              >
                <RecipeCard
                  img={recipe.photo == null ? img : absolutePath + recipe.photo}
                  title={recipe.title}
                />
              </Link>
            </div>
          ))}
      </div>
    </section>
    </>
  );
};

export default TrendyRecipes;
