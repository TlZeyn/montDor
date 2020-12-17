const express = require('express');
const recipes = require('./recipe');
const recipe = require('./oneRecipe');
const homepage = require('./homepage');

const router = express.Router();

router.use('/accueil',homepage);
router.use('/recettes',recipes);
router.use('/recette', recipe);

module.exports = router;