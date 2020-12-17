const express = require('express')
const router = express.Router()
const connection = require('../conf')

router.get('/', (req, res) => {
    //print all recipes in homepage : http://localhost:5000/accueil
    connection.query(
        'SELECT rcp_title AS title, rcp_nbEater AS nbEater, rcp_photo AS photo FROM t_recipe_rcp', (err, results) => {
            if (err) {
                res.status(500).send('Erreur lors de la récupération des recettes');
            } else {
                res.json(results);
            }
        })
})


module.exports = router;