const express = require('express')
const router = express.Router()
const connection = require('../conf')

router.post('/:id', (req, res) => {
    // Fetch datas for one recipe in recipe vue : http://localhost:5000/recette/:id
    const id = req.params.id    
    connection.query(
    'SELECT r.rcp_id AS id, r.rcp_title AS title, r.rcp_prepTime AS prepTime, r.rcp_cooktime AS cookTime, r.rcp_nbEater AS eaters, r.rcp_message AS message, r.rcp_photo AS photo, u.usr_avatar AS avatar, u.usr_log FROM t_recipe_rcp AS r LEFT JOIN ts_user_usr AS u ON r.rcp_id = u.usr_id; SELECT s.stp_nb AS nb, s.stp_description AS description FROM t_step_stp AS s LEFT JOIN t_recipe_rcp AS r ON s.stp_id = r.rcp_id; SELECT inre.irp_amount as amount, i.igr_label as ingredient, unit.unt_label as unit_label FROM t_recipe_rcp as r LEFT JOIN tj_ingredientRecipe_irp as inre ON r.rcp_id=inre.irp_rcp_id LEFT JOIN t_ingredient_igr as i ON inre.irp_igr_id = i.igr_id LEFT JOIN tr_unit_unt as unit ON inre.irp_unt_id = unit.unt_id WHERE r.rcp_id = ?', id, (err, results) => {
        if (err) {
            res.status(500).send('Erreur lors de la récupération de la recette');
        } else {
            res.json(results);
        }
    })
})


module.exports = router;