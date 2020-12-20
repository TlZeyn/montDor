const express = require('express')
const router = express.Router()
const connection = require('../conf')

router.post('/', function (req, res) {
    console.log(req.body)
    console.log(req.body.listSteps)
    connection.query(
        'SELECT rcp_title AS title, rcp_nbEater AS nbEater, rcp_photo AS photo FROM t_recipe_rcp ORDER BY rcp_creationDate LIMIT 3', (err, results) => {
            if (err) {
                res.status(500).send('Erreur lors de la récupération des recettes');
            } else {
                res.json(results);
            }
        })

    //insert ingredients => check if in db or not //get id -> trigger
    //insert data in recipe
    //insert data in joint table recipe igr
    //insert data in step
    // insert data in joint table recipe step


});

module.exports = router;