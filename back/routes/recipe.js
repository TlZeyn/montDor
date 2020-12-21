const express = require('express')
const router = express.Router()
const connection = require('../conf')

router.get('/', (req, res) => {
    //print all recipes in recipe : http://localhost:5000/recettes
    connection.query(
        'SELECT rcp_id AS id, rcp_title AS title, rcp_nbEater AS nbEater, rcp_photo AS photo FROM t_recipe_rcp', (err, results) => {
            if (err) {
                res.status(500).send('Erreur lors de la récupération des recettes');
            } else {
                res.json(results);
            }
        })
})


module.exports = router;