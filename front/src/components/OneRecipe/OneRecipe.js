import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './OneRecipe.css'

import img2 from '../../assets/avatar.jpeg'
import img3 from '../../assets/chief.jpeg'

const OneRecipe = () => {

    

    return(

      <section className="oneRecipe">

         <div className="oneRecipe__container">
            <div className="oneRecipe__container-header--img"></div>
            <img className="oneRecipe__container-header--img2" src={img2} alt="avatar"/>
            <h2 className="oneRecipe__container-header--title">Nom de la recette</h2>
            <div className="recommandations">
               <ul>
                  <li>Nombre d'aventuriers : 6</li>
                  <li>Temps de préparation : 15 min</li>
                  <li>Temps de cuisson : 35 min</li>
               </ul>         
             </div>
            <div className="describe-part">
               <div className="ingredients">
                  <h3>Ingrédients</h3>
                  <p>- 1er ingrédient</p>
                  <p>- 2eme ingrédient</p>
                  <p>- 3eme ingrédient</p>
               </div>
               <div className="steps">
                  <h3>Préparation</h3>
                  <p>Je fais d'abord ça</p>
                  <p>Puis ça...</p>
                  <p>Puis je finis par ça</p>
               </div>
               <div className="suggestion">
                  <h3>Recettes suggérées</h3>
                  <img src="https://via.placeholder.com/150" />
                  <img src="https://via.placeholder.com/150" />
                  <img src="https://via.placeholder.com/150" />
               </div>
            </div>
            <div className="chiefTrick">
               <img src={img3} alt="chief"/>
               <div className="chiefTrick__text">
                  <h4>L'astuce du chef Sam :</h4><br></br>
                  <p>" Je recommande d'accompagner cette recette avec de bonnes patates ! "</p>
               </div>
            </div>
         </div>
      </section> 
  );
};




export default OneRecipe