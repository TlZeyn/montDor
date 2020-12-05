import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './OneRecipe.css'

import img from '../../assets/smaug.jpg'
import img2 from '../../assets/avatar.jpeg'

const OneRecipe = () => {

    return(
       <section className="master.container">

       <div className="container">
           <div className="recipe-header">
               <div>
                  <img className="recipe-header__img" src={img} alt="recette"/>
               </div>
               <div>
                  <img className="recipe-header__img2" src={img2} alt="avatar"/>
               </div>
               <h1 className="recipe-header__title">Nom de la recette</h1>
           </div>
           <div className="recommandations">
               <ul>
                   <li>Nombre d'aventuriers : 6</li>
                   <li>Temps de préparation : 15 min</li>
                   <li>temps de cuisson : 35 min</li>
               </ul>
           </div>
           <div className="describe-part">
                <div className="ingredients">
                   <h2>Ingrédients :</h2>
                   <p>1er ingrédient</p>
                   <p>2eme ingrédient</p>
                   <p>3eme ingrédient</p>
                </div>
                <div className="steps">
                   <h2>Préparation</h2>
                   <p>Je fais d'abord ça</p>
                   <p>Puis ça...</p>
                   <p>Puis je finis par ça</p>
                </div>
                <div className="suggestion">
                   <h2>Recettes suggérées</h2>
                   <img src="https://via.placeholder.com/150" />
                   <img src="https://via.placeholder.com/150" />
                   <img src="https://via.placeholder.com/150" />
                </div>
           </div>
           

       </div>
       </section> 
  );
};




export default OneRecipe