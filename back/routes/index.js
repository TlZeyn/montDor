const express = require('express')
const recipes = require('./recipe')
const homepage = require('./homepage')
const createRecipe = require('./createRecipe')
const upload = require('./upload')
const recipe = require('./oneRecipe');

const router = express.Router();

router.use('/accueil',homepage);
router.use('/recettes',recipes);
router.use('/creation', createRecipe)
router.use('/upload', upload)
router.use('/recette', recipe);

module.exports = router;