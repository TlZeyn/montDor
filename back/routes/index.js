const express = require('express')
const recipes = require('./recipe')
const homepage = require('./homepage')

const router = express.Router();

router.use('/accueil',homepage)
router.use('/recettes',recipes);

module.exports = router;