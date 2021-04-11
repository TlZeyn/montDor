const express = require('express');
const recipes = require('./recipe');
const oneRecipe = require('./oneRecipe');
const homepage = require('./homepage');
const createRecipe = require('./createRecipe')
const upload = require('./upload')

const router = express.Router();

router.use('/accueil',homepage);
router.use('/recettes',recipes);
router.use('/recette', oneRecipe);
router.use('/creation', createRecipe)
router.use('/upload', upload)

module.exports = router;