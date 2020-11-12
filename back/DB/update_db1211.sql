-- -----------------------------------------------------
-- Added two recipes
-- -----------------------------------------------------


INSERT INTO `BD_MONTDOR`.`t_ingredient_igr` (`igr_label`) 
VALUES ('farine');
INSERT INTO `BD_MONTDOR`.`t_ingredient_igr` (`igr_label`) 
VALUES ('poudre d''amande');
INSERT INTO `BD_MONTDOR`.`t_ingredient_igr` (`igr_label`) 
VALUES ('cassonade');
INSERT INTO `BD_MONTDOR`.`t_ingredient_igr` (`igr_label`) 
VALUES ('miel liquide');
INSERT INTO `BD_MONTDOR`.`t_ingredient_igr` (`igr_label`) 
VALUES ('beurre demi-sel');
INSERT INTO `BD_MONTDOR`.`t_ingredient_igr` (`igr_label`) 
VALUES ('extrait de vanille');


INSERT INTO `BD_MONTDOR`.`t_recipe_rcp` (`rcp_creationDate`, `rcp_title`,`rcp_prepTime`,`rcp_cooktime`,`rcp_nbEater`,`rcp_usr_id`,
`rcp_cat_id`,`rcp_message`) 
VALUES (now(),'Lembas',70,10,8,1,3,'Place la pâte au frais te permettras de l''étaler plus facilement. Tu peux remplacer l’extrait de vanille par l''épice de ton choix (cannelle, cardamome, muscade). Si tu veux changer de la poudre d''amande, prend celle de noisette.
');

INSERT INTO `BD_MONTDOR`.`tj_ingredientRecipe_irp` (`irp_igr_id`, `irp_rcp_id`,`irp_amount`,`irp_unt_id`) 
VALUES (10,2,100,6);
INSERT INTO `BD_MONTDOR`.`tj_ingredientRecipe_irp` (`irp_igr_id`, `irp_rcp_id`,`irp_amount`,`irp_unt_id`) 
VALUES (11,2,65,6);
INSERT INTO `BD_MONTDOR`.`tj_ingredientRecipe_irp` (`irp_igr_id`, `irp_rcp_id`,`irp_amount`,`irp_unt_id`) 
VALUES (12,2,40,6);
INSERT INTO `BD_MONTDOR`.`tj_ingredientRecipe_irp` (`irp_igr_id`, `irp_rcp_id`,`irp_amount`,`irp_unt_id`) 
VALUES (13,2,40,6);
INSERT INTO `BD_MONTDOR`.`tj_ingredientRecipe_irp` (`irp_igr_id`, `irp_rcp_id`,`irp_amount`,`irp_unt_id`) 
VALUES (14,2,60,6);
INSERT INTO `BD_MONTDOR`.`tj_ingredientRecipe_irp` (`irp_igr_id`, `irp_rcp_id`,`irp_amount`) 
VALUES (15,2,1);

INSERT INTO `BD_MONTDOR`.`t_step_stp` (`stp_nb`, `stp_description`) 
VALUES (1,'Faire un beurre noisette, le filtrer et réserver.');
INSERT INTO `BD_MONTDOR`.`t_step_stp` (`stp_nb`, `stp_description`) 
VALUES (2,'Mélanger dans un cul de poule la farine, la poudre d''amande et la cassonade');
INSERT INTO `BD_MONTDOR`.`t_step_stp` (`stp_nb`, `stp_description`) 
VALUES (3,'Incorporer la vanille');
INSERT INTO `BD_MONTDOR`.`t_step_stp` (`stp_nb`, `stp_description`) 
VALUES (4,'Incorporer le miel liquide au mélange');
INSERT INTO `BD_MONTDOR`.`t_step_stp` (`stp_nb`, `stp_description`) 
VALUES (5,'Incorporer le beurre noisette');
INSERT INTO `BD_MONTDOR`.`t_step_stp` (`stp_nb`, `stp_description`) 
VALUES (6,'Pétrir légèrement');
INSERT INTO `BD_MONTDOR`.`t_step_stp` (`stp_nb`, `stp_description`) 
VALUES (7,'Etaler la pâte obtenu sur une épaisseur d''environ 2 cms');
INSERT INTO `BD_MONTDOR`.`t_step_stp` (`stp_nb`, `stp_description`) 
VALUES (8,'Mettre au frigo environ 1h00');
INSERT INTO `BD_MONTDOR`.`t_step_stp` (`stp_nb`, `stp_description`) 
VALUES (9,'Récupérer la pâte et l''étaler sur une épaisseur de 1 cm');
INSERT INTO `BD_MONTDOR`.`t_step_stp` (`stp_nb`, `stp_description`) 
VALUES (10,'Découper 8 carrés réguliers d''environ 6 centimètres de côté (procéder en plusieurs fois si les 8 carrés ne sont pas tous réalisés en une seule fois)
');
INSERT INTO `BD_MONTDOR`.`t_step_stp` (`stp_nb`, `stp_description`) 
VALUES (11,'Marquer légèrement chaque carré d''une croix en travers avant cuisson (à l''aide du dos d''un couteau)
');
INSERT INTO `BD_MONTDOR`.`t_step_stp` (`stp_nb`, `stp_description`) 
VALUES (12,'Cuire à four chaud 170°C chaleur tournante pendant 10mn environ
');
INSERT INTO `BD_MONTDOR`.`t_step_stp` (`stp_nb`, `stp_description`) 
VALUES (13,'Laisser refroidir sur une grille');


INSERT INTO `BD_MONTDOR`.`tj_recipeStep_rst` (`rst_rcp_id`, `rst_stp_id`) 
VALUES (2,6);
INSERT INTO `BD_MONTDOR`.`tj_recipeStep_rst` (`rst_rcp_id`, `rst_stp_id`) 
VALUES (2,7);
INSERT INTO `BD_MONTDOR`.`tj_recipeStep_rst` (`rst_rcp_id`, `rst_stp_id`) 
VALUES (2,8);
INSERT INTO `BD_MONTDOR`.`tj_recipeStep_rst` (`rst_rcp_id`, `rst_stp_id`) 
VALUES (2,9);
INSERT INTO `BD_MONTDOR`.`tj_recipeStep_rst` (`rst_rcp_id`, `rst_stp_id`) 
VALUES (2,10);
INSERT INTO `BD_MONTDOR`.`tj_recipeStep_rst` (`rst_rcp_id`, `rst_stp_id`) 
VALUES (2,11);
INSERT INTO `BD_MONTDOR`.`tj_recipeStep_rst` (`rst_rcp_id`, `rst_stp_id`) 
VALUES (2,12);
INSERT INTO `BD_MONTDOR`.`tj_recipeStep_rst` (`rst_rcp_id`, `rst_stp_id`) 
VALUES (2,13);
INSERT INTO `BD_MONTDOR`.`tj_recipeStep_rst` (`rst_rcp_id`, `rst_stp_id`) 
VALUES (2,14);
INSERT INTO `BD_MONTDOR`.`tj_recipeStep_rst` (`rst_rcp_id`, `rst_stp_id`) 
VALUES (2,15);
INSERT INTO `BD_MONTDOR`.`tj_recipeStep_rst` (`rst_rcp_id`, `rst_stp_id`) 
VALUES (2,16);
INSERT INTO `BD_MONTDOR`.`tj_recipeStep_rst` (`rst_rcp_id`, `rst_stp_id`) 
VALUES (2,17);
INSERT INTO `BD_MONTDOR`.`tj_recipeStep_rst` (`rst_rcp_id`, `rst_stp_id`) 
VALUES (2,18);




INSERT INTO `BD_MONTDOR`.`t_ingredient_igr` (`igr_label`) 
VALUES ('vin blanc sec');
INSERT INTO `BD_MONTDOR`.`t_ingredient_igr` (`igr_label`) 
VALUES ('bâton(s) de cannelle');
INSERT INTO `BD_MONTDOR`.`t_ingredient_igr` (`igr_label`) 
VALUES ('clou(s) de girofle');
INSERT INTO `BD_MONTDOR`.`t_ingredient_igr` (`igr_label`) 
VALUES ('gingembre frais');
INSERT INTO `BD_MONTDOR`.`t_ingredient_igr` (`igr_label`) 
VALUES ('gousse(s) de cardamome');

INSERT INTO `BD_MONTDOR`.`t_recipe_rcp` (`rcp_creationDate`, `rcp_title`,`rcp_prepTime`,`rcp_cooktime`,`rcp_nbEater`,`rcp_usr_id`,
`rcp_cat_id`,`rcp_message`) 
VALUES (now(),'Vin du Gondor',5,0,4,1,4,'Tu peux prendre un vin rouge pour élaborer cette recette, elle n’en saura que plus authentique !
');

INSERT INTO `BD_MONTDOR`.`tj_ingredientRecipe_irp` (`irp_igr_id`, `irp_rcp_id`,`irp_amount`,`irp_unt_id`) 
VALUES (16,3,1,3);
INSERT INTO `BD_MONTDOR`.`tj_ingredientRecipe_irp` (`irp_igr_id`, `irp_rcp_id`,`irp_amount`,`irp_unt_id`) 
VALUES (13,3,100,6);
INSERT INTO `BD_MONTDOR`.`tj_ingredientRecipe_irp` (`irp_igr_id`, `irp_rcp_id`,`irp_amount`) 
VALUES (17,3,4);
INSERT INTO `BD_MONTDOR`.`tj_ingredientRecipe_irp` (`irp_igr_id`, `irp_rcp_id`,`irp_amount`) 
VALUES (18,3,5);
INSERT INTO `BD_MONTDOR`.`tj_ingredientRecipe_irp` (`irp_igr_id`, `irp_rcp_id`,`irp_amount`,`irp_unt_id`) 
VALUES (19,3,20,6);
INSERT INTO `BD_MONTDOR`.`tj_ingredientRecipe_irp` (`irp_igr_id`, `irp_rcp_id`,`irp_amount`) 
VALUES (20,3,5);

INSERT INTO `BD_MONTDOR`.`t_step_stp` (`stp_nb`, `stp_description`) 
VALUES (1,'Verser le vin et le miel dans un récipient tel qu’un pichet.
');
INSERT INTO `BD_MONTDOR`.`t_step_stp` (`stp_nb`, `stp_description`) 
VALUES (2,'Hacher et broyer les épices pour les mettre dans un nouet (une toile ou une compresse que l’on noue)
');
INSERT INTO `BD_MONTDOR`.`t_step_stp` (`stp_nb`, `stp_description`) 
VALUES (3,'Mettre le nouet contenant les épices dans le breuvage et recouvrir.
');
INSERT INTO `BD_MONTDOR`.`t_step_stp` (`stp_nb`, `stp_description`) 
VALUES (4,'Laisser macérer pendant 7 jours au frais en remuant une fois par jour.
');
INSERT INTO `BD_MONTDOR`.`t_step_stp` (`stp_nb`, `stp_description`) 
VALUES (5,'Mettre en bouteille et déguster frais (avec modération…)
');

INSERT INTO `BD_MONTDOR`.`tj_recipeStep_rst` (`rst_rcp_id`, `rst_stp_id`) 
VALUES (3,19);
INSERT INTO `BD_MONTDOR`.`tj_recipeStep_rst` (`rst_rcp_id`, `rst_stp_id`) 
VALUES (3,20);
INSERT INTO `BD_MONTDOR`.`tj_recipeStep_rst` (`rst_rcp_id`, `rst_stp_id`) 
VALUES (3,21);
INSERT INTO `BD_MONTDOR`.`tj_recipeStep_rst` (`rst_rcp_id`, `rst_stp_id`) 
VALUES (3,22);
INSERT INTO `BD_MONTDOR`.`tj_recipeStep_rst` (`rst_rcp_id`, `rst_stp_id`) 
VALUES (3,23);








